function isPalindrome(s: string): boolean {
   let l = 0, r = s.length-1;
   while(l<r) {
       let lc = s.charCodeAt(l);
       let rc = s.charCodeAt(r);
       if(!((lc > 47 && lc < 58) || (lc > 64 && lc < 91) || (lc > 96 && lc < 123))) { 
           ++l;
       }
       else if(!((rc > 47 && rc < 58) || (rc > 64 && rc < 91) || (rc > 96 && rc < 123))) { 
           --r;
       }
       else if(s[l].toLowerCase() !== s[r].toLowerCase()){
           return false;
       }
       else {
         ++l; --r;
       }
   }
   return true;
};