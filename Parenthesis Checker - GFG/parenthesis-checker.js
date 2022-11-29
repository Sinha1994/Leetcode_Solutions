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
        let str = readLine();
        let obj = new Solution();
        if(obj.ispar(str)){
            console.log("balanced");
        }
        else{
            console.log("not balanced");
        }
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} x
 * @returns {boolean}
*/

class Solution
{
    //Function to check if brackets are balanced or not.
    ispar(x)
    {
        //your code here
        let stack = [];
        for(let i=0;i<x.length;i++){
            if("[({".includes(x.charAt(i))){
             stack.push(x.charAt(i));
            } else{
                 if(x.charAt(i) == "]" && stack[stack.length-1] == "["){
                     stack.pop();
                 }
                 else if(x.charAt(i) == ")" && stack[stack.length-1] == "("){
                        stack.pop();
                 }
                 else if(x.charAt(i) == "}" && stack[stack.length-1] == "{"){
                        stack.pop();
                 } else {
                     return false;
                 }
            }
        }
        return stack.length == 0;
    }
}