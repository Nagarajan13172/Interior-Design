import { faqs } from '../../data/faqs'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import Accordion from '../ui/Accordion'

export default function Faq() {
  return (
    <section id="faq" className="section-y bg-brandLight">
      <div className="container-px">
        <SectionTitle
          eyebrow="Questions"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know before starting your construction or interior project."
        />
        <Reveal className="mt-14">
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  )
}
