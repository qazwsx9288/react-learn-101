import React from 'react'
import Layout from '@/pages/Layout'
import Home from '@/pages/home'
// import Base1 from '../pages/base/base1'
// import Base2 from '../pages/base/base2'
// import Base3 from '../pages/base/base3'
// import Base4 from '../pages/base/base4'
// import Base5 from '../pages/base/base5'

// 自动引入pages目录下所有的tsx文件
const pages = import.meta.glob('/src/pages/base/*/*.tsx', { eager: true })

// 根据页面文件路径自动生成路由配置
const generateRoutes = () => {
  return Object.entries(pages).map((cur) => {
    const path = cur[0]
    const component = cur[1]
    // 移除路径前缀 移除文件扩展名
    const route = path.replace('/src/pages', '').replace('index.tsx', '')
    // 创建组件
    const element = React.createElement(component.default)
    return { path: route, element }
  })
}

export const routerConfig = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    ...generateRoutes()
  ]
}
