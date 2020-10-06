import Page from './page'
import assert from 'assert';

class HomePage extends Page {

    /**
    * define elements
    */

    get headerMessage() { return $(".mast-c-header__logo") }
    get linearSearch() { return $("button[class='c-link-faux mast-c-user-actions__btn mast-c-search-icon']") }
    get searchInput() { return $("input[class*='c-form-input main-input PII u-margin-bottom-none storefront-fix__inherit-height']") }
    get searchResultsContainer() { return $(".right-hand-section .c-text-body") }

    /**
     * define or overwrite page methods
     */
    open() {
        super.open('http://www.sky.com')
        browser.maximizeWindow();
    }

    handleCookiesAlert() {
        const my_frame = $('[id="sp_message_iframe_207015"]');
        browser.waitUntil(() => my_frame.isFocused(), 5000, "Expected frame is not displayed");
        browser.switchToFrame(my_frame);
        var elem = $('button:nth-child(2)');
        elem.click();
        browser.switchWindow('Sky TV, *')
    }

    waitForLandingPageToLoad() {
        if (!this.headerMessage.isDisplayed()) {
            this.headerMessage.waitForDisplayed(5000);
        }
    }
    getMessageText() {
        return this.headerMessage.getText();
    }

    navigateToProductsAndPackages() {
        const link = $('=Products & Packages')         
        link.click();        
    }

    clickOnSearch() {
        this.linearSearch.waitForDisplayed(3000);
        this.linearSearch.click();
    }

    searchSky(char) {
        this.searchInput.waitForDisplayed(3000);
        this.searchInput.setValue(char);
    }

    searchContentOnSky(value) {
        this.clickOnSearch();
        this.searchSky(value);
        this.searchResultsContainer.waitForDisplayed(3000);
        assert.notDeepStrictEqual(this.searchResultsContainer.getText, "Sky")

    }



}

export default new HomePage();
