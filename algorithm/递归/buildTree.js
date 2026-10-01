function buildTree(preorder, inorder) {
  let n = preorder.length
  let map = new Map()
  for (let i = 0; i < n; i++) {
    map.set(inorder[i], i)
  }
  return helper(0, n - 1, 0, n - 1)

  function helper(pre_start, pre_end, in_start, in_end) {
    if (pre_start > pre_end) {
      return null
    }

    let root_val = preorder[pre_start]
    let root = new TreeNode(root_val)

    let root_idx = map.get(root_val)
    let left_size = root_idx - in_start

    root.left = helper(pre_start + 1, pre_start + left_size, in_start, root_idx - 1)
    root.right = helper(pre_start + 1 + left_size, pre_end, root_idx + 1, in_end)

    return root
  }
}

