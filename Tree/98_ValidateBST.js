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
var isValidBST = function(root) {
    if(!root) return true;

    return ifBST(root,null,null);
};

function ifBST (currentNode,min,max) {
    if(!currentNode) return true;

    if(min!=null && currentNode.val<=min) return false;
    if(max!=null && currentNode.val>=max) return false;

    return ifBST(currentNode.left,min,currentNode.val) &&
        ifBST(currentNode.right,currentNode.val,max)
};
