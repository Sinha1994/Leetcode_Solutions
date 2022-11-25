/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let getTree = (pre, ino) => {
    if(pre.length == 0 && ino.length == 0){
        return null;
    };
    let root = new TreeNode(pre[0]);
    if(ino.indexOf(pre[0]) != -1){
    let leftLen = ino.indexOf(pre[0]);
    let left = getTree(pre.slice(1,leftLen+1), ino.slice(0, leftLen));
    let right = getTree(pre.slice(leftLen+1), ino.slice(leftLen+1));  
    root.left = left;
    root.right = right;
    }
    return root;
}
var buildTree = function(preorder, inorder) {
    return getTree( preorder, inorder);
};