# Instructor Prep: In-Class Exercises

This folder contains instructor-facing Java reference implementations for the in-class exercises across the textbook.
It is meant for lesson prep, live coding, and checking expected behavior after students attempt the exercises.

Do not link this folder from the public textbook pages if students should not see reference answers before class.

Compile and run:

```bash
javac src/*.java
java -cp src RunAll
```

Run one lesson only:

```bash
javac src/*.java
java -cp src Lesson10Sorting
```

The code is intentionally plain Java with no external dependencies. In class, use these as a guide for live coding rather than handing them out as the first step.

Main files:

- `Lesson01ScoreBook.java`
- `Lesson03SpaceAmortization.java`
- `Lesson04ArrayPatterns.java`
- `Lesson05LinkedStackQueue.java`
- `Lesson06RecursionBacktracking.java`
- `Lesson07TreesBST.java`
- `Lesson08Heaps.java`
- `Lesson09Hashing.java`
- `Lesson10Sorting.java`
- `Lesson11_12Graphs.java`
- `Lesson13DynamicProgramming.java`
- `Lesson15Greedy.java`
- `RunAll.java`: runs every lesson check.
- `Checks.java`: tiny assertion helper.
- `TEACHING_GUIDE.md`: suggested flow for using the code during tutoring.
