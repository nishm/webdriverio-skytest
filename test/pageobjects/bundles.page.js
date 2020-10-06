import Page from './page'
import assert from 'assert';

const price = '#tab-1 .c-costing__price .c-price__main';
const priceListSelector = '#tab-1 .c-costing__price .c-price__main';
class BundlesPage extends Page {

    get priceList() { return $(price) }

    scrollPage() {
        browser.execute(function () {            
            document.querySelector("a.buttonPricePoint.btn.primary").scrollIntoView();
        });
    }

    getListOfOfferPrices() {
        this.scrollPage();
        const priceList = $$(priceListSelector);        
        let actualList = [];
        for (let i = 0; i < priceList.length; i++) {
            actualList.push(priceList[i].getText());
        }    
        let actualPriceList = actualList.filter(item => item)
        return actualPriceList;    
    }
}

export default new BundlesPage()
