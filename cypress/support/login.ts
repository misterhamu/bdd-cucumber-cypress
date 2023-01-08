import {Given, When, Then, defineStep as And } from "@badeball/cypress-cucumber-preprocessor";
Given('the user is on the login page', () => {
    cy.visit('/login')
  })
  
  When('the user enters their username and password', () => {
    cy.get('#username').type('user@example.com')
    cy.get('#password').type('password')
  })
  
  And('clicks the login button', () => {
    cy.get('button').click()
  })
  
  Then('they should be redirected to the dashboard page', () => {
    cy.url().should('include', '/dashboard')
  })
  
  And('their username should be displayed in the header', () => {
    cy.get('header').should('contain', 'user@example.com')
  })