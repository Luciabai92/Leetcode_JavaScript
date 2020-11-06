/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function(matrix, target) {
  if(matrix.length === 0) return false;

  const m = matrix.length, n = matrix[0].length;

  //locate row index of target
  let l = 0, r = m-1;
  while(l<=r) {
    let middle = l +Math.floor((r-l)/2);
    if(matrix[middle][0] === target) return true;
    if(matrix[middle][0]>target) {
      r = middle-1;
    }else{
      l = middle+1;
    }
  }

  if(l===0) return false;
  const row = l-1;

  //locate col of target
  l = 0; r = n-1;
  while(l<=r) {
    let middle = l +Math.floor((r-l)/2);
    if(matrix[row][middle] === target) return true;
    if(matrix[row][middle]>target) {
      r = middle-1;
    }else{
      l = middle+1;
    }
  }
  return false;
};

//solution 2: take as sorted array
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false;

  const m = matrix.length, n = matrix[0].length;
  let l = 0, r = m*n-1;

  while(l<=r) {
    let middle = l + Math.floor((r-l)/2);
    let row = Math.floor(middle/n);
    let col = middle%n;
    console.log(l,r,middle,"[",row,col,"]")
    if(matrix[row][col] === target) return true;
    if(matrix[row][col] > target) {
      r = middle-1;
    }else{
      l = middle+1;
    }
  }
  return false;
}

console.log(searchMatrix([[1]],0));

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],3));
