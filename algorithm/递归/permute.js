function permute(nums){
  let res = []
  let path = []
  let used = new Array(nums.length).fill(false)

  function dfs(path,used){
    if(path.length === nums.length){
      res.push([...path])
      return
    }

    for(let i = 0;i<nums.length;i++){
      if(used[i])continue
      used[i] = true
      path.push(nums[i])
      dfs(path,used)
      path.pop()
      used[i] = false
    }
  }

  dfs(path,used)
  return res
}

console.log(permute([1, 2, 3]));
