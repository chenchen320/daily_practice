function subsets(nums) {
  let res = []
  let path = []

  function dfs(startIndex, path) {
    res.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i])
      dfs(i + 1, path)
      path.pop()
    }
  }

  dfs(0, path)
  return res
}
console.log(subsets([1,2,3]))