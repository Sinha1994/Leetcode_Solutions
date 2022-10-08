/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [0], res = heights[0], n=heights.length;
    for(let i=1;i<heights.length;i++){
        while(stack.length>0 && heights[stack[stack.length-1]] >= heights[i]){
        let top = stack.pop();
        let curr = heights[top] * (stack.length == 0 ? i : i-stack[stack.length-1]-1);
        res = Math.max(res, curr);
        }
        stack.push(i);
    }
     while(stack.length>0){
        let top = stack.pop();
        let curr = heights[top] * (stack.length == 0 ? n : n-stack[stack.length-1]-1);
        res = Math.max(res, curr);
    }
    return res;
};