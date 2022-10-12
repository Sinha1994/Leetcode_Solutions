class KthLargest {
    k: number;
    nums: number[];
    constructor(k: number, nums: number[]) {
     this.k = k;
     this.nums = nums;
    }

    add(val: number): number {
      this.nums.push(val);
      this.nums.sort((a,b) => { return a-b; });
      return this.nums[this.nums.length-this.k];
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */