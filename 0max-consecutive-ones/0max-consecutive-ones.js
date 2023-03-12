/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let res = 0, curr = 0;
    for(let n of nums){
        if(n == 1){
             ++curr;
        } else {
            curr = 0;
        }
       res = Math.max(curr, res);
    }
    return res;
};