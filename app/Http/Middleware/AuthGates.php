<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Models\Role;
use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;

class AuthGates
{
    public function handle($request, Closure $next)
    {
        $user = \Auth::user();

        if (!app()->runningInConsole() && $user) {
            $roles = Role::with('permissions')->get();
            $permissionsArray = [];

            foreach ($roles as $role) {
                foreach ($role->permissions as $permissions) {
                    $permissionsArray[$permissions->title][] = $role->id;
                }
            }

            foreach ($permissionsArray as $title => $roles) {
                Gate::define($title, function () use ($roles) {
                    return count(array_intersect([auth()->user()->role], $roles)) > 0;
                    // $user_role = DB::table('role_user')->where('id', $user->id)->first();
                    // return in_array($user_role->role_id, $roles);
                });
            }
        }

        return $next($request);
    }
}
