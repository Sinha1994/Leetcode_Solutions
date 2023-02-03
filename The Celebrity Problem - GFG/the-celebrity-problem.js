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
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let M = new Array(n);
        for(let i=0;i<n;i++){
            M[i] = new Array(n);
            for(let j=0;j<n;j++)
                M[i][j] = parseInt(input_line[i*n+j]);
        }
        let obj = new Solution();
        let ans = obj.celebrity(M, n);
        if(ans==-0)
            ans=0;
        console.log(ans);
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} M
 * @param {number} n
 * @returns {number}
*/
class Solution 
{
    //Function to find if there is a celebrity in the party or not.
    celebrity(M, n)
    {
        // code here
        let cel = -1;
           for(let j=0;j<n;j++) {
            let flag = true;
            for(let i=0;i<n;i++){
                if(i != j){
                    if(M[i][j] != 1){
                        flag = false;
                    } else {
                        M[i][i] = -1;
                        cel = cel == i ? -1 : cel;
                    }
                }
            }
            if(flag){
                cel = j;
            }
           }
        
        return cel == -1 ? -1 : (M[cel][cel] != -1 ? cel : -1);
    }
}

