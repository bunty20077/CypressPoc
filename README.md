
# Cypress Web & API Automation

Cypress is used here for API and Web Automation Testing using Javascript.

- [Cypress](https://www.cypress.io/)



## Project Configuration
Project has file named package.json. Its like pom.xml in Maven where we used to store dependency . Here package.json holds dependency .This is the heart of any Node project. It records important metadata about a project.
It also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

package.json
```bash
{
  "name": "cypresspoc",
  "version": "1.0.0",
  "description": "This is a starter kit for API and UI Testing Cypress with JS",
  "main": "index.js",
  "scripts": {
    "test": "node_modules/.bin/cypress run",
    "runtests": "npm run test -- "
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bunty20077/CypressPoc.git"
  },
  "keywords": [
    "REST",
    "CYPRESS",
    "API"
  ],
  "author": "Sayantan Tarafdar",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/bunty20077/CypressPoc/issues"
  },
  "homepage": "https://github.com/bunty20077/CypressPoc#readme",
  "devDependencies": {
    "cypress": "^13.13.2"
  }
}


```


## Installation

Install Cypress with npm

```bash
Create a new npm project 
-------------------------
mkdir <projectname>
cd <projectname>
TEST

Initialise folder with new npm package
---------------------------------------
npm -i init

Install Cypress 
------------------
npm install cypress --save-dev

Cypress Command List
-----------------------
https://docs.cypress.io/api/table-of-contents

```
    
## Usage/Examples

To run Code from CI/CD 
-------------------------
Add Below Lines in package.json

```javascript
  "scripts": {
    "runtests": "npm run ",
    "test:api": "node_modules/.bin/cypress run --spec 'cypress/e2e/api/**/*'",
    "test:ui": "node_modules/.bin/cypress run --spec 'cypress/e2e/ui/**/*'",   
    "test:api:dev": "CYPRESS_ENV=development npm run test:api",
    "test:api:staging": "CYPRESS_ENV=staging npm run test:api",
    "test:api:prod": "CYPRESS_ENV=production npm run test:api",
    "test:ui:dev": "CYPRESS_ENV=development npm run test:ui",
    "test:ui:staging": "CYPRESS_ENV=staging npm run test:ui",
    "test:ui:prod": "CYPRESS_ENV=production npm run test:ui"
  },

```
Tips

```
  Add the below line in spec file to receive Autosuggestion in Cypress
  /// <reference types="Cypress" />
```

## Running Tests

Command to run UI tests suite in Local from Terminal with environment parameterization

```bash
npm run runtests test:ui:dev   
```

Command to run API tests suite in Local from Terminal with environment parameterization

```bash
npm run runtests test:api:dev   
```
Command to run a single suite in BrowserStack and in Browserstack

```bash
mvn clean test -DsuiteXmlFile=testng.xml -DrunOn=browserstack -Dplatform=ios 
```
Command to run a group of suites
```bash
npx wdio --suite smoke --suite component
```

Command to run specific spec file
```bash
npx wdio --spec test/specs/home.js
```


## Authors

- [Sayantan Tarafdar](https://github.com/bunty20077)


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Demo

Insert gif or link to demo


## Tech Stack

**Javascript**
**Cypress**



## Run from Jenkins

Run Jenkins locally
```bash
  jenkins-lts
```
Source Code Management
```bash
  Set git and provide public url for Repo
  For credentials , generate PAT from Git-> Developers Settings and 
  provide that one as pasword along with username( not email)
```

Build Environment
```bash
  Provide Node & npm bin/ folder to PATH - click this checkbox option
```

Provide these commands inside Shell on Jenkins under Build Steps
```bash
npm install
export BROWSERSTACK_USERNAME=********************
export BROWSERSTACK_ACCESS_KEY=******************
npx wdio --suite smoke
```

Post-build Actions set to Allure-Reports plugin


Need to install plugin from Global Configuration
```bash
  node
  allure
  allure-commands
```

## Frequently Used Commands

Frequently used Cypress Commands for UI Testing
```bash
 1. visit()     -> Open a specific URL ( Like .get() in selenium )
 2. get()       -> Find a locator .
 3. type()      -> Entering data from keyboard . ( sendkeys() in Selenium)
 4. click()     -> To click something.
 5. check()     -> To check checkbox and radio buttons.
 6. uncheck()   -> To uncheck checkbox and radio buttons.
 7. select()      -> To select elements from dropdown
 8. cy.wait(200)  -> Pause execution
 9. cy.intercept()-> Intercept and mock network.
 10.cy.task()       -> Run custom node js code.
 11.cy.scrollTo()   -> Scroll to specific element on the page.
 12.cy.getCookie()  -> Retrieve a cookie with specific name from the current page.
 13.cy.clearCookies()-> Delete all cookies on the current page.
 14.cy.url()         -> Get the current URL of the page being tested.
 15.cy.location()    -> Get current location of the page being tested.(URL,hostname,pathname)
 16. dblclick()      -> Stimulate a double-click on an element.
 17. rightclick()    -> Perform right click
```

Frequently used Cypress Commands for API Testing
```bash
 1. request()     -> Get Request for API.
 2.  
```
