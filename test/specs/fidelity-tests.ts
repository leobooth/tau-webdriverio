import { expect } from '@wdio/globals';
import DAHome from '../pageobjects/fidelity-da.page';

describe('Fidelity tests', () => {

    let url = "https://www.fidelitydigitalassets.com/";
    it('should test something', async () => {

        await DAHome.openBrowserAtUrl(url);
        await expect(DAHome.logo).toBeExisting();
    })
});