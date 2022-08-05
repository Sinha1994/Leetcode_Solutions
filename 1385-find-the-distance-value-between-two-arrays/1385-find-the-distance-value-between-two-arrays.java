class Solution {
    public int binarySearch(int[] a, int l, int h, int num, int d){
        while(l<=h){
            int mid = l+(h-l)/2;
            if(Math.abs(num-a[mid]) <= d){
                return 0;
            } else if(num<a[mid]){
                h = mid-1;
            } else {
                l = mid+1;
            }
        }
        return 1;
    }
    public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
        Arrays.sort(arr2);
        int res = 0;
        for(int i=0;i<arr1.length;i++){
                res += binarySearch(arr2, 0, arr2.length-1, arr1[i], d);
        }
        return res;
    }
}