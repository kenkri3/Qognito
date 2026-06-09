import { Check, Users, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Solo',
    description: '1 bruker – perfekt for soloselgere og gründere',
    brukere: 1,
    price: '1 490',
    leads: '500 leads',
    features: [
      '1 LinkedIn-konto',
      '500 leads per måned',
      'AI-personalisering',
      'Automatisk oppfølging',
      'Møtebooking',
      'Norsk e-postsupport',
    ],
    highlighted: false,
  },
  {
    name: 'Duo',
    description: '2 brukere – for småteam med 2 selgere',
    brukere: 2,
    price: '2 490',
    leads: '1 000 leads',
    features: [
      '2 LinkedIn-kontoer',
      '1 000 leads per måned',
      'AI-personalisering',
      'Automatisk oppfølging',
      'Møtebooking',
      'Norsk e-postsupport',
      'Prioritert support',
    ],
    highlighted: false,
  },
  {
    name: 'Trio',
    description: '3 brukere – for vekstbedrifter',
    brukere: 3,
    price: '3 490',
    leads: '1 500 leads',
    features: [
      '3 LinkedIn-kontoer',
      '1 500 leads per måned',
      'AI-personalisering',
      'Automatisk oppfølging',
      'Møtebooking',
      'Prioritert norsk support',
    ],
    highlighted: true,
  },
  {
    name: 'Team',
    description: '4 brukere – for team og byråer',
    brukere: 4,
    price: '4 290',
    leads: '2 000 leads',
    features: [
      '4 LinkedIn-kontoer',
      '2 000 leads per måned',
      'AI-personalisering',
      'Automatisk oppfølging',
      'Møtebooking',
      'Dedikert norsk support',
    ],
    highlighted: false,
  },
]

interface PricingSectionProps {
  onDemoClick?: () => void
}

export default function PricingSection({ onDemoClick }: PricingSectionProps) {
  return (
    <section id="prising" className="relative py-24 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">Priser</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Du betaler for det du trenger
          </h2>
          <p className="text-zinc-400">
            Velg nøyaktig hvor mange brukere du trenger. Ingen faste pakker som tvinger deg til å betale for noe du ikke bruker.
          </p>
        </div>

        {/* 4 standard pakker */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-cyan-500/10 to-purple-500/5 border-2 border-cyan-500/30 scale-[1.02]'
                  : 'bg-white/[0.02] border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full">
                    Mest populær
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-zinc-500" />
                  <span className="text-sm text-zinc-400">{plan.brukere} {plan.brukere === 1 ? 'bruker' : 'brukere'}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-xs text-zinc-500">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">kr/mnd</span>
                </div>
                <p className="text-xs text-zinc-500 mt-1">{plan.leads} per måned</p>
                <p className="text-xs text-zinc-600 mt-1">Alle priser eks. mva.</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={16} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onDemoClick}
                className={`block w-full text-center py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-cyan-600 hover:bg-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                    : 'bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10'
                }`}
              >
                {plan.highlighted ? 'Kom i gang' : 'Book demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Byrå / Enterprise boks */}
        <div className="mt-6">
          <div className="relative rounded-2xl p-8 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-cyan-500/5 border border-cyan-500/10 hover:border-cyan-500/20 transition-all">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Users size={16} className="text-cyan-400" />
                  <span className="text-sm text-cyan-400 font-medium">5+ brukere</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Byrå & Enterprise</h3>
                <p className="text-zinc-400 text-sm max-w-2xl">
                  For byråer og store team som trenger ubegrenset antall kontoer. Skreddersydd løsning med dedikert support, onboarding og fleksibel prising. Legg til så mange brukere du vil.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300">
                    <Check size={14} className="text-emerald-400" />
                    Ubegrenset LinkedIn-kontoer
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300">
                    <Check size={14} className="text-emerald-400" />
                    Ubegrenset leads
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300">
                    <Check size={14} className="text-emerald-400" />
                    Dedikert norsk support
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-zinc-300">
                    <Check size={14} className="text-emerald-400" />
                    Skreddersydd onboarding
                  </span>
                </div>
              </div>
              <button
                onClick={onDemoClick}
                className="flex items-center gap-2 px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap"
              >
                Book demo
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-600">
            Ingen bindingstid. Alle priser eks. mva.
          </p>
        </div>
      </div>
    </section>
  )
}
