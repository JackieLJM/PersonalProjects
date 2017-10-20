let gulp=require('gulp');
let browserSync=require('browser-sync').create();

gulp.task("browserSync",function(){
    // let hjc=['./deviceOrientation-demo/json/*.js','./deviceOrientation-demo/json/*.html','./deviceOrientation-demo/json/*.css'];
    browserSync.init({
    // serveStatic:['.'],
    proxy:'localhost:8080',
    ui:{
        port:9090,
        weinre:{
            port:9000,
        }
    }
});
    // browserSync.init(hjc,{server:
        // {baseDir:
            // './deviceOrientation-demo/json'
        // }
    // })
})