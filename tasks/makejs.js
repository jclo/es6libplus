/* eslint  one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */


// -- Vendor Modules
const { src, dest, series } = require('gulp')
    , fs       = require('fs')
    , del      = require('del')
    , concat   = require('gulp-concat')
    , modulify = require('gulp-modulify')
    , replace  = require('gulp-replace')
    ;


// -- Local Modules
const pack   = require('../package.json')
    , config = require('./config')
    ;


// -- Local Constants
const destination  = config.libdir
    , source       = config.src
    , { header }   = source
    , { core }     = source
    , { footer }   = source
    , { name }     = config
    , { parent }   = config
    , { noparent } = config
    , { version }  = pack
    ;


// -- Local Variables


// -- Gulp Private Tasks

// Removes the previous version.
function clean(done) {
  del.sync(destination);
  done();
}

// Creates the library.
// (it removes the intermediates 'global', encapsulates the code
// of each file into an IIFE module and finally surround the complete code
// by and UMD module).
function dolibnoparent() {
  return src(core)
    .pipe(replace(/\/\* global[\w$_\s,]+\*\//g, '/* - */'))
    .pipe(replace('{{lib:version}}', version))
    .pipe(modulify(`${name}${noparent}.js`, {
      header: fs.readFileSync(header, 'utf8'),
      footer: fs.readFileSync(footer, 'utf8'),
    }))
    .pipe(dest(destination))
  ;
}

// Creates the library.
function dolib() {
  return src(`${destination}/${name}${noparent}.js`)
    .pipe(replace('{{lib:parent}}', parent))
    .pipe(concat(`${name}.js`))
    .pipe(dest(destination))
  ;
}


// -- Gulp Public Task(s)
module.exports = series(clean, dolibnoparent, dolib);
