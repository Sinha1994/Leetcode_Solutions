/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let n = arr.length, max = arr[n-1];
    arr[n-1] = -1;
    for(let i=n-2;i>=0;i--){
        let curr = arr[i];
        arr[i] = max;
        max = Math.max(max, curr);
    }
    return arr;
};