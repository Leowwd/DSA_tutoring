import java.util.*;

public class Lesson11_12Graphs {
    static class DSU {
        private final int[] parent, size;

        DSU(int n) {
            parent = new int[n];
            size = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        int find(int x) {
            if (parent[x] != x) parent[x] = find(parent[x]);
            return parent[x];
        }

        boolean union(int a, int b) {
            int ra = find(a), rb = find(b);
            if (ra == rb) return false;
            if (size[ra] < size[rb]) {
                int tmp = ra; ra = rb; rb = tmp;
            }
            parent[rb] = ra;
            size[ra] += size[rb];
            return true;
        }

        boolean connected(int a, int b) {
            return find(a) == find(b);
        }
    }

    static List<List<Integer>> adjacencyList(int n, int[][] edges, boolean directed) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
        for (int[] e : edges) {
            graph.get(e[0]).add(e[1]);
            if (!directed) graph.get(e[1]).add(e[0]);
        }
        return graph;
    }

    static int countComponents(int n, int[][] edges) {
        DSU dsu = new DSU(n);
        int count = n;
        for (int[] e : edges) if (dsu.union(e[0], e[1])) count--;
        return count;
    }

    static boolean hasUndirectedCycle(int n, int[][] edges) {
        DSU dsu = new DSU(n);
        for (int[] e : edges) if (!dsu.union(e[0], e[1])) return true;
        return false;
    }

    static int shortestPathUnweighted(List<List<Integer>> graph, int start, int target) {
        int[] dist = new int[graph.size()];
        Arrays.fill(dist, -1);
        Deque<Integer> queue = new ArrayDeque<>();
        queue.addLast(start);
        dist[start] = 0;
        while (!queue.isEmpty()) {
            int node = queue.removeFirst();
            if (node == target) return dist[node];
            for (int next : graph.get(node)) {
                if (dist[next] != -1) continue;
                dist[next] = dist[node] + 1;
                queue.addLast(next);
            }
        }
        return -1;
    }

    static int countComponentsDfs(List<List<Integer>> graph) {
        boolean[] seen = new boolean[graph.size()];
        int count = 0;
        for (int i = 0; i < graph.size(); i++) {
            if (!seen[i]) {
                dfs(graph, i, seen);
                count++;
            }
        }
        return count;
    }

    private static void dfs(List<List<Integer>> graph, int node, boolean[] seen) {
        seen[node] = true;
        for (int next : graph.get(node)) if (!seen[next]) dfs(graph, next, seen);
    }

    static List<Integer> topologicalSort(List<List<Integer>> graph) {
        int[] indegree = new int[graph.size()];
        for (List<Integer> edges : graph) for (int v : edges) indegree[v]++;
        Deque<Integer> queue = new ArrayDeque<>();
        for (int i = 0; i < indegree.length; i++) if (indegree[i] == 0) queue.addLast(i);
        List<Integer> order = new ArrayList<>();
        while (!queue.isEmpty()) {
            int u = queue.removeFirst();
            order.add(u);
            for (int v : graph.get(u)) {
                if (--indegree[v] == 0) queue.addLast(v);
            }
        }
        return order.size() == graph.size() ? order : List.of();
    }

    public static void main(String[] args) {
        int[][] edges = {{0, 1}, {1, 2}, {3, 4}};
        Checks.eq(2, countComponents(5, edges));
        Checks.not(hasUndirectedCycle(3, new int[][] {{0, 1}, {1, 2}}));
        List<List<Integer>> graph = adjacencyList(4, new int[][] {{0, 1}, {1, 2}, {2, 3}}, false);
        Checks.eq(3, shortestPathUnweighted(graph, 0, 3));
        Checks.eq(1, countComponentsDfs(graph));
        List<List<Integer>> dag = adjacencyList(3, new int[][] {{0, 1}, {1, 2}}, true);
        Checks.eq(List.of(0, 1, 2), topologicalSort(dag));
        System.out.println("Lesson 11-12 checks passed.");
    }
}
