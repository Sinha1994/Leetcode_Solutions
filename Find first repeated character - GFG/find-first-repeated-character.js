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
    let s = readLine();
    let obj = new Solution();
    let res = obj.firstRepChar(s);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} s
 * @return {string}
 */

class Solution {
  firstRepChar(s) {
    // code here
    let map = {};
    for(let i=0;i<s.length;i++) {
        if(map[s[i]]) return s[i];
        map[s[i]] = s[i];
    }
    return -1;
  }
}