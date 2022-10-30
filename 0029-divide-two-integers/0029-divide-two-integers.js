/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend == -(2**31) && divisor == 1) return -(2**31);
    let sign = ((dividend < 0) && (divisor < 0)) || ((dividend > 0) && (divisor > 0)) ? 1 : -1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let qoutient = 0;
    while(divisor <= dividend) {
        let value = divisor;
        let multiple = 1;
        while((value+value) < dividend){
            value += value;
            multiple += multiple;
        }
        dividend = dividend - value;
        qoutient += multiple;
    }
    if(qoutient > (2**31) - 1) {
       return sign == -1 ? -(2**31) : (2**31) - 1;
    }
   return sign == -1 ? -qoutient : qoutient;
};