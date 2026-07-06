import java.util.*;

public class Lesson05LinkedStackQueue {
    static class Node {
        int val;
        Node next;
        Node(int val) { this.val = val; }
    }

    static Node of(int... values) {
        Node dummy = new Node(0), tail = dummy;
        for (int value : values) {
            tail.next = new Node(value);
            tail = tail.next;
        }
        return dummy.next;
    }

    static List<Integer> toList(Node head) {
        List<Integer> out = new ArrayList<>();
        for (Node cur = head; cur != null; cur = cur.next) out.add(cur.val);
        return out;
    }

    static boolean contains(Node head, int target) {
        for (Node cur = head; cur != null; cur = cur.next) {
            if (cur.val == target) return true;
        }
        return false;
    }

    static Node reverse(Node head) {
        Node prev = null, cur = head;
        while (cur != null) {
            Node next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    static boolean validParentheses(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char ch : s.toCharArray()) {
            if (ch == '(' || ch == '[' || ch == '{') stack.addLast(ch);
            else if (ch == ')' || ch == ']' || ch == '}') {
                if (stack.isEmpty()) return false;
                char open = stack.removeLast();
                if ((ch == ')' && open != '(') || (ch == ']' && open != '[') || (ch == '}' && open != '{')) return false;
            }
        }
        return stack.isEmpty();
    }

    static List<String> serveCustomers(List<String> arrivals) {
        Deque<String> queue = new ArrayDeque<>(arrivals);
        List<String> served = new ArrayList<>();
        while (!queue.isEmpty()) served.add(queue.removeFirst());
        return served;
    }

    static int[] nextGreater(int[] a) {
        int[] out = new int[a.length];
        Arrays.fill(out, -1);
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < a.length; i++) {
            while (!stack.isEmpty() && a[i] > a[stack.peekLast()]) out[stack.removeLast()] = a[i];
            stack.addLast(i);
        }
        return out;
    }

    public static void main(String[] args) {
        Node head = of(1, 2, 3);
        Checks.ok(contains(head, 2));
        Checks.eq(List.of(3, 2, 1), toList(reverse(head)));
        Checks.ok(validParentheses("([]{})"));
        Checks.not(validParentheses("([)]"));
        Checks.eq(List.of("A", "B"), serveCustomers(List.of("A", "B")));
        Checks.arr(new int[] {5, 5, -1}, nextGreater(new int[] {2, 1, 5}));
        System.out.println("Lesson 5 checks passed.");
    }
}
