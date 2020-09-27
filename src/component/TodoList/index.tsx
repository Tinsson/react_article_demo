import React, { useState } from 'react'
import './style.less'

export interface Todo {
  name: string,
  hasDo: boolean
}

interface TProps {
  dataSource: Todo[],
  onChange: (value: Todo[]) => void
}

function TodoList({
  dataSource,
  onChange
}: TProps) {
  const [itemName, setItemName] = useState('')

  const handleChangeItemName = (e: any) => {
    setItemName(e.target.value);
  }

  const handleAddItem = () => {
    const newList = [
      ...dataSource,
      {
        name: itemName,
        hasDo: false
      }
    ]
    setItemName('')
    onChange(newList)
  }

  const handleItemStatus = (value: boolean, index: number) => {
    const newList = dataSource.map((item, tIndex) => {
      if (tIndex === index) {
        return {
          ...item,
          hasDo: value
        }
      }
      return item
    })
    onChange(newList)
  }

  const handleRemove = (index: number) => {
    const newList = dataSource.filter((item, tIndex) => tIndex !== index)
    onChange(newList)
  }
  
  return (
    <div>
      <div className="input-line">
        <input
          className="todo-input"
          type="text"
          value={itemName}
          onChange={handleChangeItemName}
          onKeyUp={(e: any) => {
            if (e.keyCode === 13) {
              handleAddItem()
            }
          }}
        />
        <button
          className="confirm-btn"
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        <div className="list-head">
          Todo List
        </div>
        <ul className="list-ul">
          {
            dataSource.map((item: any, index: number) => {
              return (
                <li className="list-item" key={index + 1}>
                  <div className="content">
                    <input type="checkbox" checked={item.hasDo} onChange={() => {
                      handleItemStatus(!item.hasDo, index)
                    }} />
                    <span className="item-words">{item.name}</span>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      handleRemove(index)
                    }}
                  >
                    <img className="del-pic" src={require('./delete.svg')} />
                  </button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TodoList
