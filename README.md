# project name
A simple, eye-catching selling point for the project.

Any information you deem crucial should go here. I like to mention that my project includes TypeScript types. 

## TypeScript + JSDoc

This repo uses TypeScript, but all of the files are JavaScript and there is no build step. But TypeScript will check JavaScript files based on provided JSDoc annotations. VSCode will automatically provide syntax highlighting and documentation like it would for ordinary TypeScript files.

If you are using an IDE which does not highlight TypeScript errors, then you can use the TypeScript compiler to check that the program is correct (`npm i -g typescript`, then `npx tsc` in the directory containing tsconfig.json).

## Workflows

`main` and `dev` are protected branches. You must create PR requests to update them. A simple CI pipeline will be executed when you create the merge request. It passes if the code passes the TypeScript compiler and if all tests pass.

All PRs require the code owner to approve them.

## Testing

Execute `npm test` to run all test files. Execute `npm run test-coverage` to test with coverage.
The tests are performed with Node's test runner.

## Acknowledgements

It is good practice to share the names of people whose work directly influenced your code.
