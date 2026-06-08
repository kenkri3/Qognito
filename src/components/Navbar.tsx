import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, LogIn } from 'lucide-react'

const navLinks = [
  { href: '/#hvordan', label: 'Hvordan det fungerer' },
  { href: '/#funksjoner', label: 'Funksjoner' },
  { href: '/#prising', label: 'Priser' },
  { href: '/#faq', label: 'FAQ' },
]

// Whitelabel login URL for Qognito
const LOGIN_URL = 'https://app.qognito.no'

interface NavbarProps {
  onDemoClick?: () => void
}

export default function Navbar({ onDemoClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        setIsMobileOpen(false)
      }
    } else if (href.startsWith('/#')) {
      setIsMobileOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with image */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="Qognito logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Qognito<span className="text-cyan-400">.no</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA buttons + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Logg inn - desktop */}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-sm text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all"
            >
              <LogIn size={16} />
              Logg inn
            </a>

            <button
              onClick={onDemoClick}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Book gratis demo
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Logg inn - mobile */}
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileOpen(false)}
            >
              <LogIn size={16} />
              Logg inn
            </a>

            <button
              onClick={() => { onDemoClick?.(); setIsMobileOpen(false); }}
              className="block w-full mt-3 px-5 py-3 bg-cyan-600 text-white text-center font-medium rounded-lg"
            >
              Book gratis demo
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
