/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let countMap = {}, l=0, res=0, mostFreq=0;
    for(let r=0;r<s.length;r++) {
        countMap[s.charAt(r)] = countMap[s.charAt(r)] ? countMap[s.charAt(r)]+1 : 1;
        mostFreq = Math.max(mostFreq, countMap[s.charAt(r)]);
        while((r-l+1) - mostFreq > k){
            countMap[s.charAt(l)] -= 1;
            l++;
        }
        res = Math.max(res, r-l+1);
    }
return res;
};