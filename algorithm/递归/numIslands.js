var numIslands = function(grid) {
    let ans = 0
    let m = grid.length
    let n = grid[0].length

    function dfs(i,j){
        if(i<0 || j<0 || i>=m ||j>=n || grid[i][j]=='0'){
            return 
        }

        grid[i][j] = '0'
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] == '1'){
                dfs(i,j)
                ans++
            }
        }
    }

    return ans
};