/**
 * Converts a given string to camelCase.
 * Words are separated by spaces, dashes, or underscores.
 * Example: "hello world" -> "helloWorld"
 * Example: "convert-to_camel case" -> "convertToCamelCase"
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(str) {
return str
    .split(/[\s-_]+/)
    .map((word, index) =>
        index === 0
            ? word.toLowerCase()
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}
