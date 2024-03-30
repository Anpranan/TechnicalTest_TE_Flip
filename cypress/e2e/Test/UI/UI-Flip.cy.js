import FlipHomePage from '../../Pages/UI/Object-FlipHomePage';

describe('Flip Website Automation Tests', () => {
  const flipHomePage = new FlipHomePage()
  beforeEach(() => {
    flipHomePage.visit()
  })

    it('Scenario 1 : At the top right corner, there is a toggle to switch the language.(ID and EN)', () => {
        flipHomePage.toggleLanguage();
        flipHomePage.isLanguageSelected('Bebas transaksi, ke siapa aja.') 
        flipHomePage.toggleLanguage();
        flipHomePage.isLanguageSelected('Free financial transactions, to anyone.') 
    })
    it('Scenario 2 : Should find Telkomesel, Indosat Ooredoo, and XL ', () => {
        flipHomePage.scrollToCellularProviders();
        flipHomePage.getServiceProvider();
        flipHomePage.getSupportedProvidersText('Telkomsel');
        flipHomePage.getSupportedProvidersText('Indosat Ooredoo');
        flipHomePage.getSupportedProvidersText('XL');
    })
    it('Scenario 3 : Simulation of sending money to Poundsterling ', () => {
        flipHomePage.scrollToCellularProviders();
        flipHomePage.getSimulationSendingMoney();
        flipHomePage.getChooseCounterDestination();
        flipHomePage.getFillAmountOfMoneySend(10000000);
        flipHomePage.getCalculateKurs();
    })
})
