import { motion } from 'framer-motion'
import { ShieldCheck, Ruler, Sparkles, HardHat } from 'lucide-react'
import { images } from '../../data/images'
import { fadeInLeft, fadeInRight, viewportOnce } from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

const highlights = [
  { icon: HardHat, label: 'Construction Execution' },
  { icon: Sparkles, label: 'Interior Finishing' },
  { icon: Ruler, label: 'Plan & Approval Support' },
  { icon: ShieldCheck, label: 'Transparent Process' },
]

export default function About() {
  return (
    <section id="about" className="section-y bg-brandLight">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image collage */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-card">
              <img
                src={images.about}
                alt="Elegantly designed modern home"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Floating experience badge */}
            <div className="absolute -bottom-6 -right-4 flex items-center gap-4 rounded-2xl bg-brandBlack p-5 shadow-gold sm:-right-8">
              <span className="font-heading text-4xl font-bold text-gold-gradient">
                10+
              </span>
              <span className="text-sm leading-tight text-white/80">
                Years of Combined
                <br />
                Expertise
              </span>
            </div>
            {/* Decorative gold frame */}
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-3xl border-2 border-brandGold/40" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionTitle
              eyebrow="About Kinoah"
              title="Designing Homes."
              highlight="Building Trust."
              align="left"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-brandGray">
              <p>
                At Kinoah Creations, we help homeowners transform
                vacant plots into beautifully planned, structurally sound, and
                elegantly finished living spaces. Our process covers every
                important stage — documentation guidance, plan approval support,
                construction execution, gypsum ceiling design, modular woodwork,
                and interior finishing.
              </p>
              <p>
                We combine practical construction knowledge with modern interior
                design aesthetics to create homes that are functional, durable,
                and visually impressive.
              </p>
            </div>

            {/* Highlight chips */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brandGold/15 text-brandOrange">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-brandCharcoal">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
