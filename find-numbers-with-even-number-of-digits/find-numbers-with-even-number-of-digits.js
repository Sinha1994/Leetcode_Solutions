/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let total = 0;
    for(let n of nums) {
        let count = 0;
        while(n) {
            n = parseInt(n/10);
            ++count;
        }
        if(count%2 == 0) ++total;
    }
    return total;
};