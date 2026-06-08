import { Crosshair, Globe, Bot, Shield, LayoutDashboard, Headphones } from 'lucide-react'

const features = [
  {
    icon: Crosshair,
    title: 'Presis målretting',
    description: 'Finn leads basert på rolle, bransje, lokasjon og aktivitet på LinkedIn.',
    color: 'blue',
  },
  {
    icon: Globe,
    title: 'Norske samtaler',
    description: 'AI-en skriver naturlig på norsk. Ikke oversatt engelsk, men ekte kontekstuelle meldinger.',
    color: 'purple',
  },
  {
    icon: Bot,
    title: 'Autonom agent',
    description: 'Håndterer hele samtalen fra første melding til møtebooking uten manuell innblanding.',
    color: 'emerald',
  },
  {
    icon: Shield,
    title: 'LinkedIn-vennlig',
    description: 'Innebygde sikkerhetsgrenser som beskytter kontoen din. Menneskelig atferd, ingen flags.',
    color: 'amber',
  },
  {
    icon: LayoutDashboard,
    title: 'Oversiktlig dashbord',
    description: 'Se alle samtaler, svar og møter på ett sted. Enkel admin for flere kontoer.',
    color: 'rose',
  },
  {
    icon: Headphones,
    title: 'Norsk support',
    description: 'Hjelp når du trenger det. På norsk, fra Norge, i din tidssone.',
    color: 'cyan',
  },
]

export default function FeaturesSection() {
  return (
    <section id="funksjoner" className="relative py-24 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-blue-400 uppercase tracking-wider mb-3">Funksjoner</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bygget for norske B2B-bedrifter
          </h2>
          <p className="text-zinc-400">
            Alt du trenger for å skalere LinkedIn-salget ditt — på ett sted.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                feature.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                feature.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                feature.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                feature.color === 'amber' ? 'bg-amber-500/10 text-amber-400' :
                feature.color === 'rose' ? 'bg-rose-500/10 text-rose-400' :
                'bg-cyan-500/10 text-cyan-400'
              }`}>
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
