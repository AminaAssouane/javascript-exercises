function isAlphaNumeric(char) {
  return /[a-zA-Z0-9]/.test(char);
}
const palindromes = function (str) {
  let i = 0;
  let j = str.length - 1;
  str = str.toUpperCase();
  while (i < j) {
    if (!isAlphaNumeric(str.charAt(i))) i++;
    else if (!isAlphaNumeric(str.charAt(j))) j--;
    else if (str.charAt(i) !== str.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
