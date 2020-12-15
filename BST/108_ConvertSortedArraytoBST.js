/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
   if(nums.length === 0) return null;


  let mid = Math.floor(nums.length/2);
  let root = new TreeNode(nums[mid]);
  let leftNums = nums.slice(0,mid);
  let rightNums = nums.slice(mid+1,nums.length);

  root.left = helper(leftNums);
  root.right = helper(rightNums);


   return sortedArrayToBST(numss);
 };


//improvement nums.length/2 => Low + (High-Low)/2
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null;

  let helper = (nums,start,end) => {
    if(start > end) return null;
    let mid = Math.floor(start + (end-start)/2);
    let root = new TreeNode(nums[mid]);
    root.left = helper(nums,start,mid-1);
    root.right = helper(nums,mid+1,end);
    return root;
  }

  return helper(nums,0,nums.length-1);
}
