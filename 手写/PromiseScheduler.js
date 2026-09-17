class PromiseScheduler{
  constructor(){
    this.queue = []
    this.limit = 2
    this.runningCount = 0
  }

  add(taskCreator){
    return new Promise((resolve,reject)=>{
      this.queue.push({taskCreator,resolve,reject})
      this.runNext()
    })
  }

  runNext(){
    if(this.runningCount >= this.limit|| this.queue.length === 0){
      return
    }
   let {taskCreator,resolve,reject} = this.queue.shift()
    this.runningCount++
    taskCreator()
    .then((val)=> resolve(val))
    .catch((err)=>reject(err))
    .finally(()=>{
      this.runningCount--
      this.runNext()
    })
  }

}