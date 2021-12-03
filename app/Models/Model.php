<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class Model extends BaseModel
{
    // const CREATED_AT = 'create_date';
    // const UPDATED_AT = 'update_date';
    protected $dateFormat = 'YmdHis';
    // protected $casts = [
    //     'create_date' => 'string',
    //     'update_date' => 'string'
    // ];
    public $incrementing = false;

    public static function boot()
    {
        parent::boot();

        static::updating(function ($model) {
            if ($model instanceof \App\Models\LoginHistory) {
                return;
            }
            if (Auth::user()) {
                $model->update_user_id = Auth::user()->user_id;
            }
        });

        static::deleting(function ($model) {
            if ($model instanceof \App\Models\LoginHistory || $model instanceof \App\Models\Sensor) {
                return;
            }
            $model->update_user_id = Auth::user()->user_id;
            $model->save();

            //delete child model
            if (isset($model->childs) && !empty($model->childs)) {
                foreach ($model->childs as $child) {
                    $model->{$child}->each(function ($child) {
                        $child->delete();
                    });
                }
            }
        });

        static::saving(function ($model) {
            if ($model instanceof \App\Models\LoginHistory) {
                return;
            }
            if (Auth::user()) {
                if (!isset($model->id)) {
                    $model->update_date = null;
                    $model->regist_user_id = Auth::user()->user_id;
                } else {
                    $model->update_user_id = Auth::user()->user_id;
                }
            }
        });
    }

    protected function setKeysForSaveQuery(Builder $query)
    {
        $keys = $this->getKeyName();
        if (!is_array($keys)) {
            return parent::setKeysForSaveQuery($query);
        }

        foreach ($keys as $keyName) {
            $query->where($keyName, '=', $this->getKeyForSaveQuery($keyName));
        }

        return $query;
    }

    protected function getKeyForSaveQuery($keyName = null)
    {
        if (is_null($keyName)) {
            $keyName = $this->getKeyName();
        }

        if (isset($this->original[$keyName])) {
            return $this->original[$keyName];
        }

        return $this->getAttribute($keyName);
    }

    public function getSql($query)
    {
        try {
            return vsprintf(str_replace('?', '%s', $query->toSql()), collect($query->getBindings())->map(function ($binding) {
                return is_numeric($binding) ? $binding : "'{$binding}'";
            })->toArray());
        } catch (\Exception $e) {
            return "";
        }
    }

    protected function getSqlWhere($query, $search)
    {
        $query->where('customer_cd', '=', $search['customer_cd'])
            ->when(!is_null($search['delete_time_begin']), function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('gain_date', '>', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_begin'])->format('Ymd'))
                        ->orWhere(function ($query) use ($search) {
                            $query->where('gain_date', '=', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_begin'])->format('Ymd'))
                                ->where('gain_time', '>=', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_begin'])->format('His'));
                        });
                });
            })
            ->when(!is_null($search['delete_time_end']), function ($query) use ($search) {
                $query->where(function ($query) use ($search) {
                    $query->where('gain_date', '<', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_end'])->format('Ymd'))
                        ->orWhere(function ($query) use ($search) {
                            $query->where('gain_date', '=', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_end'])->format('Ymd'))
                                ->where('gain_time', '<=', Carbon::createFromFormat('Y-m-d H:i:s', $search['delete_time_end'])->format('His'));
                        });
                });
            })
            ->when(!is_null($search['unit_id']), function ($query) use ($search) {
                $query->where('unit_id', '=', $search['unit_id']);
            })
            ->when(!is_null($search['sensor_id']), function ($query) use ($search) {
                $query->where('sensor_id', '=', $search['sensor_id']);
            });
        return $query;
    }

    public function scopeDeleteData($query, $search)
    {
        $query = $this->getSqlWhere($query, $search);
        Log::info($this->getSql($query));
        return $query->delete();
    }

    public function scopeInsertCustomerData($query, $customer_cd_from, $customer_cd_to)
    {
        $list = [];
        $items = $query->where('customer_cd', '=', $customer_cd_from)->get()->toArray();
        foreach ($items as $item) {
            $item['customer_cd'] = $customer_cd_to;
            $list[] = $item;
        }

        DB::table($this->table)->insert($list);
        Log::info("$this->table copied " . count($list));
    }
}
