import { routerConfig } from '@/router/router-config'

type PageType = {
  label?: string
  path: string
}

export default function Home() {
  // load page
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

  // pagse list
  const basePageList: PageType[] = loadPage('/base')
  const uiPageList: PageType[] = loadPage('/describing-the-ui')
  const respondingList: PageType[] = loadPage('/responding-to-event')

  return (
    <>
      <div className="p-4">
        <Chapter name="Base" pageList={basePageList} />
        <Chapter name="Challenges: Describing the UI" pageList={uiPageList} />
        <Chapter
          name="Challenges: Responding To Event"
          pageList={respondingList}
        />
      </div>
    </>
  )
}

/**
 * current page types
 * */
type IChapterProps = {
  pageList: PageType[]
  name: string
}

/**
 * current page components
 */
function Chapter(props: IChapterProps) {
  return (
    <>
      <div className="pb-4">
        <div className="text-xl text-gray-700">{props.name}</div>
        <div className="grid grid-cols-4 gap-2 pt-2">
          <CardWrapper pageList={props.pageList}></CardWrapper>
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
        <div className="flex h-full items-center justify-center rounded bg-gray-100 p-4 text-center text-gray-600 hover:bg-gray-300">
          <div>{props.label}</div>
        </div>
      </a>
    </>
  )
}
