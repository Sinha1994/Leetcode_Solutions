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
    public static int dfs(TreeNode root, int[] dia) {
        if(root == null) return -1;
        int leftHeight = dfs(root.left, dia);
        int rightHeight = dfs(root.right, dia);
        dia[0] = Math.max(dia[0], 2+leftHeight+rightHeight);
        return 1+Math.max(leftHeight,rightHeight);
    }
    public int diameterOfBinaryTree(TreeNode root) {
        if((root == null) || (root.left == null && root.right == null)) return 0;
        int[] dia = new int[1];
        int height = dfs(root, dia);
        return dia[0];
    }
}