function PromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    const list = Array.from(promises)
    const total = list.length

    if (total === 0) {
      return resolve([])
    }

    let result = []
    let count = 0
    list.forEach((item,index)=>{
      Promise.resolve(item).then((val)=>{
        count++
        result[index] = {status:'fulfilled',value:val}
        if(count === total){
          resolve(result)
        }
      },(err)=>{
        count++
        result[index] = {status:'rejected',reason:err}
        if(count === total){
          resolve(result)
        }
      })
    })
  })
}