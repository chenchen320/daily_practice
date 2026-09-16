Function.prototype.myBind = function(context,...outerArgs){
  if(typeof this != 'function'){
    throw new TypeError('Bind must be called on a function')
  }

  let fn = this
  
  function boundFn(...innerArgs){
    let thisArg = (this instanceof boundFn) ? this : (context || globalThis) 
    let args = [...outerArgs,...innerArgs]

    return fn.apply(thisArg,args)
  }
  boundFn.prototype = Object.create(fn.prototype)

  return boundFn;
}



