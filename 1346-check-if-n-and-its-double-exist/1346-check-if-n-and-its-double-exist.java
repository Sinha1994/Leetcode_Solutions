class Solution {
    public void merge(int[] a, int low, int mid, int high){
        int n1 = mid-low+1, n2 = high-mid;
        int[] left = new int[n1]; 
        int[] right = new int[n2];
        for(int i=0;i<n1;i++){
            left[i] = a[low+i];
        }
         for(int i=0;i<n2;i++){
            right[i] = a[mid+1+i];
        }
        int i=0,j=0,k=low;
        while(i<n1 && j<n2){
            if(Math.abs(left[i]) < Math.abs(right[j])){
                a[k++] = left[i++];
            }else{
                a[k++] = right[j++];
            }
        }
       while(i<n1){
          a[k++] = left[i++];
       }
       while(j<n2){
           a[k++] = right[j++];
       }
    }
    public void mergeSort(int[] a, int low, int high){
        if(high>low){
            int mid = low+(high-low)/2;
            mergeSort(a, low, mid);
            mergeSort(a, mid+1, high);
            merge(a, low, mid, high);
        }
    }
    public boolean checkIfExist(int[] arr) {
       mergeSort(arr,0,arr.length-1);
       Set<Integer> div = new HashSet<Integer>();
       for(int i=0;i<arr.length;i++){
           if(div.contains(arr[i]))
           return true;
           div.add(arr[i]*2);
       } 
        return false;
    }
}