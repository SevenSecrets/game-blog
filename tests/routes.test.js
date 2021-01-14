const request = require('supertest');
const app = require('../app');

describe("index requests", () => {
	describe("get requests", () => {
		it("responds 200", (done) => {
			request(app).get('/')
				.expect(200, done);
		})
	});
});