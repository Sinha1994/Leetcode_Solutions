class Solution {
      public List<List<Integer>> mergeSimilarItems(int[][] items1, int[][] items2) {
      
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> item = new ArrayList<Integer>();
        int i=0,j=0,n=items1.length,m=items2.length;
          
        while(j<m) {
          map.put(items2[j][0], items2[j][1]);  
          j++;
        }
          
        while(i<n){
            item = new ArrayList<Integer>();
            if(map.containsKey(items1[i][0])){
             item.add(items1[i][0]);
             item.add(items1[i][1] + map.get(items1[i][0]));
             map.remove(items1[i][0]);
            } else {
             item.add(items1[i][0]);
             item.add(items1[i][1]);   
            }
            ++i;
            res.add(item);
        }
        while(i<n) {
           item = new ArrayList<Integer>();
           item.add(items1[i][0]);
           item.add(items1[i][1]);
           res.add(item);
            ++i;
        }
        for(Map.Entry<Integer,Integer> entry : map.entrySet()) {
           item = new ArrayList<Integer>();
           item.add(entry.getKey());
           item.add(entry.getValue());
           res.add(item);
        }
        Collections.sort(res, new Comparator<List<Integer>>(){
            public int compare(List<Integer> l1, List<Integer> l2){
                return l1.get(0) > l2.get(0) ? 1 : -1;
            }
        });
        return res;
    }
}