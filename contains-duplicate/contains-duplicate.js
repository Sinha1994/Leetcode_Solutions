/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for(let n of nums) {
        if(map[n]) return true;
        map[n] = true;
    }
    return false;
};