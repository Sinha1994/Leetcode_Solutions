/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(parseInt(n) == 1) return x;
    if(parseInt(n) == 0) return 1;
    let res = myPow(x, parseInt(Math.abs(n)/2));
    if(n%2 == 0) {
        res = res*res;
    } else {
       res = x*res*res;
    }
     if(n < 0) {
        return 1/res;
    }
    return res;
};