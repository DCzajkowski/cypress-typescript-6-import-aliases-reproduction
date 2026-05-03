# Cypress TypeScript 6 import aliases bug reproduction

1. If you run this test now with `npm run cypress:run` it works as expected.
2. If you change the `tsconfig.json` by removing `1.` and uncommenting `2.`, the test fails.
