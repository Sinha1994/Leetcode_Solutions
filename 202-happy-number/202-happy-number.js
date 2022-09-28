/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    while(n > 9 || n%2 != 0) {
      let num = n;
      let sum = 0;
      while(num > 0) {
         let rem = parseInt(num%10);
         sum += rem*rem;
         num = parseInt(num/10);
      }
      if(sum == 1) return true;
      n = sum;
    }
    if(n === 1) return true;
    return false;
};