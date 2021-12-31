const Form_URL = 'https://demoqa.com/books'

describe('book', () => {
  before(() => {
    cy.visit(Form_URL)

  })

  it('click on the book', () => {
      // 1.click on name of the book
      cy.get(".rt-td").should("exist").contains("Git Pocket Guide").click();
      // 2.The content is not null
      cy.get(".form-label").should("exist");
	  // 3.The book name is correct
      cy.get("#title-wrapper").contains("Git Pocket Guide");
      // 4.Go back to homepage
      cy.get(".profile-wrapper").contains("Back To Book Store").click();
  })
 })