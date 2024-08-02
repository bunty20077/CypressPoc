
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
    "test": "node_modules/.bin/cypress run",
    "runtests": "npm run ",
    "test:dev": "CYPRESS_ENV=development npm run test",
    "test:staging": "CYPRESS_ENV=staging npm run test",
    "test:prod": "CYPRESS_ENV=production npm run test"
  },

```


## Running Tests

Command to run a tests suite in Local from Terminal with environment parameterization

```bash
npm run runtests test:dev  
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
