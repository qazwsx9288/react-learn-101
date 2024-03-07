// 页面标题
export const pageTitle = '展示数据'

export default function BasePage() {
  return (
    <>
      <div className="p-4">
        {/* 使用"{}"将数据嵌入HTML */}
        <div>{user.name}</div>
        {/**
         * 在style中会看到"style={{}}"这样的双括号，可能会感到困惑。
         * 但实际上只是包裹了一个对象而已。
         * 这意味着在style中，也可以使用js变量
         */}
        <img
          className="rounded-full"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
      </div>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}
