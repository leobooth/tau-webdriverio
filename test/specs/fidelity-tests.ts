import { browser } from '@wdio/globals';
import { expect } from '@wdio/globals';

describe('Fidelity tests', () => {

    // let assert = require('assert');

    before("Execute before all tests", function(){
        browser.deleteCookies();
    });

    it('look for a job description on first page', async () => {
        let url : string = "https://www.fidelityinvestments.ie/";
        await browser.url(url);
        await expect(browser).toHaveUrl(url);


        let acceptAllCookies: string = "//button[@id='onetrust-accept-btn-handler']";
        await $(acceptAllCookies).waitForDisplayed({timeout: 5000});
        await $(acceptAllCookies).click();

        let searchJobsButtonXpath: string = "//ul[@id='menu-main-menu']/descendant::a[@href='https://www.fidelityinvestments.ie/job-search-results/']";
        const searchJobsButton = await $(searchJobsButtonXpath);
        await searchJobsButton.click();

        await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/job-search-results/");
        
        let expectedJobTitle : string = "Senior QA Engineer";

        await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a").waitForExist();
        await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a[1]").scrollIntoView();

        for await (let jobTableRow of $$("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a")) {
            let rowText : string = await jobTableRow.getText();
            console.log(rowText);

            if (rowText === expectedJobTitle) {
                // assert.strictEqual(rowText, expectedJobTitle);
                jobTableRow.click();
                break;
            }
        }

        await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/job-search-results/");

        await $("//div[contains(@class,'tab-content')]").scrollIntoView();
        const jobDescriptionText = $("//div[contains(@class,'tab-content')]/descendant::div[contains(@class,'active')]/descendant::div[@data-field='JobDescription']/descendant::p[contains(text(),'As a Senior Quality Engineer')]");
        await expect(jobDescriptionText).toHaveTextContaining("Senior Quality Engineer");
    });

    // it('look for a job description on all pages', async () => {
    //     let url : string = "https://www.fidelityinvestments.ie/";
    //     await browser.url(url);
    //     await expect(browser).toHaveUrl(url);

    //     may have to clear cookies after each test
    //     let acceptAllCookies: string = "//button[@id='onetrust-accept-btn-handler']";
    //     await $(acceptAllCookies).waitForDisplayed({timeout: 5000});
    //     await $(acceptAllCookies).click();

    //     await $(acceptAllCookies).waitForDisplayed({timeout: 5000, reverse: true });

    //     let searchJobsButtonXpath: string = "//ul[@id='menu-main-menu']/descendant::a[@href='https://www.fidelityinvestments.ie/job-search-results/']";
    //     const searchJobsButton = await $(searchJobsButtonXpath);
    //     await searchJobsButton.click();

    //     await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/job-search-results/");
        
    //     let expectedJobTitle : string = "Senior QA Engineer";

    //     await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a").waitForExist();
    //     await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a[1]").scrollIntoView();

    //     for await (let jobTableRow of $$("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a")) {
    //         let rowText : string = await jobTableRow.getText();
    //         console.log(rowText);

    //         if (rowText === expectedJobTitle) {
    //             jobTableRow.click();
    //             break;
    //         }
    //     }

        
    // });

    // it('look for a job description that should not exist', async () => {
    //     let url : string = "https://www.fidelityinvestments.ie/";
    //     await browser.url(url);
    //     await expect(browser).toHaveUrl(url);

    //     let acceptAllCookies: string = "//button[@id='onetrust-accept-btn-handler']";
    //     await $(acceptAllCookies).waitForDisplayed({timeout: 5000});
    //     await $(acceptAllCookies).click();

    //     await $(acceptAllCookies).waitForDisplayed({timeout: 5000, reverse: true });

    //     let searchJobsButtonXpath: string = "//ul[@id='menu-main-menu']/descendant::a[@href='https://www.fidelityinvestments.ie/job-search-results/']";
    //     const searchJobsButton = await $(searchJobsButtonXpath);
    //     await searchJobsButton.click();

    //     await expect(browser).toHaveUrl("https://www.fidelityinvestments.ie/job-search-results/");
        
    //     let expectedJobTitle : string = "Senior QA Engineer";

    //     await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a").waitForExist();
    //     await $("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a[1]").scrollIntoView();

    //     for await (let jobTableRow of $$("//div[@id='widget-jobsearch-results-list']/descendant::div[@class='jobTitle']/a")) {
    //         let rowText : string = await jobTableRow.getText();
    //         console.log(rowText);

    //         if (rowText === expectedJobTitle) {
    //             jobTableRow.click();
    //             break;
    //         }
    //     }
    // });
});