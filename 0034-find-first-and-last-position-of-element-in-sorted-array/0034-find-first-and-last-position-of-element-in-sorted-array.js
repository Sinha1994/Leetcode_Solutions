/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let findStart = (nums, target, low, high) => {
    let start = high;
    while(low <= high) {
        let mid = parseInt(low+(high-low)/2);
        if(nums[mid] == target){
            start = mid < start ? mid : start;
            high = mid-1;
        }
        else {
            low = mid+1;
        }
    }
    return start;
}
let findEnd = (nums, target, low, high) => {
    let end = low;
    while(low <= high) {
        let mid = parseInt(low+(high-low)/2);
        if(nums[mid] == target){
            end = mid > end ? mid : end;
            low = mid+1;
        }
        else {
            high = mid-1;
        }
    }
    return end;
}
var searchRange = function(nums, target) {
    if(nums.length == 0) {
       return [-1, -1];
    }
    let low=0, high=nums.length, start=-1, end=-1;
    while(low<=high) {
        let mid = parseInt(low+(high-low)/2);
        if(nums[mid] == target){
            start = end = mid;
            if(mid != 0 && nums[mid-1] == target) {
              start = findStart(nums, target, 0, mid-1);    
            }
            if(mid != nums.length && nums[mid+1] == target){
                end = findEnd(nums, target, mid+1, nums.length);
            }
            break;
        }
        else if(nums[mid] > target) {
          high = mid-1;
        } 
        else {
          low = mid+1;    
        }
    }
    return [start, end];
};