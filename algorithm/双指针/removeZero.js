let removeZero = function(nums){
  let slow = 0
  let fast =0
  while(fast<nums.length){
    if(nums[fast] !== 0){
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }

  for(let i= slow;i<=fast;i++){
    nums[i] =0
  }
}


//更优雅的做法，直接交换 nums[slow]  nums[high]
let removeZero1 = function(nums){
  let slow = 0
  let fast =0
  while(fast<nums.length){
    if(nums[fast] !== 0){
    [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++
    }
    fast++
  }
}