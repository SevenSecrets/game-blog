describe('index page', () => {
	it('loads successfully', () => {
		cy.visit('/');
	});
	it('contains descriptions', () => {
		cy.visit('/');

		cy.get('.short-desc');
	});
});