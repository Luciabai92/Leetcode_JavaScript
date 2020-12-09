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
 * @return {string[]}
 */
//recursion
var binaryTreePaths = function(root) {
  if(!root) return [];
  this.paths = [];

  const findPath = (root,path) => {
    if(!root) return;
    path += root.val.toString();

    if(!root.left && !root.right) {
      this.paths.push(path);
    }else{
      path += "->";
      findPath(root.left,path);
      findPath(root.right,path);
    }
  }

  findPath(root,"");
};

//iteration
var binaryTreePaths = function(root) {
  if(!root) return [];
  let paths = [];
  let path = "";

  let nodeStack = [];
  nodeStack.push(root);
  let pathStack = [];
  pathStack.push(root.val.toString());

  while(nodeStack.length != 0) {
    let curr = nodeStack.pop();
    path = pathStack.pop();

    if(!curr.left && !curr.right){
      paths.push(path);
      path = "";
    }else{
      path += "->";
      if(curr.left) {
        pathStack.push(path+curr.left.val.toString());
        nodeStack.push(curr.left);
      }
      if(curr.right) {
        pathStack.push(path+curr.right.val.toString());
        nodeStack.push(curr.right);
      }
    }
  }
  return paths;
}
