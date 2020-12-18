/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
   let length = numbers.length;
   let l = 0, r = length-1;

   while(numbers[l] + numbers[r] != target) {
     //console.log(numbers[right])
     if(numbers[l]+numbers[r] < target) {
       l++;
     }else{
       r--;
     }
   }
   return [l+1,r+1];
 };

 twoSum([2,7,11,15],9);
