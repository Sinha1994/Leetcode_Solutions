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
    let res = obj.longestPalindrome(S);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
  longestPalindrome(s){
    //code here
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
  }
}