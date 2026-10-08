function candidate(nums,target){
  let res = []
  let sum = 0
  let path =[]

  nums.sort((a,b)=> a -b)

  function dfs(startIndex,sum){
    if(sum === target){
      res.push([...path])
      return 
    }

    for(let i = startIndex;i<nums.length;i++){
      if(sum+nums[i]>target){
        break
      }
      path.push(nums[i])
      dfs(i,sum+nums[i])
      path.pop()
    }
  }

  dfs(0,sum)
  return res
}