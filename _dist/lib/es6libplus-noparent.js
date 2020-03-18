/*! ****************************************************************************
 * ES6libplus v0.0.7-beta.1
 *
 * A template for writing pure ES6 Javascript libraries.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr/).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from {{boiler:name}} v{{boiler:name:version}}.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.ES6libplus = factory(root);
  }
}({{lib:parent}}, (root) => {
  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  // const Tree
  /* eslint-disable one-var, semi-style */
  let ES6libplus
    , extend
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Tree is an object that links all the internal IIFE modules.
   *
   * ************************************************************************ */
  /* eslint-disable-next-line */
  let $__TREE = {"src":{"lib":{"extend":{}},"util":{"util":{}},"functionalshared":{}}};
  /* eslint-disable-next-line */
  $__TREE.extend=function(o,m){var k=Object.keys(m);for(var i=0;i<k.length;i++){o[k[i]]=m[k[i]]}};

  /** **************************************************************************
   *
   * Provides the function 'extend' that is used to fill the object tree with
   * the public static or object methods when the Javascript VM browses the
   * library from the top to the bottom.
   *
   * extend.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Public Static Methods:
   *  . extend                      extends the passed-in object with new methods,
   *
   *
   *
   * @namespace    ES6libplus.src.lib.extend
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* - */

  (function() {
    // IIFE START


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Public function ------------------------------------------------------

    /**
     * Extends the passed-in object with new methods.
     *
     * Nota: this function mutates object.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}          the object to extend,
     * @param {Object}          an object containing a set of methods,
     * @returns {}              -,
     * @since 0.0.0
     */
    extend = function(object, methods) {
      const keys = Object.keys(methods);

      for (let i = 0; i < keys.length; i++) {
        /* eslint-disable-next-line no-param-reassign */
        object[keys[i]] = methods[keys[i]];
      }
    };


    // -- Export
    // none,

    // IIFE END
  }());
  /* - */

  /** **************************************************************************
   *
   * A ...
   *
   * util.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _getString                  returns a string,
   *  . _getArray                   returns an array,
   *
   *
   * Public Static Methods:
   *  . getString                   returns a string,
   *  . getArray                    returns an array,
   *
   *
   *
   * @namespace    ES6libplus.src.util.util
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // IIFE START


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns a string.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {String}        returns a string,
     * @since 0.0.0
     */
    function _getString() {
      return 'I am a string!';
    }

    /**
     * Returns an array.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {Array}         returns an array,
     * @since 0.0.0
     */
    function _getArray() {
      return [1, 2, 3];
    }


    // -- Public Static Methods ------------------------------------------------

    const Util = {

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
        return _getString();
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
        return _getArray();
      },
    };


    // -- Export
    $__TREE.extend($__TREE.src.util.util, Util);

    // IIFE END
  }());
  /* eslint-enable no-underscore-dangle */

  /** **************************************************************************
   *
   * A ...
   *
   * functional-shared.js is built upon the Functional Shared Instantiation
   * pattern. It returns an object by calling its constructor. It doesn't use
   * the new keyword.
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
  /* - */
  /* eslint-disable one-var, semi-style */

  (function() {
    // IIFE START


    // -- Local Modules
    const Util = $__TREE.src.util.util;


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousES6libplus = root.ES6libplus
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the ES6libplus object.
     * (Functional Instantiation Pattern)
     *
     * @constructor (arg1)
     * @public
     * @param {String}          the argument to be saved as an object variable,
     * @returns {Object}        returns the ES6libplus object,
     * @since 0.0.0
     */
    ES6libplus = function(name) {
      const obj = {};
      obj.name = name;
      extend(obj, methods);
      return obj;
    };

    // Attaches a constant to ES6libplus that provides the version of the lib.
    ES6libplus.VERSION = '0.0.7-beta.1';


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

    methods = {

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

    // IIFE END
  }());
  /* eslint-enable one-var, semi-style */

  // Returns the library name:
  return ES6libplus;
}));
