/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    while(x != 0) {
        let r = x%10;
        x = parseInt(x/10);
        rev = rev*10+r;
        if(rev <= -Math.pow(2,31) || rev >= Math.pow(2,31)-1)
        return 0;
    }
    return rev;
};