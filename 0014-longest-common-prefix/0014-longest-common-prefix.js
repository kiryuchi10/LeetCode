/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
     if (strs.length === 0) return "";
    
    // Iterate over each character of the first string.
    for (let i = 0; i < strs[0].length; i++) {
        // Get the current character from the first string.
        const currentChar = strs[0][i];
        
        // Compare this character with the character at the same position in the other strings.
        for (let j = 1; j < strs.length; j++) {
            // Check if we've exceeded the length of the current string or found a mismatch.
            if (i === strs[j].length || strs[j][i] !== currentChar) {
                // Return the common prefix up to this point.
                return strs[0].substring(0, i);
            }
        }
    }
    
    // If the loop completes, the entire first string is a common prefix.
    return strs[0];
};