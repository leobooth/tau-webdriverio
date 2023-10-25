import { browser } from '@wdio/globals';
import { expect } from '@wdio/globals';
import DAHome from '../pageobjects/fidelity-da.page';

describe('Fidelity tests', () => {

    let url = "https://www.fidelitydigitalassets.com/";
    it('should open Fidelity Digital Assets website', async () => {

        await DAHome.openBrowserAtUrl(url);
        await expect(browser).toHaveUrl(url);
        await expect(DAHome.logo).toBeExisting();
    })
});