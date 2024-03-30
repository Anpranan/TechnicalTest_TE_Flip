# Technical Test TE Automation API & UI Flip.id

## Installing Cypress

To install **Cypress** via npm, follow these steps:

Linux, MacOS, Windows:

```bash
> npm install cypress
```

OR

```bash
> npm install cypress --save-dev
```

Cypress Open
You can open Cypress from your project root one of the following ways:

Using npx

```bash
npx cypress open
```

Adding npm Scripts
While there's nothing wrong with writing out the full path to the Cypress executable each time, it's much easier and clearer to add Cypress commands to the scripts field in your package.json file.

```bash
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

Now you can invoke the command from your project root like so:

```bash
npx cypress run
```

Install this package:
```bash
npm i cypress-plugin-api
# or
yarn add cypress-plugin-api
```

Import the plugin into your `cypress/support/e2e.js` file:
```js
import 'cypress-plugin-api'
// or
require('cypress-plugin-api')
```

### Usage
You can now use `cy.api()` command. This command works exactly like `cy.request()` but in addition to calling your API, it will print our information about the API call in your Cypress runner.

#### Snapshot only mode
If you want to combine your API calls with your UI test, you can now use `snapshotOnly` mode, that will hide the plugin UI view after command ends. You can access it within the timeline.

`snapshotOnly` mode is set to `false` by default. To set up `snapshotOnly` mode, add following to your test configuration:

```js
it('my UI & API test', { env: { snapshotOnly: true } }, () => {

  cy.visit('/') // open app
  cy.api('/item') // call api
  cy.get('#myElement') // still able to access element on page

})
```

or you can add the configuration to your `cypress.config.{js,ts}` file:
```js
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      snapshotOnly: true
    }
  },
})
```
