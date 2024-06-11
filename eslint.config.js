import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "quotes": [
        "warn",
        "double",
        { "avoidEscape": true, "allowTemplateLiterals": true }
      ],
    }
  }
];