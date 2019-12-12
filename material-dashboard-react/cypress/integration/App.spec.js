describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('test study table', () =>{
  	cy.visit('/');
  	cy.get('[data-cy=study]').should('contain', 'start date/time');
  });

  it('select past studies', () => {
	cy.visit ('/');
	cy.get('[data-cy=past]').click();
	cy.get('[data-cy=study]').should('contain' ,'Brain');
  });
});