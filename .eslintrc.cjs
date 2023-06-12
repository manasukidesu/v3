/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["plugin:vue/vue3-essential", "eslint:recommended"],

    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-unused-vars": "off",
        // // TS
        "@typescript-eslint/no-explicit-any": "off",
        "no-debugger": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        // Vue
        "vue/comment-directive": "off",
        "vue/no-v-html": "off",
        "vue/require-default-prop": "off",
        "vue/require-explicit-emits": "off",
        "vue/multi-word-component-names": "off",
        "vue/require-v-for-key": "off",
        "vue/no-unused-components": "off",
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "any",
                    normal: "any",
                    component: "any",
                },
                svg: "always",
                math: "always",
            },
        ],
    },
};
