import assert from "node:assert";
import { describe, test, mock } from "node:test";

// By default, TypeScript will not check test files.
// If you would like TypeScript to check test, then
// in tsconfig.json:
//  - remove `"exclude"`
//  - add `"moduleResolution": "nodeNext"`
//  - add `"allowSyntheticDefaultImports": true`

describe("logical group of tests", () => {
    // You might find it convenient to logically group tests under describe blocks.
    // This is not necessary. You can only use `test` if you want.
    test("description of test", () => {
        assert.strictEqual(true  /* expected */, true /* actual */);
    });

    // see https://nodejs.org/api/test.html#mocking
    // for examples of the mock API
});
