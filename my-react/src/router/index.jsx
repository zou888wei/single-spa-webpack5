// import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'

// export default class RouterConfig extends React.Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           {routes.map((route, index) => {
//             return <Route key={index} {...route}></Route>
//           })}
//         </Routes>
//       </Router>
//     )
//   }
// }

// 使用useRoutes 创建
export default function RouterView() {
  // 创建路由
  const elem = useRoutes(routes)
  // 返回接口
  return elem
}
