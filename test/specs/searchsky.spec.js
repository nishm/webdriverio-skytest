
import homePage from '../pageobjects/home.page';

describe('User sees the editorial section in specific searches', function editorialTest() {
  describe('Given I am on the home page', () => {
    describe('When I search ‘sky’ in the search bar', () => {

      before(() => {
        homePage.open();
        homePage.handleCookiesAlert();
      });
      it('User sees the editorial section in specific searches', () => {
        homePage.searchContentOnSky('sky');
      });
    });
  });
});