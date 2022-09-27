var MyHashSet = function() {
    this.hashSet = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const isPresent = this.hashSet.findIndex(item => item == key);
    if(isPresent == -1) {
        this.hashSet.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const isPresent = this.hashSet.findIndex(item => item == key);
    if(isPresent != -1) {
       this.hashSet = this.hashSet.filter(item => item != key);
        return true;
    }
    return false;
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const isPresent = this.hashSet.findIndex(item => item == key);
    if(isPresent != -1)
    return true;
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */