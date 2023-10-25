import { browser } from '@wdio/globals';
import { expect } from '@wdio/globals';
import DAHome from '../pageobjects/fidelity-da.page';

describe('Fidelity tests', () => {

    it('should open Fidelity Digital Assets website', async () => {
        await DAHome.navigateToPage;
        await expect(browser).toHaveUrl(DAHome.getUrl);
        await expect(DAHome.logo).toBeExisting();
    })

    it('should open Fidelity Digital Assets website without using page object', async () => {
        let url : string = "https://www.fidelitydigitalassets.com/";
        await browser.url(url);
        await expect(browser).toHaveUrl(url);

        let logoSelector: string = "//header/descendant::a[descendant::img[contains(@class,'fdas-logo')]]";
        await expect($(logoSelector)).toBeExisting();
    });
});