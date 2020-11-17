function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//recursion
var inorderTraversal1 = function(root) {
  let result = [];

  var inorder = (root)=> {
    if(!root) return;

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }

  inorder(root);
  return result;
};

//iteration
//if left not null, put in stack;
//if left is null, get node from stack,push node.val into result;
//if node.right is not null, curr=node.right, return to first step, take node.right as a new tree.
var inorderTraversal2 = function(root) {
  if(!root) return [];//cannot return null,will cause error;
  let result = [];
  let stack = [];
  let curr = new TreeNode;
  curr = root;

  while(curr || stack.length != 0) {
    while(curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop()
    result.push(curr.val);
    curr = curr.right;
  }

  return result
}

//Morris Traversal
// Step 1: Initialize current as root
//
// Step 2: While current is not NULL,
//
// If current does not have left child
//
//     a. Add current’s value
//
//     b. Go to the right, i.e., current = current.right
//
// Else
//
//     a. In current's left subtree, make current the right child of the rightmost node
//
//     b. Go to this left child, i.e., current = current.left

var inorderTraversal = function(root) {
  let curr = new TreeNode;
  curr = root;
  let result = [];

  while(curr) {
    if(!curr.left) {//does not have left child
      result.push(curr.val); //push curr.val
      curr = curr.right; //move to right node
    }else {//has a left subtree
      //find the rightmost node
      let pre = new TreeNode;
      pre = curr.left;
      while(pre.right!=null) {
        pre = pre.right;
      }
      pre.right = curr;//put curr as the right child of the rightmost node
      curr = curr.left;
      pre.right.left = null;
    }
  }
  return result;
}

let left = new TreeNode(2,null,null)
let right = new TreeNode(3,null,null)
let tree = new TreeNode(1,left,right)

//console.log(inorderTraversal(tree))
console.log(inorderTraversal(tree))
