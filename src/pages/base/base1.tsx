export default function base1() {
  return (
    <>
      <div className="p-4">
        <HomeLink />
      </div>
    </>
  )
}

// React的组件由function构成 这是一个最简单的组件
function HomeLink() {
  return (
    <>
      <a href="/">Go Home</a>
    </>
  )
}
