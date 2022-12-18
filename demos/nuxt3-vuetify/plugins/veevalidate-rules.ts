import { defineRule } from "vee-validate";
// import { required, email, min } from '@vee-validate/rules';
import * as rules from "@vee-validate/rules";

export default defineNuxtPlugin((nuxtApp) => {
    Object.keys(rules)
        .filter((k) => k !== "default")
        .forEach((rule) => {
            // @ts-ignore
            defineRule(rule, rules[rule]);
            //   console.log(rule);
        });
});
