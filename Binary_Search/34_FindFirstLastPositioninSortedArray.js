/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  //1. find the first element (lower bound)
  let l = 0, r = nums.length-1;
  while(l<=r) {
    let m = l + Math.floor((r-l)/2);
    if(nums[m]>=target) {
      r = m-1;
    }else{
      l = m+1;
    }
  }
  const leftIndex = (nums[l]===target) ? l:-1;

  //2. find the first element (lower bound)
  l = 0, r = nums.length-1;
  while(l<=r) {
    let m = l + Math.floor((r-l)/2);
    if(nums[m]>target) {
      r = m-1;
    }else{
      l = m+1;
    }
  }
  const rightIndex = (nums[l-1]===target) ? l-1:-1;

  return [leftIndex,rightIndex]
};

console.log(searchRange([5,7,7,8,8,10],7))
