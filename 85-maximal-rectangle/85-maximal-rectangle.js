/**
 * @param {character[][]} matrix
 * @return {number}
 */
const getMaxArea = function(hist, n)
    {
        // code here     
        let res = parseInt(hist[0]);
        let stack = [0];
        for(let i=1;i<n;i++) {
                while(stack.length>0 && parseInt(hist[stack[stack.length-1]]) >= parseInt(hist[i])){
                console.log(stack);
                let top = stack.pop();
                let curr = parseInt(hist[top]) * (stack.length == 0 ? i : i-stack[stack.length-1]-1);
                res = Math.max(res, curr);
            }
            stack.push(i);  
        }
        while(stack.length>0){
            let top = stack.pop();
            let curr = parseInt(hist[top]) * (stack.length == 0 ? n : n-stack[stack.length-1]-1);
            res = Math.max(res, curr);   
        }
        return res;
    }
var maximalRectangle = function(matrix) {
    let res = getMaxArea(matrix[0], matrix[0].length);
    for(let i=1;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
         matrix[i][j] = parseInt(matrix[i][j]) > 0 ? parseInt(matrix[i][j]) + parseInt(matrix[i-1][j]) : parseInt(matrix[i][j]);
       }  
     res = Math.max(res, getMaxArea(matrix[i], matrix[i].length));
    }
    return res;
};