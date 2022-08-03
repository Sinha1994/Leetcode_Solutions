function nextGreatestLetter(letters: string[], target: string): string {
   let low = 0, high=letters.length;
    while(low<=high){
        let mid = Math.floor(low+(high-low)/2);
        if(letters[mid] == target && mid == letters.length-1){
              return letters[0];
          }
          else if(letters[mid] == target && (mid != letters.length-1 && letters[mid+1] != target)) {
              return letters[mid+1];
          }
         else if(letters[mid] > target && letters[mid-1] > target) {
            high = mid-1;
        } 
        else if(letters[mid] > target && (letters[mid-1] <= target || mid == 0)) {
            return letters[mid];
        } 
        else if(mid > 0){
            low = mid+1;
        }
    }
    return letters[0];
};