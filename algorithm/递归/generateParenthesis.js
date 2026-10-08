function generateParenthesis(n){
  let res = []
  

  function dfs(path,left,right){
    if(path.length === 2*n){
      res.push(path)
      return 
    }

    if(left<n){
      dfs(path+'(',left+1,right)
    }
    if(right <left){
      dfs(path+')',left,right+1)
    }
  }

  dfs('',0,0)
  return res
}

console.log(generateParenthesis(3))