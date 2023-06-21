/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = Array.from(heights), count = 0;
    expected.sort((a,b) => a-b);
    for(let i=0;i<heights.length;i++) {
        if(heights[i] !== expected[i]) ++count;
    }
    return count;
};