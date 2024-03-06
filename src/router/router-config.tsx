import Layout from '@/pages/Layout'
import Home from '@/pages/home'
import Base1 from '../pages/base/base1'

export const routerConfig = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/base/1',
      element: <Base1 />
    }
  ]
}
