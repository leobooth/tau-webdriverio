To run your tests, execute:
$ cd C:\Users\leobo\GitHubRepos\typescript-webdriverio
$ npm run wdio

You can start your test suite by using the run command and pointing to the WebdriverIO config that you just created:
<!-- npx wdio run ./wdio.conf.js -->
npx wdio run ./wdio.conf.ts

If you like to run specific test files you can add a --spec parameter:
<!-- npx wdio run ./wdio.conf.js --spec example.e2e.js -->
npx wdio run ./wdio.conf.ts --spec sample-test.e2e.ts

or define suites in your config file and run just the test files defined by in a suite:
npx wdio run ./wdio.conf.js --suite exampleSuiteName

https://webdriver.io/docs/gettingstarted/

🤖 WDIO Configuration Wizard Settings 🧙
=========================================

? A project named "typescript-webdriverio" was detected at "C:\Users\leobo\GitHubRepos\typescript-webdriverio", correct? Yes
? What type of testing would you like to do? E2E Testing - of Web or Mobile Applications
? Where is your automation backend located? On my local machine
? Which environment you would like to automate? Web - web applications in the browser
? With which browser should we start? Chrome
? Which framework do you want to use? Mocha (https://mochajs.org/)
? Do you want to use a compiler? TypeScript (https://www.typescriptlang.org/)
? Do you want WebdriverIO to autogenerate some test files? Yes
? What should be the location of your spec files? C:\Users\leobo\GitHubRepos\typescript-webdriverio\test\specs\**\*.ts
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? C:\Users\leobo\GitHubRepos\typescript-webdriverio\test\pageobjects\**\*.ts
? Which reporter do you want to use? spec
? Do you want to add a plugin to your test setup?
? Do you want to add a service to your test setup?
? What is the base url? http://localhost
? Do you want me to run `npm install` Yes