class Solution {
    public int uniqueMorseRepresentations(String[] words) {
        String[] codes = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        for(int i=0;i<words.length;i++){
            StringBuilder str = new StringBuilder();
            String text = words[i];
            for(int j=0;j<text.length();j++){
                int index = (int)text.charAt(j)-97;
                str.append(codes[index]);
            }
            map.put(str.toString(), map.getOrDefault(str, 0) + 1);
            str.setLength(0);
        }
        return map.size();
    }
}