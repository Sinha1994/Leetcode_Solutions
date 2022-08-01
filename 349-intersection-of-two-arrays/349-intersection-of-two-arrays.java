class Solution {
    public int[] findIntersection(int[] nums1, int n, int[] nums2, int m){
         HashSet<Integer> set = new HashSet<Integer>();
         HashSet<Integer> intersection = new HashSet<Integer>();
         for(int i: nums1){
             set.add(i);
         }
         for(int j: nums2){
             if(set.contains(j)){
                 intersection.add(j);
             }
         }
        int i=0;
        int[] res = new int[intersection.size()];
        for(int k: intersection){
            res[i++] = (int)k;
        }
        return res;
    }
    public int[] intersection(int[] nums1, int[] nums2) {
        int n = nums1.length, m = nums2.length;
        if(n<m){
          return findIntersection(nums1, n, nums2, m);
        } else {
           return findIntersection(nums2, m, nums1, n); 
        }
    }
}