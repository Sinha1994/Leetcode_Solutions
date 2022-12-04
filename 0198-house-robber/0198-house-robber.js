/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
      let n = nums.length;
      if(n == 0) return 0;
      if(n == 1) return nums[0];
      let dp = [];
      dp[0] = nums[0];  dp[1] = Math.max(nums[1], nums[0]);
      for(let i=2;i<n;i++){
         dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);    
      }
      return Math.max(dp[n-1], dp[n-2]);
};