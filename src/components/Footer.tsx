import { Link } from 'react-router'
import { Cookie } from 'lucide-react'

// BYTT DENNE URLEN NÅR DU FÅR WHITELABEL-LINKEN FRA SCALIQ
const LOGIN_URL = 'https://app.scaliq.ai/login' // ← Oppdater til din whitelabel-URL

export default function Footer() {
  const handleReopenConsent = () => {
    // Remove stored consent to trigger banner again
    localStorage.removeItem('qognito-cookie-consent-v1')
    // Reload page to trigger banner
    window.location.reload()
  }

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">Q</span>
              </div>
              <span className="text-lg font-bold text-white">
                Qognito<span className="text-blue-400">.no</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs">
              Norsk AI-agent for LinkedIn-salg. Vi hjelper B2B-bedrifter med å få flere møter — helt automatisk.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasjon</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#hvordan" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Hvordan det fungerer
                </a>
              </li>
              <li>
                <a href="/#funksjoner" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Funksjoner
                </a>
              </li>
              <li>
                <a href="/#prising" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Priser
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* For kunder */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">For kunder</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Logg inn
                </a>
              </li>
              <li>
                <a href="mailto:hei@qognito.no" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Kontakt support
                </a>
              </li>
            </ul>
          </div>

          {/* Juridisk */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Juridisk</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/personvern" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Personvern
                </Link>
              </li>
              <li>
                <Link to="/vilkar" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                  Vilkår for bruk
                </Link>
              </li>
              <li>
                <button
                  onClick={handleReopenConsent}
                  className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <Cookie size={14} />
                  Endre samtykke
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Qognito. Alle rettigheter reservert.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <span>hei@qognito.no</span>
            <span>Norge</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
