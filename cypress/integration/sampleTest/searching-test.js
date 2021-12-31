const Form_URL = 'https://demoqa.com/books'

describe('book', () => {
  before(() => {
    cy.visit(Form_URL)

  })

  it('search title of the book', () => {
      // 1.type in the name of the book
      cy.get("input.form-control").should("exist").type("Git Pocket Guide");
      cy.get(".rt-tr-group").contains("Git Pocket Guide");

  })
   it('search author of the book', () => {
   	  cy.get("input.form-control").clear();
      // 2.type in the authot of the book
      cy.get("input.form-control").should("exist").type("Richard E. Silverman");
      cy.get(".rt-tr-group").contains("Richard E. Silverman");

  })
      it('search Publisher of the book', () => {
   	  cy.get("input.form-control").clear();
      // 3.type in the publisher of the book
      cy.get("input.form-control").should("exist").type("O'Reilly Media");
      cy.get(".rt-tr-group").contains("O'Reilly Media");

  })
      it('the book is not in the list', () => {
   	  cy.get("input.form-control").clear();
      // 4.type in the publisher of the book
      cy.get("input.form-control").should("exist").type("beauty of science");
      cy.get(".rt-tr-group").find("div").then(ele => {
        expect(ele.length).gt(0);
      });

  })
})
