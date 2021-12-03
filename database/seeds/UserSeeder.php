<?php

use App\Models\ConstantModel;
use App\Models\Member;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user = [
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => '12345678',
            'role' => ConstantModel::ADMIN,
            'created_at' => date('YmdHis')
        ];
        User::insert($user);
    }
}
