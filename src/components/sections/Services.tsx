import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { staggerContainer, viewportOnce } from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../ui/ServiceCard'

/** Maps each service to the on-page section it links to. */
const serviceTargets: Record<string, string> = {
  'residential-construction': 'process',
  'interior-design': 'interior',
  'gypsum-ceiling': 'gypsum',
  'wooden-works': 'wooden',
  'plan-approval': 'process',
  '3d-visualization': 'showcase',
}

export default function Services() {
  return (
    <section id="services" className="section-y relative overflow-hidden bg-white">
      {/* Soft background accent */}
      <div className="absolute -left-40 top-20 -z-0 h-80 w-80 rounded-full bg-brandGold/5 blur-3xl" />

      <div className="container-px relative">
        <SectionTitle
          eyebrow="What We Do"
          title="End-to-End"
          highlight="Home Solutions"
          subtitle="From the first brick to the final finish, we cover every stage of building and styling your home under one trusted roof."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              target={serviceTargets[service.id] ?? 'contact'}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
