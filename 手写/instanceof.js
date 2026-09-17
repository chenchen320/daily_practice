function _instanceof(instance,classFunc){
  if(typeof instance !== 'object' || instance == null){
    return false
  }

  let proto = Object.getPrototypeOf(instance)
  while(proto){
    if(proto == Object.getPrototypeOf(classFunc)){
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}