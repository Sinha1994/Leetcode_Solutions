class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int index1=0,index2=0;
        int[] ans = new int[2];
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i=0;i<numbers.length;i++){
            int diff = target-numbers[i];
            if(map.containsKey(diff)){
                index1 = map.get(diff)+1;
                index2 = i+1;
                break;
            } else {
                map.put(numbers[i], i);
            }
        }
        ans[0] = index1;
        ans[1] = index2;
        return ans;
    }
}