class Solution {
    public int findSum(int[] a){
        int sum = 0;
        for(int i: a){
            sum += i;
        }
        return sum;
    }
    public int[] fairCandySwap(int[] aliceSizes, int[] bobSizes) {
        int[] ans = new int[2];
        int aSum = findSum(aliceSizes), bSum = findSum(bobSizes);
        int diff = Math.abs(aSum - bSum);
        int div = diff/2;
        int expSum = Math.max(aSum,bSum) - div;
        int i = 0, j = 0;
        Arrays.sort(aliceSizes);
        Arrays.sort(bobSizes);
        while(i < aliceSizes.length && j < bobSizes.length){
            int aCurr = aSum-aliceSizes[i]+bobSizes[j];
            if(aCurr == expSum){
                ans[0] = aliceSizes[i];
                ans[1] = bobSizes[j];
                return ans;
            }
            else if(aCurr > expSum){
                i++;
            } else{
                j++;
            }
        }
        return ans;
    }
}