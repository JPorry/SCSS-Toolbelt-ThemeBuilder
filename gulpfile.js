var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    ngAnnotate = require('gulp-ng-annotate'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    htmlReplace = require('gulp-html-replace'),
    globule = require('globule'),
    embedTemplates = require('gulp-angular-embed-templates');


var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

var config = require('./config.json');

/* Tasks */
gulp.task('reConfig', function(cb){
    delete require.cache[require.resolve('./config.json')];
    config = require('./config.json');
    return cb();
});

gulp.task('clean:JS', function(cb){
    del([config.build_dir + '/js', config.build_dir + '/vendor'], function(){
        return cb();
    });
});

gulp.task('clean:CSS', function(cb){
    del([config.build_dir + '/css'], function(){
        return cb();
    });
});

gulp.task('clean:HTML', function(cb){
    del([config.build_dir + '/**/*.html'], function(){
        return cb();
    });
});

gulp.task('clean', function(cb){
    del([config.build_dir], function(){
        return cb();
    });
});

gulp.task('sass', ['clean:CSS'], function(cb){
    gulp.src('./src/sass/app.scss')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./' + config.build_dir + '/css'))
        .on('finish', function(){
            return cb();
        });
});

gulp.task('lint', ['clean:JS'], function() {
    return gulp.src(['./src/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('deployJS:debug', ['lint', 'reConfig'], function(cb){
    var ready = false;

    gulp.src(['./**/*.js'], {cwd:'src/js'})
        .pipe(ngAnnotate())
        .pipe(embedTemplates())
        .pipe(gulp.dest(config.build_dir + '/js'))
        .on('finish', function(){
            if(ready){
                return cb();
            }
            ready = true;
        });

    gulp.src(config.dependencies)
        .pipe(gulp.dest(config.build_dir + '/vendor'))
        .on('finish', function(){
            if(ready){
                return cb();
            }
            ready = true;
        });
});

gulp.task('package:debug', ['deployJS:debug', 'sass', 'clean:HTML'], function(){
    var scripts = globule.find(['js/**/*.js'], {srcBase: config.build_dir});
    scripts.push(scripts.shift());
    gulp.src('index.html')
        .pipe(
            htmlReplace({
                appJs: scripts,
                dependencies: config.dependencies.map(function(path){ return 'vendor/' + path.substr(path.lastIndexOf('/') + 1); })
            })
        )
        .pipe(gulp.dest(config.build_dir, {overwrite: true}));
});

gulp.task('debug', ['package:debug'], function() {

    browserSync.init({
        server: {
            baseDir: "./"+config.build_dir
        }
    });

    gulp.watch(["./src/**/*.js", "./**/*.html", './config.json'], ['package:debug', reload]);
    gulp.watch("./src/**/*.scss", ['sass', reload]);
});
