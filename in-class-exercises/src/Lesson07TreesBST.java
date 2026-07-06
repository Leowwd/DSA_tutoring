import java.util.*;

public class Lesson07TreesBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    static TreeNode insertBST(TreeNode root, int value) {
        if (root == null) return new TreeNode(value);
        if (value < root.val) root.left = insertBST(root.left, value);
        else if (value > root.val) root.right = insertBST(root.right, value);
        return root;
    }

    static List<Integer> inorder(TreeNode root) {
        List<Integer> out = new ArrayList<>();
        inorder(root, out);
        return out;
    }

    private static void inorder(TreeNode root, List<Integer> out) {
        if (root == null) return;
        inorder(root.left, out);
        out.add(root.val);
        inorder(root.right, out);
    }

    static int sum(TreeNode root) {
        if (root == null) return 0;
        return root.val + sum(root.left) + sum(root.right);
    }

    static int count(TreeNode root) {
        if (root == null) return 0;
        return 1 + count(root.left) + count(root.right);
    }

    static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> levels = new ArrayList<>();
        if (root == null) return levels;
        Deque<TreeNode> queue = new ArrayDeque<>();
        queue.addLast(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.removeFirst();
                level.add(node.val);
                if (node.left != null) queue.addLast(node.left);
                if (node.right != null) queue.addLast(node.right);
            }
            levels.add(level);
        }
        return levels;
    }

    static boolean isValidBST(TreeNode root) {
        return isValidBST(root, null, null);
    }

    private static boolean isValidBST(TreeNode root, Integer low, Integer high) {
        if (root == null) return true;
        if (low != null && root.val <= low) return false;
        if (high != null && root.val >= high) return false;
        return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);
    }

    static boolean searchBST(TreeNode root, int value) {
        while (root != null) {
            if (value == root.val) return true;
            root = value < root.val ? root.left : root.right;
        }
        return false;
    }

    static int minBST(TreeNode root) {
        while (root.left != null) root = root.left;
        return root.val;
    }

    static int maxBST(TreeNode root) {
        while (root.right != null) root = root.right;
        return root.val;
    }

    static TreeNode lcaBST(TreeNode root, int a, int b) {
        while (root != null) {
            if (a < root.val && b < root.val) root = root.left;
            else if (a > root.val && b > root.val) root = root.right;
            else return root;
        }
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = null;
        for (int x : new int[] {5, 3, 7, 2, 4, 6, 8}) root = insertBST(root, x);
        Checks.eq(List.of(2, 3, 4, 5, 6, 7, 8), inorder(root));
        Checks.eq(35, sum(root));
        Checks.eq(7, count(root));
        Checks.eq(3, maxDepth(root));
        Checks.ok(isValidBST(root));
        Checks.ok(searchBST(root, 6));
        Checks.eq(2, minBST(root));
        Checks.eq(8, maxBST(root));
        Checks.eq(5, lcaBST(root, 2, 8).val);
        System.out.println("Lesson 7 checks passed.");
    }
}
