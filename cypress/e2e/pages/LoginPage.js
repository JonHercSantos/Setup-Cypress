export default new LoginPage();
class LoginPage{
    elements={
        emailLogin: () => cy.get('input[data-id="email"]'),
        passwordLogin:() => cy.get('input[data-id="password"]'),
        buttonLogin:()=>cy.get('button[data-id="submit"]'),
    }   

    typeEmailLogin() {
        this.elements.emailLogin().type(Cypress.env('USER_EMAIL'));
    }

    typeSenhaLogin(){
        this.elements.emailLogin().type(Cypress.env('USER_PASSWORD'));
    }

    clickButtonLogin(){
        this.elements.buttonLogin().click();
 
    }
}

