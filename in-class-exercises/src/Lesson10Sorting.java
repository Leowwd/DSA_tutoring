import java.util.*;

public class Lesson10Sorting {
    static int insertionSort(int[] a) {
        int shifts = 0;
        for (int i = 1; i < a.length; i++) {
            int x = a[i], j = i - 1;
            while (j >= 0 && a[j] > x) {
                a[j + 1] = a[j--];
                shifts++;
            }
            a[j + 1] = x;
        }
        return shifts;
    }

    static int selectionSort(int[] a) {
        int comparisons = 0;
        for (int i = 0; i < a.length; i++) {
            int min = i;
            for (int j = i + 1; j < a.length; j++) {
                comparisons++;
                if (a[j] < a[min]) min = j;
            }
            swap(a, i, min);
        }
        return comparisons;
    }

    static void mergeSort(int[] a) {
        mergeSort(a, new int[a.length], 0, a.length);
    }

    private static void mergeSort(int[] a, int[] aux, int lo, int hi) {
        if (hi - lo <= 1) return;
        int mid = lo + (hi - lo) / 2;
        mergeSort(a, aux, lo, mid);
        mergeSort(a, aux, mid, hi);
        int i = lo, j = mid, k = lo;
        while (i < mid && j < hi) aux[k++] = a[i] <= a[j] ? a[i++] : a[j++];
        while (i < mid) aux[k++] = a[i++];
        while (j < hi) aux[k++] = a[j++];
        for (int p = lo; p < hi; p++) a[p] = aux[p];
    }

    static int partition(int[] a, int lo, int hi) {
        int pivot = a[hi], write = lo;
        for (int read = lo; read < hi; read++) {
            if (a[read] <= pivot) swap(a, write++, read);
        }
        swap(a, write, hi);
        return write;
    }

    static int[][] mergeIntervals(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        ArrayList<int[]> merged = new ArrayList<>();
        for (int[] cur : intervals) {
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < cur[0]) merged.add(cur);
            else merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], cur[1]);
        }
        return merged.toArray(new int[0][]);
    }

    static boolean pairSumSorted(int[] nums, int target) {
        Arrays.sort(nums);
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int sum = nums[left] + nums[right];
            if (sum == target) return true;
            if (sum < target) left++;
            else right--;
        }
        return false;
    }

    static int[] countingSortScores(int[] scores) {
        int[] count = new int[101];
        for (int score : scores) count[score]++;
        int[] out = new int[scores.length];
        int index = 0;
        for (int score = 0; score <= 100; score++) {
            for (int c = 0; c < count[score]; c++) out[index++] = score;
        }
        return out;
    }

    private static void swap(int[] a, int i, int j) {
        int tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }

    public static void main(String[] args) {
        int[] a = {5, 2, 4, 1};
        insertionSort(a);
        Checks.arr(new int[] {1, 2, 4, 5}, a);
        int[] b = {3, 1, 2};
        Checks.eq(3, selectionSort(b));
        int[] c = {4, 1, 3, 2};
        mergeSort(c);
        Checks.arr(new int[] {1, 2, 3, 4}, c);
        Checks.ok(pairSumSorted(new int[] {8, 1, 4, 2}, 6));
        Checks.eq(2, mergeIntervals(new int[][] {{1, 3}, {2, 6}, {8, 10}}).length);
        Checks.arr(new int[] {70, 70, 99}, countingSortScores(new int[] {99, 70, 70}));
        System.out.println("Lesson 10 checks passed.");
    }
}
