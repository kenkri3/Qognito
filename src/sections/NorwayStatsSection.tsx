import { Users, Target, TrendingUp, Globe, BarChart3, MessageCircle } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '3 120 000',
    shortValue: '3,1M',
    label: 'LinkedIn-brukere i Norge',
    sub: '54,2% av befolkningen. Din neste kunde er der ute.',
    source: 'Kilde: NapoleonCat, januar 2026',
    highlight: true,
  },
  {
    icon: Target,
    value: '4 av 5',
    label: 'driver bedriftsbeslutninger',
    sub: 'LinkedIn er ikke for juniorer. Det er for folk som kan si "ja" til et kjøp.',
    source: 'Kilde: LinkedIn Marketing Solutions',
  },
  {
    icon: TrendingUp,
    value: '80%',
    label: 'av B2B-leads fra sosiale medier',
    sub: 'Kommer fra LinkedIn. Resten er støy.',
    source: 'Kilde: Multiple B2B research sources',
  },
  {
    icon: Globe,
    value: '35-54 år',
    label: 'største aldersgruppe i Norge',
    sub: '1,1 millioner etablerte beslutningstakere. Akkurat dem du vil nå.',
    source: 'Kilde: NapoleonCat, januar 2026',
  },
  {
    icon: BarChart3,
    value: '28%',
    label: 'lavere kostnad per lead',
    sub: 'Sammenlignet med Google Ads. LinkedIn gir bedre kvalitet til lavere pris.',
    source: 'Kilde: Multiple B2B ad benchmark studies',
  },
  {
    icon: MessageCircle,
    value: '47%',
    label: 'connection rate med Qognito',
    sub: 'Nesten dobbelt så høyt som bransjestandarden på 25-30%.',
    source: 'Kilde: Qognito intern data',
    highlight: true,
  },
]

interface NorwayStatsSectionProps {
  onDemoClick?: () => void
}

export default function NorwayStatsSection({ onDemoClick }: NorwayStatsSectionProps) {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">Norske LinkedIn-tall du bør kjenne til</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hvorfor LinkedIn — og hvorfor nå?
          </h2>
          <p className="text-zinc-400">
            LinkedIn er ikke lenger bare en CV-database. Det er stedet der norske B2B-beslutningstakere bruker tid, leser innhold og tar forretningsvalg.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative p-6 rounded-2xl transition-all ${
                stat.highlight
                  ? 'bg-gradient-to-b from-cyan-500/10 to-purple-500/5 border-2 border-cyan-500/30'
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                stat.highlight ? 'bg-cyan-500/10 text-cyan-400' : 'bg-white/5 text-zinc-400'
              }`}>
                <stat.icon size={20} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.shortValue || stat.value}</p>
              <p className="text-sm font-medium text-zinc-300 mb-2">{stat.label}</p>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">{stat.sub}</p>
              <p className="text-[10px] text-zinc-600">{stat.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">
            <span className="text-white font-medium">Spørsmålet er ikke om du skal bruke LinkedIn til salg.</span>{' '}
            Spørsmålet er om du skal gjøre det manuelt — eller la AI gjøre det for deg.
          </p>
          <button
            onClick={onDemoClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-sm font-medium rounded-xl border border-white/10 transition-all"
          >
            Se hvordan Qognito fungerer for din bransje
          </button>
        </div>
      </div>
    </section>
  )
}
