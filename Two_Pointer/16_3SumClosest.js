/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let f = 0, s = f+1, t = nums.length-1;
  let different = Infinity;
  let result = 0;

  while(f<nums.length) {
    while(s < t) {
      let sum = nums[f]+nums[s]+nums[t];
      let sub = sum-target;

      if(Math.abs(sub) < different) {
        different = Math.abs(sum-target);
        console.log(nums[f],nums[s],nums[t])
        result = sum;
      }

      if(sub < 0) {
        s++;
      } else if(sub > 0) {
        t--;
      }else if(sub === 0){
        return sum;
      }
    }
    f++;
    s = f+1;
    t = nums.length-1;
  }
  return result;
};

console.log(threeSumClosest([-1,2,1,-4],1));
