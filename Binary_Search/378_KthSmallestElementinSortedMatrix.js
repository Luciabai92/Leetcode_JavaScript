/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 //[l,r]
var kthSmallest = function(matrix,k) {
  const length = matrix.length;
  let l = matrix[0][0], r = matrix[length-1][length-1]+1;

  while(l<r) {
    let m = l + Math.floor((r-l)/2);
    //number of element less than m (x<=m)
    let number = count(matrix,m);

    if(number>=k) {
      r = m;
    }else {
      l = m+1;
    }
  }
  return l;
};

var count = function (matrix,m){
  let number =0;
  matrix.forEach((row) => {
    for(let i=0; i<row.length; i++){
      number += row[i] <= m ? 1:0;
    }
  })
  return number;
}

const matrix = [[1,5,9],[10,11,13],[12,13,15]];
console.log(kthSmallest(matrix,8))
