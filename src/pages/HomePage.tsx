import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import ConstructionProcess from '../components/sections/ConstructionProcess'
import InteriorDesign from '../components/sections/InteriorDesign'
import GypsumCeiling from '../components/sections/GypsumCeiling'
import WoodenWorks from '../components/sections/WoodenWorks'
import ThreeDShowcase from '../components/sections/ThreeDShowcase'
import Portfolio from '../components/sections/Portfolio'
import Gallery from '../components/sections/Gallery'
import Faq from '../components/sections/Faq'
import Contact from '../components/sections/Contact'

/**
 * The single-page home experience. Each section renders its own `id`, which
 * the navbar links scroll to. Add new sections here (and to data/navigation.ts).
 */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ConstructionProcess />
      <InteriorDesign />
      <GypsumCeiling />
      <WoodenWorks />
      <ThreeDShowcase />
      <Portfolio />
      <Gallery />
      <Faq />
      <Contact />
    </main>
  )
}
