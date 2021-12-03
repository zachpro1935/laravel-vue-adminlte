<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Scripts -->
    {{--  <script src="{{ mix('/product/js/app.js') }}" defer async></script>  --}}
    <script src="{{ mix('/develop/js/app.js') }}" defer async></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    {{--  <link href="{{ asset('/product/css/app.css') }}" rel="stylesheet">  --}}
    <link href="{{ asset('/develop/css/app.css') }}" rel="stylesheet">

</head>
<body class="hold-transition sidebar-mini">
    <div id="app-main">
        <router-view></router-view>
    </div>
</body>
</html>
