let currentlyRenderingFiber = null
let workInProgressHook = null
let currentHook = null
let isMount = true

const fiber = {
  memoizedState: null,
  stateNode: App
}

function mountWorkInProgressHook() {
  const hook = {
    memoizedState: null,
    next: null
  }

  if (workInProgressHook === null) {
    currentlyRenderingFiber.memoizedState = hook
    workInProgressHook = hook
  } else {
    workInProgressHook.next = hook
    workInProgressHook = hook
  }

  return hook;
}

function updateWorkInProgressHook() {
  if (currentHook === null) {
    currentHook = fiber.memoizedState
  } else {
    currentHook = currentHook.next
  }

  const hook = { memoizedState: currentHook.memoizedState, next: null }

  if (workInProgressHook === null) {
    currentlyRenderingFiber.memoizedState = hook
    workInProgressHook = hook
  } else {
    workInProgressHook.next = hook
    workInProgressHook = hook
  }

  return hook
}

function useState(initialValue) {
  let hook

  if (isMount) {
    hook = mountWorkInProgressHook()
    hook.memoizedState = initialValue
  } else {
    hook = updateWorkInProgressHook()
  }


  function setState(newValue) {
    hook.memoizedState = newValue
    return scheduleUpdate()
  }

  return [hook.memoizedState, setState]
}



function scheduleUpdate() {
  workInProgressHook = null
  currentHook = null

  isMount = false

  return fiber.stateNode()
}

// 测试组件
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("张三");

  console.log("【渲染完成】当前界面显示：", { count, name });

  return { setCount, setName };
}

// 首次挂载运行！
currentlyRenderingFiber = fiber;
const app = fiber.stateNode();

// 模拟用户点击操作！
console.log("\n--- 用户点击了自增按钮 ---");
app.setCount(1);

console.log("\n--- 用户修改了名字 ---");
app.setName("李四");