// 使用useState来管理状态
import { useState } from 'react'

// 页面标题
export const pageTitle = '组件间数据共享'

export default function BasePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <div className="p-4">
        <div>
          1：<MyButton count={count} handleClick={handleClick}></MyButton>
        </div>
        <div>
          2：<MyButton count={count} handleClick={handleClick}></MyButton>
        </div>
      </div>
    </>
  )
}

type MyButtonPropsType = {
  count: number
  handleClick: () => void
}

// 使用函数的入参来作为组件的参数
function MyButton(props: MyButtonPropsType) {
  const { count, handleClick } = props

  return (
    <>
      <button onClick={handleClick}>{`点击了${count}次`}</button>
    </>
  )
}
