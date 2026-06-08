import { XCircle, AlertTriangle, Clock, TrendingDown } from 'lucide-react'

const pains = [
  {
    icon: Clock,
    title: 'Du bruker timer på manuelt LinkedIn-arbeid',
    description: 'Søke profiler, skrive personlige meldinger, følge opp, booke møter. Det tar 2-3 timer om dagen som du kunne brukt på å selge.',
    stat: '73%',
    statLabel: 'av selgere bruker for mye tid på admin',
  },
  {
    icon: XCircle,
    title: 'Cold calling og e-post fungerer ikke lenger',
    description: 'Svarraten på cold e-post har falt til under 1%. Folk svarer ikke på ukjente numre. LinkedIn er der beslutningstakerne faktisk er aktive.',
    stat: '80%',
    statLabel: 'av B2B-leads kommer nå fra LinkedIn',
  },
  {
    icon: TrendingDown,
    title: 'Du mangler en forutsigbar måte å få møter på',
    description: 'Munningen er tom, salgslederen presser på, og du vet ikke hvor neste møte skal komme fra. Uforutsigbar inntekt = stress.',
    stat: '4 av 5',
    statLabel: 'LinkedIn-brukere driver bedriftsbeslutninger',
  },
  {
    icon: AlertTriangle,
    title: 'Du vil ikke risikere LinkedIn-kontoen din',
    description: 'Billige automatiseringstjenester sender for mange meldinger. Resultat? Midlertidig eller permanent utestengelse. Qognito simulerer menneskelig atferd.',
    stat: '47%',
    statLabel: 'connection rate med sikker tilnærming',
  },
]

export default function PainPointsSection() {
  return (
    <section className="relative py-24 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-rose-400 uppercase tracking-wider mb-3">Kjenner du deg igjen?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Salg i 2026 er annerledes — og vanskeligere
          </h2>
          <p className="text-zinc-400">
            Norske B2B-bedrifter sliter med de samme utfordringene. Du er ikke alene.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-rose-500/20 hover:bg-rose-500/[0.02] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center flex-shrink-0">
                  <pain.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{pain.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{pain.description}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <span className="text-2xl font-bold text-rose-400">{pain.stat}</span>
                    <span className="text-xs text-zinc-500">{pain.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
