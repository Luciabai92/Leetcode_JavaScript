/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//recursion
// function helper(node, the parent is robbed or not?) {
//     // return the maximum by starting from this node
//     tackle basic case...
//
//     if the parent is robbed:
//         we can not rob this node.
//         return helper(node.left, False) + helper(node.right, False)
//
//     if the parent is not robbed:
//         two choices: rob this node or not?
//         calculate `rob` and `not_rob`...
//         return max(rob, not_rob)
// }
//recursion
var rob = function(root) {
  let result = [];
  var helper = (root) =>{
      let r = [];
    //return [rob this node, not rod this node]
    if(!root) {
      return [0,0];
    }
    let left = helper(root.left);
    let right = helper(root.right);

    //if we rob this node, we cannot rob its children
    let rob = root.val + left[1] + right[1];
    //else,we are free to choose rob its children or not
    let notRob = Math.max(left[0],left[1]) + Math.max(right[0],right[1]);

    return [rob,notRob];
  }
  result = helper(root);
  return Math.max(result[0],result[1]);
 };

 //recursion + memorization
 //The result of this helper function would be saved in the maps, and return from the maps when are called next time.
 var rob = function(root) {
   let robResult = new Map();
   let notRobResult = new Map();

   var helper = (root,parentRobbed) =>{
     //return [rob this node, not rod this node]
     if(!root) {
       return 0;
     }
     if(parentRobbed){
       if(robResult.has(root)){
        return robResult.get(root);
       }else{
        let result = helper(root.left,false)+helper(root.right,false);
        robResult.set(root,result);
        return result;
       }
     }else{
       if(notRobResult.has(root)){
        return notRobResult.get(root);
       }else{
        let rob = root.val + helper(root.left,true)+helper(root.right,true);
        let notRob = helper(root.left,false)+helper(root.right,false)
        let result = Math.max(rob,notRob);
        notRobResult.set(root,result);
        return result;
       }
     }
   }
   return helper(root,false);
 }
