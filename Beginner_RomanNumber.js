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
    let answer = 0;
    for(let i=sArray.length-1;i>=0;i=i-2){
        if(i == 0) {
            answer = answer + roman.get(sArray[i]);
            return answer;
        } else {
                    if(sArray[i-1]<sArray[i]){
            answer = answer + (roman.get(sArray[i]) - roman.get(sArray[i-1]));
        }
        else {
            answer = answer + (roman.get(sArray[i]) + roman.get(sArray[i-1]));
        }
        }
    }
    return answer;
    
};