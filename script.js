const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  sidebar.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      sidebar.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const studyData = {
  "01": {
    outcomes: [
      "Explain DSA as operation design, not a memorized list of structures.",
      "Separate an ADT's public behavior from its implementation.",
      "Trace Java arrays, objects, and references without confusing values and references."
    ],
    recall: [
      "What operation does an array make cheap?",
      "Why is an interface useful before choosing an implementation?",
      "When would a HashSet beat an array for the same task?"
    ],
    practice: "Implement a tiny ADT, then write one test for every public method.",
    misunderstanding: "Do not confuse the interface with the storage choice. The same ADT can be implemented with different structures."
  },
  "02": {
    outcomes: [
      "Convert loops and recursion into cost functions.",
      "Distinguish upper bounds, lower bounds, and tight bounds.",
      "Use Master Theorem and expected-value reasoning at a beginner-friendly level."
    ],
    recall: [
      "What does n mean in your analysis?",
      "Is your bound O, Omega, or Theta?",
      "Which line of code dominates the running time?"
    ],
    practice: "Analyze first, then run examples only to check your prediction.",
    misunderstanding: "Big-O is not a stopwatch result. It describes growth as input size increases."
  },
  "03": {
    outcomes: [
      "Distinguish input space from auxiliary space.",
      "Count stack frames and heap allocations in Java code.",
      "Explain why dynamic array append is amortized O(1)."
    ],
    recall: [
      "Does this algorithm allocate memory proportional to n?",
      "How deep can the recursion stack get?",
      "Which operation is expensive only occasionally?"
    ],
    practice: "Compare an in-place solution with a copy-based solution and explain the tradeoff.",
    misunderstanding: "O(1) auxiliary space does not mean the input uses no memory. It means the extra memory does not grow with input size."
  },
  "04": {
    outcomes: [
      "Choose between binary search, two pointers, sliding window, and prefix sums.",
      "Control array indices without off-by-one errors.",
      "Analyze each pattern by counting pointer movement or preprocessing cost."
    ],
    recall: [
      "Is the array sorted?",
      "Is the window fixed-size or variable-size?",
      "Can preprocessing make repeated range queries cheaper?"
    ],
    practice: "For every array problem, name the pattern before writing code.",
    misunderstanding: "Sliding window is for contiguous ranges. It is not the same as choosing any subset of elements."
  },
  "05": {
    outcomes: [
      "Implement linked list operations using references.",
      "Use stacks, queues, and deques through their allowed operations.",
      "Recognize LIFO, FIFO, and monotonic-stack problem shapes."
    ],
    recall: [
      "Where are insertion and removal allowed?",
      "Does the structure need random access?",
      "What invariant does the stack or queue maintain?"
    ],
    practice: "Draw the references before coding pointer updates.",
    misunderstanding: "A linked list is not faster at everything. It gives up O(1) index access."
  },
  "06": {
    outcomes: [
      "Write recursive methods with a clear contract and base case.",
      "Use backtracking to choose, recurse, and undo choices.",
      "Connect divide-and-conquer code to recurrence analysis."
    ],
    recall: [
      "What smaller problem am I trusting?",
      "What state must be undone after recursion?",
      "How many branches and how deep is the recursion tree?"
    ],
    practice: "Trace one call tree by hand before debugging in Java.",
    misunderstanding: "Returning from recursion is part of the algorithm. Do not only think about calls going downward."
  },
  "07": {
    outcomes: [
      "Traverse trees using recursive DFS and queue-based BFS.",
      "Use BST ordering to search, insert, delete, and validate.",
      "Explain how tree height affects performance."
    ],
    recall: [
      "What is the recursive contract for this subtree?",
      "Does this operation depend on height or total node count?",
      "What invariant must every BST node satisfy?"
    ],
    practice: "For each tree method, say what it returns for an empty tree.",
    misunderstanding: "A binary tree is not automatically a BST. The ordering invariant is extra."
  },
  "08": {
    outcomes: [
      "Use a priority queue when removal order depends on priority.",
      "Implement heap swim, sink, insert, and remove-min/remove-max.",
      "Apply heaps to top-k, median stream, and merge problems."
    ],
    recall: [
      "What is the priority rule?",
      "Does the heap need min-first or max-first behavior?",
      "Why is full sorting unnecessary here?"
    ],
    practice: "Trace one heap operation on the array representation.",
    misunderstanding: "A heap is not fully sorted. It only guarantees the priority relationship between parents and children."
  },
  "09": {
    outcomes: [
      "Use HashMap and HashSet for membership, counting, and grouping.",
      "Explain collisions, load factor, equals, and hashCode.",
      "Recognize map-based patterns such as frequency counts and prefix maps."
    ],
    recall: [
      "What is the key?",
      "What value should the map store?",
      "Could two different keys collide, and why is that okay?"
    ],
    practice: "Write the map meaning in one sentence before coding.",
    misunderstanding: "HashMap order is not reliable. If order matters, use sorting or an ordered map."
  },
  "10": {
    outcomes: [
      "Compare insertion, merge, quick, heap, counting, and radix sort.",
      "Explain stability, in-place behavior, and comparison lower bounds.",
      "Use sorting as preprocessing for larger problems."
    ],
    recall: [
      "What property becomes easier after sorting?",
      "Does stability matter for this input?",
      "What is the worst-case behavior?"
    ],
    practice: "Sort a small example by hand using the algorithm you are implementing.",
    misunderstanding: "A faster asymptotic sort is not always better for tiny or nearly sorted inputs."
  },
  "11": {
    outcomes: [
      "Use Union-Find for dynamic connectivity.",
      "Model problems as vertices and edges.",
      "Choose between adjacency lists, adjacency matrices, DSU, and traversal."
    ],
    recall: [
      "Do I need exact paths or only component membership?",
      "Are edges added over time?",
      "What are V and E in this problem?"
    ],
    practice: "Draw the graph before choosing an algorithm.",
    misunderstanding: "Union-Find answers whether nodes are connected, but it does not give the actual path."
  },
  "12": {
    outcomes: [
      "Apply BFS, DFS, topological sort, Dijkstra, Kruskal, and Prim.",
      "Choose graph algorithms based on the question and edge weights.",
      "Analyze graph algorithms using V and E."
    ],
    recall: [
      "Is the graph weighted or unweighted?",
      "Are edge weights nonnegative?",
      "Is the graph directed, undirected, cyclic, or acyclic?"
    ],
    practice: "Use the decision table before writing a traversal template.",
    misunderstanding: "BFS gives shortest paths only when every edge has the same cost."
  },
  "13": {
    outcomes: [
      "Define DP state, transition, base case, and evaluation order.",
      "Implement memoization and tabulation.",
      "Recognize 1D, grid, subsequence, and knapsack DP patterns."
    ],
    recall: [
      "What does dp[i] or dp[i][j] mean in one sentence?",
      "Which smaller states does this state depend on?",
      "Can space be compressed safely, and what loop direction is required?"
    ],
    practice: "Write the state sentence before writing any Java code.",
    misunderstanding: "A DP table is not meaningful until every entry has a precise sentence definition."
  },
  "14": {
    outcomes: [
      "Build a small project by combining multiple data structures.",
      "Justify trie, map, DFS, heap, and sorting choices by operation.",
      "Write tests and complexity analysis for a multi-file Java program."
    ],
    recall: [
      "Which operation does each structure make cheaper?",
      "What is the public interface?",
      "What edge cases should the tests cover?"
    ],
    practice: "Explain the project as an engineering design, not just as code that passes tests.",
    misunderstanding: "A project is not just a pile of structures. Each structure should be justified by an operation."
  },
  "15": {
    outcomes: [
      "Recognize when a greedy algorithm is plausible.",
      "Implement interval scheduling, meeting rooms, and jump game.",
      "Explain greedy correctness with exchange or stays-ahead arguments."
    ],
    recall: [
      "What local choice is the algorithm making?",
      "Why is that choice safe?",
      "Can I find a counterexample to a similar but wrong greedy rule?"
    ],
    practice: "Try to break the greedy rule before trusting it.",
    misunderstanding: "Greedy is not correct just because it chooses the currently best-looking option. It needs a proof."
  }
};

