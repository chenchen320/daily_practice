Function.prototype.myCall = function(context,...args){
  if(typeof this !== 'function'){
    return TypeError
  }

  let obj = (typeof context == 'undefined' || 'null') ? globalThis : Object(obj)
  let key = Symbol('fnkey');

  obj[key] = this

  let result = obj[key](...args)

  delete obj[key]
  
  return result
}