// import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(LoginPage.flashAlert).toBeExisting();
        // await expect(LoginPage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');
    })
})

