# Java DSA Textbook

This is a plain static GitHub Pages textbook for anyone learning data structures and algorithms in Java.

The site is intentionally built without GitBook or a JavaScript framework. Each lesson is a separate HTML page under
`lessons/`, so the student does not have to scroll through one extremely long page.

## Structure

- `index.html`: course overview, chapter list, schedule, and deployment notes.
- `lessons/lesson-01.html` through `lessons/lesson-14.html`: individual textbook-style lessons.
- `style.css`: simple textbook layout with a left navigation sidebar.
- `script.js`: small mobile navigation toggle.
- `.nojekyll`: tells GitHub Pages to serve files as-is.

## Lesson style

Each lesson follows this sequence:

1. Start from a concrete example.
2. Explain the underlying principle.
3. Introduce an ADT/interface or pseudo code when the topic is a data structure or reusable algorithm.
4. Show Java implementation details.
5. End with applications, exercises, or checkpoints.

The major DSA chapters now include small interfaces, pseudo code, and Java skeletons, including dynamic arrays, linked
lists, BSTs, heaps, hash maps, graphs, BFS/DFS, DP, and a trie-based autocomplete project.

The writing is mostly English, with student-facing notes and checkpoints.

## Local preview

You can open `index.html` directly in a browser.

Optional local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages deployment

1. Create a GitHub repository.
2. Push this folder to the `main` branch.
3. Go to repository Settings -> Pages.
4. Source: `Deploy from a branch`.
5. Branch: `main`, folder: `/root`.
