/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    for(let i=0;i<nums.length;i++) {
        let sub = target-nums[i];
        if(hashMap[`${sub}`] !== undefined){
            return [i, hashMap[`${sub}`]];
        }
        else {
            hashMap[nums[i]] = i;
        }
    }
};