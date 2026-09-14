const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  static resolve = (val) => {
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = val
      for (const callback of this.onFulfilledCallbacks) {
        callback(this.value)
      }
    }
  }

  static reject = (err) => {
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = err
      for (const callback of this.onRejectedCallbacks) {
        callback(this.reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolveNext, rejectNext) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value)
            resolveNext(x)
          } catch (err) {
            rejectNext(err)
          }
        })
      } else if (this.status === REJECTED) {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason)
            resolveNext(x)
          } catch (err) {
            rejectNext(err)
          }
        })
      } else {
        this.onFulfilledCallbacks.push(onFulfilled)
        this.onRejectedCallbacks.push(onRejected)
      }
    })
  }

 static myAll(promises){
    return new MyPromise((resolve,reject)=>{
      const list = Array.from(promises)
      const total = list.length
      
      if(total === 0){
        return resolve([])
      }

      let result = []
      let count = 0

      list.forEach((item,i)=>{
        MyPromise.resolve(item).then((val)=>{
          result[i] = val
          count++
          if(count === total){
            return resolve(result)
          }
        },(err)=>{
          reject(err)
        })
      })
    })
  }
}



const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('我成功了')
  }, 1000)
})

p1.then((res) => {
  console.log(`测试成功 ${res}`)
}, (err) => {
  console.log(`测试失败${err}`)
})

const p2 = new MyPromise((resolve, reject) => {
  resolve('当前测试立刻拿到同步数据')
})

console.log('1')
p2.then((res) => { console.log('测试成功', res, '2') })
console.log('3')