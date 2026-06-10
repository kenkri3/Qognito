import { Link } from 'react-router'
import { Cookie, Phone } from 'lucide-react'

const LOGIN_URL = 'https://app.qognito.no'

interface FooterProps {
  onContactClick?: () => void
}

export default function Footer({ onContactClick }: FooterProps) {
  const handleReopenConsent = () => {
    localStorage.removeItem('qognito-cookie-consent-v1')
    window.location.reload()
  }

  // Scroll til seksjon på forsiden (fungerer med HashRouter)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Qognito logo"
                className="w-8 h-8 rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-white">
                Qognito<span className="text-cyan-400">.no</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs mb-4">
              Norsk AI-agent for LinkedIn-salg. Vi hjelper B2B-bedrifter med å få flere møter — helt automatisk.
            </p>
            <a
              href="tel:+4740163082"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Phone size={14} />
              40 16 30 82
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigasjon</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hvordan')}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Hvordan det fungerer
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('funksjoner')}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Funksjoner
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('prising')}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Priser
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  FAQ
                </button>
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
                <button
                  onClick={onContactClick}
                  className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Kontakt support
                </button>
              </li>
              <li>
                <a
                  href="tel:+4740163082"
                  className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone size={14} />
                  40 16 30 82
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

        <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
          {/* Company info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} Qognito. Alle rettigheter reservert.
            </p>
            <p className="text-xs text-zinc-600">
              Drives av AIChat Norge AS (Org.nr: 933 851 222)
            </p>
            <div className="flex items-center gap-4 text-xs text-zinc-600">
              <a href="tel:+4740163082" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                40 16 30 82
              </a>
              <a href="mailto:hei@vikingnet.no" className="hover:text-zinc-400 transition-colors">
                hei@vikingnet.no
              </a>
              <span>Norge</span>
            </div>
          </div>

          {/* Vikingnet credit */}
          <div className="text-center pt-4 border-t border-white/5">
            <p className="text-xs text-zinc-700">
              Utviklet av{' '}
              <a
                href="https://vikingnet.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-cyan-400 transition-colors underline"
              >
                Vikingnet
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
