/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let prev = new Array(128).fill(-1);
    if(s.length == 0) return 0;
    if(s.length == 1) return 1;
    let maxLength = 0, i=0;
    for(let j=0;j<s.length;j++){
        let idx = s[j].charCodeAt(0);
        i = Math.max(i, prev[idx]+1);
        let currLen = j-i+1;
        maxLength = Math.max(currLen, maxLength);
        prev[idx] = j;
    }
    return maxLength;
};