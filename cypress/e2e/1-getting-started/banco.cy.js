//entrar a esta pagina https://www.bancodeoccidente.com.co/wps/portal/banco-de-occidente/bancodeoccidente/

describe('Banco de Occidente', () => { 

    it('Ingresar a la pagina', () => {
        cy.visit('https://www.bancodeoccidente.com.co/wps/portal/banco-de-occidente/bancodeoccidente/')
        cy.get('.animated > .item > .caption > .button').click({ multiple: true });

        cy.get('.animated > .item > .caption > .button').click()
        cy.get('#request-credit').click()
    })
    
})