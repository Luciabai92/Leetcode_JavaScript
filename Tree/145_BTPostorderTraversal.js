function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
 }

 /**
  * @param {TreeNode} root
  * @return {number[]}
  */
  var postorderTraversal = function(root) {
   if(!root) return [];
   let result = [];

   var postorder = function(root) {
     if(!root) return;
     postorder(root.left);
     postorder(root.right);
     result.push(root.val);
   }
   postorder(root);
   return result;
  };


 let seven = new TreeNode(7,null,null)
 let right1 = new TreeNode(5,null,null)
 let left1 = new TreeNode(4,null,null)
 let right = new TreeNode(3,null,seven)
 let left = new TreeNode(2,left1,right1)
 let tree = new TreeNode(1,left,right)

 console.log(preorderTraversal(tree));
