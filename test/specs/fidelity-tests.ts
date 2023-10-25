import { browser } from '@wdio/globals';
import { expect } from '@wdio/globals';
// import DAHome from '../pageobjects/fidelity-da.page';

describe('Fidelity tests', () => {

    // it('should open Fidelity Digital Assets website', async () => {
    //     await DAHome.navigateToPage;
    //     await expect(browser).toHaveUrl(DAHome.getUrl);
    //     await expect(DAHome.logo).toBeExisting();
    // })

    it('look for a job description on first page', async () => {
        let url : string = "https://www.fidelityinvestments.ie/";
        await browser.url(url);
        await expect(browser).toHaveUrl(url);

        let logoSelector: string = "//button[@id='onetrust-accept-btn-handler']";
        (await $(logoSelector)).click;

        await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/");

        let searchJobsButton: string = "//ul[@id='menu-main-menu']/descendant::a[@href='https://www.fidelityinvestments.ie/job-search-results/']";
        (await $(searchJobsButton)).click;
    
        await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/job-search-results/");

        // const jobTableRows : any = await $$("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a");
        let jobTitle = "";
        let expectedJobTitle : string = "Senior QA Engineer";

        for await (let jobTableRow of $$("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a")) {
            let rowText = await jobTableRow.getText();
            console.log(rowText);

            if (rowText === expectedJobTitle) {
                jobTitle = rowText;
                break;
            }
        }

        await expect(jobTitle).toHaveTextContaining(expectedJobTitle);

    });
});