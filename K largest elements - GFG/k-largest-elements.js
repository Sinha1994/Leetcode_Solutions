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
    let [n,k] = readLine().split(" ").map((x) => parseInt(x));
    let arr = new Array(n);
    let input_line = readLine().split(" ").map((x) => parseInt(x));
    for(let j = 0;j<n;j++) arr[j] = input_line[j];
    let obj = new Solution();
    let res = obj.kLargest(arr,n,k);
    let ans = "";
    for(let j = 0;j<res.length;j++){
      ans+=res[j]+" ";
    }
    console.log(ans);
    
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
class MinHeap {
    constructor(c) {
        this.arr = new Array(c);
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
        this.size++; this.arr[this.size-1] = item;
        for(let i=this.size-1; i!=0 && this.arr[this.parent(i)] > this.arr[i];){
           let temp = this.arr[i];
           this.arr[i] = this.arr[this.parent(i)];
           this.arr[this.parent(i)] = temp;
           i = this.parent(i);
       }
    }
    minHeapify(i) {
        let smallest = i, left = this.left(i), right = this.right(i);
        if(i < this.size && this.arr[left] < this.arr[i]){
            smallest = left;
        }
        if(i < this.size && this.arr[right] < this.arr[smallest]){
            smallest = right;
        }
        if(smallest != i) {
           let temp = this.arr[i];
           this.arr[i] = this.arr[smallest];
           this.arr[smallest] = temp;  
           this.minHeapify(smallest);
        }
    }
}
class Solution 
{
    //Function to return k largest elements from an array.
    kLargest(arr,n,k)
    {
    //code here
    let res = [];
    let heap = new MinHeap(k);
    for(let i=0;i<k;i++) {
      heap.insert(arr[i]); 
    }
    for(let i=k;i<n;i++) {
        if(arr[i] > heap.arr[0]){
          heap.arr[0] = arr[i];
          heap.minHeapify(0);
        }
    }
    return heap.arr.sort((a,b) => b-a);
    }
}