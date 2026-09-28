function maxDepth(root) {
  if (root === null) {
    return 0
  }
  let leftLen = maxDepth(root.left)
  let rightLen = maxDepth(root.right)

  return Math.max(leftLen, rightLen) + 1
}