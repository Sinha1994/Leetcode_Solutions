function isPowerOfFour(n: number): boolean {
  if(((n & (n-1)) === 0) && n%3 === 1){
      return true;
  }
  return false;
};