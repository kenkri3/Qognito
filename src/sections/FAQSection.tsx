import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Er dette trygt for LinkedIn-kontoen min?',
    answer: 'Ja. Qognito følger LinkedIn sine retningslinjer med innebygde begrensninger på antall daglige handlinger. Vi simulerer menneskelig atferd med naturlige pauser og variasjon, noe som reduserer risikoen for restriksjoner betydelig sammenlignet med tradisjonelle automatiseringer.',
  },
  {
    question: 'Skriver AI-en virkelig på norsk?',
    answer: 'Ja. AI-agenten tilpasser språket automatisk basert på mottakerens LinkedIn-profil. Norske profiler får norske meldinger — naturlige og kontekstuelle, ikke oversatt fra engelsk. Agenten forstår nuanseerte uttrykk og skriver personlige meldinger som føles autentiske.',
  },
  {
    question: 'Hva trenger jeg å gjøre selv?',
    answer: 'Du definerer hvem du vil nå og godkjenner meldingsstilen. Deretter håndterer AI-agenten alt: søk, kontakt, oppfølging og møtebooking. Du får bare varsler når noen svarer eller et møte er booket. De første 5 minuttene, så kjører det av seg selv.',
  },
  {
    question: 'Hvor lang tid tar det å se resultater?',
    answer: 'De fleste ser første svar innen 2-5 dager. Typisk connection-rate er 40-50% og svar-rate 20-30%, avhengig av din målgruppe og meldinger. Vi ser ofte de første bookede møtene i løpet av den første uken.',
  },
  {
    question: 'Hva skjer etter prøveperioden?',
    answer: 'Du velger selv om du vil fortsette. Ingen automatiske trekk eller skjulte bindinger. Vi sender deg en påminnelse før prøveperioden utløper, og du kan enkelt avslutte eller velge en plan som passer deg.',
  },
  {
    question: 'Hvor mange kontoer kan jeg koble til?',
    answer: 'Hver brukerkonto i Qognito kan ha opptil 4 LinkedIn-profiler. Trenger du flere? Du kan enkelt opprette flere brukerkontoer i systemet vårt. Byråer og større bedrifter får en skreddersydd løsning som passer deres behov.',
  },
]

// FAQ Schema for Google Rich Snippets
function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      {/* FAQ Schema - injected once */}
      <FAQSchema />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-cyan-400 uppercase tracking-wider mb-3">Ofte stilte spørsmål</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Det lurer du kanskje på
          </h2>
          <p className="text-zinc-400">
            Her er svarene på de vanligste spørsmålene vi får om LinkedIn-salg og AI-automatisering.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-white pr-4" itemProp="name">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-zinc-500 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div
                  className="px-5 pb-5"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-zinc-400 text-sm leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
