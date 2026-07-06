import java.util.*;

public class Lesson08Heaps {
    static class IntMinHeap {
        private final ArrayList<Integer> heap = new ArrayList<>();

        void add(int value) {
            heap.add(value);
            swim(heap.size() - 1);
        }

        int removeMin() {
            int min = heap.get(0);
            int last = heap.remove(heap.size() - 1);
            if (!heap.isEmpty()) {
                heap.set(0, last);
                sink(0);
            }
            return min;
        }

        private void swim(int i) {
            while (i > 0) {
                int parent = (i - 1) / 2;
                if (heap.get(parent) <= heap.get(i)) break;
                Collections.swap(heap, parent, i);
                i = parent;
            }
        }

        private void sink(int i) {
            while (true) {
                int left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                if (left < heap.size() && heap.get(left) < heap.get(smallest)) smallest = left;
                if (right < heap.size() && heap.get(right) < heap.get(smallest)) smallest = right;
                if (smallest == i) break;
                Collections.swap(heap, i, smallest);
                i = smallest;
            }
        }
    }

    static List<Integer> topKLargest(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        for (int x : nums) {
            heap.add(x);
            if (heap.size() > k) heap.remove();
        }
        ArrayList<Integer> out = new ArrayList<>(heap);
        out.sort(Comparator.reverseOrder());
        return out;
    }

    static List<Integer> mergeKSortedLists(List<List<Integer>> lists) {
        record Entry(int value, int listIndex, int elementIndex) { }
        PriorityQueue<Entry> pq = new PriorityQueue<>(Comparator.comparingInt(Entry::value));
        for (int i = 0; i < lists.size(); i++) {
            if (!lists.get(i).isEmpty()) pq.add(new Entry(lists.get(i).get(0), i, 0));
        }
        List<Integer> out = new ArrayList<>();
        while (!pq.isEmpty()) {
            Entry cur = pq.remove();
            out.add(cur.value());
            int next = cur.elementIndex() + 1;
            if (next < lists.get(cur.listIndex()).size()) pq.add(new Entry(lists.get(cur.listIndex()).get(next), cur.listIndex(), next));
        }
        return out;
    }

    public static void main(String[] args) {
        IntMinHeap heap = new IntMinHeap();
        heap.add(5); heap.add(1); heap.add(3);
        Checks.eq(1, heap.removeMin());
        Checks.eq(List.of(9, 7), topKLargest(new int[] {4, 9, 1, 7}, 2));
        Checks.eq(List.of(1, 2, 3, 4, 5, 6), mergeKSortedLists(List.of(List.of(1, 4), List.of(2, 5), List.of(3, 6))));
        System.out.println("Lesson 8 checks passed.");
    }
}
