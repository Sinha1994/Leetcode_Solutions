class Solution {
    public boolean isPerfectSquare(int num) {
        if(num == 1) return true;
        long i=1,j=num/2;
        while(i<=j){
            long mid = (int)Math.floor(i+(j-i)/2);
            long sqr = mid*mid;
            if(sqr == num) return true;
            else if (sqr > num){
                j = mid-1;
            }else {
                i = mid+1;
            }
        }
        return false;
    }
}