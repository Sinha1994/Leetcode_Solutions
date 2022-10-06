
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map[key]){
        let arr = this.map[key];
        arr[timestamp] = value;
        this.map[key] = arr;
    } else {
        let arr = [];
        arr[timestamp] = value;
        this.map[key] = arr;
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(this.map[key]){
      let arr = this.map[key];
      while(!arr[timestamp] && timestamp >=0){
          --timestamp;
      }
      return timestamp>=0 ? arr[timestamp] : "";
    } 
   return ""; 
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */