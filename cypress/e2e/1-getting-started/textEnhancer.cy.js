/// <reference types="cypress" />

import {
  dagDropContent,
} from "../../../app/lib/constants";

describe("FileUploader E2E Tests", () => {
   beforeEach(() => {
     cy.visit("http://localhost:3000/");
   });

  it("handles file upload from start to finish with dynamic content loading", () => {
  
    cy.get('[data-testid="uploadBtn"]').click();
    cy.wait(7000)
    
    cy.get('[data-testid="loading-spinner"]').should("be.visible");
    cy.wait(20000);

      cy.intercept("POST", "/api/processPdf").as("initialApiCall");


    cy.get('[data-testid="loading-spinner"]').should("not.exist");


    cy.contains(
      "Your file has been converted and ready to be displayed. Click on reset button above to convert another file.",
    ).should("be.visible");


    cy.get('[data-testid="displayBtn"]').should("be.visible");
    cy.get('[data-testid="displayBtn"]').click();
    cy.get('[data-testid="data-table"]').should("be.visible");
     cy.get('[aria-label="reset"]').click();
     cy.get('[data-testid="uploadBtn"]').should("be.visible");
     cy.contains(dagDropContent.title).should("be.visible");
  });

});
