# Teaching Guide: In-Class Exercises

Use this as your prep sheet before tutoring. The goal is not to show every solution immediately. The goal is to lead the student through the reasoning path, then use the reference code to confirm details.

## Recommended live-coding flow

1. Start from the problem statement.
2. Ask the student to name the operation or invariant.
3. Ask for pseudocode before Java.
4. Write the method signature together.
5. Let the student fill the loop or recursive case.
6. Run or mentally trace 2-3 edge cases.
7. Ask for time and space complexity.

## Lesson 1: ScoreBook ADT

Focus:
- Interface before implementation.
- State: backing array and size.
- Scanning methods: `min`, `max`, `average`, `countAbove`, `contains`.

Good questions:
- What happens when the scorebook is empty?
- Which methods are O(1), and which scan all scores?
- Why does `size` differ from `scores.length`?

Use:
- `src/Lesson01ScoreBook.java`

## Lesson 3-4: Arrays, Space, and Patterns

Focus:
- Copy vs in-place mutation.
- Binary search lower bound.
- Sliding window for fixed and variable windows.
- Prefix sums and difference arrays.

Good questions:
- Is modifying the input allowed?
- What does each pointer/index mean?
- Does the window represent a valid state before or after shrinking?

Use:
- `src/Lesson03SpaceAmortization.java`
- `src/Lesson04ArrayPatterns.java`

## Lesson 5: Linked Lists, Stacks, Queues

Focus:
- Draw pointer changes before coding.
- Stack invariant for parentheses.
- Queue behavior as FIFO.
- Monotonic stack for next greater element.

Good questions:
- What should `prev`, `cur`, and `next` mean during reversal?
- When should a node/index leave the monotonic stack?
- Why use `ArrayDeque` instead of `Stack`?

Use:
- `src/Lesson05LinkedStackQueue.java`

## Lesson 6: Recursion and Backtracking

Focus:
- Base case.
- Recursive contract.
- Choose/recurse/undo.
- Output-size complexity.

Good questions:
- What smaller problem are we trusting?
- What state is shared across recursive calls?
- What must be undone after each branch?

Use:
- `src/Lesson06RecursionBacktracking.java`

## Lesson 7: Trees and BSTs

Focus:
- Empty tree behavior.
- Tree recursion contract.
- Traversal order.
- BST low/high bounds.

Good questions:
- Is this a general binary tree or a BST?
- Is the method O(n) or O(h)?
- Does the solution require the tree to be balanced?

Use:
- `src/Lesson07TreesBST.java`

## Lesson 8: Heaps

Focus:
- Heap array index formulas.
- `swim` and `sink`.
- Top-k vs full sorting.
- Two heaps for median stream.

Good questions:
- Is this a min-heap or max-heap?
- What invariant is restored after `swim`?
- Why does top-k use a heap of size k?

Use:
- `src/Lesson08Heaps.java`

## Lesson 9: Hashing

Focus:
- Map meaning sentence.
- Frequency maps.
- Prefix sum + map.
- Records as hash keys.

Good questions:
- What is the key?
- What is the value?
- What does `getOrDefault` represent here?

Use:
- `src/Lesson09Hashing.java`

## Lesson 10: Sorting

Focus:
- Compare sort tradeoffs.
- Sorting as preprocessing.
- Stability and comparator correctness.
- Counting sort when key range is small.

Good questions:
- Does sorting destroy information we need?
- Is stability required?
- Do we need full order or only top-k?

Use:
- `src/Lesson10Sorting.java`

## Lesson 11-12: Graphs

Focus:
- Model vertices and edges first.
- DSU for connectivity only.
- BFS for unweighted shortest path.
- DFS for components/cycles.
- Topological sort for DAGs.

Good questions:
- Is the graph directed?
- Is it weighted?
- Do we need a path or only connected/not connected?
- When do we mark a node seen?

Use:
- `src/Lesson11_12Graphs.java`

## Lesson 13: Dynamic Programming

Focus:
- State sentence before code.
- Transition from smaller states.
- Base cases.
- Space compression direction.

Good questions:
- What does `dp[i]` mean?
- Which states must already be known?
- Why does knapsack loop backward in 1D?

Use:
- `src/Lesson13DynamicProgramming.java`

## Lesson 15: Greedy

Focus:
- Local choice.
- Counterexamples.
- Exchange argument or stays-ahead proof.

Good questions:
- What is the greedy choice?
- Why is it safe?
- Can a similar greedy rule fail?

Use:
- `src/Lesson15Greedy.java`
