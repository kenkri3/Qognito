import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Personvern from './pages/Personvern'
import Vilkar from './pages/Vilkar'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/personvern', element: <Personvern /> },
  { path: '/vilkar', element: <Vilkar /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
