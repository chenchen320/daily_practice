let minStack = function () {
  this.dataStack = []
  this.minStack = []
}

minStack.prototype.push = function (val) {
  this.dataStack.push(val)
  if (this.minStack.length === 0) {
    this.minStack.push(val)
  } else {
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]))
  }
}

minStack.prototype.pop = function () {
  this.dataStack.pop()
  this.minStack.pop()
}

minStack.prototype.top = function () {
  return this.dataStack[this.dataStack.length - 1]
}

minStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}
