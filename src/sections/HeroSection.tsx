import { ArrowRight, MessageSquare, Calendar, Users, TrendingUp, Clock } from 'lucide-react'

const miniStats = [
  { icon: Users, value: '3,1M', label: 'LinkedIn-brukere i Norge' },
  { icon: TrendingUp, value: '47%', label: 'connection rate' },
  { icon: Clock, value: '5 min', label: 'til første kampanje' },
]

interface HeroSectionProps {
  onDemoClick?: () => void
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-emerald-300 font-medium">Norges første AI-agent for LinkedIn-salg</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Slutt å jakte på kunder. </span>
                <span className="gradient-text">La dem komme til deg.</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed">
                Med over <strong className="text-white">3,1 millioner</strong> LinkedIn-brukere i Norge sitter dine neste kunder allerede der ute. Qognito finner dem, starter samtaler på <strong className="text-white">norsk</strong> og booker møter i kalenderen din — mens du fokuserer på det du gjør best.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onDemoClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Book gratis demo
                <ArrowRight size={18} />
              </button>
              <a
                href="#hvordan"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-medium rounded-xl border border-white/10 transition-all"
              >
                Se hvordan det fungerer
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {miniStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                    <stat.icon size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-zinc-600">
              Ingen kort. Ingen binding. 14 dagers gratis prøveperiode.
            </p>
          </div>

          {/* Right: Visual demo */}
          <div className="relative hidden lg:block">
            <div className="relative bg-[#0f0f14] border border-white/10 rounded-2xl p-6 glow-blue">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Qognito AI-agent</p>
                    <p className="text-zinc-500 text-xs">Aktiv — 3 samtaler i dag</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 py-2">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">Q</span>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-zinc-300 text-sm">Hei Lars, så du nettopp postet om utfordringene med å skalere salgsteamet deres i Trondheim. Har du vurdert å automatisere deler av LinkedIn-rekrutteringen? Jeg kan vise deg hvordan vi hjalp et liknende selskap med å doble antall møter.</p>
                      <p className="text-zinc-500 text-xs mt-2">09:14 — Sendt av Qognito AI</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[75%]">
                      <p className="text-zinc-300 text-sm">Det høres interessant ut! Kan du fortelle meg litt mer?</p>
                      <p className="text-zinc-500 text-xs mt-2">09:42 — Lars, Salgssjef</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">L</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">Q</span>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                      <p className="text-zinc-300 text-sm">Selvfølgelig! Jeg har ledig tid torsdag kl. 14:00. Passer det for en kort 15-minutters demo? Jeg viser deg konkrete tall fra en kunde i samme bransje.</p>
                      <div className="mt-3 flex gap-2">
                        <button className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-sm font-medium rounded-lg transition-colors flex items-center gap-2">
                          <Calendar size={14} />
                          Book møte
                        </button>
                      </div>
                      <p className="text-zinc-500 text-xs mt-2">10:05 — Sendt av Qognito AI</p>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  <div className="text-center p-3 rounded-xl bg-white/[0.02]">
                    <Users size={16} className="mx-auto mb-1 text-blue-400" />
                    <p className="text-lg font-bold text-white">47%</p>
                    <p className="text-xs text-zinc-500">connection rate</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/[0.02]">
                    <MessageSquare size={16} className="mx-auto mb-1 text-purple-400" />
                    <p className="text-lg font-bold text-white">26%</p>
                    <p className="text-xs text-zinc-500">svar rate</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-white/[0.02]">
                    <Calendar size={16} className="mx-auto mb-1 text-emerald-400" />
                    <p className="text-lg font-bold text-white">12</p>
                    <p className="text-xs text-zinc-500">møter denne uken</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#0f0f14] border border-white/10 rounded-xl px-4 py-3 animate-float">
              <p className="text-xs text-zinc-500">Møter booket i dag</p>
              <p className="text-xl font-bold text-emerald-400">+3</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#0f0f14] border border-white/10 rounded-xl px-4 py-3 animate-float" style={{ animationDelay: '2s' }}>
              <p className="text-xs text-zinc-500">Tidsbesparelse</p>
              <p className="text-xl font-bold text-blue-400">15t/uke</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
