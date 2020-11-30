function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var PathSum = function(root, sum) {
  let path = [];
  let array = [];

  var findPath = (root,sum,array,path) => {
    if(!root) return;
    array.push(root.val);

    let restSum = sum - root.val;

    if(!root.left && !root.right) {
      if(restSum == 0){
        path.push(array.slice());
      }
      array.pop();//pop leaf
      return;
    }
    findPath(root.left,restSum,array,path);
    findPath(root.right,restSum,array,path);
    array.pop();//left.right 都遍历完后，pop root,回到上一层节点
  }

  findPath(root,sum,array,path);
  return path;
};

let right2 = new TreeNode(4,null,null)
let left3 = new TreeNode(7,null,null)
let right3 = new TreeNode(2,null,null)
let left1 = new TreeNode(11,left3,right3)
let left4 = new TreeNode(13,null,null)
let right = new TreeNode(8,left4,right2)
let left = new TreeNode(4,left1,null)
let tree = new TreeNode(5,left,right)

 //console.log(inorderTraversal(tree))
 console.log(PathSum(tree,22))
