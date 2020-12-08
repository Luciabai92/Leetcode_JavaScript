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
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST1 = function(root, val) {
    if(!root) return [];
    let stack = [];
    stack.push(root);

    while(stack.length!=0){
        let curr = stack.pop();
       if(curr.val === val) return curr;
        if(curr.left) stack.push(curr.left);
        if(curr.right) stack.push(curr.right);
    }
    return null;
};

//利用BST 特性
// Binary Search Tree is a binary tree where the key in each node
// is greater than any key stored in the left sub-tree,
// and less than any key stored in the right sub-tree.
//recursion
var searchBST = function(root, val) {
    if(!root) return root;
    if(root.val === val) return root;
    return val > root.val ? searchBST(root.right,val) : searchBST(root.left,val);
}

//iteration
var searchBST = function(root, val) {
    if(!root) return root;
    while(root){
      if(root.val === val) {
        
      }
    }

}
