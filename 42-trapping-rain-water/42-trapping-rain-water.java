class Solution {
    public int trap(int[] height) {
        int left=0, right=height.length-1, total=0;
        int maxL = height[left], maxR = height[right];
        while(left<right) {
            if(maxL <= maxR) {
                ++left;
                maxL = Math.max(maxL, height[left]);
               total += maxL - height[left];
            } else {
                --right;
                 maxR = Math.max(maxR, height[right]); 
                 total += maxR - height[right];
            }
        }
        return total;
    }
}