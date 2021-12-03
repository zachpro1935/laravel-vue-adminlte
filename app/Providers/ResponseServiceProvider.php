<?php
// Place this file on the Providers folder of your project
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Routing\ResponseFactory;

class ResponseServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot(ResponseFactory $factory)
    {
        $factory->macro('success', function ($message = '', $data = null, $httpStatus = 200) use ($factory) {
            $format = [
                'status' => 'true',
                'message' => $message,
                'data' => $data,
                'code' => $httpStatus
            ];

            return $factory->make($format);
        });

        $factory->macro('error', function (string $message = '', $errors = [], $httpStatus = 400) use ($factory){
            $format = [
                'status' => 'false', 
                'message' => $message,
                'errors' => $errors,
                'code' => $httpStatus
            ];

            return $factory->make($format);
        });

        $factory->macro('unauthorized', function (string $message = '', $httpStatus = 401) use ($factory){
            $format = [
                'status' => 'false', 
                'message' => 'unauthorized',
                'code' => $httpStatus
            ];

            return $factory->make($format);
        });
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}