/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 //two pointer
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let l = nums.length-1;

  let first = 0 //0-l
  let second = first+1;
  let third = l;
  let result = [];

  while(first<l && nums[first]<=0) {
    while(second<third) {
      console.log( nums[first], nums[second],nums[third] + "|" + first,second,third)
      let sum = nums[first]+nums[second]+nums[third]
      if(sum === 0) {
        result.push([nums[first],nums[second],nums[third]]);
        third--;
        second++;
        while(nums[second]===nums[second-1] &&
        nums[third]===nums[third+1] && second<third) {
          third--;
          second++;
        }
      }else if(sum > 0){
        third--;
      }else {
        second++
      }
    }
    first++;
    while(nums[first]===nums[first-1]) first++;
    second = first+1;
    third = l;
}
  return result;
};


console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
