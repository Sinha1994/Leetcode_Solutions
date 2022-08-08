class Solution {
    public List<Integer> targetIndices(int[] nums, int target) {
        int less = 0, count = 0;
        List<Integer> ans = new ArrayList<Integer>();
        for(int i=0;i<nums.length;i++){
            if(nums[i] < target) less++;
            if(nums[i] == target) count++;
        }
        while(count > 0){
            ans.add(less++);
            --count;
        }
        return ans;
    }
}