# Projeto de Automação de Testes com Cypress

![Cypress.io](https://img.shields.io/badge/Cypress-v13.13.1-blue?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-green)

## 📄 Sobre o Projeto

Este repositório contém um projeto de automação de testes End-to-End (E2E) desenvolvido como parte do meu portfólio de transição de carreira para a área de **Qualidade de Software (QA)**.

O objetivo é demonstrar habilidades práticas na criação de testes automatizados para uma aplicação web real, utilizando o framework moderno **Cypress**. O site alvo para a automação foi o [Sauce Demo](https.www.saucedemo.com), um ambiente de e-commerce de demonstração projetado para práticas de teste.

Além da automação, o projeto também inclui um exemplo de **relatório de bug**, demonstrando o ciclo completo de atividades de um analista de QA, desde a identificação e documentação de falhas até a validação do comportamento esperado do sistema.

## 🚀 Tecnologias Utilizadas

* **Framework de Teste:** [Cypress](https.www.cypress.io/)
* **Linguagem:** JavaScript (ES6)
* **Gerenciador de Pacotes:** [npm](https.www.npmjs.com/)
* **Ambiente de Execução:** [Node.js](https://nodejs.org/en)

## 🧪 Cenários de Teste Automatizados

Os seguintes cenários de usuário foram automatizados e estão contidos no arquivo `cypress/e2e/saucedemo_tests.cy.js`:

1.  **Login com Sucesso:** Valida o fluxo de login com credenciais válidas e verifica se o usuário é redirecionado para a página de produtos.
2.  **Login com Senha Inválida:** Valida o comportamento do sistema ao tentar logar com uma senha incorreta e verifica se a mensagem de erro apropriada é exibida.
3.  **Adicionar Produto ao Carrinho:** Simula a jornada completa de um usuário, desde o login, passando pela adição de um item específico ao carrinho, até a verificação final na página do carrinho.

## 🐞 Relatório de Bug

Para demonstrar a habilidade fundamental de documentar defeitos de forma clara e reproduzível, um relatório de bug foi criado com base em uma falha visual proposital do sistema.

* **[📄 Visualizar Relatório de Bug: BUG-001](./RELATORIO_DE_BUG_01.md)**

## ⚙️ Como Executar o Projeto

Para executar os testes em sua máquina local, siga os passos abaixo.

### Pré-requisitos

* Ter o [Node.js](https://nodejs.org/en/) e o `npm` instalados.

### Passos para Execução

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio-cypress.git](https://github.com/seu-usuario/seu-repositorio-cypress.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd seu-repositorio-cypress
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute os testes:**
    O Cypress permite a execução de duas formas:

    * **Modo Interativo (com interface gráfica):**
        ```bash
        npx cypress open
        ```
        (Este comando abrirá o Cypress Test Runner, onde você pode clicar no arquivo de teste para executá-lo e ver a "mágica" acontecer em tempo real).

    * **Modo Headless (via terminal, sem interface):**
        ```bash
        npx cypress run
        ```
        (Este comando executará todos os testes diretamente no terminal, ideal para integração contínua e verificações rápidas).

---

## 👨‍💻 Autor

* **[João Paulo Souza Vieira]**
* **LinkedIn:** [João Paulo Souza Vieira](https://www.linkedin.com/in/jo%C3%A3o-paulo-souza-vieira-988029369/?trk=opento_sprofile_topcard)
* **GitHub:** [https://github.com/JottaP95](https://github.com/JottaP95)