<?php

use App\Models\ConstantModel;
use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionRoleTableSeeder extends Seeder
{
    public function run()
    {
        $permission_id = Permission::insertGetId([
            'title' => 'admin_menu_access'
        ]);
        DB::table('permission_role')->insert([
            'role_id' => ConstantModel::ADMIN,
            'permission_id' => $permission_id
        ]);
    }
}
