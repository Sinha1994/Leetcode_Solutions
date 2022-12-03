/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Count = new Array(26).fill(0), s2Count = new Array(26).fill(0), matches = 0;
    for(let i=0;i<s1.length;i++){
        ++s1Count[s1.charAt(i).charCodeAt(0)%97];
        ++s2Count[s2.charAt(i).charCodeAt(0)%97];
    }
    for(let i=0;i<26;i++){
        if(s1Count[i] === s2Count[i])
        ++matches;
    }
    let l=0;
    for(let r=s1.length;r<s2.length;r++){
        if(matches === 26) return true;
        let idx = s2.charAt(r).charCodeAt(0)%97;
        ++s2Count[idx];
        if(s1Count[idx] === s2Count[idx]) {
             ++matches;       
        } else if(s1Count[idx]+1 === s2Count[idx]){
            --matches;
        }
        idx = s2.charAt(l).charCodeAt(0)%97;
        --s2Count[idx];
        if(s1Count[idx] === s2Count[idx]) {
             ++matches;       
        } else if(s1Count[idx]-1 === s2Count[idx]){
            --matches;
        }
        ++l;
    }
    return matches === 26;
};