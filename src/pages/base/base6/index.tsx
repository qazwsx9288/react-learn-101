// 使用useState来管理状态
import { useState } from 'react'

// 页面标题
export const pageTitle = '数据更新'

export default function base() {
  return (
    <>
      <div className="p-4">
        <div>
          1：<MyButton></MyButton>
        </div>
        <div>
          2：<MyButton></MyButton>
        </div>
      </div>
    </>
  )
}

function MyButton() {
  // useState接收1个参数，并返回一个数组
  // useState的入参：是count的初始值
  // 数组第0个：count 是创建的数据
  // 数组第1个：setCount 是用于更新数据的方法
  const [count, setCount] = useState(0)

  function handleClick() {
    // 点击按钮后，使count的值在自身的基础上+1
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>{`点击了${count}次`}</button>
    </>
  )
}
