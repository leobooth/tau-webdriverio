import { expect } from '@wdio/globals'
import SampleLoginPage from '../pageobjects/sample-login.page'
import SampleSecurePage from '../pageobjects/sample-secure.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await SampleLoginPage.open()

        await SampleLoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SampleSecurePage.flashAlert).toBeExisting()
        await expect(SampleSecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })
})

