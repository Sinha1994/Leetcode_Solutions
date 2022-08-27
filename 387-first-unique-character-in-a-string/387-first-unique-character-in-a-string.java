class Solution {
    public int firstUniqChar(String s) {
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(map.containsKey(c)) {
                map.put(c, -1);
            } else {
                map.put(c, i);
            }
        }
        int idx = s.length();
        for(Character ch: map.keySet()){
            if(map.get(ch) != -1) {
                idx = idx < map.get(ch) ? idx : map.get(ch);
            }
        }
        return idx == s.length() ? -1 : idx;
    }
}