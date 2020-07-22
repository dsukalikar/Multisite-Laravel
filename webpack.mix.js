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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/colors/site1/color.scss', 'public/css/site1.css')
    .sass('resources/sass/colors/site2/color.scss', 'public/css/site2.css')
    .sass('resources/sass/cleanblog/clean-blog.scss', 'public/css');