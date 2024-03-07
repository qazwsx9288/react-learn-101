// 页面标题
export const pageTitle = '事件响应'

export default function BasePage() {
  return (
    <>
      <div className="p-4">
        <button onClick={handleClick}>Click me</button>
      </div>
    </>
  )
}

function handleClick() {
  alert('You clicked me!')
}
