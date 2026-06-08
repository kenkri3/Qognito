import { useForm, ValidationError } from '@formspree/react'
import { X, Send, CheckCircle, Calendar, ArrowRight } from 'lucide-react'

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [state, handleSubmit] = useForm('xrevqjlb')

  if (!isOpen) return null

  // Lukk modal når man klikker backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#0f0f14] border border-white/10 rounded-2xl shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors z-10"
          aria-label="Lukk"
        >
          <X size={20} />
        </button>

        {!state.succeeded ? (
          <div className="p-8">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Calendar size={20} className="text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Book gratis demo</h3>
                <p className="text-sm text-zinc-500">15 minutter. Ingen forpliktelser.</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm mt-4 mb-6">
              Fyll ut skjemaet under, så kontakter vi deg innen 24 timer for å avtale en tid som passer deg.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-navn" className="block text-sm text-zinc-400 mb-1.5">Navn *</label>
                  <input
                    type="text"
                    id="demo-navn"
                    name="navn"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="Ola Nordmann"
                  />
                  <ValidationError prefix="Navn" field="navn" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
                <div>
                  <label htmlFor="demo-epost" className="block text-sm text-zinc-400 mb-1.5">E-post *</label>
                  <input
                    type="email"
                    id="demo-epost"
                    name="epost"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="ola@bedrift.no"
                  />
                  <ValidationError prefix="E-post" field="epost" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-bedrift" className="block text-sm text-zinc-400 mb-1.5">Bedrift *</label>
                  <input
                    type="text"
                    id="demo-bedrift"
                    name="bedrift"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="Din Bedrift AS"
                  />
                  <ValidationError prefix="Bedrift" field="bedrift" errors={state.errors} className="text-xs text-red-400 mt-1" />
                </div>
                <div>
                  <label htmlFor="demo-telefon" className="block text-sm text-zinc-400 mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    id="demo-telefon"
                    name="telefon"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    placeholder="+47 999 99 999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo-brukere" className="block text-sm text-zinc-400 mb-1.5">Hvor mange brukere trenger dere? *</label>
                <select
                  id="demo-brukere"
                  name="antallBrukere"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0f0f14]">Velg pakke...</option>
                  <option value="1" className="bg-[#0f0f14]">1 bruker (Solo – 1 490 kr/mnd)</option>
                  <option value="2" className="bg-[#0f0f14]">2 brukere (Duo – 2 490 kr/mnd)</option>
                  <option value="3" className="bg-[#0f0f14]">3 brukere (Trio – 3 490 kr/mnd)</option>
                  <option value="4" className="bg-[#0f0f14]">4 brukere (Team – 4 290 kr/mnd)</option>
                  <option value="mer" className="bg-[#0f0f14]">Flere enn 4 (Byrå-løsning)</option>
                </select>
                <ValidationError prefix="Antall brukere" field="antallBrukere" errors={state.errors} className="text-xs text-red-400 mt-1" />
              </div>

              <div>
                <label htmlFor="demo-melding" className="block text-sm text-zinc-400 mb-1.5">Noe du vil vi skal vite på forhånd?</label>
                <textarea
                  id="demo-melding"
                  name="melding"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none"
                  placeholder="F.eks. bransje, målgruppe, antall selgere..."
                />
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
                    Send forespørsel
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              {state.errors && (
                <p className="text-xs text-red-400 text-center">
                  Noe gikk galt. Prøv igjen eller kontakt oss på hei@vikingnet.no
                </p>
              )}

              <p className="text-xs text-zinc-600 text-center">
                Vi kontakter deg innen 24 timer. Ingen binding.
              </p>
            </form>
          </div>
        ) : (
          /* Success state */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Takk! Vi kontakter deg snart.
            </h3>
            <p className="text-zinc-400 text-sm mb-2">
              Din forespørsel er sendt. Vi ringer eller sender deg en e-post innen 24 timer for å avtale en demo-tid som passer deg.
            </p>
            <p className="text-zinc-500 text-xs mb-8">
              I mellomtiden: Har du spørsmål? Send en e-post til hei@vikingnet.no
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
