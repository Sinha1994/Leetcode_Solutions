/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=1;
    for(let i=1;i<nums.length;i++){
        while(nums[i] == nums[i-1]){
            ++i;
        }
        if(i < nums.length)
        nums[k++] = nums[i];
    }
    return k;
};