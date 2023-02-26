export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    filter = '#header_container > div.header_secondary_container > div.right_component > span > select'
    addtocart = '#add-to-cart-sauce-labs-backpack'
    
    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')   //untuk tulisan
    }

    saucelabfilter(){
        cy.get(this.filter).select('Price (low to high)')    
    }

    saucelabaddtocart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')   
        cy.get(this.addtocart).click()
    }
}