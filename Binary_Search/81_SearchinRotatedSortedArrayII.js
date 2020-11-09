/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search1 = function(nums, target) {
  //1. remove duplicate from beginning and end 1,1,3,1
  while(nums.length >1 && nums[nums.length-1] === nums[0]){
    nums.pop();
  }
  console.log(nums)
  //2. find the pivot point
  let l = 0, r = nums.length-1;
  while(l<=r) {
    let m = l + Math.floor((r-l)/2);
    if(nums[m] === target) return true;
    console.log(l,r,m);
    if(nums[m]<=nums[nums.length-1]) {
      r = m-1;
    }else{
      l = m+1;
    }
  }
  console.log(l);
  //decide side
  let left = 0, right = nums.length-1;
  if(target >= nums[l] && target <= nums[right] && l<=right) {
    left = l;
  } else {
    right = l-1;
  }

  //binary search sorted array
  console.log(left,right);
  while(left<=right) {
    let middle = left + Math.floor((right-left)/2);
    if(nums[middle] === target) return true;
    if(nums[middle]>target) {
      right = middle-1;
    }else{
      left = middle+1;
    }
  }
  return false;
};

var search = function(nums, target) {
  let l = 0, r = nums.length-1;

  while(l <= r) {
    let m = l + Math.floor((r-l)/2);
    if(nums[m] === target) return true;

    if(nums[l] === nums[r]) {
      r--;
    } else if (nums[m] >= nums[l]) {
      if(target >= nums[l] && target <= nums[m]) {
        r = m-1;
      } else {
        l = m+1;
      }
    } else {
      if(target <= nums[r] && target >= nums[m]) {
        l = m+1;
      }else{
        r = m-1;
      }
    }
  }
  return false;
}

console.log(search([1,3,1],1));
