import java.util.*;

interface ScoreBook {
    void addScore(int score);
    int size();
    int min();
    int max();
    double average();
    int countAbove(int threshold);
    boolean contains(int score);
}

class ArrayScoreBook implements ScoreBook {
    private int[] scores = new int[4];
    private int size;

    public void addScore(int score) {
        if (size == scores.length) scores = Arrays.copyOf(scores, scores.length * 2);
        scores[size++] = score;
    }

    public int size() {
        return size;
    }

    public int min() {
        requireNonEmpty();
        int best = scores[0];
        for (int i = 1; i < size; i++) best = Math.min(best, scores[i]);
        return best;
    }

    public int max() {
        requireNonEmpty();
        int best = scores[0];
        for (int i = 1; i < size; i++) best = Math.max(best, scores[i]);
        return best;
    }

    public double average() {
        requireNonEmpty();
        int sum = 0;
        for (int i = 0; i < size; i++) sum += scores[i];
        return (double) sum / size;
    }

    public int countAbove(int threshold) {
        int count = 0;
        for (int i = 0; i < size; i++) {
            if (scores[i] > threshold) count++;
        }
        return count;
    }

    public boolean contains(int score) {
        for (int i = 0; i < size; i++) {
            if (scores[i] == score) return true;
        }
        return false;
    }

    private void requireNonEmpty() {
        if (size == 0) throw new NoSuchElementException("empty scorebook");
    }
}

public class Lesson01ScoreBook {
    public static void main(String[] args) {
        ScoreBook book = new ArrayScoreBook();
        book.addScore(88);
        book.addScore(91);
        book.addScore(76);
        Checks.eq(76, book.min());
        Checks.eq(91, book.max());
        Checks.eq(2, book.countAbove(80));
        Checks.eq(85.0, book.average());
        Checks.ok(book.contains(88));
        System.out.println("Lesson 1 checks passed.");
    }
}
