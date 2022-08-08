/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let res = [];
    let indexSum = list1.length+list2.length;
    let map = {};
    list1.forEach((item,idx) => {
        map[item] = idx;
    });
    list2.forEach((item,idx) => {
        if(map[item] !== undefined){
            let sum = map[item] + idx;
            if(sum < indexSum){
                indexSum = sum;
                res = [];
                res.push(item);
            } else if(sum == indexSum){
                 res.push(item);
            }
        }
    });
    return res;
};