/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0, j = -1;
   while (i < nums.length) {
      if (nums[i] !== 0) {
       ++j;
       const temp = nums[j];
       nums[j] = nums[i];
       nums[i] = temp;
    }
  ++i;
  }
};