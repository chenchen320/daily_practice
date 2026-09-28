function isSymmetric(root){
  if(root === null) return true
  return check(root.left,root.right)
}

function check(p,q){
  if(p === null && q === null){
    return true
  }else if(p===null || q === null){
    return false
  }else if(p.val !== q.val){
    return false
  }

  let left = check(p.left,q.right)
  let right = check(p.right,q.left)

  return left && right
}