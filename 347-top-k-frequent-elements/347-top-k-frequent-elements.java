class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] res = new int[k];
        for(int i=0;i<nums.length;i++) {
            map.put(nums[i], map.getOrDefault(nums[i], 0)+1);
        }
        ArrayList<Map.Entry<Integer, Integer>> arr = 
            new ArrayList<Map.Entry<Integer, Integer>>(map.entrySet());
        Collections.sort(arr, new Comparator<Map.Entry<Integer, Integer>>(){
            public int compare(Map.Entry<Integer, Integer> o1, Map.Entry<Integer, Integer> o2){
                if(o1.getValue() == o2.getValue()){
                    return o1.getKey() - o2.getKey();
                } else {
                    return o1.getValue() - o2.getValue();
                }
            }
        });
        for(int i=0,j=arr.size()-1;i<k;i++){
            res[i] = arr.get(j--).getKey();
        }
        return res;
    }
}