<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePermissionsTable extends Migration
{
    public function up()
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->nullable();
            $table->char('create_date', 14)->nullable();
            $table->char('update_date', 14)->nullable();
            $table->char('delete_flag', 14)->nullable()->default('00000000000000');
        });
    }
}
