function spiralOrder(matrix: number[][]): number[] {
        let res: number[] = [];
        let top=0,bottom=matrix.length-1,left=0,right=matrix[0].length-1,idx=0;
        while(top<=bottom && left<=right) {
            //top row
            for(let i=left;i<=right;i++) {
                res.push(matrix[top][i]);
            }
            ++top;
            //right col
            for(let i=top;i<=bottom;i++){
                res.push(matrix[i][right]);
            }
            --right;
            if(top<=bottom) {
               //bottom row
              for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i]);
               }  
               --bottom;
            }
            if(left<=right) {
               //left col
              for(let i=bottom;i>=top;i--){
                res.push(matrix[i][left]);
              }
            ++left;  
            }
        }
        return res;
};