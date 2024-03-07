// 在外部的css文件中编写css
import './index.css'
// 页面标题
export const pageTitle = '创建组件'
// 用 export default 指定主要组件
export default function BasePage() {
  return (
    <>
      {/* 指定css类名时，使用className而不是class */}
      <div className="base1-wrapper">
        {/* 组件首字母必须大写*/}
        <HomeLink />
      </div>
    </>
  )
}

// React的组件由function构成 这是一个最简单的组件
function HomeLink() {
  return (
    // 组件需要被一个标签包裹起来，可以使用空标签
    <>
      <a href="/">Go Home</a>
    </>
  )
}
