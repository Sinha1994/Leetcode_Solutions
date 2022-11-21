/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getSubSet =  function(nums, i, sub, res) {
    if(i == nums.length){
        res.push(sub);
        return;
    }
    getSubSet(nums, i+1, [...sub], res);
    getSubSet(nums, i+1, [...sub, nums[i]], res);
}
var subsets = function(nums) {
    let res = [];
    getSubSet(nums, 0, [], res);
    return res;
};