
//SOLUTION 1 Boyer-Moore Voting Algorithm
var majorityElement1 = function(nums) {
    let count = 0;
    let majority = nums[0];

    nums.forEach((num) => {
      console.log(num)
      if(count === 0) {
        majority = num;
      }
      count += (num === majority) ? 1:-1;
    });
  return majority;
}

//SOLUTION 2 Divide & Conquer
var majorityElement = function(nums) {
  if(nums.length === 1) return nums[0];

  const length = nums.length;
  const middle = Math.floor(length/2);
  const left = nums.slice(0,middle);
  const right = nums.slice(middle);
  console.log("left",left)
  console.log("right",right)

  let majorityLeft = majorityElement(left);
  let majorityRight = majorityElement(right);

  console.log("majorityLeft",majorityLeft)
  console.log("majorityRight",majorityRight)

  //if left majority === right majority
  if(majorityLeft === majorityRight) return majorityLeft;

  //otherwise, compare count
  let leftCount = countMajority(majorityLeft,left);
  let rightCount = countMajority(majorityRight,right);

  if(leftCount === rightCount) {
    leftCount = countMajority(majorityLeft,right);
    rightCount = countMajority(majorityRight,left);
  }
  return (leftCount>rightCount) ? majorityLeft:majorityRight;
}

var countMajority = (majority,nums) => {
  console.log("count",nums,majority);
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === majority) count++;
  }

  return count;
}

console.log(majorityElement([3,3,4]))
