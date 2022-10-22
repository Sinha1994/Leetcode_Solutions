/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let deq = [], res = [];
    for(let i=0;i<k;i++){
        while(deq.length > 0 && nums[i] >= nums[deq[deq.length-1]]){
           deq.pop();
        } 
        deq.push(i);
    }
    for(let i=k;i<nums.length;i++){
        res.push(nums[deq[0]]);
        while(deq.length > 0 && deq[0] <= i-k){
           deq.shift();
        }
       while(deq.length > 0 && nums[i] >= nums[deq[deq.length-1]]){
           deq.pop();
        }
      deq.push(i); 
    }
    res.push(nums[deq[0]]);
    return res;
};