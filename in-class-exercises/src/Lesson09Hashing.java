import java.util.*;

public class Lesson09Hashing {
    static Map<String, Integer> wordFrequency(String sentence) {
        HashMap<String, Integer> freq = new HashMap<>();
        for (String raw : sentence.toLowerCase().split("\\W+")) {
            if (!raw.isEmpty()) freq.put(raw, freq.getOrDefault(raw, 0) + 1);
        }
        return freq;
    }

    static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (seen.containsKey(need)) return new int[] {seen.get(need), i};
            seen.put(nums[i], i);
        }
        return new int[] {-1, -1};
    }

    static List<List<String>> groupAnagrams(String[] words) {
        HashMap<String, List<String>> groups = new HashMap<>();
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            groups.computeIfAbsent(new String(chars), key -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }

    static int countSubarraysWithSumK(int[] nums, int k) {
        HashMap<Integer, Integer> prefixCount = new HashMap<>();
        prefixCount.put(0, 1);
        int prefix = 0, count = 0;
        for (int x : nums) {
            prefix += x;
            count += prefixCount.getOrDefault(prefix - k, 0);
            prefixCount.put(prefix, prefixCount.getOrDefault(prefix, 0) + 1);
        }
        return count;
    }

    static int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int x : nums) set.add(x);
        int best = 0;
        for (int x : set) {
            if (set.contains(x - 1)) continue;
            int cur = x;
            while (set.contains(cur)) cur++;
            best = Math.max(best, cur - x);
        }
        return best;
    }

    record Point(int x, int y) { }

    public static void main(String[] args) {
        Checks.eq(2, wordFrequency("to be or not to be").get("to"));
        Checks.arr(new int[] {0, 1}, twoSum(new int[] {2, 7, 11}, 9));
        Checks.eq(2, groupAnagrams(new String[] {"eat", "tea", "bat"}).size());
        Checks.eq(2, countSubarraysWithSumK(new int[] {1, 1, 1}, 2));
        Checks.eq(4, longestConsecutive(new int[] {100, 4, 200, 1, 3, 2}));
        HashSet<Point> points = new HashSet<>();
        points.add(new Point(1, 2));
        Checks.ok(points.contains(new Point(1, 2)));
        System.out.println("Lesson 9 checks passed.");
    }
}
