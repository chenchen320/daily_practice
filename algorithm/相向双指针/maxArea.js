/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left =0
    let right = height.length -1
    let maxArea = 0
    while(left < right){
        let kuan = right - left
        let gao = Math.min(height[left],height[right])
        let are = kuan*gao

        maxArea = Math.max(are,maxArea)

        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
};