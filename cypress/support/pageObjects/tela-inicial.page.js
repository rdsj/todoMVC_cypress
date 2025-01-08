/**
 * 
 */
const elem = require('../elements/tela-inicial.elements.js').Element
const concluirItem = require('../elements/tela-inicial.elements.js').Itens
const Filtros = require('../elements/tela-inicial.elements.js').Filtros 
const ListaItens = require('../elements/tela-inicial.elements.js').ListaItens

export class telaInicial {

    inputText(dado) {
        cy.get(elem.inputToDo).type(dado).type('{enter}')
}

concluirItem() {
    cy.get(concluirItem.buttonConcluir)
    .first().click()
}

filtroTodos() {
    cy.get(Filtros.todos).click()
    
}

filtroAtivos() {    
    cy.get(Filtros.ativos).click()
}

filtroConcluidos() {
    cy.get(Filtros.concluidos).click()  
}

deleteItem() {
    cy.get(concluirItem.listaItens)
    .first()
    .find('button')
    .invoke('show')
    .click()
}
}
 export default new telaInicial();