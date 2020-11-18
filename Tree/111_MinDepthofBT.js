function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

 //shortest path problem: BFS
var minDepth = function(root) {
    if(!root) return 0;
    //judge if is leaf node
    if(!root.left && !root.right) return 1;

    //[2,null,3,null,4,null,5,null,6]
    //root.left is null but not leaf, skip
    let l = root.left ? minDepth(root.left) : Infinity;
    let r = root.right ? minDepth(root.right) : Infinity;


    return Math.min(l,r)+1;
};

let right2 = new TreeNode(4,null,5)
let right = new TreeNode(3,null,right2)
let tree = new TreeNode(2,null,right)

//console.log(inorderTraversal(tree))
console.log(minDepth(tree))
