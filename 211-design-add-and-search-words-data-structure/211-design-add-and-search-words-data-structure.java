class WordDictionary {
    WordDictionary[] children;
    boolean isEnd;
    public WordDictionary() {
       children = new WordDictionary[26];
       isEnd = false;
    }
    
  public void addWord(String word) {
    WordDictionary curr = this;
    for(int i=0;i<word.length();i++){
        int index = word.charAt(i)-'a';
        if(curr.children[index] == null) {
            curr.children[index] = new WordDictionary();
        }
        curr =  curr.children[index];
     }
    curr.isEnd = true;
   }
    
 public static boolean searchWithDot(int idx, String word, WordDictionary root) {
    WordDictionary curr = root;
    for(int i=idx;i<word.length();i++){
        if(word.charAt(i) == '.') {
            for(int j=0;j<curr.children.length;j++){
                if(curr.children[j] != null){
                  if(searchWithDot(i+1, word, curr.children[j])){
                    return true;
                  } 
               }
            }
            return false;
        } else {
        int index = word.charAt(i)-'a';
        if(curr.children[index] == null){
            return false;
         }
         curr = curr.children[index];  
      }
    }
    return curr.isEnd;
}
    
public boolean search(String word) {
   return searchWithDot(0, word, this);
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */