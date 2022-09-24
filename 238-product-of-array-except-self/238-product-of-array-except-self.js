/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = [];
    answer[0] = nums[0];
    for(let i=1;i<nums.length;i++) {
        answer[i] = nums[i]*answer[i-1];
    }
    let postfix = nums[nums.length-1];
    answer[answer.length-1] = answer[answer.length-2];
    for(let i=answer.length-2;i>0;i--){
        answer[i] = postfix*answer[i-1];
        postfix *= nums[i];
    }
    answer[0] = postfix;
    return answer;
};