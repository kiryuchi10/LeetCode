/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (Object.values(mapping).includes(char)) {
            stack.push(char);
        } else if (mapping[char]) {
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        } else {
            return false; // invalid character
        }
    }

    return stack.length === 0;
}