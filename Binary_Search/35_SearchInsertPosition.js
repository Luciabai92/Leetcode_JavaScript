/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 //solution 1: linear scan
 //time: O(n)
var searchInsert1 = function(nums, target) {
  for(let i = 0; i<nums.length; i++) {
    if(nums[i] >= target) return i;
  }
  return nums.length-1;
};


//solution 2: binary search
//time: O(logn)
var searchInsert = function(nums, target) {
  let l = 0; r = nums.length;

  while(l<r) {
    let m = l + Math.floor((r-l)/2);
    console.log("l",l,"r",r,"m",m)

    if(nums[m] >= target) {
      r = m;
    } else {
      l = m+1;
    }
  }
  return l;
};

console.log(searchInsert([1,3,5,6],5));