function createList(items) {
  const list = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
  return list;
}

function addStudyPanel() {
  const match = window.location.pathname.match(/lesson-(\d+)\.html$/);
  if (!match) return;

  const lessonId = match[1];
  const data = studyData[lessonId];
  const content = document.querySelector(".content");
  if (!data || !content || document.querySelector(".study-panel")) return;

  const panel = document.createElement("section");
  panel.className = "study-panel";

  const heading = document.createElement("h2");
  heading.textContent = "Study guide";
  panel.appendChild(heading);

  const intro = document.createElement("p");
  intro.className = "study-intro";
  intro.textContent = "Use this section before and after the lesson. The goal is active recall: explain, trace, implement, and analyze.";
  panel.appendChild(intro);

  const grid = document.createElement("div");
  grid.className = "study-grid";

  const outcomes = document.createElement("div");
  outcomes.className = "study-card";
  outcomes.appendChild(Object.assign(document.createElement("h3"), { textContent: "Learning outcomes" }));
  outcomes.appendChild(createList(data.outcomes));

  const recall = document.createElement("div");
  recall.className = "study-card";
  recall.appendChild(Object.assign(document.createElement("h3"), { textContent: "Active recall" }));
  recall.appendChild(createList(data.recall));

  const practice = document.createElement("div");
  practice.className = "study-card";
  practice.appendChild(Object.assign(document.createElement("h3"), { textContent: "Practice loop" }));
  const practiceText = document.createElement("p");
  practiceText.textContent = data.practice;
  practice.appendChild(practiceText);

  const misunderstanding = document.createElement("div");
  misunderstanding.className = "study-card misunderstanding-card";
  misunderstanding.appendChild(Object.assign(document.createElement("h3"), { textContent: "Common misunderstanding" }));
  const misunderstandingText = document.createElement("p");
  misunderstandingText.textContent = data.misunderstanding;
  misunderstanding.appendChild(misunderstandingText);

  const checklist = document.createElement("div");
  checklist.className = "study-card checklist-card";
  checklist.appendChild(Object.assign(document.createElement("h3"), { textContent: "Progress checklist" }));

  [
    "I can explain the main idea without reading the page.",
    "I traced at least one example by hand.",
    "I can implement the core method from scratch.",
    "I wrote time and space complexity with variable definitions."
  ].forEach((label, index) => {
    const key = `dsa-java-lesson-${lessonId}-check-${index}`;
    const row = document.createElement("label");
    row.className = "check-row";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = localStorage.getItem(key) === "true";
    input.addEventListener("change", () => {
      localStorage.setItem(key, String(input.checked));
    });
    const span = document.createElement("span");
    span.textContent = label;
    row.append(input, span);
    checklist.appendChild(row);
  });

  grid.append(outcomes, recall, practice, misunderstanding, checklist);
  panel.appendChild(grid);

  const anchor = content.querySelector(".visual") || content.querySelector(".summary");
  if (anchor) {
    anchor.insertAdjacentElement("afterend", panel);
  }
}

