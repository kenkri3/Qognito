import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, Shield, BarChart3, Target, Settings } from 'lucide-react'

interface ConsentState {
  necessary: boolean
  functional: boolean
  analytics: boolean
  marketing: boolean
  timestamp: string
  version: string
}

const CONSENT_KEY = 'qognito-cookie-consent-v1'
const CONSENT_VERSION = '1.0'

const defaultConsent: ConsentState = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  timestamp: '',
  version: CONSENT_VERSION,
}

function getStoredConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      // Check version — if outdated, treat as no consent
      if (parsed.version === CONSENT_VERSION) {
        return parsed
      }
    }
  } catch {
    // ignore
  }
  return null
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent))
}

interface CookieConsentProps {
  onConsentChange?: (consent: ConsentState) => void
}

export default function CookieConsent({ onConsentChange }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<ConsentState>(defaultConsent)

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      // No consent given yet — show banner
      setShowBanner(true)
    } else {
      setConsent(stored)
      onConsentChange?.(stored)
    }
  }, [])

  const handleAcceptAll = () => {
    const newConsent: ConsentState = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    setConsent(newConsent)
    storeConsent(newConsent)
    onConsentChange?.(newConsent)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    const newConsent: ConsentState = {
      necessary: true, // Always true — cannot be rejected
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    setConsent(newConsent)
    storeConsent(newConsent)
    onConsentChange?.(newConsent)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    const newConsent: ConsentState = {
      ...consent,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    setConsent(newConsent)
    storeConsent(newConsent)
    onConsentChange?.(newConsent)
    setShowBanner(false)
  }

  const toggleCategory = (category: keyof Omit<ConsentState, 'timestamp' | 'version'>) => {
    if (category === 'necessary') return // Cannot toggle
    setConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -top-[100vh]" onClick={() => {}} />

      <div className="relative bg-[#0f0f14] border-t border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Main banner */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={18} className="text-blue-400" />
                <h3 className="text-sm font-semibold text-white">Vi bruker informasjonskapsler</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-2">
                Vi bruker informasjonskapsler og lignende teknologier for å forbedre nettsiden, 
                analysere trafikk og tilpasse innhold. Samtykket ditt er frivillig, og du kan 
                endre eller trekke det tilbake når som helst.{' '}
                <a href="/personvern" className="text-blue-400 hover:text-blue-300 underline">
                  Les mer i personvernerklæringen
                </a>
              </p>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                {showDetails ? 'Skjul detaljer' : 'Velg hva du samtykker til'}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={handleRejectAll}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm whitespace-nowrap"
              >
                Avvis alle
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all text-sm whitespace-nowrap"
              >
                Lagre valg
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm whitespace-nowrap"
              >
                Godta alle
              </button>
            </div>
          </div>

          {/* Detailed categories */}
          {showDetails && (
            <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
              {/* Nødvendige */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Settings size={18} className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white">Strengt nødvendige</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-zinc-500">Alltid på</span>
                      <div className="w-10 h-6 rounded-full bg-emerald-500/20 flex items-center justify-end px-1">
                        <div className="w-4 h-4 rounded-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Nødvendige for at nettsiden fungerer. Kan ikke slås av. Inkluderer 
                    innloggingssesjoner, språkvalg og samtykke-innstillingene dine.
                  </p>
                </div>
              </div>

              {/* Funksjonelle */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Settings size={18} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white">Funksjonelle</h4>
                    <button
                      onClick={() => toggleCategory('functional')}
                      className={`w-10 h-6 rounded-full flex items-center px-1 transition-all ${
                        consent.functional ? 'bg-blue-500 justify-end' : 'bg-zinc-700 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Husker dine preferanser og valg for en bedre brukeropplevelse.
                  </p>
                </div>
              </div>

              {/* Statistikk */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart3 size={18} className="text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white">Statistikk og analyse</h4>
                    <button
                      onClick={() => toggleCategory('analytics')}
                      className={`w-10 h-6 rounded-full flex items-center px-1 transition-all ${
                        consent.analytics ? 'bg-blue-500 justify-end' : 'bg-zinc-700 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Hjelper oss å forstå hvordan besøkende bruker nettsiden, slik at vi kan 
                    forbedre den. Inkluderer verktøy som Google Analytics.
                  </p>
                </div>
              </div>

              {/* Markedsføring */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target size={18} className="text-rose-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white">Markedsføring</h4>
                    <button
                      onClick={() => toggleCategory('marketing')}
                      className={`w-10 h-6 rounded-full flex items-center px-1 transition-all ${
                        consent.marketing ? 'bg-blue-500 justify-end' : 'bg-zinc-700 justify-start'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full bg-white" />
                    </button>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Brukes til å vise relevante annonser og måle effektiviteten av 
                    markedsføringskampanjer. Inkluderer Meta Pixel og lignende verktøy.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Re-export types and helpers
export type { ConsentState }
export { CONSENT_KEY, CONSENT_VERSION, getStoredConsent, storeConsent, defaultConsent }
