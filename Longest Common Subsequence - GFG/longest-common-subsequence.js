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
        let x = parseInt(input_line[0]);
        let y = parseInt(input_line[1]);
        
        input_line = readLine().split(' ');
        let s1 = input_line[0];
        
        input_line = readLine().split(' ');
        let s2 = input_line[0];
        
        let obj = new Solution();
        let ans = obj.lcs(x, y, s1, s2);
        if(ans==-0)
        ans=0;
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number} x
 * @param {number} y
 * @param {string} s1
 * @param {string} s2
 * @returns {number}
*/
 
class Solution
{
    //Function to find the length of longest common subsequence in two strings.
    lcs(x, y, s1, s2)
    {
        // code here
    let L = new Array(x + 1);
    for(let i = 0; i < L.length; i++) 
    {
        L[i] = new Array(y + 1);
    }
    let i, j;
    for(i = 0; i <= x; i++)
    {
        for(j = 0; j <= y; j++)
        {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (s1[i - 1] == s2[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[x][y];
    }
}
