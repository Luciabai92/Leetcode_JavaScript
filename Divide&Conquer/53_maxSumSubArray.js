var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }

  // Split Array in into right and left
    const length = nums.length;
    const middle = Math.floor(length/2);
    const left = nums.slice(0,middle);
    const right = nums.slice(middle);

    console.log("left:",left)
    console.log("right:",right)
    let lss = maxSubArray(left)
    let rss = maxSubArray(right)
    let css = maxCrossingArray(left,right)
    console.log("lss:",lss)
    console.log("rss:",rss)
    console.log("css:",css)
    console.log("max(lss,rss,css):",Math.max(lss,rss,css))
    return Math.max(lss,rss,css)
}


var maxCrossingArray = function (left,right) {
  console.log("mid left:",left)
  console.log("mid right:",right)
    const leftLength = left.length
    const rightLength = right.length
    let sumLeft = left[leftLength-1],
        leftMax = sumLeft,
        sumRight = right[0],
        rightMax = sumRight;

    for (let i = leftLength-2; i>=0; i--){
       sumLeft += left[i];
        leftMax = Math.max(sumLeft,leftMax);
    }

    for (let j=1; j<rightLength; j++) {
        sumRight += right[j];
        rightMax = Math.max(sumRight,rightMax);
    }
    console.log(leftMax+rightMax)
    return leftMax+rightMax;
}


var array = [-1,-1,-2,-2]
console.log(maxSubArray(array))
