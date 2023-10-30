import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure");
        await expect(browser).toHaveUrlContaining("secure");
        await expect(browser).toHaveTitle("The Internet");
    });

    it('should login to secure page', async ()=> {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure");
        await expect(browser).toHaveUrlContaining("secure");
        await expect(browser).toHaveTitle("The Internet");
    })
});


