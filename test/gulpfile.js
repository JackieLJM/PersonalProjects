const gulp = require('gulp');
const browserSync = require('browser-sync').create();
// const reload = browserSync.reload;
const devip = require('dev-ip');
const $ = require('gulp-load-plugins')(
    DEBUG: false, // when set to true, the plugin will log info to console. Useful for bug reporting and issue debugging 
    pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'], // the glob(s) to search for 
    overridePattern: true, // When true, overrides the built-in patterns. Otherwise, extends built-in patterns matcher list. 
    config: 'package.json', // where to find the plugins, by default searched up from process.cwd() 
    scope: ['dependencies', 'devDependencies', 'peerDependencies'], // which keys in the config to look within 
    replaceString: /^gulp(-|\.)/, // what to remove from the name of the module when adding it to the context 
    camelize: true, // if true, transforms hyphenated plugins names to camel case 
    lazy: true, // whether the plugins should be lazy loaded on demand 
    rename: {}, // a mapping of plugins to rename 
    renameFn: function(name) { ... }, // a function to handle the renaming of plugins (the default works) 
    postRequireTransforms: {}, // see documentation below 
    maintainScope: true);

devip();
// 获取一组本机ip地址数组
function browser() {
    browserSync.init({
        host: '192.168.8.101',
        proxy: 'http://192.168.8.101:8080',
        // 这里要是写localhost的话指向的是vpn的ip地址，也就是本机ip地址第一个
        // server:{
        //     baseDir:''
        // }
        ui: {
            port: 9090,
            weinre: {
                port: 9000
            }
        }
        // reloadOnRestart:true
    });
    // gulp.watch(['*.js','*.html','*.css']).on('changed',browserSync.reload);
}


gulp.task(browser
    // ,gulp.series('reload')
);