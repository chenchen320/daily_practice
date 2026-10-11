/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
     let maxArea = 0
    let m = grid.length
    let n = grid[0].length

    function dfs(i,j){
        if(i<0 || j<0 || i>=m ||j>=n || grid[i][j]=='0'){
            return 0
        }

        grid[i][j] = '0'
        let left = dfs(i-1,j)
        let right = dfs(i+1,j)
        let up = dfs(i,j-1)
        let down = dfs(i,j+1)

        return 1+left+right+up+down
    }

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j] == '1'){
              maxArea = Math.max(maxArea,dfs(i,j))
            }
        }
    }

    return maxArea;
};