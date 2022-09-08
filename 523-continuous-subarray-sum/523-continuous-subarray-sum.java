class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        boolean res = false;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        map.put(0,-1);
        int prefix_sum=0;
        for(int i=0;i<nums.length;i++){
            prefix_sum += nums[i];
            int rem = k!=0 ? prefix_sum%k : prefix_sum;
            if(map.containsKey(rem) && i-map.get(rem) > 1){
                res = true;
                break;
            } else {
                map.putIfAbsent(rem, i);
            }
        }                                                                                                return res;                                                                                                                                  
    }
}