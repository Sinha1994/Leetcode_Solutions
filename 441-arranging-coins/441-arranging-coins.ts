function arrangeCoins(n: number): number {
  if(n == 1 || n == 2) return 1;
  if(n == 3) return 2;
  let low=2, high=n/2;
  while(low<=high){
      let mid = Math.floor(low+(high-low)/2);
      let res = Math.floor(mid*(mid+1)/2);
      if(res == n){
          return mid;
      }
      else if(res>n){
          high = mid-1;
      }
      else{
          low = mid+1;
      }
  }
    return Math.floor(high);
};