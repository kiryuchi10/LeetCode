/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     // If the needle is an empty string, return 0
    if (needle === "") {
        return 0;
    }

    // Iterate through the haystack to find the first occurrence of the needle
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }

    // Return -1 if needle is not found in haystack
    return -1;
};