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

class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
    
    push(a){
        this.arr.push(a);
        this.top++;
    }
    
    pop(){
        this.arr.pop();
        this.top--;
    }
    
    front(){
        return this.arr[this.top];
    }
    
    empty(){
        if(this.top != -1)
            return false;
        else
            return true;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let sq = new StackQueue();
        let q = parseInt(readLine());
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let index = 0;
        let res = '';
        while(q--){
            let QueryType = input_ar1[index++];
            if(QueryType == 1){
                let a = input_ar1[index++];
                sq.push(a);
            }
            else{
                res += sq.pop() + " ";
            }
        }
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

class StackQueue{
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    
    /**
     * @param {number} B
    */
    
    //Function to push an element in queue by using 2 stacks.
    push(B){
        // code here
      this.s1.push(B);
    }
    
    /**
     * @returns {number}
    */
    
    //Function to pop an element from queue by using 2 stacks.
    pop(){
        // code here
        if(this.s1.empty()) return -1;
        if(!this.s1.empty()) {
            let pop_item = 0;
            while(!this.s1.empty()) {
                pop_item = this.s1.front();
                this.s1.pop();
                if(this.s1.empty()) break;
                this.s2.push(pop_item);
            }
            while(!this.s2.empty()) {
                let item = this.s2.front();
                this.s2.pop();
                this.s1.push(item);
            }
            return pop_item;
        }
    }
}