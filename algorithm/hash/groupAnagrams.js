/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const source = new Map();
    for(let str of strs){
        const sorted = str.split('').sort().join('');
        if(source.has(sorted)){
            source.get(sorted).push(str)
        }else{
            source.set(sorted,[str])
        }
    }
    return Array.from(source.values())
};