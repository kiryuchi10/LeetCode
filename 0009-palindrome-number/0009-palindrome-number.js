/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;

  const str = x.toString();
  const len = str.length;

  for (let i = 0; i < Math.floor((len/2)); i++){
    if(str[i] !== str[len -i - 1]){
        return false;
    }
  }

  return true;
};