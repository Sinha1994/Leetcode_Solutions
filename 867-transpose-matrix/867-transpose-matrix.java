class Solution {
    public int[][] transpose(int[][] matrix) {
        int row = matrix.length, col = matrix[0].length;
        int[][] res = new int[col][row];
        int y=0,z=0;
            for(int j=0;j<col;j++) {
                for(int i=0;i<row;i++) {
                 System.out.println("y z " + y + " " + z); 
                 if(z == row ){
                     ++y;z=0;
                 } 
                 res[y][z++] = matrix[i][j];
            }
         }  
        return res;
    }
}