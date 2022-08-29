class Solution {
    public int jump(int[] arr) {
        if(arr[0] == 0) return 0;
        if(arr.length == 1) return 0;
        int res =0, fur=0, l=0, r=0;
        while(r < arr.length-1){
            fur=0;
            for(int i=l;i<=r;i++){
                fur = Math.max(fur, i+arr[i]);
            }
            l=r+1;
            r=fur;
            ++res;
        }
        return res;
    }
}