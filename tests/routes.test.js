import { expect, server } from './setup.js';

describe('index requests', () => {
	it('returns 200 OK for /', (done) => {
		server
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				done();
			});
	});
});