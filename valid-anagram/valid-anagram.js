/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let sMap = {}, tMap = {};
    for(let i=0;i<s.length;i++) {
        let cs = s[i], ct = t[i];
        sMap[cs] = sMap[cs] ? sMap[cs]+1 : 1;
        tMap[ct] = tMap[ct] ? tMap[ct]+1 : 1;
    }
    for(let ch of s) {
        if(sMap[ch] !== tMap[ch]) return false;
    }
    return true;
};