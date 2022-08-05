class Solution {

    public int countNegatives(int[][] grid) {
        int res = 0, r= 0, c = grid[0].length-1;
        while(r < grid.length && c >= 0){
            if(grid[r][c] < 0){
                res += grid.length - r;
                c--;
            } else {
                r++;
            }
        }
        return res;
    }
}