import java.util.*;

public class Lesson15Greedy {
    record Interval(int start, int end) { }

    static int maxNonOverlapping(List<Interval> intervals) {
        intervals.sort(Comparator.comparingInt(Interval::end));
        int count = 0;
        int end = Integer.MIN_VALUE;
        for (Interval interval : intervals) {
            if (interval.start() >= end) {
                count++;
                end = interval.end();
            }
        }
        return count;
    }

    static int minMeetingRooms(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        PriorityQueue<Integer> ends = new PriorityQueue<>();
        int best = 0;
        for (int[] meeting : intervals) {
            while (!ends.isEmpty() && ends.peek() <= meeting[0]) ends.remove();
            ends.add(meeting[1]);
            best = Math.max(best, ends.size());
        }
        return best;
    }

    static boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
        }
        return true;
    }

    public static void main(String[] args) {
        List<Interval> intervals = new ArrayList<>(List.of(new Interval(1, 3), new Interval(2, 4), new Interval(3, 5)));
        Checks.eq(2, maxNonOverlapping(intervals));
        Checks.eq(2, minMeetingRooms(new int[][] {{0, 30}, {5, 10}, {15, 20}}));
        Checks.ok(canJump(new int[] {2, 3, 1, 1, 4}));
        Checks.not(canJump(new int[] {3, 2, 1, 0, 4}));
        System.out.println("Lesson 15 checks passed.");
    }
}
