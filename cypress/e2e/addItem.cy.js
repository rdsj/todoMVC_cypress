import telaInicialPage, { telaInicial } from "../support/pageObjects/tela-inicial.page";

describe('Adicionar item', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Adicionar um item na lista', () => {
        telaInicialPage.inputText('dado')
    })

    it('Adicionar mais de um item na lista', () => {

    const dados = ['Primeiro', 'Segundo', 'Terceiro']

//    for (let index = 0; index < dados.length; index++) {
    dados.forEach(dados => {
    telaInicialPage.inputText(dados)
})
        
    })
        
})


