/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastDigit = digits[digits.length-1];
    digits.length = digits.length > 1 ? digits.length-1 : 0;
    let newDigit = lastDigit+1;
    if(newDigit == 10) {
        digits = digits.length > 0 ? plusOne(digits) : [1];
        digits.push(0);
      }
      else {
       digits.push(newDigit); 
    }
    return digits;
};