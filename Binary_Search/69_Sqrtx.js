//
// var mySqrt = function(x) {
//   if(x === 0) return 0;
//
//   let low=0, high = x;
//
//   while(low < high) {
//     let mid = Math.floor((low+high)/2);
//     let square = mid * mid;
//
//     if(square === x) return mid;
//
//     if(square > x) {
//       high = mid-1;
//     }else {
//       low = low+1;
//     }
//   }
//   return (high*high > x) ? high-1:high;
// };

var mySqrt = function(x) {
  let l = 0, r = x+1;
  while(l<r) {
    let m = l+Math.floor((r-l)/2);
    //(m*m === x) return m;
    if(m*m > x) {
      r = m;
    } else {
      l = m+1
    }
    console.log("l:",l,"r:",r,"m",m);
  }
  return l-1;
}
console.log(mySqrt(8))
