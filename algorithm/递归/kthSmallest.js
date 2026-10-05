let kthSmallest = function(root, k) {
  let count = 0
  let ans = 0

  function bts(root){
    if(root === null || count >=k){
      return 
    }
    bts(root.left)
    count++
    if(count ===k){
      ans = root.val
      return
    }
    bts(root.right)
  }

  bts(root)
  return ans 
};
