import { motion } from 'framer-motion'
import { Check, X, Package } from 'lucide-react'
import {
  woodenIntro,
  woodenSteps,
  woodenDos,
  woodenDonts,
} from '../../data/woodenWorks'
import { images } from '../../data/images'
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

export default function WoodenWorks() {
  return (
    <section id="wooden" className="section-y bg-brandLight">
      <div className="container-px">
        <SectionTitle
          eyebrow="Wooden Works"
          title="Interior Wooden Work —"
          highlight="Planning to Handover"
          subtitle={woodenIntro}
        />

        {/* Intro image band */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[images.woodenWardrobe, images.woodenKitchen, images.woodenTvUnit].map(
            (img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src={img}
                  alt={['Wardrobe', 'Modular kitchen', 'TV unit'][i]}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ),
          )}
        </motion.div>

        {/* Vertical step timeline */}
        <div className="relative mt-16">
          {/* Center line (desktop) */}
          <div
            className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-brandGold via-brandOrange to-transparent md:block"
            aria-hidden
          />
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {woodenSteps.map((step) => (
              <motion.li
                key={step.step}
                variants={fadeInUp}
                className="relative md:pl-20"
              >
                {/* Step number node */}
                <div className="mb-3 flex items-center gap-4 md:mb-0 md:absolute md:left-0 md:top-0">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient font-heading text-xl font-bold text-black shadow-gold">
                    {String(step.step).padStart(2, '0')}
                  </span>
                </div>

                <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-cardHover md:p-7">
                  <h3 className="mb-3 font-heading text-xl font-bold text-brandCharcoal">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brandGray">
                    {step.description}
                  </p>

                  {/* Checklist */}
                  {step.checklist && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {step.checklist.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-brandCharcoal">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brandGold/15 text-brandOrange">
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Material suggestions */}
                  {step.materials && (
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {step.materials.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl bg-brandLight px-3.5 py-2.5 text-sm text-brandCharcoal"
                        >
                          <Package className="mt-0.5 h-4 w-4 shrink-0 text-brandOrange" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Do's and Don'ts */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border-2 border-brandGold/30 bg-white p-8 shadow-card"
          >
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold text-brandCharcoal">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient text-black">
                <Check className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              Woodwork Do&apos;s
            </h3>
            <ul className="space-y-3">
              {woodenDos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brandGray">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandOrange" strokeWidth={2.5} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border-2 border-red-200 bg-white p-8 shadow-card"
          >
            <h3 className="mb-6 flex items-center gap-3 font-heading text-xl font-bold text-brandCharcoal">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <X className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              Woodwork Don&apos;ts
            </h3>
            <ul className="space-y-3">
              {woodenDonts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brandGray">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={2.5} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
