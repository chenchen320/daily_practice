function invertTree(root){
  if(root === null){
    return null
  }

  inverTree(root.left)
  inverTree(root.right)

  [root.left,root.right] = [root.right,root.left]

  return root
}