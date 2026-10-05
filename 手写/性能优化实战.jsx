import React, { useState } from 'react'
const CARD_STYLE = { padding: '12px', border: '1px solid #ddd' }

const UserCard = React.memo(function UserCard({ user, style, onDelete }) {
  console.log(`🔥 [卡片渲染] ID: ${user.id} - ${user.name} 重新渲染了！`)

  return (
    <div style={style}>
      <span>{user.name}</span>
      <button onClick={() => onDelete(user.id)}>删除</button>
    </div>
  )
})

export default function UserManager() {
  const [keyword, setKeyword] = useState('')
  const [user, setUser] = useState({ id: 101, name: '张三' })

  const handleDelete = useCallback(id => {
    console.log('执行删除:', id)
  },[])

  return (
    <div>
      {/* 1. 父组件自己的输入框，用户打字时频繁触发 setKeyword */}
      <input value={keyword} onChange={e => setKeyword(e.target.value)} placeholder="输入关键词搜索..." />

      {/* 2. 灾难现场：请仔细观察传给子组件的这三个 Props！ */}
      <UserCard
        user={user}
        style={CARD_STYLE} // 👈 陷阱 1：内联对象
        onDelete={handleDelete} // 👈 陷阱 2：内联箭头函数
      />
    </div>
  )
}
