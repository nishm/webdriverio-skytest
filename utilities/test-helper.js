
export function waitUntilelement(element) {
    browser.waitUntil(() => element.isDisplayed(), 3000, "Expected element is not displayed");

}

export const getPageUrl = () => {
     return browser.getUrl();
     } 