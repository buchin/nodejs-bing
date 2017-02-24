var bing = require('../index.js');
var chai = require('chai');
var expect = chai.expect;
var should = require('chai').should()

describe('bing', function() {
	describe('web()', function() {
		it('should returns array of search results', function(done){
			bing.web('okedeh kakak').then(function(results) {
				results[0].should.have.property('title');
				results[0].should.have.property('link');
				results[0].should.have.property('description');
				results[0].should.have.property('pubdate');
				done();
			})
			
		})
	})

	describe('image()', function(){
		it('should returns images', function(done) {
			bing.image('okedeh kakak').then(function(results) {
				expect(results.length).to.be.above(0);
				done();
			})
		})
	})

	describe('video()', function(){
		it('should returns videos', function(done) {
			bing.video('katak').then(function(results) {
				expect(results.length).to.be.above(0);
				done();
			})
		})
	})
})