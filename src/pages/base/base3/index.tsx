// 页面标题
export const pageTitle = '条件渲染'

export default function base() {
  return (
    <>
      <div className="p-4">
        {/* 可以使用三元表达式来实现条件渲染 */}
        {isLogin ? <LoginForm /> : <LogoutForm />}

        {/* 在无需else分支时，可用这样的方式来实现条件渲染 */}
        {isAdmin && <AdminForm />}
      </div>
    </>
  )
}

const isLogin = false
function LoginForm() {
  return (
    <>
      <div>已登录</div>
    </>
  )
}
function LogoutForm() {
  return (
    <>
      <div>未登录</div>
    </>
  )
}

const isAdmin = true
function AdminForm() {
  return (
    <>
      <div>管理员</div>
    </>
  )
}
