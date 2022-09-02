/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        Stack<TreeNode> st = new Stack<TreeNode>();
        TreeNode current = root;
        while(current != null || !st.empty()){
            if(current != null){
                st.push(current);
                current = current.left;
            } else if(!st.empty()){
                TreeNode node = st.pop();
                res.add(node.val);
                current = node.right;
            }
        }
        return res;
    }
}