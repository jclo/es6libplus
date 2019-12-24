// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */


// -- Node modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;

// -- Local modules
const ES6libplus = require('../index.js')
    ;

// -- Local constants

// -- Local variables


// -- Main
describe('Test ES6libplus:', () => {
  // Test the lib:
  describe('Test ES6libplus.VERSION and ES6libplus.noConflict:', () => {
    it('Expects ES6libplus.VERSION to return a string.', () => {
      expect(ES6libplus.VERSION).to.be.a('string');
    });
    it('Expects ES6libplus.noConflict to return a function.', () => {
      expect(ES6libplus.noConflict).to.be.a('function');
    });
  });

  describe('Test the ES6libplus methods:', () => {
    //
    it('Expects ES6libplus to own the method "getString".', () => {
      expect(ES6libplus.getString).to.be.a('function');
    });

    it('Expects ES6libplus.getString() to return the string "I am a string!".', () => {
      expect(ES6libplus.getString()).to.be.a('string').that.is.equal('I am a string!');
    });

    it('Expects ES6libplus to own the method "getArray".', () => {
      expect(ES6libplus.getArray).to.be.a('function');
    });

    it('Expects ES6libplus.getArray() to return an array with 3 elements.', () => {
      expect(ES6libplus.getArray()).to.be.an('array').that.has.lengthOf(3);
    });

    it('Expects the first element to be equal to 1.', () => {
      expect(ES6libplus.getArray()[0]).to.be.a('number').that.is.equal(1);
    });

    it('Expects the second element to be equal to 2.', () => {
      expect(ES6libplus.getArray()[1]).to.be.a('number').that.is.equal(2);
    });

    it('Expects the third element to be equal to 3.', () => {
      expect(ES6libplus.getArray()[2]).to.be.a('number').that.is.equal(3);
    });
  });
});
