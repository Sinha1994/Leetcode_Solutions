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
        let str = readLine();
        let obj = new Solution();
        let res = obj.countMin(str);
        console.log(res);
        
    }
}// } Driver Code Ends



// } Driver Code Ends


//User function Template for javascript



/**
 * @param {string} str
 * @returns {number}
*/

class Solution{

    countMin(str){
        //code here
        let dp = new Array(str.length+1);
        for(let i=0;i<=str.length+1;i++){
           dp[i] = new Array(str.length+1);
            for(let j=0;j<=str.length+1;j++){
            dp[i][j] = 0;
            }
        }
        let rev = str.split("").reverse().join("");
        for(let i=0;i<=str.length;i++) {
            for(let j=0;j<=str.length;j++) {
               if(i === 0 || j === 0){
                   dp[i][j] = 0;
               } else {
                   if(str[i-1] === rev[j-1]) {
                      dp[i][j] = 1 + dp[i-1][j-1]; 
                   } else {
                     dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);  
                   }
               }  
            }
        }
        return str.length-dp[str.length][str.length];
    }
}
