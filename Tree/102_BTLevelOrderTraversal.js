function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 //BFS t:O(n) s:O(n) 虽然有使用额外空间，但都小于O(n)
var levelOrder = function(root) {
  if(root===[]) return null;
  let queue = [];
  let result = [];
  queue.push(root);

  while(queue.length!=0) {
    let curr = new TreeNode;
    let count = queue.length;
    let res = [];
    for(let i=0; i<count;i++){
      curr = queue.shift();
      res.push(curr.val);
      if(curr.left) queue.push(curr.left);
      if(curr.right) queue.push(curr.right);
    }
    result.push(res);
  }
  return result;
};

let left = new TreeNode(9,null,null)
let right = new TreeNode(20,15,7)
let tree = new TreeNode(3,left,right)

//console.log(inorderTraversal(tree))
console.log(levelOrder(tree))
