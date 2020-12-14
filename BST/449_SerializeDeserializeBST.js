/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if(!root) return '';
  let result = [];

  var helper = (root) => {
    if(!root) return;
    result.push(root.val);
    helper(root.left);
    helper(root.right);
  }

  helper(root);
  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data === '') return null;
  let preorder = data.split(',');

  let helper = (lower,upper) => {
    if(preorder.length === 0) return null;
    if(Number(preorder[0]) < lower || Number(preorder[0]) > upper) return null;
    let root = new TreeNode(preorder.shift());
    root.left = helper(lower,root.val);
    root.right = helper(root.val,upper);
    return root;
  }

  return helper(-Infinity,Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
