function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) return false;
  let restSum = sum - root.val;

  if(!root.left && !root.right) {
    //when restSum === 0 node should be leaf, otherwise continue (sum could be negative1)
    if(restSum === 0) return true;
    else return false;
  }

  return hasPathSum(root.left,restSum) || hasPathSum(root.right,restSum);
};


 let left = new TreeNode(2,null,null)
 let tree = new TreeNode(1,left,null)

 //console.log(inorderTraversal(tree))
 console.log(hasPathSum(tree,1))
