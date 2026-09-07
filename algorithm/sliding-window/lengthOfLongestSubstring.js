/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0
    let maxLen = 0;
    const set = new Set();
    for(let right =0;right<s.length;right++){
        while(set.has(s[right])){
            left = left +1
            set.delete(s[left])
        }
        set.add(s[right])
    
        maxLen = Math.max(maxLen,right-left+1)
    }
    return maxLen
};