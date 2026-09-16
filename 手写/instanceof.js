function _instanceof(instance,classFunc){
  if(typeof instance !== 'Object' || instance == null) return

  let proto = Object.getPrototypeOf(instance);
  while(proto){
    if(proto == classFunc.prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
  return false;
}