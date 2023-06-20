/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let n = nums.length,even = 0, odd = n-1;
    let res = [];
    if(n == 1) return nums;
    for(let i=0;i<n;i++) {
        if(nums[i]%2 == 0) {
            res[even++] = nums[i];
        } else {
            res[odd--] = nums[i];
        }
    }
    return res;
};