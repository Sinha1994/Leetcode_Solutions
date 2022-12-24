//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
 
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.kthSmallest(arr,0,N-1,k);
    console.log(res);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/
class MinHeap {
    constructor(c) {
        this.heap = new Array(c).fill(0);
        this.size = 0;
        this.cap = c;
    }
    parent(i) {
        return Math.abs(parseInt((i-1)/2));
    }
    left(i) {
        return (2*i)+1;
    }
    right(i) {
        return (2*i)+2;
    }
    insert(x) {
        if(this.size === this.cap) {return; }
        ++this.size;
        this.heap[this.size-1] = x;
        for(let i=this.size-1; i!== 0 && this.heap[this.parent(i)] > this.heap[i];){
            let temp = this.heap[i];
            this.heap[i] = this.heap[this.parent(i)];
            this.heap[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }
    minHeapify(i) {
        let smallest = i;
        let lt = this.left(i);
        let rt = this.right(i);
        if(lt < this.size && this.heap[lt] < this.heap[i]){
           smallest = lt; 
        }
        if(rt < this.size && this.heap[rt] < this.heap[smallest]){
           smallest = rt; 
        }
        if(smallest != i) {
            let temp = this.heap[i];
            this.heap[i] = this.heap[smallest];
            this.heap[smallest] = temp;
            this.minHeapify(smallest);
        }
    }
    extractMin() {
        if (this.size === 0)
        return Number.MAX_SAFE_INTEGER;
        let min = this.heap[0];
        --this.size;
        this.heap[0] = this.heap[this.size];
        this.minHeapify(0);
        return min;
    }
}
class Solution {
  kthSmallest(arr,l,r,k){
    //code here
    let minHeap = new MinHeap(arr.length);
    for(let i=0;i<arr.length;i++){
        minHeap.insert(arr[i]);
    }
    let i = 0, min = 0;
    while(i<k-1) {
       minHeap.extractMin();
      ++i;
    }
    return minHeap.extractMin();
  }
}