import java.util.*;

public class Lesson04ArrayPatterns {
    static boolean contains(int[] a, int target) {
        for (int x : a) if (x == target) return true;
        return false;
    }

    static int max(int[] a) {
        if (a.length == 0) throw new NoSuchElementException("empty array");
        int best = a[0];
        for (int x : a) best = Math.max(best, x);
        return best;
    }

    static int countAbove(int[] a, int threshold) {
        int count = 0;
        for (int x : a) if (x > threshold) count++;
        return count;
    }

    static int lowerBound(int[] a, int target) {
        int lo = 0;
        int hi = a.length;
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (a[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        return lo;
    }

    static int removeDuplicatesSorted(int[] a) {
        if (a.length == 0) return 0;
        int write = 1;
        for (int read = 1; read < a.length; read++) {
            if (a[read] != a[write - 1]) a[write++] = a[read];
        }
        return write;
    }

    static int maxSumLengthK(int[] a, int k) {
        int window = 0;
        for (int i = 0; i < k; i++) window += a[i];
        int best = window;
        for (int right = k; right < a.length; right++) {
            window += a[right] - a[right - k];
            best = Math.max(best, window);
        }
        return best;
    }

    static int minLengthSubarrayAtLeast(int[] positive, int target) {
        int left = 0, sum = 0, best = Integer.MAX_VALUE;
        for (int right = 0; right < positive.length; right++) {
            sum += positive[right];
            while (sum >= target) {
                best = Math.min(best, right - left + 1);
                sum -= positive[left++];
            }
        }
        return best == Integer.MAX_VALUE ? 0 : best;
    }

    static int[] prefixSums(int[] a) {
        int[] prefix = new int[a.length + 1];
        for (int i = 0; i < a.length; i++) prefix[i + 1] = prefix[i] + a[i];
        return prefix;
    }

    static int rangeSum(int[] prefix, int left, int rightExclusive) {
        return prefix[rightExclusive] - prefix[left];
    }

    static int[] applyRangeIncrements(int length, int[][] updates) {
        int[] diff = new int[length + 1];
        for (int[] update : updates) {
            diff[update[0]] += update[2];
            if (update[1] + 1 < diff.length) diff[update[1] + 1] -= update[2];
        }
        int[] out = new int[length];
        int cur = 0;
        for (int i = 0; i < length; i++) {
            cur += diff[i];
            out[i] = cur;
        }
        return out;
    }

    public static void main(String[] args) {
        Checks.ok(contains(new int[] {1, 2, 3}, 2));
        Checks.eq(5, max(new int[] {1, 5, 3}));
        Checks.eq(2, countAbove(new int[] {1, 5, 3}, 2));
        Checks.eq(2, lowerBound(new int[] {1, 3, 5}, 4));
        int[] dupes = {1, 1, 2, 3, 3};
        Checks.eq(3, removeDuplicatesSorted(dupes));
        Checks.eq(9, maxSumLengthK(new int[] {2, 1, 5, 1, 3}, 3));
        Checks.eq(2, minLengthSubarrayAtLeast(new int[] {2, 3, 1, 2, 4, 3}, 7));
        Checks.eq(10, rangeSum(prefixSums(new int[] {2, 4, 6}), 1, 3));
        Checks.arr(new int[] {2, 5, 5, 3}, applyRangeIncrements(4, new int[][] {{0, 2, 2}, {1, 3, 3}}));
        System.out.println("Lesson 4 checks passed.");
    }
}
