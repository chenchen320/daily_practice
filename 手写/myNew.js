function myNew(Fn,...args){
  if(typeof Fn !== 'function'){
    throw TypeError('Fn is not a function')
  }


  let obj =Object.create(Fn.prototype)
  let res = Fn.apply(obj,args)

  return ((typeof res == 'object' && res !== null)|| typeof res == 'function')? res : obj
}