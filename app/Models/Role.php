<?php

namespace App\Models;

class Role extends Model
{
    public $table = 'roles';

    protected $fillable = [
        'title',
        'regist_user_id',
        'update_user_id',
    ];

    public function rolesUsers()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }
}
