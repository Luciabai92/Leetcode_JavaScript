// Definition for a Node.
function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * @param {Node} root
 * @return {Node}
 */
//recursion
var connectR = function(root) {
  if(!root) return null;
  if(!root.left && !root.right) return root;
  let pass = null;
  let curr = null;
  if(root.next) pass = root.next;

  if(root.left){
    curr = root.left;
    if(root.right) {
      curr.next = root.right;
      curr = curr.next;
    }
  }else if (root.right) {
    curr = root.right;
  }

  while(pass) {
    if(pass.left){
      curr.next = pass.left;
      curr = curr.next;
      pass = null;
    }else if (pass.right){
      curr.next = pass.right;
      curr = curr.next;
      pass = null;
    }else if(!pass.left && !pass.right){
      pass = pass.next;
    }
  }

  connect(root.right);
  connect(root.left);
  return root;
};

//iteration
var connect = function(root) {
  if(!root) return null;
  let head = null;
  let pass = null;
  let curr = null;
  curr = root;
  while(curr){
    while(curr){
      if(curr.left) {
        if(!head){
          head = curr.left;
          prev = curr.left;
        }else{
          prev.next = curr.left;
          prev = prev.next;
        }
      }
      if (curr.right) {
        if(!head){
          head = curr.right;
          prev = curr.right;
        }else{
          prev.next = curr.right;
          prev = prev.next;
        }
      }
      curr = curr.next;
    }
    curr = head;
    pass = null;
    head = null;
  }
  return root;
}
let seven = new Node(7,null,null,null)
let right1 = new Node(5,null,null,null)
let left1 = new Node(4,null,null,null)
let right = new Node(3,null,seven,null)
let left = new Node(2,left1,right1,null)
let tree = new Node(1,left,right,null)

console.log(connect(tree));
