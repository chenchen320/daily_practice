function render(vnode,container){
  if(!vnode) return
  
  if(typeof vnode == 'string' || typeof vnode == 'number'){
    let realTextNode = document.createTextNode(String(vnode))
    container.appendChild(realTextNode)
    return
  }

  let dom = document.createElement(vnode.tag)

  if(vnode.props){
    for(const [key,value] of Object.entries(vnode.props)){
      if(key.startsWith("on")){
        const eventName = key.slice(2).toLowerCase()
        dom.addEventListener(eventName,value)
      }else if(key === 'className'){
        dom.className = value
      }else{
        dom.setAttribute(key,value)
      }
    }
  }

  if(vnode.children){
    const children = Array.isArray(vnode.children) ? vnode.children : [vnode.children]
    for (const childVnode of children) {
      render(childVnode,dom)
    }
  }

  container.appendChild(dom)
}