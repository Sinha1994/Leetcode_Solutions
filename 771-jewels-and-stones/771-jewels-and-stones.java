class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        HashSet<Character> jewels_set = new HashSet<Character>();
        int count = 0;
        for(int i=0;i<jewels.length();i++){
            jewels_set.add(jewels.charAt(i));
        }
        for(int i=0;i<stones.length();i++){
            if(jewels_set.contains(stones.charAt(i))){
                ++count;
            }
        }
        return count;
    }
}