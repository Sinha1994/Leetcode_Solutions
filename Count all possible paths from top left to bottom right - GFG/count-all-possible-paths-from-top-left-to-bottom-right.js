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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let m = input_ar1[0];
        let n = input_ar1[1];
        let obj = new Solution();
        let res = obj.numberOfPaths(m, n);
        console.log(res);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
*/

class Solution{
    countPath(i,j,m,n,dp){
        if(i == m && j == n){
            dp[i][j] = 1;
            return 1;
        }
        if(dp[i][j] === 0){
        let ans = 0;
        if(i+1 <= m && j <= n) {
            ans += this.countPath(i+1, j, m, n, dp);
        }
        if(i <= m && j+1 <= n){
            ans += this.countPath(i, j+1, m, n, dp);
        }
        ans %= 1000000007;
        dp[i][j] = ans;
        }
        return dp[i][j];
    }
    numberOfPaths(m,n){
     let dp = new Array(101);
for(let i = 0; i < 101; i++) {
     
    dp[i] = new Array(101);
    for(let j = 0; j < 101; j++) {
        dp[i][j] = 0;
    }
}
    return this.countPath(1,1,m,n,dp);
    }
}
