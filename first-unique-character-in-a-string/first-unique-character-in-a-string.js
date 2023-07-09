/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let res = s.length, freq = new Array(26).fill(-1);
    for(let i=0;i<s.length;i++) {
        let idx = s[i].charCodeAt()-97;
        freq[idx] = freq[idx] !== -1 ? -2 : i;
    }
    for(let n of freq) {
        if(n >= 0) res = Math.min(res, n);
    }
    return res !== s.length ? res : -1;
};