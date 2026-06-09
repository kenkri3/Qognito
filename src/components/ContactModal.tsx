import { useState } from 'react'
import { X, Send, CheckCircle, MessageCircle, ArrowRight, Phone } from 'lucide-react'
import { saveDemoRequest } from '@/lib/firebase'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // 1. Lagre i Firestore
    try {
      await saveDemoRequest({
        navn: formData.get('navn') as string,
        epost: formData.get('epost') as string,
        bedrift: (formData.get('bedrift') as string) || '',
        telefon: '',
        antallBrukere: 'kontakt',
        melding: formData.get('melding') as string,
      })
    } catch (err) {
      console.warn('Firestore lagring feilet:', err)
    }

    // 2. Send via Formspree med ren fetch
    try {
      const response = await fetch('https://formspree.io/f/xrevqjlb', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      })

      if (response.ok) {
        setSucceeded(true)
        form.reset()
      } else {
        const data = await response.json()
        console.error('Formspree error:', data)
        setError('Kunne ikke sende. Prøv igjen eller ring 40 16 30 82.')
      }
    } catch (err) {
      console.error('Fetch error:', err)
      setError('Kunne ikke sende. Prøv igjen eller ring 40 16 30 82.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={handleBackdropClick}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0f14] border border-white/10 rounded-2xl shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white z-10" aria-label="Lukk"><X size={20} /></button>

        {!succeeded ? (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center"><MessageCircle size={20} className="text-cyan-400" /></div>
              <div><h3 className="text-xl font-bold text-white">Kontakt support</h3><p className="text-sm text-zinc-500">Vi svarer innen 24 timer.</p></div>
            </div>
            <p className="text-zinc-400 text-sm mt-4 mb-6">Send oss en melding, så hjelper vi deg så fort vi kan.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="kontakt-navn" className="block text-sm text-zinc-400 mb-1.5">Navn *</label>
                  <input type="text" id="kontakt-navn" name="navn" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Ola Nordmann" />
                </div>
                <div>
                  <label htmlFor="kontakt-epost" className="block text-sm text-zinc-400 mb-1.5">E-post *</label>
                  <input type="email" id="kontakt-epost" name="epost" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="ola@bedrift.no" />
                </div>
              </div>
              <div>
                <label htmlFor="kontakt-bedrift" className="block text-sm text-zinc-400 mb-1.5">Bedrift</label>
                <input type="text" id="kontakt-bedrift" name="bedrift" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all" placeholder="Din Bedrift AS" />
              </div>
              <div>
                <label htmlFor="kontakt-melding" className="block text-sm text-zinc-400 mb-1.5">Melding *</label>
                <textarea id="kontakt-melding" name="melding" rows={4} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none" placeholder="Beskriv hva du trenger hjelp med..." />
              </div>

              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="Ny support-henvendelse fra Qognito.no" />

              {error && <p className="text-xs text-red-400 text-center">{error}</p>}

              <button type="submit" disabled={submitting} className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-600/50 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25">
                {submitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sender...</> : <><Send size={18} />Send melding<ArrowRight size={16} /></>}
              </button>

              <p className="text-xs text-zinc-600 text-center flex items-center justify-center gap-1">
                Haster det?
                <a href="tel:+4740163082" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"><Phone size={12} />40 16 30 82</a>
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6"><CheckCircle size={32} className="text-emerald-400" /></div>
            <h3 className="text-2xl font-bold text-white mb-3">Melding sendt!</h3>
            <p className="text-zinc-400 text-sm mb-2">Takk for henvendelsen. Vi svarer deg så fort vi kan.</p>
            <p className="text-zinc-500 text-xs mb-8">Haster det? Ring oss på <a href="tel:+4740163082" className="text-cyan-400 hover:text-cyan-300">40 16 30 82</a></p>
            <button onClick={onClose} className="px-8 py-3 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium rounded-xl border border-white/10 transition-all">Lukk</button>
          </div>
        )}
      </div>
    </div>
  )
}
