/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = "", rev="";
    for(let i=0;i<s.length;i++){
        let ch = s.charCodeAt(i);
        if(ch >= 65 && ch <= 90){ //capital
            str = str + s[i].toLowerCase();
            rev = s[i].toLowerCase() + rev;
        }
        else if((ch >= 97 && ch <= 122) || (ch >= 48 && ch <= 57)){ //small
            str = str + s[i];
            rev = s[i] + rev;
        }
    }
    return str === rev;
};