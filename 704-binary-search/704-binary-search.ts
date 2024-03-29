function search(nums: number[], target: number): number {
 let low=0, high=nums.length;
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(nums[mid] == target) return mid;
        else if(nums[mid] > target){ high = mid-1; }
        else {low = mid+1; }
    }
    return -1;
};