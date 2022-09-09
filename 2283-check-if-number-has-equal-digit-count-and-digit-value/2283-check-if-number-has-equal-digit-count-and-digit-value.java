class Solution {
    public boolean digitCount(String num) {
        HashMap<Character, Integer> freq = new HashMap<>();
        for(int i=0;i<num.length();i++){
            Character ch = num.charAt(i);
            freq.put(ch, freq.getOrDefault(ch, 0)+1);
        }
        for(int i=0;i<num.length();i++){
            int count = num.charAt(i)-'0';
            Character ch = (char)(i+'0');
            if(count > 0 && !freq.containsKey(ch)){
                return false;
            }
            if(count == 0 && freq.containsKey(ch)){
                return false;
            }
            if(freq.containsKey(ch) && freq.get(ch) != count){
                return false;
            }
        }
        return true;
    }
}