function debounce(fn, delay) {
  let timer = null;

  return  function hanshu(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this,args)
    }, delay)
  }
}