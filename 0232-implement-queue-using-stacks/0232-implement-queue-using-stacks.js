
var MyQueue = function() {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if(this.q1.length == 0){
        this.q1.push(x);
    } else {
        this.q2 = this.q1;
        this.q1 = [x];
        this.q1.push(...this.q2);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.q1.length == 0) return -1;
    return this.q1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.q1.length == 0) return -1;
    return this.q1[this.q1.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.q1.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */