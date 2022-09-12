class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int index1=0,index2=0;
        int[] ans = new int[2];
        int i=0,j=numbers.length-1;
        while(i<j){
            int sum = numbers[i]+numbers[j];
            if(sum == target){
                index1 = i+1;
                index2 = j+1;
                break;
            } else if(sum>target){
               --j;
            } else {
                ++i;
            }
        }
        ans[0] = index1;
        ans[1] = index2;
        return ans;
    }
}