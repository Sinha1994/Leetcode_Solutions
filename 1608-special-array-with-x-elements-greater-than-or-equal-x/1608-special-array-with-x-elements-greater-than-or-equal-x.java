class Solution {
    public int specialArray(int[] nums) {
        Arrays.sort(nums);
        int x=0;
        int n = nums.length;
        int i=0, j=0;
        while(i<=n && j<n){
           if(i<=nums[j] && i==n-j) {
               return i;
           } else if(nums[j]<i){
               j++;
           } else{
               i++;
           }
        }
        // for(int i=1;i<temp.length;i++){
        //     if(temp[i] == 0 && i==nums.length)
        //     return i;
        // }
        return -1;
    }
}