/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) return 0;
    if(nums.length == 1) return 1;
    let map = new Set();
    let count=0, res=0, start=0;
    for(let i=0;i<nums.length;i++) {
        map.add(nums[i]);
    }
    for(let i=0;i<nums.length;i++) {
        if(map.has(nums[i]-1) == false){
            start = nums[i];
            count = 1;
            while(map.has(start+1)){
                ++count;
                ++start;
            }
        } else {
            count = 0;
        }
        res = Math.max(res, count);
    }
    return res;
};