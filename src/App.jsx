import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const WA_NUMBER = '6287831165773'

const WA_MESSAGE =
  'Halo Fokus Furniture Bali, saya tertarik untuk konsultasi custom furniture.'

export default function App() {
  return (
    <div className="text-[#1a1c1c]">

      <Navbar
        waNumber={WA_NUMBER}
        waMessage={WA_MESSAGE}
      />

      <main className="pt-16 md:pt-20">

        <Hero
          waNumber={WA_NUMBER}
          waMessage={WA_MESSAGE}
        />

        <TrustBadges />

        <About />

        <Services
          waNumber={WA_NUMBER}
          waMessage={WA_MESSAGE}
        />

        <WhyUs />

        <Gallery />

        <Process />

        <CTA
          waNumber={WA_NUMBER}
          waMessage={WA_MESSAGE}
        />
      </main>

      <Footer />

      <WhatsAppButton
        waNumber={WA_NUMBER}
        waMessage={WA_MESSAGE}
      />
    </div>
  )
}