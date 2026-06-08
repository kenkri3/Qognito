import { TrendingUp, MessageCircle, Clock, UserCheck } from 'lucide-react'

const stats = [
  {
    icon: UserCheck,
    value: '47%',
    label: 'Connection rate',
    desc: 'Gjennomsnittlig aksept av kontaktforespørsler',
    color: 'blue',
  },
  {
    icon: MessageCircle,
    value: '26%',
    label: 'Svar rate',
    desc: 'Andel som svarer på personlige meldinger',
    color: 'purple',
  },
  {
    icon: Clock,
    value: '5 min',
    label: 'Til første kampanje',
    desc: 'Fra oppsett til live outreach',
    color: 'emerald',
  },
  {
    icon: TrendingUp,
    value: '4x',
    label: 'Flere møter',
    desc: 'Gjennomsnittlig økning for våre kunder',
    color: 'amber',
  },
]

export default function StatsSection() {
  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
            Tillit av norske B2B-bedrifter
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                stat.color === 'blue' ? 'bg-cyan-500/10 text-cyan-400' :
                stat.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                stat.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                'bg-amber-500/10 text-amber-400'
              }`}>
                <stat.icon size={20} />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-zinc-300 mb-1">{stat.label}</p>
              <p className="text-xs text-zinc-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
