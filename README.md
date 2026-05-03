# Cypress TypeScript 6 import aliases bug reproduction

1. Run the tests using `npm run cypress:run`.
2. If you change the `tsconfig.json` by removing `2.` and uncommenting `1.`, the test successfully passes.
