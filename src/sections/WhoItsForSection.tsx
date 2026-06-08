import { Building2, UserCircle, Rocket } from 'lucide-react'

const audiences = [
  {
    icon: Building2,
    title: 'B2B-byråer',
    description: 'Administrer outreach for opptil 4 kunder fra én plattform. Skaler uten å ansette flere selgere. La AI-en gjøre det tunge arbeidet mens du fokuserer på strategi.',
    quote: 'Vi booket 23 møter for kundene våre den første måneden — uten å ansette en ekstra selger.',
    author: 'Markedsføringsbyrå, Oslo',
    color: 'blue',
  },
  {
    icon: UserCircle,
    title: 'Konsulenter og rådgivere',
    description: 'Fyll pipelinen med kvalifiserte prospekter uten å bruke timer på manuelt salgsarbeid. Du skal rådgi, ikke jakte på kunder.',
    quote: 'Jeg gikk fra 2 til 8 møter i uken. Endelig en forutsigbar måte å få nye kunder på.',
    author: 'Salgskonsulent, Bergen',
    color: 'purple',
  },
  {
    icon: Rocket,
    title: 'SaaS og teknologiselskaper',
    description: 'Nå beslutningstakere i målbedrifter med personlige, relevante meldinger. LinkedIn er der CTO-er, VP-er og direktører faktisk leser meldinger.',
    quote: 'Connection-raten gikk fra 12% til 47%. Vi får nå møter med selskaper vi tidligere ikke visste hvordan vi skulle nå.',
    author: 'SaaS-selskap, Trondheim',
    color: 'emerald',
  },
]

export default function WhoItsForSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">Hvem passer det for</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bygget for de som selger B2B i Norge
          </h2>
          <p className="text-zinc-400">
            Uansett om du er ett menneske eller et team — Qognito hjelper deg med å få flere møter med riktige folk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                audience.color === 'blue' ? 'bg-cyan-500/10 text-cyan-400' :
                audience.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                'bg-emerald-500/10 text-emerald-400'
              }`}>
                <audience.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{audience.description}</p>

              <div className="pt-6 border-t border-white/5">
                <p className="text-zinc-300 text-sm italic leading-relaxed mb-3">
                  &ldquo;{audience.quote}&rdquo;
                </p>
                <p className="text-xs text-zinc-500">{audience.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
