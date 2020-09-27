import React, { useState } from 'react'
import { Input, Button } from 'antd'
import './style.less'

export default function UserSearch({
  onSearch,
  onReset
}: {
  onSearch: (words: string) => void
  onReset: () => void
}) {
  const [filter, setFilter] = useState<string>('')

  const filterChange = (e: any): void => {
    setFilter(e.target.value)
  }

  const resetTrigger = () => {
    setFilter('')
    onReset()
  }

  return (
    <div className="search-box">
      <Input
        value={filter}
        onChange={filterChange}
        className="search-input"
        placeholder="请输入过滤条件"
        onPressEnter={() => {
          onSearch(filter)
        }}
      />
      <Button
        className="search-btn"
        type="primary"
        onClick={() => {
          onSearch(filter)
        }}
      >
        确定
      </Button>
      <Button type="default" onClick={resetTrigger}>重置</Button>
    </div>
  )
}