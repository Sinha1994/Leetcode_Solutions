class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int a=0,b=0,c=0,sum=Integer.MAX_VALUE;
        Arrays.sort(nums);
        for(int i=0;i<nums.length-2;i++) {
            int j=i+1,k=nums.length-1;
            while(j<k) {
                int curr = nums[i]+nums[j]+nums[k];
                if(curr == target) {
                  return curr;
                }
                int diff = Math.abs(target - curr);
                if(diff < sum){
                    a=nums[i];
                    b=nums[j];
                    c=nums[k];
                    sum = diff;
                } else if(curr > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }
        return a+b+c;
    }
}