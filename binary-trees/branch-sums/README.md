## Binary Trees: Branch Sums

Write a function that takes in a Binary Tree and returns a list of its branch
sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
branch is a path of nodes in a tree that starts at the root node and ends at
any leaf node.

Each <span>BinaryTree</span> node has an integer <span>value</span>, a
<span>left</span> child node, and a <span>right</span> child node. Children
nodes can either be <span>BinaryTree</span> nodes themselves or
<span>None</span> / <span>null</span>.

### Sample Input

```
tree =     1
        /     \
       2       3
     /   \    /  \
    4     5  6    7
  /   \  /
 8    9 10
```
### Sample Output

```
[15, 16, 18, 10, 11]

// 15 == 1 + 2 + 4 + 8
// 16 == 1 + 2 + 4 + 9
// 18 == 1 + 2 + 5 + 10
// 10 == 1 + 3 + 6
// 11 == 1 + 3 + 7
```
