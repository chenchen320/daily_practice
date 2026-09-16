/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const source = new Map();
   for(let i=0;i<=nums.length;i++){
    const current =nums[i];
    const other = target - current;


    if(source.has(other)){
        return [i,source.get(other)]
    }

    source.set(current,i)
   }
};


