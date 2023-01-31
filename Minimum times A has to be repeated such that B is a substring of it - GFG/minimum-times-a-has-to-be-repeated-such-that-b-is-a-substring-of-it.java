//{ Driver Code Starts
import java.io.*;
import java.util.*;

class GFG {
    public static void main(String args[]) throws IOException {
        BufferedReader read =
            new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out=new PrintWriter(System.out);
        int t = Integer.parseInt(read.readLine());
        while (t-- > 0) {
            String A = read.readLine();
            String B = read.readLine();

            Solution ob = new Solution();
            out.println(ob.minRepeats(A,B));
        }
        out.close();
    }
}
// } Driver Code Ends


//User function Template for Java

class Solution {
    static int minRepeats(String A, String B) {
        // code here
       if(A.indexOf(B) != -1) return 1;
       int count = 1; String str = A;
       while(A.length() < B.length()) {
           A += str;
           ++count;
       }
       int res = A.indexOf(B);
       if(res != -1)
       return count;
       A += str; ++count; 
       res = A.indexOf(B);
       if(res != -1)
       return count;
       return -1;
    }
};