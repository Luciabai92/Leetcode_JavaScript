/**
 * @param {number[]} height
 * @return {number}
 */
//t:o(n)
//s:o(1)
var maxArea = function(height) {
  let left = 0;
  let right = height.length-1
  let maxarea = 0;

  while(left<right) {
    maxarea = Math.max(maxarea, Math.min(height[left],height[right])*(right-left));
    if(height(left) <= height(right)) {
      left++
    }else {
      right++
    }
  }
  return maxarea;
};
