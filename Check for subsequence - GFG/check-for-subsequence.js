//{ Driver Code Starts
//Initial Template for javascript


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
    for(;i<t;i++)
    {
        let [A,B] = readLine().trim().split(" ");
        let obj = new Solution();
        let res = obj.isSubSequence(A,B);
        console.log(Number(res));
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
*/

class Solution {
    isSubSequence(A,B){
       //code here
       let i=0;
       for(let j=0;j<B.length;j++) {
           if(i == A.length) break;
           if(A[i] == B[j]) ++i;
       }
       return i == A.length;
    }
}
