class Solution {
    public double binarySearch(int[] A, int[] B){
        int n=A.length, m=B.length;
        int total = n+m;
        int l=0,r=n,i=0,j=0;
        double result = 0.0;
        while(l<=r){
            i= l+(r-l)/2;
            j=(total+1)/2-i;
            System.out.println("i " + i);
            System.out.println("j " + j);
            int ALeft= i > 0 ? A[i-1] : Integer.MIN_VALUE;
            int ARight= i < n ? A[i] : Integer.MAX_VALUE;
            int BLeft= j > 0 ? B[j-1] : Integer.MIN_VALUE;
            int BRight=j < m ? B[j] : Integer.MAX_VALUE;
            if(ALeft <= BRight && BLeft <= ARight) {
                if(total%2 == 0) {
                    result = (double)(Math.max(ALeft,BLeft)+Math.min(ARight,BRight))/2;
                    break;
                } else {
                    result =  Math.max(ALeft,BLeft);
                    break;
                }
            } else if(ALeft>BRight) {
                r = i-1;
            } else {
                l = i+1;
            }
        }
        return result;
    }
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int n=nums1.length, m=nums2.length;
        if(n<m) {
          return binarySearch(nums1, nums2); 
        } else {
           return binarySearch(nums2, nums1); 
        }
    }
}