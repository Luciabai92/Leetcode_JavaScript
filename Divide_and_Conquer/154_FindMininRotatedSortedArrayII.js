/**
 * @param {number[]} nums
 * @return {number}
 */
 //Divide Conquer
var findMin1 = function(nums) {
  console.log(nums);
  if(!nums) return null;

  const length = nums.length;
  if(length === 1) return nums[0];

  const middle = Math.floor(length/2);
  const left = nums.slice(0,middle);
  const right = nums.slice(middle,length);

  return Math.min(findMin(left),findMin(right));
}

var findMin = function(nums) {
  return find(nums,0,nums.length-1);
}

var find = (nums,l,r) =>{
  // if length <=2
  if(l+1 >= r) return Math.min(nums[l],nums[r]);

  //if sorted
  if(nums[l] < nums[r]) return nums[l];

  let m = l + Math.floor((r-l)/2);
  return Math.min(find(nums,l,m-1),find(nums,m,r))
}

console.log(findMin([3,1,3]))
