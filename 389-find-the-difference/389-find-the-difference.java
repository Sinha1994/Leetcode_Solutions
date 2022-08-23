class Solution {
    public char findTheDifference(String s, String t) {
        if(s.length() == 0){
            return t.charAt(0);
        }
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();
        Arrays.sort(sArr);
        Arrays.sort(tArr);
        int i=0,j=0;
        while(i<tArr.length && j<sArr.length) {
            if(tArr[i] == sArr[i]){
                ++i;++j;
            } else {
                return tArr[i];
            }
        }
        return tArr[i];
    }
}