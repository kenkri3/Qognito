import { useForm, ValidationError } from '@formspree/react'
import { useState } from 'react'
import { X, Send, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react'
import { saveDemoRequest } from '@/lib/firebase'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm('xrevqjlb')
  const [sent, setSent] = useState(false)

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    
    try {
      await saveDemoRequest({
        navn: formData.get('navn') as string,
        epost: formData.get('epost') as string,
        bedrift: (formData.get('bedrift') as string) || '',
        telefon: (formData.get('telefon') as string) || '',
        antallBrukere: 'kontakt',
        melding: formData.get('melding') as string,
      })
    } catch (err) {
      console.warn('Firestore lagring feilet:', err)
    }

    handleSubmit(e)
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0f14] border border-white/10 rounded-2xl shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors z-10"
          aria-label="Lukk"
        >
          <X size={20} />
        </button>

        {!state.succeeded && !sent ? (
          <div className="p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Kontakt support</h3>
                <p className="text-sm text-zinc-500">Vi svarer innen 24 timer.</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm mt-4 mb-6">
              Send oss en melding, så hjelper vi deg så fort vi kan.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="kontakt-navn" className="block text-sm text-zinc-400 mb-1.5">Navn *</label>
                  <input
                    type="text"
                    id="kontakt-navn"
                    name="navn"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="Ola Nordmann"
                  />
                  <ValidationError prefix="Navn" field="navn" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
                <div>
                  <label htmlFor="kontakt-epost" className="block text-sm text-zinc-400 mb-1.5">E-post *</label>
                  <input
                    type="email"
                    id="kontakt-epost"
                    name="epost"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="ola@bedrift.no"
                  />
                  <ValidationError prefix="E-post" field="epost" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
              </div>

              <div>
                <label htmlFor="kontakt-bedrift" className="block text-sm text-zinc-400 mb-1.5">Bedrift</label>
                <input
                  type="text"
                  id="kontakt-bedrift"
                  name="bedrift"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="Din Bedrift AS"
                />
              </div>

              <div>
                <label htmlFor="kontakt-melding" className="block text-sm text-zinc-400 mb-1.5">Melding *</label>
                <textarea
                  id="kontakt-melding"
                  name="melding"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="Beskriv hva du trenger hjelp med..."
                />
                <ValidationError prefix="Melding" field="melding" errors={state.errors} className="text-xs text-red-400 mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-600/50 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                {state.submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sender...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send melding
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {state.errors && (
                <p className="text-xs text-red-400 text-center">
                  Noe gikk galt. Prøv igjen eller ring oss på 40 16 30 82.
                </p>
              )}

              <p className="text-xs text-zinc-600 text-center">
                Trenger du hjelp nå? Ring oss på{' '}
                <a href="tel:+4740163082" className="text-cyan-400 hover:text-cyan-300">
                  40 16 30 82
                </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Melding sendt!
            </h3>
            <p className="text-zinc-400 text-sm mb-2">
              Takk for henvendelsen. Vi svarer deg så fort vi kan — normalt innen 24 timer.
            </p>
            <p className="text-zinc-500 text-xs mb-8">
              Haster det? Ring oss direkte på{' '}
              <a href="tel:+4740163082" className="text-cyan-400 hover:text-cyan-300">
                40 16 30 82
              </a>
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium rounded-xl border border-white/10 transition-all"
            >
              Lukk
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
