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
        let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.search(A,0,n-1,key);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} A
 * @param {number} l
 * @param {number} h
 * @param {number} key
 * @return {number}
*/

class Solution {
    search(A,l,h,key){
        // l: The starting index
        // h: The ending index, you have to search the key in this range
        //code here
        while(l<=h) {
            let mid = l+parseInt((h-l)/2);
            if(A[mid] === key){
                return mid;
            } else if(A[h] > A[mid]){
                if(A[mid] < key && A[h] >= key){
                   l = mid+1; 
                }
              else {
                h = mid-1;   
              }
            } else {
                if(A[l] <= key && A[mid] > key){
                  h = mid-1;
                }
                else {
                   l = mid+1;  
                }
            }
        }
        return -1;
    }
}
