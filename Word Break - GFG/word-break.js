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
    let n = parseInt(readLine());
    let b = [];
    let input_line = readLine().split(" ");
    for(let j = 0;j < n;j++) b.push(input_line[j]);
    let A = readLine();
    let obj = new Solution();
    let res = obj.wordBreak(A,b);
    console.log(res);
    
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} A
 * @param {string[]} B
 * @returns {number}
*/

class Solution {
  rec(A,dictionary) {
   if(A.length == 0) return 1;
   if(dictionary.has(A)) return 1;
   for(let i=1;i<A.length;i++) {
       if(dictionary.has(A.substr(0,i)) && this.rec(A.substr(i, A.length), dictionary) == 1) {
           return 1;
       }
   }
   return 0;
  }
  wordBreak(A,B){
    //code here
    if(A == "") return 1;
    let dictionary = new Set(B);
    return this.rec(A,dictionary);
  }
}