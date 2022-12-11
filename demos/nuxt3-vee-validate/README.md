# Install Nuxt 3 + Vee Validate


## Vee Validate [Overview](https://vee-validate.logaretm.com/v3/overview.html)
Form validation is one of the most difficult subjects in frontend, not only do you 
have to deal with ensuring correct values are submitted, you must also make sure to 
provide a suitable UX for your users. We also have to deal with accessibility and 
making sure our forms are inclusive and usable for all types of our users. Doing form 
validation by hand is painful, a lot of work, and fairly time consuming! The time you 
spend working on a custom form validation solution is better spent building your application 
logic.

Most validation libraries will save you a lot of time, but vee-validate tackles the major 
pain points of form validation and addresses them in the most flexible way possible:

Ability to craft complicated UX for your users.
Most common validations are built-in.
Cross Field validation.
Utilities to enhance your forms accessability and styling.
Localization is built-in the core.


## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

Install all dependencies for running vee validate
```bash
npm i yup //schema builder for value parsing and validation
npm install vee-validate@3 --save // vee validate
npm @vee-validate/rules //Package with the rules
```

Different of Nuxt 2, Vee Validate is set up as plugins, until new modification.
Create de folder ```plugins``` at project root. Then create to .ts file, one for 
the components and the last one for the rules.

```bash
//plugins/veevalidate-rules.ts
import { defineRule } from "vee-validate";
// import { required, email, min } from '@vee-validate/rules';
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
    // defineRule('required', required);
    // defineRule('email', email);
    // defineRule('min', min);
    Object.keys(rules)
        .filter((k) => k !== "default")
        .forEach((rule) => {
            defineRule(rule, rules[rule]);
              console.log(rule);
        });
});
```
```bash
//plugins/veevalidate-components.ts
import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VForm", Form);
    nuxtApp.vueApp.component("VField", Field);
    nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
});

```


```bash
//nuxt.config.ts
// https://github.com/nuxt/framework/issues/6851#issuecomment-1261087515
export default defineNuxtConfig({
build: { transpile: ['yup', 'lodash', '@vee-validate/rules'] }
})
```
