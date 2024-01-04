// Include all javascript in the src files.

// Write /** @type {Type} */ to get syntax highlighting

// Use /** @type {import("./relative/path/to/.d.ts").Type} */ to import types

// Use the following syntax to document functions:

/**
 * A short description of the function.
 * A longer description of the function can follow.
 * {@link variableName} creates a link to variableName.
 * For example code:
 * @example
 * ```javascript
 * // javascript code
 * ```
 * You can provide multiple examples.
 * @param {TypeA} paramName A description of the parameter
 * @param {TypeB} hashParam A description of the parameter
 * @param {object} hashParam An object parameter. You MUST use the `object` type for the properties to be documented.
 * If you would like a custom type, provide a @param annotation BEFORE this one as shown
 * @param {TypeC} hashParam.property A description of a property on the `hashParam` object
 * @param {TypeD} [optionalParam] The brackets indicate the argument is optional
 * @returns {TypeD}
 */
const myFunction = (paramName, { property }, optionalParam) => { /** do stuff */ };
