<?php

use App\Models\ConstantModel;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    public function run()
    {
        $roles = [
            [
                'id'    => ConstantModel::ADMIN,
                'title' => 'Admin',
            ],
            [
                'id'    => ConstantModel::MEMBER,
                'title' => 'Member',
            ],
        ];

        Role::insert($roles);
    }
}
