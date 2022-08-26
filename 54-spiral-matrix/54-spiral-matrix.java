class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        int top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1;
        while(top<=bottom && left<=right) {
            //top row
            for(int i=left;i<=right;i++) {
                res.add(matrix[top][i]);
            }
            ++top;
            //right col
            for(int i=top;i<=bottom;i++){
                res.add(matrix[i][right]);
            }
            --right;
            if(top<=bottom) {
               //bottom row
              for(int i=right;i>=left;i--){
                res.add(matrix[bottom][i]);
               }  
               --bottom;
            }
            if(left<=right) {
               //left col
              for(int i=bottom;i>=top;i--){
                res.add(matrix[i][left]);
              }
            ++left;  
            }
        }
        return res;
    }
}