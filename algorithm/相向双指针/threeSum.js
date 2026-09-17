/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 防御性判断
  if (nums.length < 3) {
    return []
  }
  // 排序
  nums.sort((a, b) => a - b)

  let threeSum = new Set()
  let n = nums.length
  for (let i = 0; i < n - 2; i++) {
    // 外层去重
    if(i>0 && nums[i] == nums[i-1]){
      continue
    }
    let sum = 0 - nums[i]
    let left = i + 1
    let right = n - 1
    while (left < right) {
      if (nums[left] + nums[right] < sum ) {
        left++
      } else if (nums[left] + nums[right] > sum) {
        right--
      } else {
        threeSum.add([nums[i], nums[left], nums[right]])
        while(left<right && nums[left] == nums[left+1]) left++
        while(left<right && nums[right] == nums[right-1]) right--
        left++
        right--
      }
    }
  }

  const bigArray = [];

  for (const value of threeSum) {
    bigArray.push(value);
  }

  return bigArray
};