export default function Home() {
  return (
    <>
      <div className="p-4">
        <div className="text-xl text-gray-700">Base</div>
        <div className="grid grid-cols-4 gap-2 pt-2">
          <Card label="1.创建组件" path="/base/1" />
          <Card label="2.展示数据" path="/base/2" />
          <Card label="3.条件渲染" path="/base/3" />
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
