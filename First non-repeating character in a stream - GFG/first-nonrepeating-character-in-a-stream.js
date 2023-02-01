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
    let A = readLine().trim();
    let obj = new Solution();
    let res = obj.FirstNonRepeating(A);
    console.log(res);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} A
 * @return {string}
*/

class Solution {
  FirstNonRepeating(A){
    //code here
    let queue =[], arr = new Array(26).fill(0), res = "";
    for(let i=0;i<A.length;i++) {
        let idx = A[i].charCodeAt()-97;
        arr[idx] = ++arr[idx];
        if(arr[idx] === 1){
            queue.push(A[i]);
        }
        if(queue.length > 0 && arr[queue[0].charCodeAt()-97] === 1){
            res += queue[0];
        } else if(queue.length > 0){
            while(queue.length > 0){
                if(arr[queue[0].charCodeAt()-97] === 1){
                    res += queue[0];
                    break;
                }
              queue.shift();
            }
        }
        if(queue.length === 0){
            res += "#";
        }
    }
    return res;
  }
}
