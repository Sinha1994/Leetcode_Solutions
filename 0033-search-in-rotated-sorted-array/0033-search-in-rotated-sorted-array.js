/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low=0,high=nums.length-1;
    while(low<high) {
        let mid = parseInt((high+low)/2);
        if(nums[mid] > nums[high]) {
            low = mid+1;
        } else {
            high = mid;
        }
    }
    let rot = low;
    low=0,high=nums.length-1;
    while(low<=high) {
        let mid = parseInt((high+low)/2);
        let realMid = (mid+rot)%nums.length;
        if(nums[realMid] == target){
            return realMid;
        }
        if(nums[realMid] < target) {
            low = mid+1;
         }else{
             high = mid-1;
         }
  }
  return -1;
};