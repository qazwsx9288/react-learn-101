export default function Home() {
  return (
    <>
      <div className="p-4">
        <div className="text-xl text-gray-700">Base</div>
        <div className="grid grid-cols-4 gap-2 pt-2">
          <Card label="1.创建组件" path="/base/base1" />
          <Card label="2.展示数据" path="/base/base2" />
          <Card label="3.条件渲染" path="/base/base3" />
          <Card label="4.列表渲染" path="/base/base4" />
          <Card label="5.事件响应" path="/base/base5" />
        </div>
      </div>
    </>
  )
}

function Card(props: { label: string; path: string }) {
  return (
    <>
      <a href={props.path}>
        <div className="rounded bg-gray-100 p-4 text-center text-gray-600 hover:bg-gray-300">
          {props.label}
        </div>
      </a>
    </>
  )
}
