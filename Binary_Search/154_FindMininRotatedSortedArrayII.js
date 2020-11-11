/**
 * @param {number[]} nums
 * @return {number}
 */
 //Binary Search
var findMin = function(nums) {
  let l = 0, r = nums.length-1;

  while(l<=r) {
    let m = l + Math.floor((r-l)/2);

    if(nums[m] === nums[r]){
      r--;
    }else if(nums[m] < nums[r]) {
      r = m;
    }else {
      l = m+1;
    }

  }
  return nums[l];
}

console.log(findMin([1,1,3,1]))
