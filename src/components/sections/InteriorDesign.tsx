import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import {
  interiorIntro,
  interiorServices,
  interiorGallery,
} from '../../data/interiorDesign'
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

export default function InteriorDesign() {
  return (
    <section id="interior" className="section-y bg-white">
      <div className="container-px">
        <SectionTitle
          eyebrow="Interior Design"
          title="Complete Interior Design for"
          highlight="Modern Homes"
          subtitle={interiorIntro}
        />

        <div className="mt-16 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Services list */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="mb-6 font-heading text-2xl font-bold text-brandCharcoal">
              Everything your home needs, designed together
            </h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {interiorServices.map((service) => (
                <motion.li
                  key={service}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-brandLight px-4 py-3 transition-colors hover:border-brandGold/40"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-black">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-brandCharcoal">
                    {service}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Gallery grid */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {interiorGallery.map((item, i) => (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl shadow-card ${
                  i % 3 === 0 ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i % 3 === 0 ? 'h-full min-h-[16rem]' : 'aspect-square'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 font-heading text-sm font-semibold text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