addStudyPanel();

const keywordSet = new Set([
  "abstract", "assert", "break", "case", "catch", "class", "const", "continue", "default",
  "do", "else", "enum", "extends", "final", "finally", "for", "if", "implements", "import",
  "instanceof", "interface", "new", "package", "private", "protected", "public", "return",
  "static", "super", "switch", "this", "throw", "throws", "try", "void", "while", "record",
  "true", "false", "null"
]);

const typeSet = new Set([
  "boolean", "byte", "char", "double", "float", "int", "long", "short", "String", "Integer",
  "Double", "Boolean", "Character", "Object", "List", "ArrayList", "Map", "HashMap", "Set",
  "HashSet", "Deque", "ArrayDeque", "Random", "NoSuchElementException", "IllegalStateException",
  "IndexOutOfBoundsException", "Math", "Arrays", "System"
]);

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function highlightCode(source) {
  const tokenPattern =
    /(\/\/.*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b|==|!=|<=|>=|&&|\|\||[-+*/%=<>!?:]+)/g;

  let output = "";
  let last = 0;
  let match;

  while ((match = tokenPattern.exec(source)) !== null) {
    const token = match[0];
    output += escapeHtml(source.slice(last, match.index));

    if (token.startsWith("//")) {
      output += `<span class="tok-comment">${escapeHtml(token)}</span>`;
    } else if (token.startsWith("\"") || token.startsWith("'")) {
      output += `<span class="tok-string">${escapeHtml(token)}</span>`;
    } else if (/^\d/.test(token)) {
      output += `<span class="tok-number">${escapeHtml(token)}</span>`;
    } else if (keywordSet.has(token)) {
      output += `<span class="tok-keyword">${escapeHtml(token)}</span>`;
    } else if (typeSet.has(token) || /^[A-Z][A-Za-z0-9_]*$/.test(token)) {
      output += `<span class="tok-type">${escapeHtml(token)}</span>`;
    } else if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(token) && source[tokenPattern.lastIndex] === "(") {
      output += `<span class="tok-method">${escapeHtml(token)}</span>`;
    } else if (/^==|!=|<=|>=|&&|\|\||[-+*/%=<>!?:]+$/.test(token)) {
      output += `<span class="tok-operator">${escapeHtml(token)}</span>`;
    } else {
      output += escapeHtml(token);
    }

    last = tokenPattern.lastIndex;
  }

  output += escapeHtml(source.slice(last));
  return output;
}

document.querySelectorAll("pre code").forEach((block) => {
  block.innerHTML = highlightCode(block.textContent);
});
