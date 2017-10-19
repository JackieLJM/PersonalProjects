let gulp=require('gulp');
let browserSync=require('browser-sync').create();

gulp.task("browserSync",function(){
    let hjc=['*.js','*.html','*.css'];
    // browserSync.init(hjc,{proxy:'localhost:8080'});
    browserSync.init(hjc,{server:
        // {baseDir:
            './deviceOrientation-demo/json'
        // }
    })
})