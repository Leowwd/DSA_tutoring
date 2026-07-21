(() => {
  const problemCopy = {
    "lesson-02": {
      "Contains Duplicate.": {
        description: "<strong>陣列是否含有重複值。</strong>給定整數陣列 <code>nums</code>，判斷是否有任一數值至少出現兩次。",
        input: "<strong>輸入：</strong>一個整數陣列，陣列可以為空。",
        output: "<strong>輸出：</strong>若有重複值則回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>不可修改輸入陣列。",
        example: "<strong>範例：</strong><code>[4, 1, 7, 4]</code> 回傳 <code>true</code>；<code>[4, 1, 7]</code> 回傳 <code>false</code>。"
      },
      "Count Matching Queries.": {
        description: "<strong>計算命中的查詢數。</strong>給定整數陣列 <code>values</code> 與 <code>queries</code>，計算有多少個查詢項目出現在 <code>values</code> 中。",
        input: "<strong>輸入：</strong>一組數值與一串成員查詢。",
        output: "<strong>輸出：</strong>回傳命中的查詢位置數量。",
        constraints: "<strong>限制：</strong>重複出現的查詢必須分別計數。",
        example: "<strong>範例：</strong><code>values = [2, 5, 8]</code>、<code>queries = [5, 5, 7, 8]</code> 時，回傳 <code>3</code>。"
      }
    },
    "lesson-03": {
      "Reverse an Array.": {
        description: "<strong>反轉陣列。</strong>給定整數陣列 <code>a</code>，將元素改成相反順序。",
        input: "<strong>輸入：</strong>一個整數陣列，可以是空陣列。",
        output: "<strong>輸出：</strong><code>reversedCopy</code> 回傳一個新的反轉陣列。",
        constraints: "<strong>限制：</strong><code>reversedCopy</code> 保留原本的 <code>a</code>；<code>reverseInPlace</code> 直接修改 <code>a</code>，且不回傳值。",
        example: "<strong>範例：</strong><code>a = [3, 8, 2]</code> 的反轉結果為 <code>[2, 8, 3]</code>。"
      },
      "Immutable Range Sum.": {
        description: "<strong>靜態陣列的區間總和。</strong>先預處理整數陣列，之後便能快速回答任意左閉右開區間 <code>[left, rightExclusive)</code> 的總和。",
        input: "<strong>輸入：</strong>一個整數陣列，以及合法的區間邊界。",
        output: "<strong>輸出：</strong><code>buildPrefix</code> 回傳前綴和陣列；<code>rangeSum</code> 回傳指定區間的總和。",
        constraints: "<strong>限制：</strong>區間包含 <code>left</code>，但不包含 <code>rightExclusive</code>。",
        example: "<strong>範例：</strong><code>a = [2, 4, -1, 5]</code> 時，區間 <code>[1, 4)</code> 的總和為 <code>8</code>。"
      }
    },
    "lesson-04": {
      "Maximum Array Value.": {
        description: "<strong>陣列最大值。</strong>給定非空整數陣列 <code>a</code>，找出其中最大的數值。",
        input: "<strong>輸入：</strong>一個非空整數陣列。",
        output: "<strong>輸出：</strong>回傳陣列中的最大整數。",
        constraints: "<strong>限制：</strong>不可修改輸入陣列。",
        example: "<strong>範例：</strong><code>[4, -2, 9, 3]</code> 回傳 <code>9</code>。"
      },
      "Binary Search.": {
        description: "<strong>二分搜尋。</strong>給定由小到大排序的整數陣列 <code>a</code> 與目標值 <code>target</code>，找出一個包含目標值的索引。",
        input: "<strong>輸入：</strong>一個遞增排序的整數陣列與一個目標值。",
        output: "<strong>輸出：</strong>回傳任一符合的索引；若目標不存在則回傳 <code>-1</code>。",
        constraints: "<strong>限制：</strong>若有重複值，回傳任一符合的索引皆可。",
        example: "<strong>範例：</strong><code>a = [1, 4, 6, 9]</code>、<code>target = 6</code> 時，回傳 <code>2</code>。"
      },
      "Lower Bound.": {
        description: "<strong>下界搜尋。</strong>給定由小到大排序的整數陣列 <code>a</code>，找出第一個數值大於或等於 <code>target</code> 的索引。",
        input: "<strong>輸入：</strong>一個遞增排序的整數陣列與一個目標值。",
        output: "<strong>輸出：</strong>回傳第一個符合條件的索引。",
        constraints: "<strong>限制：</strong>若沒有符合的位置，回傳 <code>a.length</code>。",
        example: "<strong>範例：</strong><code>a = [1, 3, 3, 8]</code>、<code>target = 3</code> 時，回傳 <code>1</code>。"
      },
      "Two Sum in a Sorted Array.": {
        description: "<strong>已排序陣列的兩數之和。</strong>給定遞增排序的整數陣列 <code>a</code>，找出兩個不同索引，使其數值總和等於 <code>target</code>。",
        input: "<strong>輸入：</strong>一個遞增排序的整數陣列與一個目標總和。",
        output: "<strong>輸出：</strong>回傳 <code>[left, right]</code>，其中 <code>left &lt; right</code>。",
        constraints: "<strong>限制：</strong>若不存在符合的數對，回傳 <code>[-1, -1]</code>。",
        example: "<strong>範例：</strong><code>a = [1, 2, 4, 7, 11]</code>、<code>target = 9</code> 時，回傳 <code>[1, 3]</code>。"
      },
      "Remove Duplicates from a Sorted Array.": {
        description: "<strong>從已排序陣列移除重複值。</strong>直接壓縮遞增排序的整數陣列，讓每個不同數值只在陣列前端出現一次。",
        input: "<strong>輸入：</strong>一個由小到大排序的整數陣列。",
        output: "<strong>輸出：</strong>回傳不同數值的數量 <code>k</code>。",
        constraints: "<strong>限制：</strong>只有前 <code>k</code> 個位置屬於結果。",
        example: "<strong>範例：</strong><code>[1, 1, 2, 2, 5]</code> 回傳 <code>3</code>，且前三個位置為 <code>[1, 2, 5]</code>。"
      },
      "Maximum Sum of a Length-K Subarray.": {
        description: "<strong>長度為 <code>k</code> 的子陣列最大總和。</strong>給定整數陣列 <code>a</code> 與視窗長度 <code>k</code>，找出所有長度為 <code>k</code> 的連續子陣列中，最大的元素總和。",
        input: "<strong>輸入：</strong>一個整數陣列與視窗長度 <code>k</code>。",
        output: "<strong>輸出：</strong>回傳最大的視窗總和。",
        constraints: "<strong>限制：</strong><code>1 &lt;= k &lt;= a.length</code>。",
        example: "<strong>範例：</strong><code>a = [2, -1, 5, 1, 3]</code>、<code>k = 3</code> 時，子陣列 <code>[5, 1, 3]</code> 的總和最大，因此回傳 <code>9</code>。"
      },
      "Minimum-Size Subarray Sum.": {
        description: "<strong>長度最小的子陣列總和。</strong>給定正整數陣列 <code>a</code> 與正整數 <code>target</code>，找出總和至少為目標值的最短非空連續子陣列。",
        input: "<strong>輸入：</strong>一個正整數陣列與一個正目標值。",
        output: "<strong>輸出：</strong>回傳符合條件的最短長度；若不存在則回傳 <code>0</code>。",
        constraints: "<strong>限制：</strong>陣列中的每個數值皆為正數。",
        example: "<strong>範例：</strong><code>a = [2, 3, 1, 2, 4, 3]</code>、<code>target = 7</code> 時，回傳 <code>2</code>。"
      },
      "Range Sum Queries.": {
        description: "<strong>區間總和查詢。</strong>先預處理整數陣列，再回答左閉右開區間 <code>[left, rightExclusive)</code> 的元素總和。",
        input: "<strong>輸入：</strong>一個整數陣列，以及合法的區間邊界。",
        output: "<strong>輸出：</strong>先建立前綴和陣列，再回傳每個指定區間的總和。",
        constraints: "<strong>限制：</strong>區間包含 <code>left</code>，但不包含 <code>rightExclusive</code>。",
        example: "<strong>範例：</strong><code>a = [5, -2, 4, 1]</code> 時，區間 <code>[1, 3)</code> 的總和為 <code>2</code>。"
      },
      "Subarray Sum Equals K.": {
        description: "<strong>和為 <code>k</code> 的子陣列。</strong>給定整數陣列 <code>a</code> 與整數 <code>k</code>，計算元素總和等於 <code>k</code> 的非空連續子陣列數量。",
        input: "<strong>輸入：</strong>一個整數陣列與一個目標總和。",
        output: "<strong>輸出：</strong>回傳符合條件的索引區間數量。",
        constraints: "<strong>限制：</strong>陣列數值可以是負數。",
        example: "<strong>範例：</strong><code>a = [1, 1, 1]</code>、<code>k = 2</code> 時，回傳 <code>2</code>。"
      },
      "Apply Range Additions.": {
        description: "<strong>套用區間加值。</strong>從長度為 <code>n</code> 的全零陣列開始。每筆更新 <code>[left, right, delta]</code> 會將閉區間內的每個位置都加上 <code>delta</code>。",
        input: "<strong>輸入：</strong>陣列長度與一串合法的區間更新。",
        output: "<strong>輸出：</strong>回傳套用全部更新後的最終陣列。",
        constraints: "<strong>限制：</strong>每筆更新的左右端點都包含在更新範圍內。",
        example: "<strong>範例：</strong><code>n = 5</code>、更新為 <code>[[1, 3, 2], [2, 4, -1]]</code> 時，回傳 <code>[0, 2, 1, 1, -1]</code>。"
      }
    },
    "lesson-05": {
      "Reverse a Singly Linked List.": {
        description: "<strong>反轉單向鏈結串列。</strong>給定單向鏈結串列的頭節點，反轉每一條 <code>next</code> 參照。",
        input: "<strong>輸入：</strong>串列的第一個節點；空串列則為 <code>null</code>。",
        output: "<strong>輸出：</strong>回傳反轉後的新頭節點。",
        constraints: "<strong>限制：</strong>重複使用原有節點，不可配置第二條串列。",
        example: "<strong>範例：</strong><code>\"A\" -&gt; \"B\" -&gt; \"C\"</code> 會變成 <code>\"C\" -&gt; \"B\" -&gt; \"A\"</code>。"
      },
      "Linked List Cycle.": {
        description: "<strong>鏈結串列是否有環。</strong>判斷從 <code>head</code> 持續沿著 <code>next</code> 前進時，是否會再次造訪同一個節點。",
        input: "<strong>輸入：</strong>可能為空的單向鏈結串列頭節點。",
        output: "<strong>輸出：</strong>若串列含有環則回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>不可修改串列，且只能使用常數額外空間。",
        example: "<strong>範例：</strong>若 <code>\"A\" -&gt; \"B\" -&gt; \"C\"</code> 的尾節點指回內容為 <code>\"B\"</code> 的節點，則回傳 <code>true</code>。"
      },
      "Valid Parentheses.": {
        description: "<strong>有效括號。</strong>給定只含小括號、中括號與大括號的字串，判斷每個左括號是否依正確順序由相同種類的右括號關閉。",
        input: "<strong>輸入：</strong>只包含 <code>()[]{}</code> 的字串。",
        output: "<strong>輸出：</strong>括號序列有效時回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>空字串視為有效。",
        example: "<strong>範例：</strong><code>\"{[()]}\"</code> 回傳 <code>true</code>；<code>\"([)]\"</code> 回傳 <code>false</code>。"
      },
      "Evaluate a Postfix Expression.": {
        description: "<strong>計算後序表示式。</strong>計算一個有效的逆波蘭表示式；每個項目為整數，或 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 其中一種運算子。",
        input: "<strong>輸入：</strong>代表一個有效後序表示式的項目陣列。",
        output: "<strong>輸出：</strong>回傳整數運算結果。",
        constraints: "<strong>限制：</strong>除法採用向零截斷的整數除法，且除數不會是零。",
        example: "<strong>範例：</strong><code>[\"2\", \"3\", \"+\", \"4\", \"*\"]</code> 代表 <code>(2 + 3) * 4</code>，回傳 <code>20</code>。"
      },
      "Daily Temperatures.": {
        description: "<strong>每日溫度。</strong>對每一天的溫度，找出還要等待幾天才會出現嚴格較高的溫度。",
        input: "<strong>輸入：</strong>依時間先後排列的整數陣列 <code>temps</code>。",
        output: "<strong>輸出：</strong>回傳相同長度的等待天數陣列。",
        constraints: "<strong>限制：</strong>若未來沒有更高溫的日子，該位置填入 <code>0</code>。",
        example: "<strong>範例：</strong><code>[73, 74, 75, 71, 69, 72, 76, 73]</code> 回傳 <code>[1, 1, 4, 2, 1, 1, 0, 0]</code>。"
      }
    },
    "lesson-06": {
      "Subsets.": {
        description: "<strong>子集合。</strong>給定由相異整數組成的陣列，產生它的冪集合。",
        input: "<strong>輸入：</strong>不含重複值的整數陣列 <code>nums</code>。",
        output: "<strong>輸出：</strong>回傳所有可能的子集合，包含空集合。",
        constraints: "<strong>限制：</strong>子集合可以任意順序回傳。",
        example: "<strong>範例：</strong><code>[1, 2]</code> 可依任意順序回傳 <code>[[], [1], [2], [1, 2]]</code>。"
      },
      "Permutations.": {
        description: "<strong>全排列。</strong>給定由相異整數組成的陣列，產生所有恰好使用每個數值一次的排列。",
        input: "<strong>輸入：</strong>所有數值皆相異的整數陣列 <code>nums</code>。",
        output: "<strong>輸出：</strong>回傳全部 <code>nums.length!</code> 種排列。",
        constraints: "<strong>限制：</strong>排列可以任意順序回傳。",
        example: "<strong>範例：</strong><code>[1, 2]</code> 回傳 <code>[[1, 2], [2, 1]]</code>。"
      },
      "Combination Sum.": {
        description: "<strong>組合總和。</strong>給定相異的正整數候選值與正目標值，找出總和恰好等於目標值的所有不重複組合。",
        input: "<strong>輸入：</strong>一個由相異正整數組成的陣列，以及一個正目標值。",
        output: "<strong>輸出：</strong>回傳所有能達成目標值的不重複數值組合。",
        constraints: "<strong>限制：</strong>每個候選值可以選任意多次；只改變組合內順序不會形成新答案，且方法會直接排序 <code>nums</code>。",
        example: "<strong>範例：</strong><code>nums = [2, 3, 6, 7]</code>、<code>target = 7</code> 時，回傳 <code>[[2, 2, 3], [7]]</code>。"
      },
      "Recursive Binary Search.": {
        description: "<strong>遞迴二分搜尋。</strong>給定遞增排序的整數陣列與目標值，以遞迴方式每次排除剩餘範圍的一半來尋找目標。",
        input: "<strong>輸入：</strong>一個已排序的整數陣列與一個目標值。",
        output: "<strong>輸出：</strong>回傳任一符合的索引；若目標不存在則回傳 <code>-1</code>。",
        constraints: "<strong>限制：</strong>若有重複值，回傳任一符合的索引皆可。",
        example: "<strong>範例：</strong><code>a = [2, 5, 8, 12]</code>、<code>target = 8</code> 時，回傳 <code>2</code>。"
      },
      "Merge Sort.": {
        description: "<strong>合併排序。</strong>遞迴排序整數陣列的左右兩半，再將兩半合併，使整個陣列由小到大排列。",
        input: "<strong>輸入：</strong>一個整數陣列，可以是空陣列。",
        output: "<strong>輸出：</strong>方法不回傳值，而是直接將輸入陣列排序。",
        constraints: "<strong>限制：</strong>所有遞迴呼叫共用同一個輔助陣列。",
        example: "<strong>範例：</strong><code>[5, 1, 4, 2]</code> 會變成 <code>[1, 2, 4, 5]</code>。"
      }
    },
    "lesson-07": {
      "Sum of a Binary Tree.": {
        description: "<strong>二元樹節點總和。</strong>給定一棵節點存放整數的二元樹，計算所有節點值的總和。",
        input: "<strong>輸入：</strong>樹的根節點；空樹則為 <code>null</code>。",
        output: "<strong>輸出：</strong>回傳所有節點值的總和。",
        constraints: "<strong>限制：</strong>空樹的總和為 <code>0</code>。",
        example: "<strong>範例：</strong>根節點為 <code>5</code>，左右子節點分別為 <code>2</code> 與 <code>7</code> 時，回傳 <code>14</code>。"
      },
      "Binary Tree Properties.": {
        description: "<strong>二元樹的基本性質。</strong>計算二元樹的節點數與最大深度，並判斷樹中是否含有目標值。",
        input: "<strong>輸入：</strong>一個樹根；<code>contains</code> 另接收一個目標整數。",
        output: "<strong>輸出：</strong>依方法回傳節點數、深度或布林結果。",
        constraints: "<strong>限制：</strong>空樹的節點數與深度皆為 <code>0</code>，且不包含任何值。",
        example: "<strong>範例：</strong>根節點為 <code>5</code>，左右子節點分別為 <code>2</code> 與 <code>7</code> 時，共有 <code>3</code> 個節點、深度為 <code>2</code>，且包含 <code>7</code>。"
      },
      "Binary Tree Level-Order Traversal.": {
        description: "<strong>二元樹的層序走訪。</strong>依節點與根的距離分層整理二元樹，且每一層由左到右走訪。",
        input: "<strong>輸入：</strong>樹的根節點；空樹則為 <code>null</code>。",
        output: "<strong>輸出：</strong>每一層回傳一個數值串列。",
        constraints: "<strong>限制：</strong>空樹回傳空串列。",
        example: "<strong>範例：</strong>層序表示為 <code>[3, 9, 20, null, null, 15, 7]</code> 的樹，回傳 <code>[[3], [9, 20], [15, 7]]</code>。"
      },
      "Validate a Binary Search Tree.": {
        description: "<strong>驗證二元搜尋樹。</strong>判斷二元樹中的每個節點，是否對所有後代都符合嚴格的二元搜尋樹排序規則。",
        input: "<strong>輸入：</strong>一棵二元樹的根節點。",
        output: "<strong>輸出：</strong>只有整棵樹都是有效的二元搜尋樹時才回傳 <code>true</code>。",
        constraints: "<strong>限制：</strong>不可有重複值；空樹視為有效。",
        example: "<strong>範例：</strong>層序表示為 <code>[5, 3, 7, null, 6]</code> 的樹回傳 <code>false</code>，因為 <code>6</code> 位於 <code>5</code> 的左子樹。"
      },
      "Lowest Common Ancestor in a Binary Tree.": {
        description: "<strong>二元樹的最低共同祖先。</strong>找出同時包含兩個目標節點的最深節點；節點本身也視為自己的後代。",
        input: "<strong>輸入：</strong>樹根，以及兩個節點 <code>p</code>、<code>q</code> 的參照。",
        output: "<strong>輸出：</strong>回傳兩個節點的最低共同祖先。",
        constraints: "<strong>限制：</strong>兩個目標節點互不相同，且都存在於樹中。",
        example: "<strong>範例：</strong>若根節點 <code>3</code> 的左右子節點為 <code>5</code> 與 <code>1</code>，這兩個子節點的最低共同祖先就是 <code>3</code>。"
      },
      "Lowest Common Ancestor in a BST.": {
        description: "<strong>二元搜尋樹的最低共同祖先。</strong>利用二元搜尋樹的排序性質，找出子樹同時包含 <code>a</code> 與 <code>b</code> 的最低節點。",
        input: "<strong>輸入：</strong>一個二元搜尋樹的根，以及樹中的兩個數值。",
        output: "<strong>輸出：</strong>回傳最低共同祖先節點。",
        constraints: "<strong>限制：</strong>樹中數值皆不重複，且兩個目標值都存在。",
        example: "<strong>範例：</strong>二元搜尋樹以 <code>6</code> 為根，左側有 <code>2</code>、右側有 <code>8</code> 時，<code>2</code> 與 <code>8</code> 的最低共同祖先是 <code>6</code>。"
      }
    },
    "lesson-08": {
      "Top K Largest Elements.": {
        description: "<strong>前 <code>k</code> 大元素。</strong>給定整數陣列，回傳其中最大的 <code>k</code> 個項目。",
        input: "<strong>輸入：</strong>一個整數陣列與整數 <code>k</code>。",
        output: "<strong>輸出：</strong>恰好回傳 <code>k</code> 個數值，順序不限。",
        constraints: "<strong>限制：</strong><code>0 &lt;= k &lt;= nums.length</code>；重複項目要分別計算。",
        example: "<strong>範例：</strong><code>nums = [3, 1, 5, 12, 2, 11]</code>、<code>k = 3</code> 時，以任意順序回傳 <code>[5, 11, 12]</code>。"
      },
      "Top K Frequent Elements.": {
        description: "<strong>前 <code>k</code> 個高頻元素。</strong>給定整數陣列，回傳出現次數最高的 <code>k</code> 個相異數值。",
        input: "<strong>輸入：</strong>一個整數陣列與正整數 <code>k</code>。",
        output: "<strong>輸出：</strong>回傳 <code>k</code> 個相異數值，順序不限。",
        constraints: "<strong>限制：</strong><code>k</code> 不超過相異數值的數量；頻率相同時可用任意順序決定。",
        example: "<strong>範例：</strong><code>nums = [1, 1, 1, 2, 2, 3]</code>、<code>k = 2</code> 時，以任意順序回傳 <code>[1, 2]</code>。"
      },
      "Merge K Sorted Lists.": {
        description: "<strong>合併 <code>k</code> 個已排序串列。</strong>將多個遞增排序的整數串列合併成一個遞增串列。",
        input: "<strong>輸入：</strong>一組已排序串列，其中個別串列可以為空。",
        output: "<strong>輸出：</strong>回傳包含所有輸入元素的一個排序串列。",
        constraints: "<strong>限制：</strong>保留重複值；相等數值之間不要求特定順序。",
        example: "<strong>範例：</strong><code>[[1, 4], [1, 3, 5], [2, 6]]</code> 回傳 <code>[1, 1, 2, 3, 4, 5, 6]</code>。"
      },
      "Median from a Data Stream.": {
        description: "<strong>資料串流的中位數。</strong>設計一個資料結構，逐一接收整數，並能回傳目前為止所有數值的中位數。",
        input: "<strong>輸入：</strong>若干次 <code>addNum</code> 呼叫，以及其後的中位數查詢。",
        output: "<strong>輸出：</strong><code>findMedian</code> 回傳中間值；若數量為偶數，則回傳中間兩值的平均。",
        constraints: "<strong>限制：</strong>至少插入一個數值後才能呼叫 <code>findMedian</code>。",
        example: "<strong>範例：</strong>加入 <code>2</code> 後中位數為 <code>2.0</code>；再加入 <code>8</code> 後為 <code>5.0</code>；再加入 <code>5</code> 後為 <code>5.0</code>。"
      }
    },
    "lesson-09": {
      "First Repeated Word.": {
        description: "<strong>第一個重複單字。</strong>由左到右掃描單字，回傳第一個在目前位置之前已經出現過的單字。",
        input: "<strong>輸入：</strong>一個字串陣列。",
        output: "<strong>輸出：</strong>回傳第一個重複單字；若每個單字都不重複則回傳 <code>null</code>。",
        constraints: "<strong>限制：</strong>以字串的原始值區分，且大小寫視為不同。",
        example: "<strong>範例：</strong><code>[\"red\", \"blue\", \"red\", \"blue\"]</code> 回傳 <code>\"red\"</code>。"
      },
      "Character Frequency Map.": {
        description: "<strong>字元頻率表。</strong>計算字串中每個字元出現的次數。",
        input: "<strong>輸入：</strong>一個 <code>String</code> 字串。",
        output: "<strong>輸出：</strong>回傳一個映射，將每個出現過的字元對應到其出現次數。",
        constraints: "<strong>限制：</strong>未出現在字串中的字元不需要建立項目。",
        example: "<strong>範例：</strong><code>\"banana\"</code> 回傳 <code>{b=1, a=3, n=2}</code>；映射的走訪順序不固定。"
      },
      "Two Sum.": {
        description: "<strong>兩數之和。</strong>給定未排序的整數陣列，找出兩個不同索引，使其數值總和等於 <code>target</code>。",
        input: "<strong>輸入：</strong>一個整數陣列與一個目標總和。",
        output: "<strong>輸出：</strong>回傳一組符合的索引。",
        constraints: "<strong>限制：</strong>若不存在符合的數對，回傳 <code>[-1, -1]</code>；任一有效數對皆可。",
        example: "<strong>範例：</strong><code>nums = [2, 7, 11, 15]</code>、<code>target = 9</code> 時，回傳 <code>[0, 1]</code>。"
      },
      "Group Anagrams.": {
        description: "<strong>重組字分組。</strong>將單字分組；兩個單字所含字母及各自出現次數完全相同時，才屬於同一組。",
        input: "<strong>輸入：</strong>只含小寫英文字母的字串陣列。",
        output: "<strong>輸出：</strong>回傳所有重組字群組。",
        constraints: "<strong>限制：</strong>各群組可以任意順序回傳。",
        example: "<strong>範例：</strong><code>[\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]</code> 可回傳等同於 <code>[[\"eat\", \"tea\", \"ate\"], [\"tan\", \"nat\"], [\"bat\"]]</code> 的分組。"
      },
      "Subarray Sum Equals K.": {
        description: "<strong>和為 <code>k</code> 的子陣列。</strong>計算 <code>nums</code> 中元素總和等於 <code>k</code> 的非空連續子陣列數量。",
        input: "<strong>輸入：</strong>一個整數陣列與一個整數目標總和。",
        output: "<strong>輸出：</strong>回傳符合條件的索引區間數量。",
        constraints: "<strong>限制：</strong>數值可以是正數、零或負數。",
        example: "<strong>範例：</strong><code>nums = [1, 2, 1, 2]</code>、<code>k = 3</code> 時，回傳 <code>3</code>。"
      },
      "Longest Consecutive Sequence.": {
        description: "<strong>最長連續序列。</strong>在未排序的整數陣列中，找出存在於陣列內的最長連續整數區段長度。",
        input: "<strong>輸入：</strong>一個未排序的整數陣列。",
        output: "<strong>輸出：</strong>回傳最長連續區段的長度。",
        constraints: "<strong>限制：</strong>輸入順序不影響結果，重複值也不會增加區段長度。",
        example: "<strong>範例：</strong><code>[100, 4, 200, 1, 3, 2]</code> 中有區段 <code>1, 2, 3, 4</code>，因此回傳 <code>4</code>。"
      }
    },
    "lesson-10": {
      "Merge Intervals.": {
        description: "<strong>合併區間。</strong>給定多個閉區間 <code>[start, end]</code>，合併所有彼此重疊的區間。",
        input: "<strong>輸入：</strong>一個合法區間陣列，每個區間皆滿足 <code>start &lt;= end</code>。",
        output: "<strong>輸出：</strong>依起點遞增順序回傳互不重疊的合併區間。",
        constraints: "<strong>限制：</strong>共用端點的區間也要合併；方法可以重新排列並重複使用輸入區間陣列。",
        example: "<strong>範例：</strong><code>[[1, 3], [2, 6], [8, 10], [10, 12]]</code> 回傳 <code>[[1, 6], [8, 12]]</code>。"
      },
      "Merge Two Sorted Arrays.": {
        description: "<strong>合併兩個已排序陣列。</strong>將兩個遞增排序的整數陣列合併成一個遞增陣列。",
        input: "<strong>輸入：</strong>兩個各自依遞增順序排列的陣列。",
        output: "<strong>輸出：</strong>回傳包含兩個輸入陣列全部數值的新陣列。",
        constraints: "<strong>限制：</strong>保留重複值，且不可修改任一輸入陣列。",
        example: "<strong>範例：</strong><code>a = [1, 4, 7]</code>、<code>b = [2, 2, 8]</code> 時，回傳 <code>[1, 2, 2, 4, 7, 8]</code>。"
      }
    },
    "lesson-11": {
      "Number of Connected Components.": {
        description: "<strong>連通分量數量。</strong>給定 <code>n</code> 個頂點與若干無向邊，計算圖中有多少個彼此連通的群組。",
        input: "<strong>輸入：</strong>編號 <code>0</code> 到 <code>n - 1</code> 的頂點，以及邊 <code>[u, v]</code>。",
        output: "<strong>輸出：</strong>回傳連通分量的數量，包含孤立頂點。",
        constraints: "<strong>限制：</strong>每個端點都是合法的頂點索引。",
        example: "<strong>範例：</strong><code>n = 5</code>、<code>edges = [[0, 1], [1, 2], [3, 4]]</code> 時，回傳 <code>2</code>。"
      },
      "Cycle Detection in an Undirected Graph.": {
        description: "<strong>偵測無向圖中的環。</strong>判斷無向圖中是否至少含有一個環。",
        input: "<strong>輸入：</strong><code>n</code> 個頂點，以及由 <code>[u, v]</code> 組成的邊串列。",
        output: "<strong>輸出：</strong>若有任一條邊形成環則回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>頂點編號為 <code>0</code> 到 <code>n - 1</code>。",
        example: "<strong>範例：</strong><code>n = 3</code>、<code>edges = [[0, 1], [1, 2], [2, 0]]</code> 時，回傳 <code>true</code>。"
      }
    },
    "lesson-12": {
      "Shortest Path in a Binary Maze.": {
        description: "<strong>二元迷宮中的最短路徑。</strong>從左上角出發，只能水平或垂直通過開放格，並以最少步數到達右下角。",
        input: "<strong>輸入：</strong>一個非空矩形網格；<code>0</code> 表示可通行，<code>1</code> 表示阻擋。",
        output: "<strong>輸出：</strong>回傳最少移動步數；若沒有路徑則回傳 <code>-1</code>。",
        constraints: "<strong>限制：</strong>起點與終點皆可通行，且不可修改輸入網格。",
        example: "<strong>範例：</strong><code>[[0, 0, 1], [1, 0, 0], [1, 1, 0]]</code> 回傳 <code>4</code>。"
      },
      "Connected Components with DFS.": {
        description: "<strong>以深度優先搜尋計算連通分量。</strong>計算以鄰接串列表示的無向圖中有多少個連通分量。",
        input: "<strong>輸入：</strong>每個頂點各有一份鄰居串列。",
        output: "<strong>輸出：</strong>回傳連通分量的數量，包含孤立頂點。",
        constraints: "<strong>限制：</strong>每條無向邊都同時出現在兩個端點的鄰居串列中。",
        example: "<strong>範例：</strong><code>[[1], [0], [3], [2]]</code> 回傳 <code>2</code>。"
      },
      "Number of Islands.": {
        description: "<strong>島嶼數量。</strong>計算二元網格中，由水平或垂直相鄰陸地格形成的群組數量。",
        input: "<strong>輸入：</strong>一個非空矩形網格，其中 <code>'1'</code> 為陸地、<code>'0'</code> 為水域。",
        output: "<strong>輸出：</strong>回傳以上下左右相連所形成的島嶼數量。",
        constraints: "<strong>限制：</strong>此實作會修改輸入網格，將走訪過的陸地做記號。",
        example: "<strong>範例：</strong><code>[['1', '1', '0'], ['0', '1', '0'], ['1', '0', '1']]</code> 含有 <code>3</code> 座島嶼。"
      },
      "Cycle Detection in a Directed Graph.": {
        description: "<strong>偵測有向圖中的環。</strong>判斷有向圖中是否存在一條路徑，會回到同一路徑上已經出現的頂點。",
        input: "<strong>輸入：</strong>以鄰接串列表示的有向圖。",
        output: "<strong>輸出：</strong>若存在任一有向環則回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>圖可以不連通。",
        example: "<strong>範例：</strong><code>[[1], [2], [0]]</code> 回傳 <code>true</code>。"
      },
      "Topological Sort.": {
        description: "<strong>拓樸排序。</strong>排列有向圖的頂點，使每條邊都從較早出現的頂點指向較晚出現的頂點。",
        input: "<strong>輸入：</strong>以鄰接串列表示的有向圖。",
        output: "<strong>輸出：</strong>回傳任一有效的頂點順序。",
        constraints: "<strong>限制：</strong>若有向環使排序不可能，回傳空串列。",
        example: "<strong>範例：</strong>對 <code>[[1, 2], [3], [3], []]</code> 而言，<code>[0, 1, 2, 3]</code> 是一種有效輸出。"
      },
      "Single-Source Shortest Paths.": {
        description: "<strong>單一起點最短路徑。</strong>計算加權圖中，從一個起點到每個頂點的最短距離。",
        input: "<strong>輸入：</strong>一份加權鄰接串列與一個合法的起點。",
        output: "<strong>輸出：</strong>回傳以頂點為索引的 <code>long</code> 距離陣列。",
        constraints: "<strong>限制：</strong>邊權重不得為負；無法到達的頂點保留 <code>Long.MAX_VALUE</code>。",
        example: "<strong>範例：</strong>有邊 <code>0-&gt;1 (4)</code>、<code>0-&gt;2 (1)</code>、<code>2-&gt;1 (2)</code> 時，以 <code>0</code> 為起點會回傳 <code>[0, 3, 1]</code>。"
      },
      "Minimum Spanning Tree with Kruskal.": {
        description: "<strong>以克魯斯卡爾演算法求最小生成樹。</strong>以最小總邊權重且不形成環的方式，連接無向加權圖中的所有頂點。",
        input: "<strong>輸入：</strong><code>n</code> 個頂點，以及一串無向加權邊。",
        output: "<strong>輸出：</strong>回傳最小生成樹的總權重。",
        constraints: "<strong>限制：</strong><code>n &gt;= 1</code>、邊權重非負、每個端點皆合法，且方法不可重排輸入串列；若圖不連通則回傳 <code>-1</code>。",
        example: "<strong>範例：</strong><code>n = 4</code>、邊為 <code>[(0,1,1), (1,2,2), (2,3,1), (0,3,4)]</code> 時，回傳 <code>4</code>。"
      }
    },
    "lesson-13": {
      "Climbing Stairs.": {
        description: "<strong>爬樓梯。</strong>從有 <code>n</code> 階的樓梯底部出發，計算每次走 1 階或 2 階且恰好抵達頂端的不同走法。",
        input: "<strong>輸入：</strong>一個非負整數 <code>n</code>。",
        output: "<strong>輸出：</strong>回傳有效移動序列的數量。",
        constraints: "<strong>限制：</strong>當 <code>n = 0</code> 時，空序列算作一種走法。",
        example: "<strong>範例：</strong><code>n = 4</code> 時，回傳 <code>5</code>。"
      },
      "House Robber.": {
        description: "<strong>房屋竊盜。</strong>從一排房屋中選擇要取得的金額，在不可同時選擇相鄰房屋的條件下，讓總金額最大。",
        input: "<strong>輸入：</strong>依房屋順序排列的非負金額陣列。",
        output: "<strong>輸出：</strong>回傳可以取得的最大金額。",
        constraints: "<strong>限制：</strong>可以不選任何房屋，因此空陣列回傳 <code>0</code>。",
        example: "<strong>範例：</strong><code>[2, 7, 9, 3, 1]</code> 回傳 <code>12</code>。"
      },
      "Unique Grid Paths.": {
        description: "<strong>網格中的不同路徑。</strong>每次只能向右或向下移動一格，計算從左上角到右下角共有多少條路徑。",
        input: "<strong>輸入：</strong>正整數網格尺寸 <code>rows</code> 與 <code>cols</code>。",
        output: "<strong>輸出：</strong>回傳不同有效路徑的數量。",
        constraints: "<strong>限制：</strong>網格中沒有阻擋格。",
        example: "<strong>範例：</strong><code>rows = 3</code>、<code>cols = 7</code> 時，回傳 <code>28</code>。"
      },
      "Minimum Path Sum.": {
        description: "<strong>最小路徑總和。</strong>每次只能向右或向下移動，找出從左上角到右下角的最小路徑總成本。",
        input: "<strong>輸入：</strong>一個非空的矩形整數成本網格。",
        output: "<strong>輸出：</strong>回傳包含起點與終點在內的最小總成本。",
        constraints: "<strong>限制：</strong>方法不會修改成本網格。",
        example: "<strong>範例：</strong><code>[[1, 3, 1], [1, 5, 1], [4, 2, 1]]</code> 回傳 <code>7</code>。"
      },
      "Longest Common Subsequence.": {
        description: "<strong>最長共同子序列。</strong>從兩個字串刪除若干字元且不改變保留字元的順序，找出兩者都能得到的序列最大長度。",
        input: "<strong>輸入：</strong>兩個字串 <code>a</code> 與 <code>b</code>。",
        output: "<strong>輸出：</strong>只回傳最長共同子序列的長度，不需回傳序列本身。",
        constraints: "<strong>限制：</strong>空字串與任何字串的最長共同子序列長度都是 <code>0</code>。",
        example: "<strong>範例：</strong><code>a = \"abcde\"</code>、<code>b = \"ace\"</code> 時，回傳 <code>3</code>。"
      },
      "0/1 Knapsack.": {
        description: "<strong>0/1 背包問題。</strong>在不超過重量上限的條件下選擇物品，使總價值最大。",
        input: "<strong>輸入：</strong>長度相同的 <code>weight</code> 與 <code>value</code> 陣列，以及非負容量。",
        output: "<strong>輸出：</strong>回傳可達成的最大總價值。",
        constraints: "<strong>限制：</strong>每個重量皆為正數，且每件物品最多只能選一次。",
        example: "<strong>範例：</strong><code>weight = [2, 3, 4]</code>、<code>value = [4, 5, 7]</code>、<code>capacity = 5</code> 時，回傳 <code>9</code>。"
      },
      "Coin Change.": {
        description: "<strong>硬幣兌換。</strong>每種硬幣面額都可以重複使用，找出恰好組成目標金額所需的最少硬幣數。",
        input: "<strong>輸入：</strong>若干正整數硬幣面額，以及非負的 <code>amount</code>。",
        output: "<strong>輸出：</strong>回傳最少硬幣數；若無法組成該金額則回傳 <code>-1</code>。",
        constraints: "<strong>限制：</strong><code>1 &lt;= coins.length</code>、每種面額皆為正數，且 <code>0 &lt;= amount &lt;= 10,000</code>。",
        example: "<strong>範例：</strong><code>coins = [1, 3, 4]</code>、<code>amount = 6</code> 時，回傳 <code>2</code>。"
      }
    },
    "lesson-14": {
      "Basic Autocomplete Suggestions.": {
        description: "<strong>基礎自動補全建議。</strong>給定字典與前綴字串，回傳字典中所有以該前綴開頭的詞。",
        input: "<strong>輸入：</strong>一個字串串列與一個前綴字串。",
        output: "<strong>輸出：</strong>依字典原本的順序回傳符合的詞。",
        constraints: "<strong>限制：</strong>比對會區分大小寫；空前綴會符合每個詞。",
        example: "<strong>範例：</strong><code>words = [\"apple\", \"apply\", \"ape\", \"bat\"]</code>、<code>prefix = \"ap\"</code> 時，回傳 <code>[\"apple\", \"apply\", \"ape\"]</code>。"
      }
    },
    "lesson-15": {
      "Interval Scheduling.": {
        description: "<strong>區間排程。</strong>選出數量最多且彼此不重疊的區間。",
        input: "<strong>輸入：</strong>一串滿足 <code>start &lt;= end</code> 的區間。",
        output: "<strong>輸出：</strong>回傳最多能選擇的區間數量。",
        constraints: "<strong>限制：</strong>一個區間可以在前一個已選區間結束時立刻開始；方法可以重新排列輸入串列。",
        example: "<strong>範例：</strong><code>[(1,3), (2,4), (3,5), (5,7)]</code> 回傳 <code>3</code>。"
      },
      "Minimum Meeting Rooms.": {
        description: "<strong>最少會議室數量。</strong>求出能讓每場會議都完整進行所需的最少房間數。",
        input: "<strong>輸入：</strong>會議區間 <code>[start, end]</code>。",
        output: "<strong>輸出：</strong>回傳任一時刻同時進行的最多會議數。",
        constraints: "<strong>限制：</strong>一場會議結束時，房間可立刻供另一場會議使用；方法可以重新排列輸入陣列。",
        example: "<strong>範例：</strong><code>[[0, 30], [5, 10], [15, 20]]</code> 回傳 <code>2</code>。"
      },
      "Jump Game.": {
        description: "<strong>跳躍遊戲。</strong>從索引 <code>0</code> 出發，<code>nums[i]</code> 表示位置 <code>i</code> 的最大跳躍距離，判斷能否到達最後一個索引。",
        input: "<strong>輸入：</strong>一個非空的非負整數陣列。",
        output: "<strong>輸出：</strong>若能到達最後一個索引則回傳 <code>true</code>，否則回傳 <code>false</code>。",
        constraints: "<strong>限制：</strong>每次實際跳躍距離可為 <code>0</code> 到 <code>nums[i]</code> 之間的任一值。",
        example: "<strong>範例：</strong><code>[2, 3, 1, 1, 4]</code> 回傳 <code>true</code>。"
      }
    }
  };

  const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
  const translations = { Problem: "題目" };
  const lesson = window.location.pathname.match(/lesson-\d{2}/)?.[0];
  const lessonCopy = problemCopy[lesson] || {};

  document.querySelectorAll(".problem-statement").forEach((section, index) => {
    const paragraphs = section.querySelectorAll("p");
    const description = paragraphs[1];
    const items = section.querySelectorAll("li");
    const example = section.querySelector(".problem-example");
    const title = description?.querySelector("strong")?.textContent.trim();
    const copy = lessonCopy[title];

    if (description && lesson) {
      description.id = `${lesson}-problem-${index + 1}`;
      section.setAttribute("aria-labelledby", description.id);
    }

    if (!copy || items.length !== 3 || !example) return;

    translations[normalizeText(description.textContent)] = copy.description;
    translations[normalizeText(items[0].textContent)] = copy.input;
    translations[normalizeText(items[1].textContent)] = copy.output;
    translations[normalizeText(items[2].textContent)] = copy.constraints;
    translations[normalizeText(example.textContent)] = copy.example;
  });

  window.problemZhHtml = translations;
})();
