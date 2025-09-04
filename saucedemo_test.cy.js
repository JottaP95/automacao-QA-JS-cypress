describe('Suíte de Testes para o site Sauce Demo', () => {

  it('Caso de Teste 1: Login com Sucesso', () => {

    cy.visit('https://www.saucedemo.com');


    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();


    cy.get('.title').should('contain', 'Products');
  });

  it('Caso de Teste 2: Login com Senha Inválida', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Caso de Teste 3: Adicionar um Produto ao Carrinho', () => {

    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Adiciona o item ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Acessa o carrinho
    cy.get('.shopping_cart_link').click();

    // Verifica se o item correto está no carrinho
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');
  });


});
