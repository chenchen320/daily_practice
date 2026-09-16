/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var arraysEqual = function(array1,array2){
    let n = array1.length;
    for(let i=0;i<n;i++){
        if(array1[i] !== array2[i]){
            return false
        }
    }
    return true
}

const getIndex = (char) => char.charCodeAt(0) - 97

var findAnagrams = function(s, p) {

    const res = []
    const n = s.length
    const m = p.length
    if(m>n){
        return res
    }

    let pCount = new Array(26).fill(0)
    let sCount = new Array(26).fill(0)

    for(let i=0;i<m;i++){
        sCount[getIndex(s[i])]++
        pCount[getIndex(p[i])]++
    }

    if(arraysEqual(sCount,pCount)){
        res.push(0)
    }

    for(let right = m;right<n;right++){
        sCount[getIndex(s[right])]++
        let left = right - m 
        sCount[getIndex(s[left])]--
        if( arraysEqual(sCount,pCount)){
            res.push(left +1 )
        }
    }

    return res
};


