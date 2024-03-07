import { routerConfig } from '@/router/router-config'

export default function Home() {
  console.log(routerConfig)

  const basePageList = routerConfig.children
    .filter((page) => {
      if (page.path.startsWith('/base')) {
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

  return (
    <>
      <div className="p-4">
        <div className="text-xl text-gray-700">Base</div>
        <div className="grid grid-cols-4 gap-2 pt-2">
          {basePageList.map((page, index) => {
            return (
              <div key={index}>
                <Card label={`${index + 1}.${page.label}`} path={page.path} />
              </div>
            )
          })}
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
