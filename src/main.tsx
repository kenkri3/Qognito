import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Personvern from './pages/Personvern'
import Vilkar from './pages/Vilkar'

const router = createHashRouter([
  { path: '/', element: <Home /> },
  { path: '/personvern', element: <Personvern /> },
  { path: '/vilkar', element: <Vilkar /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
