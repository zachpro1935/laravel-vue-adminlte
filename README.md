#  How to run 

## Requirement
1. php ( >= 7.2)
2. composer
3. nodejs (v14)
4. npm

## Setup environment
### Run composer
> composer install

### Run npm 
> npm install

### Run dev environment
> npm run dev


> npm run watch **(webpack will run after changing file)**

### Run production
> npm run pro

> npm run production **(Require install mix library)**


&nbsp;
# Setup laravel-vue from begining

### 1. Install Laravel
> laravel new my-app

### 2. Install laravel/ui 
> composer require laravel/ui

### 3. Run artisan 
> php artisan ui vue

### 4. Install node_modules
> npm install

### 5. Install vue-loader (if not install - we will get a bug when run webpack)
> npm install vue-loader@^15.9.7 --save-dev --legacy-peer-deps

> npm install laravel-mix@lastest

> npm install postcss@^8.3.1 --save-dev --legacy-peer-deps

> npm i vue-loader
 
### 6. Create app.blade.php in resources/view

```html
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Vue</title>
    <!-- Scripts -->
    <script src="{{ mix('/js/app.js') }}" defer async></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <main class="py-3">
            <router-view></router-view>
        </main>
    </div>
</body>
</html>
```

### 7. Adjust Route/web.php
```
    Route::get('/{any?}', [
    function () {
        return view('welcome');
    }
    ])->where('any', '.*');
```


### 8. Run server
> php artisan serve

> npm run dev

### 9. Check Local host
[http://localhost:8000](http://localhost:8000)
