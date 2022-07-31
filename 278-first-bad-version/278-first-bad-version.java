/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        if(n == 1) return 1;
        if(n == 0) return 0;
        int start=1, end=n;
        while(start<=end){
            int mid = start+(end-start)/2;
            boolean isBad = isBadVersion(mid);
            if(isBad){
                if(!isBadVersion(mid-1)){
                    return mid;
                }
                end = mid-1;
            } else{
                start = mid+1;
            }
        }
        return -1;
    }
}