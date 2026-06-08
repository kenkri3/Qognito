import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  onDemoClick?: () => void
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Klar for flere B2B-møter?
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
          Book en gratis demo på 15 minutter. Vi viser deg hvordan Qognito fungerer — med din målgruppe som eksempel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={onDemoClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            Book gratis demo
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Norsk support
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            14 dager gratis
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Ingen binding
          </span>
        </div>
      </div>
    </section>
  )
}
