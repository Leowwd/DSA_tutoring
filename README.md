# Java DSA Textbook

A static GitHub Pages textbook for learning data structures and algorithms in Java.

The site is intentionally built without GitBook or a JavaScript framework. Each lesson is a separate HTML page under
`lessons/`, so chapters remain readable and linkable.

## Public Site Structure

- `index.html`: course overview, visual demos, chapter list, and schedule.
- `lessons/lesson-01.html` through `lessons/lesson-15.html`: textbook-style lessons.
- `roadmap.html`: high-level decision guide for choosing structures and patterns.
- `selection-guide.html`: bridge page for choosing Java data structures by operation.
- `invariants.html`: bridge page for reasoning about correctness.
- `debugging-checklist.html`: common DSA bugs, edge cases, and tracing routine.
- `real-systems.html`: real-world DSA case studies.
- `resources.html`: external visualization and Java reference links.
- `assignments.html`: GitHub submission expectations and rubric.
- `assets/diagrams/`: self-contained SVG diagrams used by lessons.
- `style.css`: GitBook-like textbook layout and code styling.
- `script.js`: mobile navigation, code highlighting, and lesson study-guide injection.
- `problem-translations.js`: Traditional Chinese copy for the structured lesson problem statements.
- `.nojekyll`: tells GitHub Pages to serve files as-is.

## Instructor-Only Material

- `in-class-exercises/`: instructor prep code and teaching notes for live coding.

This folder is not linked from the public site. The GitHub Pages workflow publishes a generated `_site/` folder and
intentionally excludes `in-class-exercises/`. If the GitHub repository itself is public, the folder is still visible in
the repository source; move it to a private repo if it must be fully hidden from students.

## Lesson Style

Each lesson follows this sequence:

1. Start from a concrete example.
2. Explain the underlying principle.
3. Introduce an ADT/interface, invariant, pseudo code, or decision table.
4. Show Java implementation details.
5. Analyze time and space complexity.
6. End with exercises, homework, or checkpoints.

The curriculum covers time/space complexity, arrays, linked lists, stacks, queues, recursion, trees, heaps, hashing,
sorting, union-find, graph algorithms, dynamic programming, greedy algorithms, and an autocomplete capstone.

## Local Development

This is a static site. You can preview it with any local static server:

```bash
python3 -m http.server 8765
```

Then open:

```text
http://localhost:8765/index.html
```

Java instructor exercises require a JDK. JDK 21 LTS is recommended.

```bash
cd in-class-exercises
javac src/*.java
java -cp src RunAll
```

## GitHub Pages Deployment

Deployment is handled by `.github/workflows/pages.yml`. The workflow builds `_site/` from public textbook files and
deploys that folder to the `gh-pages` branch.
