
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers1 = function(root) {
  if(!root) return 0;
  let result = 0;
  let array = [];

  var sumNum = function(root,array) {
    if(!root) return;
    array.push(root.val);

    if(!root.left && !root.right) {
      let l = array.length-1;
      let s = 0;
      for(let i=0;i<array.length;i++){
        s = s + array[i]*(10**l);
        l--;
      }
      result = result + s;
      array.pop();
      return;
    }

    sumNum(root.left,array);
    sumNum(root.right,array);
    array.pop();
  }

  sumNum(root,array);

  return result;
};

//优化
//不需要array来存储，sum和array都可以用Int
var sumNumbers = function(root) {
  if(!root) return 0;
  let result = 0;

  var sumNum = function(root,sum) {
    if(!root) return;
    sum = sum*10 + root.val;

    if(!root.left && !root.right) {
      result = result + sum;
      return;
    }

    sumNum(root.left,sum);
    sumNum(root.right,sum);
  }

  sumNum(root,0);

  return result;
};


let seven = new TreeNode(7,null,null)
let right1 = new TreeNode(5,null,null)
let left1 = new TreeNode(4,null,null)
let right = new TreeNode(3,null,seven)
let left = new TreeNode(2,left1,right1)
let tree = new TreeNode(1,left,right)

console.log(sumNumbers(tree));
