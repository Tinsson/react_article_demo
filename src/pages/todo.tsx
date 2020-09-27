import React, { useState, useEffect } from 'react'
import { request } from 'umi'
import TodoList, { Todo } from '@/component/TodoList'

function TodoPage () {
  const [todo, setTodo] = useState<Todo[]>([])

  useEffect(() => {
    async function fetchData() {
      const info = await request('/api/todolist')
      setTodo(info)
    }
    fetchData()
  }, [setTodo])

  return (
    <div
      style={{
        padding: '15px',
        width: '450px',
        textAlign: 'center'
      }}
    >
      <img className="logo-pic" src={require('../component/TodoList/logo.png')} />
      <TodoList
        dataSource={todo}
        onChange={(val: Todo[]) => {
          setTodo(val)
        }}
      />
    </div>
  )
}

export default TodoPage
