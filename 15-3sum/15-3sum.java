class Solution {
    public List<List<Integer>> twoSum(int[] nums, int start, int end, int target){
        List<List<Integer>> pair = new ArrayList<>();
        while(start<end) {
            int sum = nums[start]+nums[end];
            if(sum == target){
                List<Integer> match = new ArrayList<>();
                match.add(nums[start]);
                match.add(nums[end]);
                pair.add(match);
                ++start;
                while(nums[start] == nums[start-1] && start<end){
                    ++start;
                }
            } else if(sum>target){
                --end;
            } else {
                ++start;
            }
        }
        return pair;
    }
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        for(int i=0;i<nums.length-2;i++) {
            if(i==0 || nums[i] != nums[i-1]) {
             int target = 0 - nums[i];
            List<List<Integer>> pair = twoSum(nums, i+1, nums.length-1, target);
            if(pair.size() > 0) {
                for(List<Integer> item: pair){
                  List<Integer> match = new ArrayList<>();
                  match.add(nums[i]);
                  match.addAll(item);
                  res.add(match);
                }
            } 
            }
        }
        // Arrays.sort(nums);
        // List<List<Integer>> res = new ArrayList<List<Integer>>();
        // if(nums[0] == 0 && nums[nums.length-1] == 0) {
        //     res.add(Arrays.asList(0,0,0));
        //     return res;
        // }
        // if(nums[0] > 0) {
        //     return res;
        // }
        // for(int i=0;i<nums.length-2;i++) {
        //  if(i == 0 || (nums[i] != nums[i-1])) {
        //     int j=i+1,k=nums.length-1;
        //     int sum = 0-nums[i];
        //     while(j<k) {
        //         if(sum == nums[j] + nums[k]) {
        //             res.add(Arrays.asList(nums[i],nums[j],nums[k])); 
        //             while(j<k && nums[j] == nums[j+1]) j++;
        //             while(j<k && nums[k] == nums[k-1]) k--;
        //             j++;
        //             k--;
        //         } else if(nums[j] + nums[k] < sum) {
        //             j++;
        //         } else {
        //             k--;
        //         }
        //     }
        //  }
        // }
        return res;
    }
}