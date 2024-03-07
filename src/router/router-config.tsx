import React from 'react'
import Layout from '@/pages/Layout'
import Home from '@/pages/home'

// 定义页面组件的类型
type PageComponent = {
  default: React.ComponentType
  pageTitle?: string
}

// 自动引入pages目录下所有的tsx文件
const pages: Record<string, PageComponent> = import.meta.glob(
  '/src/pages/base/*/*.tsx',
  { eager: true }
)

// 根据页面文件路径自动生成路由配置
const generateRoutes = () => {
  return Object.entries(pages).map((cur) => {
    const path = cur[0]
    const component = cur[1]
    // 移除路径前缀 移除文件扩展名
    const route = path.replace('/src/pages', '').replace('index.tsx', '')
    // 创建组件
    const element = React.createElement(component.default)
    // 获取标题
    const title = component.pageTitle
    return {
      path: route,
      element,
      meta: {
        title: title
      }
    }
  })
}

export const routerConfig = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      meta: {
        title: '首页'
      },
      element: <Home />
    },
    ...generateRoutes()
  ]
}
