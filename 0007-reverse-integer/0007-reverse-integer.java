class Solution {
    public int reverse(int x) {
        int res = 0;
        if(x >= Integer.MAX_VALUE || x <= Integer.MIN_VALUE)
        return 0;
        while(x!=0){
          int r = x%10;
          x = x/10;
          if(res > Integer.MAX_VALUE/10 ||
             (res == Integer.MAX_VALUE && r >= Integer.MAX_VALUE%10)){
              return 0;
          }
          if(res < Integer.MIN_VALUE/10 ||
             (res == Integer.MIN_VALUE && r <= Integer.MIN_VALUE%10)){
              return 0;
          }
          res = res*10 + r;
        }
        return res;
    }
}