class MinHeap {
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
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap(k);
    for(let i=0;i<k;i++){
        minHeap.insert(nums[i]);
    }
    for(let i=k;i<nums.length;i++){
        if(nums[i]>minHeap.array[0]){
            minHeap.array[0] = nums[i];
            minHeap.minHeapify(0);
        }
    } 
    return minHeap.array[0];
};