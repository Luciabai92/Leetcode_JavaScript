/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
//iteration
var levelOrder = function(root) {
  if(!root) return [];
  let result = [];
  let level = [];
  let queue = [];

  queue.push(root);

  while(queue.length != 0) {
    let l = queue.length;

    for(let i=0; i<l; i++){
      let curr = queue.shift();
      level.push(curr.val);
      for(let j=0; j<curr.children.length; j++) {
        queue.push(curr.children[j]);
      }
    }
    result.push(level);
    level = [];
  }
  return result;
};

//simplified iteration： using two array/list to store prev and curr
var levelOrder = function(root) {
  if(!root) return [];
  let result = [];
  let prevLevel = [];
  prevLevel.push(root);

  while(prevLevel.length != 0) {
    let currLevel = [];
    let level = [];

    for (let i = 0; i < prevLevel.length; i++) {
      let node = prevLevel[i];
      level.push(node.val);
      for(let j=0; j<node.children.length; j++) {
        currLevel.push(node.children[j]);
      }
    }
    result.push(level);
    prevLevel = currLevel;
  }
  return result;
};

//recursion
var levelOrder = function(root) {
  if(!root) return [];
  let result = [];

  var helper  = (root,level) => {
    if(!root) return;
    if(level === result.length) {
      result.push([]);
    }
    result[level].push(root.val);
    for(child of root.children) {
      helper(child,level+1);
    }
  }
  helper(root,0);
  return result;
}
