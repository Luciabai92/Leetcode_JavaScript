function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//recursive t:O(n) S:O(logn)(best:balanced tree)/O(N)(worst:unbalanced tree)
var isSameTree = function(p, q) {
  console.log(p,q);
  if(!p&&!q) return true;
  if(!p || !q) return false;
  if(p.val === q.val) {
    return isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);
  } else {
    return false;
  }
};

let right = new TreeNode(3,null,null)
let left = new TreeNode(2,null,null)
let tree1 = new TreeNode(1,left,right)

let right2 = new TreeNode(3,null,null)
let left2 = new TreeNode(2,null,null)
let tree2 = new TreeNode(1,left,right)

//console.log(inorderTraversal(tree))
console.log(isSameTree(tree1,tree2))
