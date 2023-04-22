//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let S = readLine().trim();
    let obj = new Solution();
    let res = obj.longestPalinSubseq(S);
    console.log(res);
  }

}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {number} 
*/

class Solution {
 lps(s, l, r, dp) {
  if(l > r || r < l) return 0;
  let key = `${l},${r}`;
  if(key in dp) return dp[key];
  if(l == r) return dp[key] = 1;
  else if(s[l] == s[r]) {
     return dp[key] = 2+this.lps(s, l+1, r-1, dp);
   } else {
     return dp[key] = Math.max(this.lps(s, l+1, r, dp), this.lps(s, l, r-1, dp));
   }
}
  longestPalinSubseq(s){
    //code here
      let dp = {};
      return this.lps(s, 0, s.length-1, dp);
  }
}