let minSubArrayLen = function (target, nums) {
  let left = 0
  let sum = 0
  let minLen = nums.length + 1
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1)
      sum -= nums[left]
      left++
    }
  }

  return minLen > nums.length ? 0 : minLen;
}