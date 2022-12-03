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

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let S = readLine();
    let obj = new Solution();
    let res = obj.find_permutation(S);
    printArray(res,res.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} S
 * @return {string[]}
 */

class Solution {
    swap(S, i, j) {
        let arr = S.split("");
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr.join("");
    }
    generatePermutation(S,i,res) {
        if(i == S.length){
            res.push(S);
            return;
        } 
        for(let j=i;j<S.length;j++) {
            let newStr = this.swap(S, i, j);    
            this.generatePermutation(newStr,i+1,res);    
        }
    }
    find_permutation(S){
         //code here
         let res = [];
         this.generatePermutation(S,0,res);
         return [...new Set(res.sort())];
    }
}
