/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0], curr = nums[0];
    for(let i=1;i<nums.length;i++) {
        curr = Math.max(curr+nums[i], nums[i]);
        res = Math.max(res, curr);
    }
    return res;
};