function throttle(fn,delay){
  let timer = null
  return function fun(...args){
    if(timer) return
    timer = setTimeout(()=>{
      fn.apply(this,args)
      timer = null
    },delay)
  }
}