let resultCalculate;

class FlipHomePage {
    constructor() {
        this.resultCalculation = null;
        
      }
      
    visit() {
        cy.viewport(1280, 1024)
        cy.visit('https://flip.id/landing')
    };
  
    toggleLanguage() {
        cy.get('.toggle-language').click()
    };
  
    isLanguageSelected(language) {
        return cy.contains(language).should('exist')
    };
    scrollToCellularProviders() {
        cy.wait(1000) // Wait for the page
        cy.window().scrollTo('center', { ensureScrollable: false })
    };

    getServiceProvider(){
        cy.get('.chakra-accordion > :nth-child(5)').click()
    };

    getSupportedProvidersText(providers) {
        return cy.contains(providers).should('exist')
    };

    getSimulationSendingMoney(){
        cy.wait(1000)
        cy.get('.css-kaqrt5 > .panel-container > .chakra-button').click()
    };

    getChooseCounterDestination(country){
        cy.wait(700)
        cy.get('#menu-button-7').click()
        cy.wait(1000)
        cy.get(':nth-child(56) > .css-1i33ipy').click()
    };

    getFillAmountOfMoneySend(amount){
        this.amount = amount;
        cy.wait(1000)
        cy.get('.css-19t8ja4').first().type(this.amount);
    };

    getCalculateKurs(){ 
        const Amount = this.amount
        cy.log(`Amount: ${Amount}`)
    
        cy.get('.css-mqm6w4 > .css-70qvj9 > .chakra-text')
            .invoke('text')
            .then((Kurs) => {
            const regex = /(\d+\.\d+)/;
            const match = Kurs.match(regex);
    
            if (match) {
                this.kursFlip = parseFloat(match[0]).toFixed(3);
                cy.log(`Hasil Kurs: ${this.kursFlip}`);
                cy.log(`Amount Send To Money: ${Amount}`);
    
                this.resultCalculation = Amount / this.kursFlip;
                const resultString = this.resultCalculation.toString();
                this.resultCalculate = parseInt(resultString.substring(0, 3)); // Assign ke this.resultCalculate
                cy.log(`resultCalculate: ${this.resultCalculate}`);


                
            } else {
                cy.log('Tidak ada nilai yang cocok ditemukan.');
            }
        });

    };
};
    
export default FlipHomePage