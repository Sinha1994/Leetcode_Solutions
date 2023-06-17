/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let isInc = true, n = arr.length;
    if(n < 3) return false;
    if(arr[0] > arr[1]) return false;
    for(let i=1;i<n;i++) {
        if(arr[i] == arr[i-1])return false;
        if(isInc) {
            if(arr[i] < arr[i-1]) isInc = false;
        } else {
            if(arr[i] > arr[i-1]) return false;
        }
    }
    return !isInc;
};