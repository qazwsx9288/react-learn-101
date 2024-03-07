// 页面标题
export const pageTitle = '列表渲染'

export default function base() {
  return (
    <>
      <div className="p-4">
        <ul>{listItems}</ul>
      </div>
    </>
  )
}

// 准备一些数据
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
]

// 通常使用map方法来渲染列表
const listItems = products.map((product) => (
  // 渲染的标签需要加上key属性，key属性要保持唯一性
  <li
    key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
  >
    {product.title}
  </li>
))
