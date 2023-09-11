import { useMemo } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import RouterView from '@/router'

function App() {
  const isSingleSpa = useMemo(() => !!window.singleSpaNavigate, [])

  return (
    <div className="App">
      <Router>
        {
          !isSingleSpa && (
            <>
              <NavLink to="/">Home</NavLink> |
              <NavLink to="/react/about">about</NavLink>
            </>
          )
        }
        <RouterView />
      </Router>
    </div>
  )
}

export default App
