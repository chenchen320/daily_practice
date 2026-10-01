let isValidBST = function(root){
  let res = []
  let isVald = true

  function bts(root){
    if(!isVald){
      return
    }
    if(root === null){
      return 
    }
    bts(root.left)
    if(root.val <=res[res.length -1]){
      isVald = false
      return
    }
    res.push(root.val)
    bts(root.right)
  }

  bts(root)
  return isVald
}