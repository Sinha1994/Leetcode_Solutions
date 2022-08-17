class Solution {
    public static void merge(int[] nums, int low, int mid, int high){
        int n1=mid-low+1, n2=high-mid;
        int[] left = new int[n1];
        int[] right = new int[n2];
        
        for(int i=0;i<n1;i++){
            left[i] = nums[low+i];
        }
        for(int i=0;i<n2;i++) {
            right[i] = nums[mid+i+1];
        }
        int i=0,j=0,k=low;
        while(i<n1 && j<n2) {
            if(left[i] < right[j]){
                nums[k] = left[i];
                i++;
                k++;
            } else {
                nums[k] = right[j];
                k++;
                j++;
            }
        }
        while(i<n1){
                nums[k] = left[i];
                i++;
                k++;
         }
        while(j<n2){
                nums[k] = right[j];
                k++;
                j++;
            }
    }
    public static void mergeSort(int[] nums, int low, int high) {
        if(low < high){
            int mid = low+(high-low)/2;
            mergeSort(nums,low,mid);
            mergeSort(nums, mid+1,high);
            merge(nums,low,mid,high);
        }
    }
    public int[] sortArray(int[] nums) {
        mergeSort(nums,0,nums.length-1);
        return nums;
    }
}