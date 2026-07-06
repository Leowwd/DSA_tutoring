import java.util.*;

public class Lesson03SpaceAmortization {
    static int[] reversedCopy(int[] a) {
        int[] out = new int[a.length];
        for (int i = 0; i < a.length; i++) out[i] = a[a.length - 1 - i];
        return out;
    }

    static void reverseInPlace(int[] a) {
        int left = 0;
        int right = a.length - 1;
        while (left < right) {
            int tmp = a[left];
            a[left++] = a[right];
            a[right--] = tmp;
        }
    }

    static int factorial(int n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }

    static class SimpleArrayList {
        private int[] data = new int[4];
        private int size;

        void addLast(int value) {
            ensureCapacity(size + 1);
            data[size++] = value;
        }

        void addFirst(int value) {
            ensureCapacity(size + 1);
            for (int i = size; i > 0; i--) data[i] = data[i - 1];
            data[0] = value;
            size++;
        }

        int get(int index) {
            if (index < 0 || index >= size) throw new IndexOutOfBoundsException(index);
            return data[index];
        }

        int size() {
            return size;
        }

        private void ensureCapacity(int needed) {
            if (needed > data.length) data = Arrays.copyOf(data, data.length * 2);
        }
    }

    public static void main(String[] args) {
        Checks.arr(new int[] {3, 2, 1}, reversedCopy(new int[] {1, 2, 3}));
        int[] a = {1, 2, 3};
        reverseInPlace(a);
        Checks.arr(new int[] {3, 2, 1}, a);
        Checks.eq(120, factorial(5));
        SimpleArrayList list = new SimpleArrayList();
        list.addLast(2);
        list.addFirst(1);
        Checks.eq(1, list.get(0));
        Checks.eq(2, list.get(1));
        System.out.println("Lesson 3 checks passed.");
    }
}
