const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const env = 'develop';

if (env === 'production') {
    mix.js('resources/js/app.js', 'public/product/js')
        .sass('resources/sass/app.scss', 'public/product/css').vue();
} else {
    mix.js('resources/js/app.js', 'public/develop/js')
        .sass('resources/sass/app.scss', 'public/develop/css').vue();
}

