/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let ans = "";
     for(let i=0;i<s.length;i++){      
        let l=i,r=i;
        while(l>=0 && r<s.length && s[l] === s[r]){
           if(r-l+1 > ans.length){
               ans = s.slice(l, r+1);
           }
          --l; ++r;
        }
        l=i,r=i+1;
        while(l>=0 && r<s.length && s[l] === s[r]){
           if(r-l+1 > ans.length){
               ans = s.slice(l, r+1);
           }
          --l; ++r;
        }
     }
    return ans;
};