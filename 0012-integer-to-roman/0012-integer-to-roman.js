/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = "", index=0;
    let symbols = {
        1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M',4: 'IV', 9: 'IX', 40: 'XL', 90: 'XC', 400: 'CD', 900: 'CM'
    }
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    while(num > 0){
        let n = parseInt(num/value[index]);
        if(n == 0) {
            ++index;
        } else {
          while(n>0){
           roman =  roman + symbols[value[index]];
           --n;
        }
        num = num%value[index];
        ++index;     
       } 
    }
    return roman;
};