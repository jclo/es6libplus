/** **************************************************************************
 *
 * A ...
 *
 * pseudoclassical.js is built upon the Pseudoclassical Instantiation pattern.
 * It returns an object by calling its constructor with the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . ES6libplus                  creates and returns the ES6libplus object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6libplus object,
 *
 *
 * Public Methods:
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
/* eslint-disable one-var, semi-style */

// IIFE_START


// -- Local modules
import Util from './util/util';


// -- Local constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6libplus = root.ES6libplus
    ;


// -- Local variables


// -- Public ---------------------------------------------------------------

/**
 * Returns the ES6libplus object.
 * (Pseudoclassical Instantiation Pattern)
 *
 * @constructor (arg1)
 * @public
 * @param {String}          the argument to be saved as an object variable,
 * @returns {Object}        returns the ES6libplus object,
 * @since 0.0.0
 */
ES6libplus = function(name) {
  if (!(this instanceof ES6libplus)) {
    throw new Error('ES6libplus needs to be called with the new keyword!');
  }
  this.name = name;
};

// Attaches a constant to ES6libplus that provides the version of the lib.
ES6libplus.VERSION = '{{lib:version}}';


// -- Public Static Methods ------------------------------------------------

/**
 * Returns a reference to this ES6libplus object.
 *
 * Nota:
 * Running ES6libplus in noConflic mode, returns the ES6libplus variable to
 * its previous owner.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {String}        returns the ES6libplus object,
 * @since 0.0.0
 */
/* istanbul ignore next */
ES6libplus.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.ES6libplus = previousES6libplus;
  return this;
};


// -- Public Methods -------------------------------------------------------

ES6libplus.prototype = {

  /**
   * Returns a string.
   *
   * @method ()
   * @public
   * @param {}              -,
   * @returns {String}      returns a string,
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
   * @param {}              -,
   * @returns {Array}       returns an array,
   * @since 0.0.0
   */
  getArray() {
    return Util.getArray();
  },
};


// -- Export
// none (ES6libplus is attached to the global window)

// IIFE_END
/* eslint-enable one-var, semi-style */
