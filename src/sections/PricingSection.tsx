import { Check, Users } from 'lucide-react'

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
  {
    name: 'Byrå',
    description: '5+ brukere – for byråer og store team',
    brukere: '5+',
    price: 'Kontakt oss',
    leads: 'Ubegrenset leads',
    features: [
      'Ubegrenset antall LinkedIn-kontoer',
      'Ubegrenset leads',
      'AI-personalisering',
      'Automatisk oppfølging',
      'Møtebooking',
      'Dedikert norsk support',
      'Skreddersydd onboarding',
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
                  <span className="text-sm text-zinc-400">{plan.brukere} {plan.brukere === 1 ? 'bruker' : plan.brukere === '5+' ? 'brukere' : 'brukere'}</span>
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
                {plan.highlighted ? 'Start prøveperiode' : 'Book demo'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 mb-2">
            <span className="text-zinc-400 font-medium">Trenger du flere brukere?</span> Legg til så mange du vil. Vi setter opp det som passer din bedrift.{' '}
            <button onClick={onDemoClick} className="text-cyan-400 hover:text-cyan-300 underline">Kontakt oss</button>
          </p>
          <p className="text-xs text-zinc-600">
            14 dagers gratis prøveperiode. Ingen binding. Alle priser eks. mva.
          </p>
        </div>
      </div>
    </section>
  )
}
