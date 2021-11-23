const gulp = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const compileSass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");



const {src, series, parallel, dest, watch} = require("gulp");


const jsPath ="src/js/**/*.js";

const reactPath ="src/react/compiled/**/*.js";

const scssPath ="src/scss/**/*.scss";

function jsTask(){
    return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat("all.js"))
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/js"));
    }
function reactTask(){
    return src(reactPath)
        .pipe(sourcemaps.init())
        .pipe(concat("react.js"))
        .pipe(terser())
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/react"));
}

function scssTask(){
    return src(scssPath)
        .pipe(sourcemaps.init())
        .pipe(concat("style.css"))
        .pipe(compileSass())
        .pipe(postcss([autoprefixer(),cssnano()]))
        .pipe(sourcemaps.write("."))
        .pipe(dest("dist/css"));
    }
function watchTask(){
    watch([scssPath, jsPath,reactPath], {interval: 1000}, parallel(scssTask, jsTask));
}
exports.default = series(parallel(jsTask,scssTask,reactTask),watchTask);