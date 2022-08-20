class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i=0,j=0,n=word1.length(),m=word2.length(),k=1;
        StringBuilder sb = new StringBuilder();       
        while(i<n && j<m){
            if(k%2 != 0) {
                sb.append(word1.charAt(i++));
            } else {
                sb.append(word2.charAt(j++));
            }
            k++;
        }
        while(i<n) sb.append(word1.charAt(i++));
        while(j<m) sb.append(word2.charAt(j++));
        return sb.toString();
    }
}