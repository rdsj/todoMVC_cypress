import telaInicialPage from "../support/pageObjects/tela-inicial.page";

describe('Validar Filtros após a conclusão de um item', () => {

    beforeEach(() => {
        cy.visit('/')
        const dados = ['Primeiro', 'Segundo', 'Terceiro']   

        dados.forEach(dados => {
            telaInicialPage.inputText(dados)
            telaInicialPage.concluirItem()
            //telaInicialPage.filtroConcluidos()  
        })
        
    })

    it('Deletar um item da lista de concluidos', () => {
        telaInicialPage.deleteItem()
        
    })

    
})