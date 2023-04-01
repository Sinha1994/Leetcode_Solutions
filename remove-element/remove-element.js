/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = -1;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] !== val){
            ++k;
            [nums[k], nums[i]] = [nums[i], nums[k]];
        }
    }
    return k+1;
};