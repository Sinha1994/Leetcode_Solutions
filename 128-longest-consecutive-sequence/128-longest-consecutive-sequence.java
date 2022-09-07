class Solution {
    public int longestConsecutive(int[] arr) {
        HashSet<Integer> set = new HashSet<Integer>();
        for(int i=0;i<arr.length;i++){
            set.add(arr[i]);
        }
        Iterator value = set.iterator();
        int res =0, curr=0;
        while(value.hasNext()){
            int x = (int)value.next();
            if(!set.contains(x-1)){
                curr = 1;
                while(set.contains(x+1)){
                    ++curr;
                    x = x+1;
                }
            }
            res = Math.max(res,curr);
        }
        return res;
    }
}