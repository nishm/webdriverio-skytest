### How to Run the Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Step 1: Install all the dependencies using npm i. 

Step 2: This executes all spec files in the [`./test/specs/*.js`] directory.
The command to run is `npm run test-local`.

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files are found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli

### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.  Please note, this has been added in .config.

To generate and view an allure report locally, run `npm run allure-report`. A typical Allure report will look like this

![ScreenShot](https://github.com/allure-framework/allure2/blob/master/.github/readme-img.png)

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

