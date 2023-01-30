//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(
        string => { return string.trim(); });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let K = parseInt(readLine());
        let N = parseInt(readLine());
        let arr = new Array(N);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < N; i++) arr[i] = input_ar1[i];
        let obj = new Solution();
        let res = obj.getMinDiff(arr, N, K);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @return {number}
*/

class Solution {
    getMinDiff(arr,n,k){
       //code here
       arr.sort((a,b) => a-b);
       let min = arr[0], max = arr[n-1];
       let res = max-min;
       for(let i=1;i<n;i++) {
          min = Math.min(arr[0]+k, arr[i]-k);
          max = Math.max(arr[n-1]-k, arr[i-1]+k);
          res = Math.min(res, max-min);
       }
       return res;
    }
}