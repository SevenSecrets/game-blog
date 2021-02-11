describe('articles pages', () => {
	it('navigates to article via index', () => {

		cy.visit('/')

		cy.get('#0')		// open first article in list
			.find('a')
			.click()
		
		cy.get('h1')		// it has an article title
		cy.get('p')			// it has an article body
	});
});