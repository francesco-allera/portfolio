let mix = require('laravel-mix');

mix.js('src/script.js', 'dist/')
    .sass('src/style.scss', 'dist/')
    .options({ processCssUrls: false });