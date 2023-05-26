import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import  login from '../pages/LoginPage'

Given("que esteja na Plataforma pro", () => {
  // eslint-disable-next-line no-undef
  Cypress.on("uncaught:exception", () => false);
  cy.visit("/");
  cy.contains('Acesse sua conta');
  
});

When("entro com o email e senha", () => {
    login.typeEmailLogin()
    login.typeSenhaLogin()
});

When("clico no botao de Entrar", () => {
    login.clickButtonLogin()
});

Then("verifico que o Login deve ser realizado com sucesso", () => {

});
