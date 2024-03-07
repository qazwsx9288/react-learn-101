import { routerConfig } from '@/router/router-config'

type PageType = {
  label?: string
  path: string
}

export default function Home() {
  // 加载页面
  function loadPage(startPath: string) {
    const pages = routerConfig.children
      .filter((page) => {
        if (page.path.startsWith(startPath)) {
          return true
        } else {
          return false
        }
      })
      .map((page) => {
        return {
          label: page?.meta?.title,
          path: page.path
        }
      })

    return pages
  }

  // 页面列表-基础
  const basePageList: PageType[] = loadPage('/base')
  // 页面列表-井字棋
  const ticTacToePageList: PageType[] = loadPage('/tic-tac-toe')

  return (
    <>
      <div className="p-4">
        <div className="pb-4">
          <div className="text-xl text-gray-700">Base</div>
          <div className="grid grid-cols-4 gap-2 pt-2">
            <CardWrapper pageList={basePageList}></CardWrapper>
          </div>
        </div>

        <div className="pb-4">
          <div className="text-xl text-gray-700">井字棋</div>
          <div className="grid grid-cols-4 gap-2 pt-2">
            <CardWrapper pageList={ticTacToePageList}></CardWrapper>
          </div>
        </div>
      </div>
    </>
  )
}

function CardWrapper({ pageList }: { pageList: PageType[] }) {
  return (
    <>
      {pageList.map((page, index) => {
        return (
          <div key={index}>
            <Card label={`${index + 1}.${page.label}`} path={page.path} />
          </div>
        )
      })}
    </>
  )
}

function Card(props: PageType) {
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
