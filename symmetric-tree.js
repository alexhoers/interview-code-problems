// https://leetcode.com/problems/symmetric-tree/
// Resursive solution

// Determine if binary tree is symmetric
const isSymmetric = (root) => {
    if (root == undefined) {
        return true;
    } 
    return isMirror(root.left, root.right);
}

// Determine if the nodes are symmetric
const isMirror = (root1, root2) => {
    // Nodes are symmetric if both are empty
    if (root1 == undefined && root2 == undefined) {
        return true;
    // Nodes are not symmetric if one is empty and another is not
    } else if (root1 == undefined || root2 == undefined) {
        return false;
    // Nodes are symmetric if their root values are equal, 
    // and the left and right nodes are symmetric
    } else {
        return root1.val == root2.val && 
            isMirror(root1.left, root2.right) && 
            isMirror(root1.right, root2.left);
    }
}

// Parses a binary tree from a level order tree (array)
const parseTreeNode = (arr, i) => {
    let root = null;

    if (i < arr.length) {
        root = new TreeNode(arr[i]);

        // Left element of the root is always at position 2*i + 1
        root.left = parseTreeNode(arr, 2*i + 1);

        // Right element of the root is always at position 2*i + 2
        root.right = parseTreeNode(arr, 2*i + 2);
    }

    return root;
}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// const arr = [1,2,2,null,3,null,3];
const arr = [1,2,2,3,4,4,3];

const treeNodes = parseTreeNode(arr, 0);

console.log(treeNodes);

console.log(isSymmetric(treeNodes));
