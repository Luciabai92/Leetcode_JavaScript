/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length-1;

    while(l<=r) {
        let m = l + Math.floor((r-l)/2);

        if(nums[m] <= nums[nums.length-1]) {
            r = m-1;
        } else {
            l = m+1;
        }
    }

    return nums[l];
};
