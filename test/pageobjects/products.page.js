import Page from './page'
import assert from 'assert';
import chai from 'chai';

import { waitUntilelement } from '../../utilities/test-helper.js'
import * as helperUtils from '../../utilities/test-helper.js'



class ProductsPage extends Page {

    get headerMessage() { return $('h1') }
    get productsCollection() { return $('[class="c-tile__body c-tile__caption"]').$('.c-tile__title') }

    open() {
        super.open('login')    
    }


    waitForLandingPageToLoad() {
        if (!this.headerMessage.isDisplayed()) {
            this.headerMessage.waitForDisplayed(5000);
        }
    }

    getProductsAndPackages() {
        const productTitlesSelector = $('[class="c-tile__body c-tile__caption"]');
        helperUtils.waitUntilelement(productTitlesSelector);        
        const productTitles = $$('[class="c-tile__body c-tile__caption"]')

        let actualTitles = [];
        for (let i = 0; i < productTitles.length; i++) {
            actualTitles.push(productTitles[i].getText());
        }

        return actualTitles;        

    }

    navigateToLatestOffers() {
        const link = $('=Our latest offers')        
            link.click();        
        this.headerMessage.waitForExist({ timeout: 6000 });        
    }


}

export default new ProductsPage()
