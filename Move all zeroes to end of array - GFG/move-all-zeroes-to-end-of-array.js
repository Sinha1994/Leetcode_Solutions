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
    let n = parseInt(readLine());
    let arr = new Array(n);
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr[i] = input_ar1[i];
    let obj = new Solution();
    obj.pushZerosToEnd(arr,n);
    printArray(arr,n);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 */

class Solution {
    pushZerosToEnd(arr,n){
        //code here
        let i = 0, j = -1;
  while (i < n) {
     if (arr[i] !== 0) {
      ++j;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
   }
  ++i;
  }
 }
}