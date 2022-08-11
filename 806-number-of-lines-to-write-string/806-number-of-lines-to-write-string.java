class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int lineCount = 0, width = 0;
         for(int i=0;i<s.length();i++){
            int idx = s.charAt(i) - 'a';
            if(width+widths[idx] < 100){
                width += widths[idx];
            } else if(width+widths[idx] == 100){
                lineCount++;
                width = 0;
            } else if(width+widths[idx] > 100){
                lineCount++;
                width = widths[idx];
            }
        }
        int[] res = new int[2];
        res[0] = width > 0 ? ++lineCount : lineCount;
        res[1] = width == 0 ? 100 : width;
        return res;
    }
}