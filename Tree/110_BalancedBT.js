function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 //solution1 t:o(nlogn)= o(n)+2o(n/2)+4o(n/4)+...
var isBalanced1 = function(root) {
  if(!root) return true;
  return Math.abs(height(root.left) - height(root.right))<=1 &&
  isBalanced(root.left) && isBalanced(root.right)
};

var height = function(root) {
  if(!root) return 0;
  return Math.max(height(root.left),height(root.right))+1;
}


//solution2 t:o(n)
var isBalanced = function(root) {
 if(!root) return true;
 var self = this;
 self.boolean = true;

 const height = function(root) {
  if(!root) return 0;

  const leftHeight = height(root.left);
  const rightHeight = height(root.right);

  if(Math.abs(leftHeight - rightHeight)>1) {
    self.boolean = false;
  }
  return Math.max(leftHeight,rightHeight)+1;
}

 height(root);
 return self.boolean;
};

let right3 = new TreeNode(9,null,null)
let left3 = new TreeNode(8,null,null)
let right2 = new TreeNode(7,null,null)
let left2 = new TreeNode(6,left3,right3)
let right1 = new TreeNode(5,null,null)
let left1 = new TreeNode(4,left2,right2)
let right = new TreeNode(3,null,null)
let left = new TreeNode(2,left1,right1)
let tree = new TreeNode(1,left,right)

console.log(isBalanced(tree))
