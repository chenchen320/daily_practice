function  maxPathSum(root){
  let maxSum = -Infinity

  function maxGain(node){
    if(node ===null){
      return 0
    }

    let left_gain = Math.max(0,maxGain(node.left))
    let right_gain = Math.max(0,maxGain(node.right))

    maxSum = Math.max(maxSum,node.val + left_gain + right_gain)

    return node.val + Math.max(left_gain,right_gain)
  }

  maxGain(root)
  return maxSum
}