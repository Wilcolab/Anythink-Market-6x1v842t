/**
 * Converts a given string to camelCase.
 *
 * This function transforms strings with spaces, underscores, or hyphens into camelCase format.
 * The first word is lowercased, and each subsequent word starts with an uppercase letter.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('hello_world');         // "helloWorld"
 * toCamelCase('Hello World');         // "helloWorld"
 * toCamelCase('SCREAMING_SNAKE_CASE');// "screamingSnakeCase"
 * toCamelCase('kebab-case-string');   // "kebabCaseString"
 */

/**
 * Converts a given string to dot.case.
 *
 * This function transforms camelCase, PascalCase, snake_case, kebab-case, or space-separated strings into dot.case format.
 * All words are lowercased and separated by dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('helloWorld');            // "hello.world"
 * toDotCase('Hello World');           // "hello.world"
 * toDotCase('SCREAMING_SNAKE_CASE');  // "screaming.snake.case"
 * toDotCase('kebab-case-string');     // "kebab.case.string"
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[\s_-]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
// toCamelCase('hello_world')        // "helloWorld"
// toCamelCase('Hello World')        // "helloWorld"
// toCamelCase('SCREAMING_SNAKE_CASE') // "screamingSnakeCase"
// toCamelCase('kebab-case-string')  // "kebabCaseString"
function toDotCase(str) {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2')
        .replace(/[\s_-]+/g, '.')
        .toLowerCase();
}

// Example usage:
// toDotCase('helloWorld')           // "hello.world"
// toDotCase('Hello World')          // "hello.world"
// toDotCase('SCREAMING_SNAKE_CASE') // "screaming.snake.case"
// toDotCase('kebab-case-string')    // "kebab.case.string"

