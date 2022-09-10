class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> res = new ArrayList<>();
        HashMap<String,List<Integer>> sorted = new HashMap<>();
        for(int i=0;i<strs.length;i++){
            char[] arr = strs[i].toCharArray();
            Arrays.sort(arr);
            List<Integer> indexes = new ArrayList<>();
            if(sorted.containsKey(String.valueOf(arr))){
                indexes = sorted.get(String.valueOf(arr));
                indexes.add(i);
                sorted.put(String.valueOf(arr), indexes);
            } else {
               indexes.add(i);
               sorted.put(String.valueOf(arr), indexes); 
            }
        }
        for(Map.Entry<String, List<Integer>> entry: sorted.entrySet()){
           List<Integer> indexes = entry.getValue();
           List<String> anagram = new ArrayList<>();
           for(int i: indexes){
               anagram.add(strs[i]);
           }
          res.add(anagram);
        }
        return res;
    }
}