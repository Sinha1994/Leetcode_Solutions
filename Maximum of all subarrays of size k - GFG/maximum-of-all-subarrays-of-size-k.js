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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(" ");
        let n = parseInt(input_line[0]);
        let k = parseInt(input_line[1]);
        let a = new Array(n);
        input_line = readLine().split(" ");
        for(let i=0;i<n;i++)
            a[i] = parseInt(input_line[i]);
            
        let obj = new Solution();
        let ans = obj.max_of_subarrays(a,n,k);
        let s="";
        for(let i=0;i<ans.length;i++)
        {
            if(ans[i]==-0)
            s+="0";
            else 
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/
class Solution 
{
    //Function to find maximum of each subarray of size k.
	max_of_subarrays(arr, n, k)
	{
        // code here
        let res = [], heap = [], i=0;
        for(;i<k;i++) {
            while(heap.length > 0 && 
            (arr[i] > arr[heap[heap.length-1]] 
            || arr[i] === arr[heap[heap.length-1]])) {
                heap.pop();
            }
           heap.push(i);
        }
        for(;i<n;i++) {
            res.push(arr[heap[0]]);
            while(heap.length > 0 && 
            (arr[i] > arr[heap[heap.length-1]] 
            || arr[i] === arr[heap[heap.length-1]])) {
                heap.pop();
            }
            while(heap[0] <= i-k){
                heap.shift();
            }
            heap.push(i);
        }
        res.push(arr[heap[0]]);
        return res;
    }
}
