import { Target, MessageSquareText, CalendarCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Du forteller oss hvem du vil nå',
    description: 'Hvilken bransje? Hvilken rolle? Hvor i Norge? Vi setter opp presis målretting mot dine ideelle kunder på LinkedIn.',
    detail: 'Tar 5 minutter. Du trenger ikke teknisk kompetanse.',
    color: 'blue',
  },
  {
    number: '02',
    icon: MessageSquareText,
    title: 'AI-agenten tar kontakt — på norsk',
    description: 'Agenten leser profiler, skriver personlige, kontekstuelle meldinger og følger opp automatisk. På det språket mottakeren bruker.',
    detail: 'Naturlig norsk. Ikke oversatt engelsk. Ikke robottone.',
    color: 'purple',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Møter dukker opp i kalenderen din',
    description: 'Når noen viser interesse, booker agenten møtet direkte. Du får en varsling og møter opp. Resten håndterer du selv.',
    detail: 'Første møte kan bookes innen 2-5 dager.',
    color: 'emerald',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="hvordan" className="relative py-24 lg:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">Hvordan det fungerer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fra idé til booket møte — uten at du løfter en finger
          </h2>
          <p className="text-zinc-400">
            Du definerer målgruppen. AI-en gjør resten. Ingen komplisert oppsett, ingen læringskurve.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < 2 && (
                <div className="hidden md:block absolute top-12 left-[60%] right-0 h-[2px] bg-gradient-to-r from-white/10 to-transparent" />
              )}
              
              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                  step.color === 'blue' ? 'bg-cyan-500/10 text-cyan-400' :
                  step.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  <step.icon size={24} />
                </div>
                
                <div className={`text-xs font-bold mb-3 ${
                  step.color === 'blue' ? 'text-cyan-400' :
                  step.color === 'purple' ? 'text-purple-400' :
                  'text-emerald-400'
                }`}>
                  Steg {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{step.description}</p>
                <p className="text-xs text-zinc-500 italic">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
