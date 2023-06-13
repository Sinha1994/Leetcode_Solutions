function maxProfit(prices: number[]): number {
   let profit = 0, buy = prices[0], curr = 0;
    for(let i=0;i<prices.length;i++) {
      if(prices[i] <= buy) {
          buy = prices[i];
          profit += curr;
          curr = 0;
      } else {
          if(prices[i]-buy > curr){
              curr = prices[i]-buy;
          } else {
            profit += curr;
            buy = prices[i];
            curr = 0;
          }
      }
    }
    profit += curr;
    return profit;
};