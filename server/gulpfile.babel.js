/**
 * @file Integration and automation of babel and eslint
 * @author Archit <archit5793@gmail.com>
 */

import gulp from "gulp";
import shell from "gulp-shell";
import rimraf from "rimraf";
import nodemon from "gulp-nodemon";

const paths = {
  src: ["./src/**/*.js"],
  destination: "./dist",
};

gulp.task("clean", (cb) => {
  rimraf(paths.destination, cb);
});

gulp.task("babel", shell.task(["babel --copy-files --out-dir dist --ignore *.test.js src"]));

gulp.task("lint", shell.task(["eslint src/**"], { ignoreErrors: true }));

gulp.task("build", gulp.series("clean", "lint", "babel"));

gulp.task("nodemon", (done) => {
  nodemon({
    script: paths.destination,
    ext: "js",
    env: { NODE_ENV: "development" },
    tasks: ["build"],
    done,
  });
});

gulp.task("default", gulp.series("build", "nodemon"));
