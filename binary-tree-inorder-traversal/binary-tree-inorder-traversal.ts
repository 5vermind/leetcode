/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const traversal = (root: TreeNode | null, res: number[]) => {
    if(root !== null){
        traversal(root.left, res)
        res.push(root.val)
        traversal(root.right, res)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = []
    traversal(root, result)
    return result
};