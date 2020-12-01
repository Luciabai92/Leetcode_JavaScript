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
 * @param {number} k
 * @return {number}

//recursion t:o(n)
 //hint: BST inorder -> sorted
var kthSmallest1 = function(root, k) {
  let array = [];

  const inorderBST = function(root) {
    if(!root) return;

    inorderBST(root.left);
    array.push(root.val);
    inorderBST(root.right);
  }

  inorderBST(root);
  return array[k-1];
};

//iteration t:o(h)
var kthSmallest = function(root, k) {
  let stack = [];
  while(k>=0){
    while(root){
      stack.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    if(--k===0) return value;
    root = root.right;
  }
}
