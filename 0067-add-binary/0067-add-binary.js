/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i  = a.length - 1,
        j  = b.length - 1,
        carry = 0,
        out = [];
    
    while (i >= 0 || j >= 0 || carry){
        const bitA = i >= 0? a.charCodeAt(i) - 48 : 0;
        const bitB = j >= 0 ? b.charCodeAt(j) - 48 : 0;
        const sum  = bitA + bitB + carry;
        out.push(String(sum & 1));
        carry = sum >> 1;
        --i; --j;
    }
    return out.reverse().join('');
};