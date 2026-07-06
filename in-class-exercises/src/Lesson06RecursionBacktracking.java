import java.util.*;

public class Lesson06RecursionBacktracking {
    static int factorial(int n) {
        if (n < 0) throw new IllegalArgumentException("n must be nonnegative");
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }

    static int recursiveSum(int[] a) {
        return recursiveSum(a, 0);
    }

    private static int recursiveSum(int[] a, int index) {
        if (index == a.length) return 0;
        return a[index] + recursiveSum(a, index + 1);
    }

    static List<String> binaryStrings(int n) {
        List<String> out = new ArrayList<>();
        buildBinary(n, new StringBuilder(), out);
        return out;
    }

    private static void buildBinary(int n, StringBuilder path, List<String> out) {
        if (path.length() == n) {
            out.add(path.toString());
            return;
        }
        path.append('0');
        buildBinary(n, path, out);
        path.setCharAt(path.length() - 1, '1');
        buildBinary(n, path, out);
        path.deleteCharAt(path.length() - 1);
    }

    static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> out = new ArrayList<>();
        buildSubsets(nums, 0, new ArrayList<>(), out);
        return out;
    }

    private static void buildSubsets(int[] nums, int index, List<Integer> path, List<List<Integer>> out) {
        if (index == nums.length) {
            out.add(new ArrayList<>(path));
            return;
        }
        buildSubsets(nums, index + 1, path, out);
        path.add(nums[index]);
        buildSubsets(nums, index + 1, path, out);
        path.remove(path.size() - 1);
    }

    static List<List<Integer>> permutations(int[] nums) {
        List<List<Integer>> out = new ArrayList<>();
        buildPermutations(nums, new boolean[nums.length], new ArrayList<>(), out);
        return out;
    }

    private static void buildPermutations(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> out) {
        if (path.size() == nums.length) {
            out.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.add(nums[i]);
            buildPermutations(nums, used, path, out);
            path.remove(path.size() - 1);
            used[i] = false;
        }
    }

    static int recursiveBinarySearch(int[] a, int target) {
        return recursiveBinarySearch(a, target, 0, a.length - 1);
    }

    private static int recursiveBinarySearch(int[] a, int target, int lo, int hi) {
        if (lo > hi) return -1;
        int mid = lo + (hi - lo) / 2;
        if (a[mid] == target) return mid;
        if (a[mid] < target) return recursiveBinarySearch(a, target, mid + 1, hi);
        return recursiveBinarySearch(a, target, lo, mid - 1);
    }

    public static void main(String[] args) {
        Checks.eq(24, factorial(4));
        Checks.eq(10, recursiveSum(new int[] {1, 2, 3, 4}));
        Checks.eq(4, binaryStrings(2).size());
        Checks.eq(8, subsets(new int[] {1, 2, 3}).size());
        Checks.eq(6, permutations(new int[] {1, 2, 3}).size());
        Checks.eq(2, recursiveBinarySearch(new int[] {1, 3, 5}, 5));
        System.out.println("Lesson 6 checks passed.");
    }
}
