//{ Driver Code Starts
import java.io.*;
import java.util.*;


class StringArray
{
    public static String[] input(BufferedReader br, int n) throws IOException
    {
        String[] s = br.readLine().trim().split(" ");
        return s;
    }

    public static void print(String[] a)
    {
        for(String e : a)
            System.out.print(e + " ");
        System.out.println();
    }

    public static void print(ArrayList<String> a)
    {
        for(String e : a)
            System.out.print(e + " ");
        System.out.println();
    }
}

class GFG {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t;
        t = Integer.parseInt(br.readLine());
        while(t-- > 0){
            
            int n;
            n = Integer.parseInt(br.readLine());
            
            
            String[] arr = StringArray.input(br, n);
            
            Solution obj = new Solution();
            String res = obj.longestString(n, arr);
            
            System.out.println(res);
            
        }
    }
}

// } Driver Code Ends


class Solution {
    public static String longestString(int n, String[] arr) {
        // code here
        String res = "";
        HashSet<String> set = new HashSet<String>();
        for(int i=0;i<n;i++){
            set.add(arr[i]);
        }
        for(int i=0;i<n;i++){
            int j=0;
            boolean flag = true;
            while(j<arr[i].length()){
                String str = arr[i].substring(0, j+1);
                if(!set.contains(str)){
                    flag = false;
                    break;
                }
                ++j;
            }
            if(flag) {
                if(arr[i].length() > res.length()){
                  res = arr[i];  
                }
                else if(arr[i].length() == res.length() && res.compareTo(arr[i]) > 0) {
                    res = arr[i];
                }
            } 
        }
        return res;
    }
}
        
