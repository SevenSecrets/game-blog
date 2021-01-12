const { doesNotMatch } = require('assert');
const assert = require('assert');
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

describe('get request', () => {
	it('returns 200 OK for /', (done) =>{
		chai.request(app)
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
});