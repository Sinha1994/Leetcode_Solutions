class Solution {
    public boolean checkRecord(String s) {
        int absCount=0,lateCount=0, lastLate=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i) == 'A') {
                absCount++; 
            }
            else if(s.charAt(i) == 'L') {
                if(lateCount == 0 || i == lastLate+1){
                    ++lateCount;
                    lastLate = i;
                } else if(lateCount < 3){
                     lateCount = 1;
                     lastLate = i;
                }
            } 
        }
        return absCount<2 && lateCount<3;
    }
}