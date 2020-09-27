import React, { useState, useRef, PureComponent } from 'react'

function CusTable() {
  const [countdown, setCount] = useState(0)
  const info = useRef(0)

  const handleCount = () => {
    console.log(info.current)
    if (info.current === 10) return
    setTimeout(() => {
      info.current += 1
      handleCount()
    }, 1000)
  }

  return (
    <div onClick={handleCount}>123</div>
  )
}

export default CusTable
