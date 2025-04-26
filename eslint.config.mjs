import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylisticJs from '@stylistic/eslint-plugin-js';


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      "semi" : ["error","always"],
      "@stylistic/js/indent" : ["error", 2],
      "eqeqeq" : ["error", "always"],
      "for-direction" : ["error"],
      "no-cond-assign" : ["error", "always"],
    }
  }
]);