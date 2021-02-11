const request = require('supertest');
const app = require('../app');

describe("get requests", function() {

	this.retries(5);		// server startup time means I have to retry

	describe("index route", function() {
		it("responds 200", function(done) {
			request(app).get("/")
				.expect(200, done);
		});
	});

	describe("articles base route", function() {
		it("responds 200", function(done) {
			request(app).get("/articles")
				.expect(200, done);
		});
	});

	describe("individual articles route", function() {
		it("responds 200", function(done) {
			request(app).get("/articles/1")
				.expect(200, done);
		});
	});
});