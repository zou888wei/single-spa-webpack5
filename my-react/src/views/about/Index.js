import { lazy, Suspense } from 'react'

const VTest = lazy(() => import('my_components_react/VTest'))

function about() {
  return (
    <div className="about App-header">
      <h1>This is an about page, I'm is React</h1>
      <Suspense>
        <VTest text="我是Test组件-react版, 哈哈哈, 需要利用Suspense进行处理" />
      </Suspense>
    </div>
  )
}

export default about
