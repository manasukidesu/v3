/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/comment-directive': 'off',
    // // TS
    // "@typescript-eslint/no-explicit-any": "off",
    // "no-debugger": "off",
    // "@typescript-eslint/explicit-module-boundary-types": "off",
    // "@typescript-eslint/ban-types": "off",
    // "@typescript-eslint/ban-ts-comment": "off",
    // "@typescript-eslint/no-empty-function": "off",
    // "@typescript-eslint/no-non-null-assertion": "off",
    // "@typescript-eslint/no-unused-vars": [
    //   "error",
    //   {
    //     argsIgnorePattern: "^_",
    //     varsIgnorePattern: "^_"
    //   }
    // ],
    // "no-unused-vars": [
    //   "error",
    //   {
    //     argsIgnorePattern: "^_",
    //     varsIgnorePattern: "^_"
    //   }
    // ],
    // Vue
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  }
}
