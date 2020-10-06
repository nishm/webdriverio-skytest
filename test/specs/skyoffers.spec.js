
import assert from 'assert';
import homePage from '../pageobjects/home.page';
import productspage from '../pageobjects/products.page'
import bundlesPage from '../pageobjects/bundles.page';
import { getPageUrl } from '../../utilities/test-helper.js'

describe('This feature will make sure that the shop page is navigable and usable.', function skyTest() {
  describe('User navigates to shop page', () => {
    before(() => {
      homePage.open();
      homePage.handleCookiesAlert();
    });
    describe('I navigate to ‘Products & Packages’', () => {
      before(() => {
        homePage.navigateToProductsAndPackages();
      });
      it('The user should be on the ‘https://www.sky.com/shop/’ page', () => {
        assert.strictEqual(getPageUrl(), 'https://www.sky.com/shop/');
      });
      it('Then I should see tiles with text in it', () => {
        const expectedTitles = [
          'Our latest offers',
          'Sky TV packages',
          'Broadband & fibre deals',
          'TV & Broadband',
          'Sky Mobile',
          'Start of season offers',
          'Sky Cinema premieres',
          'Sky Kids TV',
        ];
        const actualTitles = productspage.getProductsAndPackages();
        assert.deepStrictEqual(actualTitles, expectedTitles);
      });
      describe('And I click on ‘Our latest Offers’ section', () => {
        it('Then I see a list of offers with a price to it', () => {
          productspage.navigateToLatestOffers();          
          var prices = bundlesPage.getListOfOfferPrices();          
          console.log(prices)
        });
      });
    });
  });
});