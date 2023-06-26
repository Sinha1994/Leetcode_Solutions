function sortedSquares(nums: number[]): number[] {
  let i = nums.length-1, l = 0, r = nums.length-1, res = [];
  while(l<=r) {
      let leftP = Math.pow(nums[l], 2), rightP = Math.pow(nums[r], 2);
      if(leftP >= rightP) {
          res[i--] = leftP;
          ++l;
      } else {
          res[i--] = rightP;
          --r;
      }
  }
    return res;
};