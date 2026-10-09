const lcpObserve = new PerformanceObserver((entryList)=>{
  const entries = entryList.getEntries()
  const lastEntry = entries[entries.length -1]
  console.log('LCP消耗时间',lastEntry.startTime)
  console.log('最大内容大小',lastEntry.size)
  console.log('performance类型',lastEntry.entryType)
  console.log('核心DOM节点', lastEntry.element);
  console.log(lastEntry.url || '为空')
  console.log('挂载的HTMLid',lastEntry.id)
  console.log('entry对象',lastEntry)
})

lcpObserve.observe({type:'largest-contentful-paint',buffered:true})