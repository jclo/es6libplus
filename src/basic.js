/* ***************************************************************************
 *
 * A ...
 *
 * basic.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
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
/* global root, ES6libplus */

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
   * Running ES6libplus in noConflic mode, returns the ES6libplus variable to its
   * _ previous owner.
   *
   * @method ()
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
};

// Attaches a constant to ES6libplus that provides the version of the lib.
ES6libplus.VERSION = '{{lib:version}}';


// -- Export
// none (ES6libplus is attached to the global window)

// IIFE_END
/* - */
