import java.util.*;

public final class Checks {
    private Checks() { }

    static void ok(boolean value) {
        if (!value) throw new AssertionError("expected true");
    }

    static void not(boolean value) {
        if (value) throw new AssertionError("expected false");
    }

    static void eq(Object expected, Object actual) {
        if (!Objects.equals(expected, actual)) {
            throw new AssertionError("expected " + expected + " but got " + actual);
        }
    }

    static void eq(double expected, double actual) {
        if (Math.abs(expected - actual) > 1e-9) {
            throw new AssertionError("expected " + expected + " but got " + actual);
        }
    }

    static void arr(int[] expected, int[] actual) {
        if (!Arrays.equals(expected, actual)) {
            throw new AssertionError("expected " + Arrays.toString(expected) + " but got " + Arrays.toString(actual));
        }
    }
}
