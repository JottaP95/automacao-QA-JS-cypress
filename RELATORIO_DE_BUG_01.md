# Relatório de Defeito: BUG-001

**Título:** [Defeito Visual] As imagens dos produtos são idênticas e incorretas na galeria ao logar com o usuário "problem_user".

**Projeto:** Sauce Demo - Testes de Portfólio

**Relatado por:** João Paulo Souza Vieira

**Data:** 04 de Setembro de 2025

---

## 1. Ambiente

* **URL:** `https://www.saucedemo.com/inventory.html`
* **Navegador:** Google Chrome Versão 128.0.6613.84
* **Sistema Operacional:** Windows 11

---

## 2. Pré-condição

* O usuário deve estar na página de login: `https://www.saucedemo.com`

---

## 3. Passos para Reproduzir

1.  Acessar a URL da pré-condição.
2.  No campo de usuário (`username`), inserir o texto `problem_user`.
3.  No campo de senha (`password`), inserir o texto `secret_sauce`.
4.  Clicar no botão "Login".
5.  Observar a galeria de produtos na página principal (`inventory.html`).

---

## 4. Resultado Esperado

A página de produtos deve ser exibida corretamente, com cada produto mostrando sua respectiva imagem. Por exemplo, o item "Sauce Labs Backpack" deve exibir a imagem de uma mochila, o item "Sauce Labs Bike Light" deve exibir a imagem de uma luz de bicicleta, e assim por diante.

---

## 5. Resultado Obtido

A página de produtos é exibida, porém todos os itens da galeria mostram a **mesma imagem incorreta**: a imagem de um casaco de lã ("Sauce Labs Fleece Jacket"). Os nomes e preços dos produtos estão corretos, mas as imagens não correspondem.

---

## 6. Evidências

*A imagem abaixo demonstra o erro, destacando que múltiplos produtos com nomes diferentes exibem a mesma imagem de um cachorro.*

![Evidência do bug visual no Sauce Demo](https://imgur.com/a/MmrhzOb)

---

## 7. Severidade e Prioridade

### Severidade: Média

* **Justificativa:** Embora o fluxo de compra não esteja bloqueado (o usuário ainda pode adicionar ao carrinho e comprar), o defeito impacta severamente a experiência do usuário e a confiabilidade visual do e-commerce, podendo levar à perda de vendas por confusão.

### Prioridade: Média

* **Justificativa:** Não é uma falha crítica que impede o funcionamento do site, mas deve ser corrigida para manter a qualidade da vitrine de produtos e a confiança do cliente.