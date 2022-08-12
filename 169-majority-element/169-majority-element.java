class Solution {
    public int majorityElement(int[] nums) {
        int count = 1, item=nums[0];
        for(int i=1;i<nums.length;i++){
            if(item == nums[i]){
                count++;
            } else {
                if(count == 0) {
                 item = nums[i]; 
                } else {
                  count--;
                }
            }
        }
        count = 0;
        for(int i=0;i<nums.length;i++){
            if(item == nums[i]){
                count++;
                if(count > nums.length/2)
                return item;
            }
        }
        return -1;
    }
}