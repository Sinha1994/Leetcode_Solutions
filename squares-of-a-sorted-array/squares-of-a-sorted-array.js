/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  nums = nums.map(n => n*n);
  nums.sort((a,b) => a-b);
  return nums;
};