import Index from '@/views/home/Index'
import About from '@/views/about/Index'

const routes = [
  {
    path: '/react/about',
    element: <About />
  },
  {
    path: '/',
    element: <Index />
  }
]

export default routes
