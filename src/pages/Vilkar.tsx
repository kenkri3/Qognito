import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CookieBanner from '../components/CookieBanner'

export default function Vilkar() {
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
            Vilkår for bruk
          </h1>

          <div className="space-y-8 text-zinc-400">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Aksept av vilkår</h2>
              <p className="text-sm leading-relaxed">
                Ved å registrere deg for og bruke Qognito sine tjenester, godtar du disse vilkårene for bruk. Hvis du ikke godtar disse vilkårene, vennligst ikke bruk våre tjenester. Vi forbeholder oss retten til å endre disse vilkårene til enhver tid.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Beskrivelse av tjenesten</h2>
              <p className="text-sm leading-relaxed">
                Qognito tilbyr en AI-drevet plattform for automatisering av LinkedIn-outreach. Tjenesten inkluderer funksjoner som automatisk kontaktforespørsler, personlig meldinger, oppfølging og møtebooking. Vi er en whitelabel-leverandør som benytter underliggende teknologi fra ScaliQ.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Brukerkonto og sikkerhet</h2>
              <p className="text-sm leading-relaxed">
                Du er ansvarlig for å opprettholde konfidensialiteten av din kontoinformasjon og passord. Du er ansvarlig for all aktivitet som skjer under din konto. Du må umiddelbart varsle oss om uautorisert bruk av din konto.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. LinkedIn-konto og ansvar</h2>
              <p className="text-sm leading-relaxed">
                Du er ansvarlig for å overholde LinkedIn sine retningslinjer for bruk. Qognito er designet for å operere innenfor disse retningslinjene, men vi kan ikke garantere at LinkedIn ikke vil iverksette tiltak mot din konto. Bruk av tjenesten er på egen risiko.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Priser og betaling</h2>
              <p className="text-sm leading-relaxed">
                Alle priser er oppgitt i norske kroner (NOK) og er eksklusiv merverdiavgift (mva.). Betaling skjer forskuddsvis for hver faktureringsperiode. Vi tilbyr en 14-dagers gratis prøveperiode for nye kunder. Det er ingen bindingstid, og du kan kansellere når som helst.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Oppsigelse</h2>
              <p className="text-sm leading-relaxed">
                Du kan si opp abonnementet ditt når som helst ved å kontakte oss på hei@qognito.no. Oppsigelsen trer i kraft ved slutten av den pågående faktureringsperioden. Ingen refusjon gis for delvise perioder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Begrensning av ansvar</h2>
              <p className="text-sm leading-relaxed">
                Qognito er ikke ansvarlig for indirekte skader, tap av data, tap av inntekter, eller andre følgeskader som oppstår i forbindelse med bruk av tjenesten. Vårt totale ansvar er begrenset til det beløpet du har betalt for tjenesten de siste 12 månedene.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Immaterielle rettigheter</h2>
              <p className="text-sm leading-relaxed">
                All programvare, teknologi, design og innhold tilhører Qognito eller våre lisensgivere og er beskyttet av opphavsrett og andre immaterielle rettigheter. Du får en begrenset, ikke-eksklusiv lisens til å bruke tjenesten i samsvar med disse vilkårene.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Vedlikehold og nedetid</h2>
              <p className="text-sm leading-relaxed">
                Vi jobber for å holde tjenesten tilgjengelig 24/7, men vi kan ikke garantere ubetinget oppetid. Planlagt vedlikehold vil varsles i forkant. Vi er ikke ansvarlige for tap som skyldes tekniske problemer eller nedetid.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Lovvalg og tvisteløsning</h2>
              <p className="text-sm leading-relaxed">
                Disse vilkårene er underlagt norsk lovgivning. Eventuelle tvister skal først forsøkes løst i minnelighet. Hvis dette ikke er mulig, skal tvisten avgjøres av de ordinære norske domstoler.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Kontakt</h2>
              <p className="text-sm leading-relaxed">
                Har du spørsmål om disse vilkårene? Kontakt oss på:
              </p>
              <p className="text-sm text-zinc-300 mt-2">
                E-post: hei@qognito.no
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Endringer i vilkårene</h2>
              <p className="text-sm leading-relaxed">
                Vi kan oppdatere disse vilkårene fra tid til annen. Vesentlige endringer vil varsles via e-post eller på nettsiden. Sist oppdatert: Juni 2026.
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
