'use strict';
/* global describe, it */
var chai = require('chai');
var actions = require('../js/actions');
chai.should();

describe('Array', function() { // eslint-disable-line no-unused-vars
  describe('Add Task', function(){ // eslint-disable-line no-unused-vars
    it('array size should increase', function(){
      var item = 'milk';
      var item_arr = actions.getTask();
      var length_before = item_arr.length;
      actions.add(item, '', '');
      item_arr = actions.getTask();
      var length_after = item_arr.length;
      var length = length_after - length_before;
      length.should.equal(1);
    });
  });
});

describe('Array', function() {
  describe('Add Quantity', function(){
    it('array size should increase', function(){
      var quantity = 1;
      var quantity_arr = actions.getTask();
      var length_before = quantity_arr.length;
      actions.add('', quantity, '');
      quantity_arr = actions.getTask();
      var length_after = quantity_arr.length;
      var length = length_after - length_before;
      length.should.equal(1);
    });
  });
});

describe('Array', function() {
  describe('Add Price estimate', function(){
    it('array size should increase', function(){
      var estimate = 1;
      var estimate_arr = actions.getTask();
      var length_before = estimate_arr.length;
      actions.add('', '', estimate);
      estimate_arr = actions.getTask();
      var length_after = estimate_arr.length;
      var length = length_after - length_before;
      length.should.equal(1);
    });
  });
});

describe('Array', function() {
  describe('Remove Tasks', function(){
    it('array size should decrease', function(){
      var estimate_arr = actions.getTask();
      var length_before = estimate_arr.length;
      actions.remove('');
      estimate_arr = actions.getTask();
      var length_after = estimate_arr.length;
      var length = length_after - length_before;
      length.should.equal(-1);
    });
  });
});


