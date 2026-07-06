public class Lesson13DynamicProgramming {
    static int climbStairs(int n) {
        if (n < 0) return 0;
        int[] dp = new int[Math.max(2, n + 1)];
        dp[0] = 1;
        dp[1] = 1;
        for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
        return dp[n];
    }

    static int rob(int[] money) {
        int twoBack = 0, oneBack = 0;
        for (int x : money) {
            int cur = Math.max(oneBack, twoBack + x);
            twoBack = oneBack;
            oneBack = cur;
        }
        return oneBack;
    }

    static int uniquePaths(int rows, int cols) {
        int[][] dp = new int[rows][cols];
        for (int r = 0; r < rows; r++) dp[r][0] = 1;
        for (int c = 0; c < cols; c++) dp[0][c] = 1;
        for (int r = 1; r < rows; r++) {
            for (int c = 1; c < cols; c++) dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
        }
        return dp[rows - 1][cols - 1];
    }

    static int minPathSum(int[][] cost) {
        int rows = cost.length, cols = cost[0].length;
        int[][] dp = new int[rows][cols];
        dp[0][0] = cost[0][0];
        for (int r = 1; r < rows; r++) dp[r][0] = dp[r - 1][0] + cost[r][0];
        for (int c = 1; c < cols; c++) dp[0][c] = dp[0][c - 1] + cost[0][c];
        for (int r = 1; r < rows; r++) {
            for (int c = 1; c < cols; c++) dp[r][c] = cost[r][c] + Math.min(dp[r - 1][c], dp[r][c - 1]);
        }
        return dp[rows - 1][cols - 1];
    }

    static int lcs(String a, String b) {
        int[][] dp = new int[a.length() + 1][b.length() + 1];
        for (int i = 1; i <= a.length(); i++) {
            for (int j = 1; j <= b.length(); j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];
                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[a.length()][b.length()];
    }

    static int knapsack(int[] weight, int[] value, int capacity) {
        int[] dp = new int[capacity + 1];
        for (int i = 0; i < weight.length; i++) {
            for (int cap = capacity; cap >= weight[i]; cap--) {
                dp[cap] = Math.max(dp[cap], dp[cap - weight[i]] + value[i]);
            }
        }
        return dp[capacity];
    }

    public static void main(String[] args) {
        Checks.eq(8, climbStairs(5));
        Checks.eq(12, rob(new int[] {2, 7, 9, 3, 1}));
        Checks.eq(6, uniquePaths(3, 3));
        Checks.eq(7, minPathSum(new int[][] {{1, 3, 1}, {1, 5, 1}, {4, 2, 1}}));
        Checks.eq(3, lcs("abcde", "ace"));
        Checks.eq(7, knapsack(new int[] {2, 3, 4}, new int[] {4, 5, 6}, 5));
        System.out.println("Lesson 13 checks passed.");
    }
}
