function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

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
 * @return {boolean}
 */
//recursion t:O(n) s:o(h)
var isSymmetric = function(root) {
  return ifSymmetric(root,root);
};

var ifSymmetric = (root1,root2) => {
  if(!root1 && !root2) return true;
  if(!root1 || !root2) return false;
  console.log(root1.val)
  console.log(root2.val)

  if(root1.val != root2.val){
    return false;
  }else{
    return ifSymmetric(root1.left,root2.right) && ifSymmetric(root1.right,root2.left);
  }
}

let left1 = new TreeNode(3,null,null)
let right1 = new TreeNode(4,null,null)
let left2 = new TreeNode(3,null,null)
let right2 = new TreeNode(4,null,null)
let left = new TreeNode(2,left1,right1)
let right = new TreeNode(2,left2,right2)
let tree = new TreeNode(1,left,right)

//console.log(inorderTraversal(tree))
console.log(isSymmetric(tree))
