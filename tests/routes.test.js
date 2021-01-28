const request = require('supertest');
const app = require('../app');

describe("get requests", () => {
	describe("index route", () => {
		it("responds 200", (done) => {
			request(app).get("/")
				.expect(200, done);
		})
	});

	describe("articles route", () => {
		it("responds 200", (done) => {
			request(app).get("/articles")
				.expect(200, done);
		})
	})
});