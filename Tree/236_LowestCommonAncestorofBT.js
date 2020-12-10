/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
//recursion1
var lowestCommonAncestor = function(root, p, q) {
  let pStack = [];
  let qStack = [];

  const helper = (root,array,p,q) => {
    if(!root) return;
    array.push(root);

    if(root.val === p.val) {
      pStack = pStack.concat(array);
    }
    if(root.val === q.val) {
      qStack = qStack.concat(array);
    }

    if(!root.left && !root.right) {
      array.pop();
      return;
    }

    //if(pStack.length != 0 && qStack.length !=0) return;
    helper(root.left,array,p,q);
    helper(root.right,array,p,q);
    array.pop();
  }
  helper(root,[],p,q);

  let l = Math.min(pStack.length,qStack.length);
  for(let i = 0; i < l; i++){
    if(pStack[i]==qStack[i]){
      let result = pStack[i];
    }
  }
  return result;
};

//recursion2
var lowestCommonAncestor = function(root, p, q) {
  if(!root||root === p || root === q) return root;

  let left = lowestCommonAncestor(root.left,p,q);
  let right = lowestCommonAncestor(root.right,p,q);
  //left!=null: p or q in left subtree
  //right!=null: p or q in right subtree
  if(left && right) {
    //p/q in seperate subtree
    return root;
  }else if(!left && right) {
    //p,q both in right
    return right;
  }else if (left && !right) {
    //p,q both in left
    return left;
  }else{
    //not found
    return null;
  }
}

//iteration preorder travelse
var lowestCommonAncestor = function(root, p, q) {
  let parent = new Map();
  let stack = [];
    let ancestors = new Set();
  parent.set(root,null);
  stack.push(root);

  while(!parent.has(p) || !parent.has(q)) {
    let node = stack.pop();
    if(node.left) {
      parent.set(node.left,node);
      stack.push(node.left);
    }
    if(node.right) {
      parent.set(node.right,node);
      stack.push(node.right);
    }
  }

  while(p) {
    ancestors.add(p);
    p = parent.get(p);
  }

  while (!ancestors.has(q))
    q = parent.get(q);
  return q;
}
