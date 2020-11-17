function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
//recursion
var maxDepth1 = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};

//iteration
var maxDepth = function(root) {
  let queue = [];
  let depth = 0;
  let curr = new TreeNode;

  if(!root) return 0;
  queue.push(root);


  while(queue.length != 0) {
    let count = queue.length
    while(count!=0) {
      curr = queue.shift();
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
      count--;
    }
    depth++;
  }
  return depth;
};


let left = new TreeNode(9,null,null)
let right = new TreeNode(20,15,7)
let tree = new TreeNode(3,left,right)

//console.log(inorderTraversal(tree))
console.log(maxDepth(tree))
