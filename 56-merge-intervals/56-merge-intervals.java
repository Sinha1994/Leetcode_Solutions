class Solution {
    public int[][] merge(int[][] intervals) {
       int n = intervals.length,m=intervals[0].length; 
       ArrayList<ArrayList<Integer>> res = new ArrayList<ArrayList<Integer>>();
       int k=0;
       Arrays.sort(intervals,(o1,o2)->Integer.compare(o1[0], o2[0]));
       ArrayList<Integer> curr = new ArrayList<Integer>();
       curr.add(intervals[0][0]);
       curr.add(intervals[0][1]);
       res.add(curr);
        for(int i=1;i<n;i++) {
            int lastInterval = res.get(res.size()-1).get(1);
            int startInterval = res.get(res.size()-1).get(0);
            if(intervals[i][0] <= lastInterval && intervals[i][0] >= startInterval){
                startInterval = Math.min(startInterval, intervals[i][0]);
                lastInterval = Math.max(lastInterval, intervals[i][1]);
                res.get(res.size()-1).set(0, startInterval);
                res.get(res.size()-1).set(1, lastInterval);
            }
            else {
                curr = new ArrayList<Integer>();
                curr.add(intervals[i][0]);
                curr.add(intervals[i][1]);
                res.add(curr);
            }
        }
        int[][] ans = new int[res.size()][2];
        for(int i=0;i<res.size();i++){
            ans[i][0] = res.get(i).get(0);
            ans[i][1] = res.get(i).get(1);
        }
        return ans;
    } 
}