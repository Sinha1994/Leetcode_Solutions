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
    let res = obj.longestPalin(S);
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
  getPal(S, l, r) {
      let res = "";
      while(l >= 0 && r < S.length) {
            if(S.charAt(l) == S.charAt(r)){
               if(r-l+1 > res.length){
                 res = S.slice(l, r+1); 
               }
              --l; r++;
            } else {
                    break;
            }
        }
        return res;
  }
  longestPalin(S){
    //code here
    let res = "";
    for(let i=0;i<S.length;i++) {
        let oddStr = this.getPal(S, i, i);
        let evenStr = this.getPal(S, i, i+1);
        if(oddStr.length > evenStr.length && oddStr.length > res.length) {
            res = oddStr;
        } else if(evenStr.length > res.length){
            res = evenStr;
        }
    }
      return res;
    }
}