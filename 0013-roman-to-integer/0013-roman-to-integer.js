/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman_vals = {
        'I': 1, 
        'V': 5, 
        'X': 10,
        'L': 50, 
        'C': 100, 
        'D': 500, 
        'M': 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++){
        if (i + 1 < s.length && roman_vals[s[i]] < roman_vals[s[i+1]]){
            total -= roman_vals[s[i]];
        } 
        else{
            total += roman_vals[s[i]];
        }
    }
    return total;
};