/**
 * @param {number} n
 * @return {string[]}
 */
addParenthesis = (str, open, close, n, res) => {
       if(str.length == n*2) {
          res.push(str);
          return;
       }
        if(open < n){
        addParenthesis(str+"(", open+1, close, n, res);
        }
        if(close < open) {
           addParenthesis(str+")", open, close+1, n, res);
        }
}
var generateParenthesis = function(n) {
    let res= new Array();
    addParenthesis("", 0, 0, n, res);
    return res;
};