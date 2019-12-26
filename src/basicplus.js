/** **************************************************************************
 *
 * A ...
 *
 * basicplus.js is based on a variation of the basic.js pattern. The
 * properties are added dynamically. Thus, it can be divided in several
 * chunks of properties and the build can produces several versions of the
 * library by including or not some chunks.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6libplus object,
 *  . getString                   returns a string,
 *  . getArray                    returns an array,
 *
 *
 *
 * @namespace    ES6libplus
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* global root, ES6libplus, extend */
/* eslint-disable one-var, semi-style */


// IIFE_START


// -- Local modules
import Util from './util/util';


// -- Local constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6libplus = root.ES6libplus;


// -- Local variables


// -- Public Static Methods ------------------------------------------------

ES6libplus = {

  /**
   * Returns a reference to this ES6libplus object.
   *
   * Nota:
   * Running ES6libplus in noConflic mode, returns the ES6libplus variable to
   * its previous owner.
   *
   * @function ()
   * @public
   * @param {}            -,
   * @returns {String}    returns the ES6libplus object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  noConflict() {
    /* eslint-disable-next-line no-param-reassign */
    root.ES6libplus = previousES6libplus;
    return this;
  },
};

// Attaches a constant to ES6libplus that provides the version of the lib.
ES6libplus.VERSION = '{{lib:version}}';


// Extends ES6libplus with new static methods.
extend(ES6libplus, {

  /**
   * Returns a string.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {String}    returns a string,
   * @since 0.0.0
   */
  getString() {
    return Util.getString();
  },

  /**
   * Returns an array.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {Array}     returns an array,
   * @since 0.0.0
   */
  getArray() {
    return Util.getArray();
  },
});


// -- Export
// none (ES6libplus is attached to the global window)

// IIFE_END
/* eslint-enable one-var, semi-style */
