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
