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
    public List<Integer> postorderTraversal(TreeNode root) {
        LinkedList<Integer> res = new LinkedList<Integer>();
        TreeNode curr = root;
        if(curr == null){
            return res;
        }
        Stack<TreeNode> st = new Stack<TreeNode>();
        st.push(curr);
        while(!st.empty()) {
            TreeNode node = st.pop();
            res.addFirst(node.val);
            if(node.left != null){
                st.push(node.left);
            }
            if(node.right != null){
                st.push(node.right);
            }
        }
       return res;
    }
}