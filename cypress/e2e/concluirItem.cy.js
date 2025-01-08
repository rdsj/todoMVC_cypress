import telaInicialPage from "../support/pageObjects/tela-inicial.page";

describe('Concluir item da lista', () => {

    beforeEach(() => {
        cy.visit('/')

        const dados = ['Primeiro', 'Segundo', 'Terceiro']   

        dados.forEach(dados => {
            telaInicialPage.inputText(dados)
        })
        
    })

    it('Concluir um item da lista', () => {
        telaInicialPage.concluirItem()
    })
})