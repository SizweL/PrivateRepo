"use strict";

let chai = require("chai");
chai.should();

describe("hello", function(){
	describe("world", function(){
		it("hello should greet the world", function(){ 
		let hello = "world"; 
		hello.should.equal("world");
		});
	});
});