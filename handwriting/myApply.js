Function.prototype.myApply = function(context,arg){
  if(typeof this != 'function'){
    return TypeError
  }
  let result = null

  let obj = (typeof context == undefined || null) ? globalThis : Object(obj);
  let key = Symbol('fnkey')

  obj[key] = this

  // 这里要对参数进行判断
  if(arg==null){
     result = obj[key]()
  }else if(typeof arg[Symbol.iterator] == 'function'){
     result = obj[key](...arg)
  }else{
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }

  delete obj[key]

  return result
}