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
        let n = input_ar1[0];
        let k = input_ar1[1];
        let arr = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.kLargest(arr, n, k);
        printList(res,res.length);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} k
 * @returns {number[]}
*/
class minHeap {
    constructor(c){
        this.array = new Array(c);
        this.size = 0;
        this.capacity = c;
    }
    left(i) {
        return 2*i+1;
    }
    right(i) {
        return 2*i+2;
    }
    parent(i) {
        return Math.floor((i-1)/2);
    }
    insert(item) {
        if(this.size == this.capacity) return;
        ++this.size; this.array[this.size-1] = item;
        for(let i=this.size-1; i!==0 && this.array[this.parent(i)] > this.array[i];) {
            let temp = this.array[i];
            this.array[i] = this.array[this.parent(i)];
            this.array[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
    minHeapify(i) {
        let left = this.left(i), right = this.right(i), smallest = i;
        if(left < this.size && this.array[left] < this.array[smallest]){
            smallest = left;
        }
        if(right < this.size && this.array[right] < this.array[smallest]){
            smallest = right;
        }
        if(smallest != i) {
            let item = this.array[i];
            this.array[i] = this.array[smallest];
            this.array[smallest] = item;
            this.minHeapify(smallest);
        }
    }
}
class Solution{
    kLargest(arr,n, k){
        //code here
        let heap = new minHeap(k);
        for(let i=0;i<k;i++){
            heap.insert(arr[i]);
        }
        for(let i=k;i<n;i++){
            if(arr[i] > heap.array[0]){
                heap.array[0] = arr[i];
                heap.minHeapify(0);
            }
        }
        return heap.array.sort((a,b) => b-a);
    }
}

