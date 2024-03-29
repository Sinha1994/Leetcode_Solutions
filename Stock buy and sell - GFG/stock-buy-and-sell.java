//{ Driver Code Starts
// Initial Template for Java

import java.io.*;
import java.util.*;

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br =
            new BufferedReader(new InputStreamReader(System.in));

        int tc = Integer.parseInt(br.readLine().trim());

        while (tc-- > 0) {
            int n = Integer.parseInt(br.readLine().trim());
            int[] price = new int[n];
            String[] str = br.readLine().trim().split(" ");
            for (int i = 0; i < n; i++) {
                price[i] = Integer.parseInt(str[i]);
            }
            Solution sln = new Solution();
            sln.stockBuySell(price, n);
        }
    }
}
// } Driver Code Ends


// User function Template for Java

class Solution {
    public void stockBuySell(int[] price, int n) {
        // code here
        int start = 0, end= 0;
        boolean profit = false;
        for(int i=0;i<n;i++){
           while(i<n-1 && price[i] >= price[i+1]) {
                ++i;
            }
            start = i;
            while(i<n-1 && price[i] < price[i+1]) {
                ++i;
            }
            end = i;
            if(end - start > 0){
                System.out.print("("+start + " " + end+") ");
                profit = true;
            }
        }
        if(!profit) 
        System.out.print("No Profit"); 
        System.out.println();
    }
}