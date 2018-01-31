require('require-dir')('.')

const gulp = require('gulp');
const fs = require('fs');
const readline = require('readline');
const through = require ('through');

const arrify = function(file) {
    var results = [];

    const rl = readline.createInterface({
        input: fs.createReadStream(file.path)
    });

    var phrase = '';
    rl.on('line', function(line) {
        if (line.indexOf('%') !== 0) {
            phrase+= line + '\n';
        } else {
            results.push(phrase);
            phrase = '';
        }
    });

    rl.on('close', function() {
        fs.writeFile('array.json', JSON.stringify(results, null), function(err) {
            if(err) {
              console.log(err);
            }
        });
    });
}

gulp.task('arrify', ['assemble'], function() {
    return gulp.src('data.txt')
        .pipe(through(arrify));
});
