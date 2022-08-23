class Solution {
    // public int[] findIntrs(int[] nums1, int n, int[] nums2, int m){
    //     Vector<Integer> v = new Vector<Integer>();
    //     for(int i: nums1){
    //         v.add(i);
    //     }
    //     for(int j: nums){
    //         if(v.contains(j))
    //     }
    // }
    public int[] intersect(int[] nums1, int[] nums2) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        int n = nums1.length;
        int m = nums2.length;
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        int i=0,j=0;
        while(i<n && j<m){
            if(nums1[i] == nums2[j]) {
                res.add(nums1[i]);
                ++i;++j;
            } else if(nums1[i] < nums2[j]) {
                ++i;
            } else {
                ++j;
            }
        }
        int[] ans = new int[res.size()];
        for(int k=0;k<res.size();k++) {
            ans[k] = res.get(k);
        }
        return ans;
        // if(n>m){
        //     return findIntrs(nums1, n, nums2, m);
        // }
        // else {
        //     return findIntrs(nums2, m, nums1, n);
        // }
    }
}