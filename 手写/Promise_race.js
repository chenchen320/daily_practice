function PromiseRace(promises) {
  const list = Array.from(promises)
  return new Promise((resolve, reject) => {
    list.forEach((item) => {
      Promise.resolve(item).then((val) => {
        resolve(val)
      }, (err) => {
        reject(err)
      })
    })
  })
}