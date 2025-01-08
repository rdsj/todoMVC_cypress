/**
 * 
 */
import telaInicialPage from "../support/pageObjects/tela-inicial.page"

describe('Acessar página do TodoMVC', () => {

  it('Acesar a página', () => {
    cy.visit('/')
    telaInicialPage.inputText()
})})
