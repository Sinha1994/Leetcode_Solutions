
var Trie = function() {
    this.children = new Array(26);
    this.isEnd = false;
    //this.children.fill(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this;
       for(let i=0;i<word.length;i++) {
           let index = word.charCodeAt(i);
           if(curr.children[index] == null){
               curr.children[index] = new Trie();
           }
          curr = curr.children[index];
     }
   curr.isEnd = true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this;
      for(let i=0;i<word.length;i++) {
          let index = word.charCodeAt(i);
          if(curr.children[index] == null){
              return false;
          }
          curr = curr.children[index];
      }
     return curr.isEnd; 
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
   let curr = this;
     for(let i=0;i<prefix.length;i++) {
         let index = prefix.charCodeAt(i);
         if(curr.children[index] == null) {
             return false;
         }
         curr = curr.children[index];
     }
     return true;
};
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */