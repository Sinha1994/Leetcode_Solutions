class Solution {
    public int getSum(int a, int b) {
        int xor = a^b, carry = (a&b)<<1;
        while(carry != 0){
           int c = (xor&carry)<<1;
           xor = xor^carry;
           carry = c; 
        }
        return xor;
    }
}