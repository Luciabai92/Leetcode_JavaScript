/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 //solution1:
 //t: O(n)
var search1 = function(nums, target) {
  for (let i =1; i<nums.length; i++) {
    if(nums[i] === target) return i;
  }
  return -1
};

//Binary Search
//t: O(logn)
var search = function(nums, target) {
  //find out the pivot
  let l = 0, r = nums.length-1;
  while(l<r) {
    let m = l + Math.floor((r-l)/2);
    console.log("l",l,"r",r,"m",m);

    if(nums[m] <= nums[r]) {
      r = m;
    }else{
      l = m+1;
    }
  }
  //rot = l: index of the smallest element
  let rot = l;
  console.log("rot",rot);
  //find out which side target lies
  if(target >= nums[0]) {
    l = 0;
    r = rot;
  }
  l = (target >= nums[0]) ? 0:rot;
  //target > nums[nums.length-1] in case [1,3]
  r = (target >= nums[0]&&target > nums[nums.length-1]) ? rot:nums.length;

  //search target
  while(l<r) {
    let m = l + Math.floor((r-l)/2);
    if(nums[m] >= target) {
      r = m;
    }else{
      l = m+1;
    }
  }
  return (nums[l]===target) ? l:-1;
}

console.log(search([5,1],1))
