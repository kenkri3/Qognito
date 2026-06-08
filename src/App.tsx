import { useEffect } from 'react'
import { Routes, Route } from 'react-router'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Personvern from './pages/Personvern'
import Vilkar from './pages/Vilkar'

function RemoveKimiAgent() {
  useEffect(() => {
    const removeKimiAgent = () => {
      const selectors = [
        '[data-testid="agent-floating-button"]',
        '[data-testid="agent-chat-widget"]',
        'a[href*="kimi.com/agent"]',
        '.kimi-agent-widget',
        '#kimi-agent',
        '[class*="kimi-agent"]',
        '[class*="KimiAgent"]',
      ]
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          el.remove()
        })
      })
    }

    // Remove immediately and periodically
    removeKimiAgent()
    const interval = setInterval(removeKimiAgent, 500)
    const timeout = setTimeout(() => clearInterval(interval), 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return null
}

export default function App() {
  return (
    <>
      <RemoveKimiAgent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personvern" element={<Personvern />} />
        <Route path="/vilkar" element={<Vilkar />} />
      </Routes>
    </>
  )
}
