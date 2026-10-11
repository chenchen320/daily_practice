function deepClone(target, map = new WeakMap()) {
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // Date和RegExp都在V8引擎的私有插槽中存储，不是普通的键值对
  // 所以我们通过new 构造函数来重新传入原始值
  if (target instanceof Date) {
    return new Date(target)
  }

  if (target instanceof RegExp) {
    return new RegExp(target)
  }

  //提前占位防止出现死循环 实例:obj.self=obj
  if (map.has(target)) {
    return map.get(target)
  }

  let cloneTarget = new target.constructor()
  map.set(target, cloneTarget)

  for (const key of Reflect.ownKeys(target)) {
    cloneTarget[key] = deepClone(target[key], map)
  }
  return cloneTarget
}

// 类的方法并不直接挂载到实例对象身上，而是挂载到原型链上
// Array.isArray() ? [] :{}来进行硬编码没有考虑到原型链上的方法
// 借鉴loadsh中的写法
// let cloneTarget = new target.constructor()
// target.constructor是数组，就new Array,是对象就new Object,是构造函数User就new User
class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, 我是 ${this.name}`;
  }
}
const user = new User('张三');
const clonedUser = deepClone(user);

console.log(user)
console.log(clonedUser)

console.log(clonedUser.sayHello())