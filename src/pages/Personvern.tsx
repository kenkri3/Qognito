import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function Personvern() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
              &larr; Tilbake til forsiden
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Personvernerklæring
          </h1>

          <div className="space-y-8 text-zinc-400">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Innledning</h2>
              <p className="text-sm leading-relaxed">
                Qognito er ansvarlig for behandlingen av personopplysninger som samles inn gjennom våre tjenester. Denne erklæringen forklarer hvordan vi samler inn, bruker og beskytter dine personopplysninger i samsvar med GDPR og norsk personopplysningslovgivning.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Hvilke opplysninger samler vi inn?</h2>
              <p className="text-sm leading-relaxed mb-3">
                Vi kan samle inn følgende typer personopplysninger:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Kontaktinformasjon:</strong> Navn, e-postadresse, telefonnummer</li>
                <li><strong>Bedriftsinformasjon:</strong> Bedriftsnavn, stillingstittel, bransje</li>
                <li><strong>Bruksdata:</strong> Informasjon om hvordan du bruker våre tjenester</li>
                <li><strong>Teknisk informasjon:</strong> IP-adresse, nettlesertype, enhetsinformasjon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Formål med behandlingen</h2>
              <p className="text-sm leading-relaxed mb-3">
                Vi bruker personopplysningene til:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Å levere og forbedre våre tjenester</li>
                <li>Å kommunisere med deg om kontoen din og support</li>
                <li>Å sende viktige oppdateringer og driftsmeldinger</li>
                <li>Å overholde lovpålagte forpliktelser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Rettslig grunnlag</h2>
              <p className="text-sm leading-relaxed">
                Vi behandler personopplysninger basert på følgende rettslige grunnlag: (a) Samtykke fra den registrerte, (b) Nødvendig for å oppfylle en avtale med deg, (c) Nødvendig for å oppfylle en rettslig forpliktelse, eller (d) Berettiget interesse som ikke overstiges av dine personverninteresser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Datalagring og sikkerhet</h2>
              <p className="text-sm leading-relaxed">
                Vi lagrer personopplysningene dine så lenge det er nødvendig for de formålene de ble samlet inn for, eller så lenge det kreves i henhold til lovgivningen. Vi benytter oss av passende tekniske og organisatoriske sikkerhetstiltak for å beskytte dine opplysninger mot uautorisert tilgang, endring eller sletting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Dine rettigheter</h2>
              <p className="text-sm leading-relaxed mb-3">
                Du har følgende rettigheter i henhold til GDPR:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Rett til innsyn i dine personopplysninger</li>
                <li>Rett til retting av feilaktige opplysninger</li>
                <li>Rett til sletting (&quot;retten til å bli glemt&quot;)</li>
                <li>Rett til begrensning av behandling</li>
                <li>Rett til dataportabilitet</li>
                <li>Rett til å protestere på behandling</li>
                <li>Rett til å trekke tilbake samtykke</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
              <p className="text-sm leading-relaxed">
                Vi bruker cookies og lignende teknologier for å forbedre brukeropplevelsen, analysere trafikk og tilpasse innhold. Du kan kontrollere bruken av cookies gjennom nettleserinnstillingene dine. For mer informasjon, se vår cookie-informasjon som vises ved første besøk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Kontakt oss</h2>
              <p className="text-sm leading-relaxed">
                Har du spørsmål om personvern eller ønsker å utøve dine rettigheter? Kontakt oss på:
              </p>
              <p className="text-sm text-zinc-300 mt-2">
                E-post: hei@qognito.no<br />
                Adresse: Norge
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Endringer i personvernerklæringen</h2>
              <p className="text-sm leading-relaxed">
                Vi kan oppdatere denne personvernerklæringen fra tid til annen. Den nyeste versjonen vil alltid være tilgjengelig på denne siden. Sist oppdatert: Juni 2026.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
