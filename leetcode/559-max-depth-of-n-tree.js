/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */


function maxDepth(root: Node | null): number {
  if (!root) return 0;
  const depth = 1;
  
  return getDepth(root, depth);
};

function getDepth(node: Node | null, depth: number): number {
  if (!node) return depth;

  const childrenArray = node?.children || [];
  const childrenResult = [depth];

  for(let n of childrenArray) {
      childrenResult.push(getDepth(n, depth + 1));
  }

  return Math.max(...childrenResult);
}
