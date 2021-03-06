/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase.replace(/[^a-zA-Z]/gi,'');
  let left = 0;
  let right = s.length-1;

  while(left < right) {
    if(s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
