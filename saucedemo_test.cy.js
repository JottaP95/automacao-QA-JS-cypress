// describe() é como um agrupador, a "suíte de testes". Damos um nome a ela.
describe('Suíte de Testes para o site Sauce Demo', () => {

  // it() é um caso de teste individual. Damos um nome que descreve o que ele faz.
  it('Caso de Teste 1: Login com Sucesso', () => {
    // cy.visit() navega para a URL, como o driver.get() do Selenium.
    cy.visit('https://www.saucedemo.com');

    // cy.get() é o comando para encontrar elementos. Usamos seletores CSS.
    // [data-test="..."] é um seletor estável que os desenvolvedores do site criaram.
    // .type() digita no elemento, como o .send_keys().
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // .should() é o comando de asserção do Cypress. É poderoso e legível.
    // Aqui, verificamos se o elemento com a classe .title CONTÉM o texto "Products".
    cy.get('.title').should('contain', 'Products');
  });

  it('Caso de Teste 2: Login com Senha Inválida', () => {
    cy.visit('https://www.saucedemo.com');

    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('senha_errada');
    cy.get('[data-test="login-button"]').click();

    // Aqui, verificamos se o elemento de erro TEM O TEXTO EXATO esperado.
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Caso de Teste 3: Adicionar um Produto ao Carrinho', () => {
    // O Cypress limpa o estado entre os testes, então precisamos logar novamente.
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