/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = new Map();
    roman.set('I',1);
    roman.set('V',5);
       roman.set('X',10);
       roman.set('L',50);
       roman.set('C',100);
       roman.set('D',500);
       roman.set('M',1000);
    
    let sArray = s.split('');
    let answer = roman.get(sArray[sArray.length-1]);
    for(let i=sArray.length-1;i>0;i--){
        if(((sArray[i-1]) === 'I' && (sArray[i] === 'V' || sArray[i] ==='X')) 
          || ((sArray[i-1]) === 'X' && (sArray[i] === 'L' || sArray[i] === 'C'))
          || ((sArray[i-1]) === 'C' && (sArray[i] === 'D' || sArray[i] === 'M'))
          ){
            answer = answer - roman.get(sArray[i-1]);
        }
        else {
            answer = answer + roman.get(sArray[i-1]);
        }
    }
    return answer;
};