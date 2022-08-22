class Solution {
    public boolean isAnagram(String a, String b) {
        if(a.length() != b.length()) return false;
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        for(int i=0;i<a.length();i++){
            map.put(a.charAt(i),map.getOrDefault(a.charAt(i),0)+1);
        }
        for(int i=0;i<b.length();i++){
            if(map.containsKey(b.charAt(i))){
                map.put(b.charAt(i), map.get(b.charAt(i))-1);
            }
        }
        boolean res = true;
        for(int v: map.values()) 
        if(v != 0) res = false;
        return res;
    }
    public List<String> removeAnagrams(String[] words) {
        List<String> res = new ArrayList<String>();
        res.add(words[0]);
        for(int i=1;i<words.length;i++){
            if(!isAnagram(res.get(res.size()-1), words[i])){
               res.add(words[i]);
            }
        }
        return res;
    }
}