import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-lg mx-auto">
      <div className="bg-[#0f0f14] border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-sm text-zinc-300 mb-1">
              Vi bruker cookies for å forbedre opplevelsen din
            </p>
            <p className="text-xs text-zinc-500">
              Ved å fortsette å bruke nettsiden samtykker du i vår bruk av cookies.{' '}
              <a href="/personvern" className="text-cyan-400 hover:text-cyan-300 underline">
                Les mer
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={acceptCookies}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Godta
            </button>
            <button
              onClick={acceptCookies}
              className="p-2 text-zinc-500 hover:text-zinc-300"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
