describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('test study table', () =>{
  	cy.visit('/');
  	cy.get('[data-cy=study]').should('contain', 'taewookim2019@u.northwestern.edu');
  });

  it('select past studies', () => {
	cy.visit ('/');
	cy.get('[data-cy=past]').click();
	cy.get('[data-cy=study]').should('contain' ,'Brain');
  });
});