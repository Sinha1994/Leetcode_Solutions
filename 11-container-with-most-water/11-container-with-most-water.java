class Solution {
    public int maxArea(int[] height) {
        int left=0,right=height.length-1;
        int res = 0;
        while(left<right) {
            int area = (right-left) * Math.min(height[right], height[left]);
            res = Math.max(area, res);
            if(height[left] < height[right]){
                ++left;
            } else {
                --right;
            }
        }
        return res;
    }
}