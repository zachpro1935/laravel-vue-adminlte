<?php

namespace App\Models;

use Illuminate\Database\Eloquent\SoftDeletes;

class Permission extends Model
{
    public $table = 'permissions';

    protected $fillable = [
        'title',
        'regist_user_id',
        'update_user_id',
    ];

    public function permissionsRoles()
    {
        return $this->belongsToMany(Role::class);
    }
}
