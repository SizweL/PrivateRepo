"use strict";

 let chai = require("chai");
 let actions = require('../js/actions');
 chai.should();
 
 describe("Array", function() {
	describe("Add Task", function(){
		it("array size should increase", function(){
			let item = "milk";
			let item_arr = actions.getTask();
			let length_before = item_arr.length;
			actions.add(item,"","");
			item_arr = actions.getTask();
			let length_after = item_arr.length;
			let length = length_after-length_before;
			length.should.equal(1);
		});
	});
 });
 
 describe("Array", function() {
	describe("Add Quantity", function(){
		it("array size should increase", function(){
			let quantity = 1;
			let quantity_arr = actions.getTask();
			let length_before = quantity_arr.length;
			actions.add("",quantity,"");
			quantity_arr = actions.getTask();
			let length_after = quantity_arr.length;
			let length = length_after-length_before;
			length.should.equal(1);
		});
	});
 });
 
 describe("Array", function() {
	describe("Add Price estimate", function(){
		it("array size should increase", function(){
			let estimate = 1;
			let estimate_arr = actions.getTask();
			let length_before = estimate_arr.length;
			actions.add("","",estimate);
			estimate_arr = actions.getTask();
			let length_after = estimate_arr.length;
			let length = length_after-length_before;
			length.should.equal(1);
		});
	});
 });
 
 describe("Array", function() {
	describe("Remove Tasks", function(){
		it("array size should decrease", function(){
			let estimate = 1;
			let estimate_arr = actions.getTask();
			let length_before = estimate_arr.length;
			actions.remove("");
			estimate_arr = actions.getTask();
			let length_after = estimate_arr.length;
			let length = length_after-length_before;
			length.should.equal(-1);
		});
	});
 });
 
 
