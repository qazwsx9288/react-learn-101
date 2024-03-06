import Layout from '@/pages/Layout'
import Home from '@/pages/home'
import Base1 from '../pages/base/base1'
import Base2 from '../pages/base/base2'
import Base3 from '../pages/base/base3'
import Base4 from '../pages/base/base4'

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
    },
    {
      path: '/base/2',
      element: <Base2 />
    },
    {
      path: '/base/3',
      element: <Base3 />
    },
    {
      path: '/base/4',
      element: <Base4 />
    }
  ]
}
