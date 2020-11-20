function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if(!root) return [];
  let queue = [];
  let result = [];
  let curr = new TreeNode;
  queue.push(root);

  while(queue.length!=0) {
    let res = [];
    let count = queue.length;
    for(let i=0; i<count; i++) {
      curr = queue.shift();
      res.push(curr.val);
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
    }
    result.unshift(res);
  }
  return result;
};

let right1 = new TreeNode(7,null,null)
let left1 = new TreeNode(15,null,null)
let left = new TreeNode(9,left1,right1)
let right = new TreeNode(20,null,null)
let tree = new TreeNode(3,left,right)

console.log(levelOrderBottom(tree))
