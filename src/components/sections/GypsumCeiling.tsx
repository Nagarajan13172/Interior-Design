import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import {
  gypsumIntro,
  gypsumWhatIs,
  gypsumAdvantages,
  gypsumLimitations,
  gypsumVsPop,
  gypsumDesignIdeas,
  gypsumQualityChecklist,
} from '../../data/gypsumCeiling'
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

export default function GypsumCeiling() {
  return (
    <section id="gypsum" className="section-y relative overflow-hidden bg-dark-gradient text-white">
      {/* Gold glow accents */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-brandGold/10 blur-[130px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-brandOrange/10 blur-[120px]" />

      <div className="container-px relative">
        <SectionTitle
          eyebrow="Gypsum Ceilings"
          title="Premium Gypsum False"
          highlight="Ceiling Solutions"
          subtitle={gypsumIntro}
          light
        />

        {/* What is + Advantages/Limitations */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* What is */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass-dark rounded-3xl p-8"
          >
            <h3 className="mb-4 font-heading text-2xl font-bold text-brandGold">
              What is a gypsum ceiling?
            </h3>
            <p className="text-base leading-relaxed text-white/75">
              {gypsumWhatIs}
            </p>
          </motion.div>

          {/* Advantages + Limitations */}
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-3xl border border-brandGold/20 bg-white/5 p-6"
            >
              <h4 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-gradient text-black">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                Advantages
              </h4>
              <ul className="space-y-2.5">
                {gypsumAdvantages.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brandGold" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h4 className="mb-4 flex items-center gap-2 font-heading text-lg font-semibold text-white">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <X className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                </span>
                Limitations
              </h4>
              <ul className="space-y-2.5">
                {gypsumLimitations.map((l) => (
                  <li key={l} className="flex gap-2 text-sm text-white/70">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-white/40" aria-hidden />
                    {l}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Gypsum vs POP comparison */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16"
        >
          <h3 className="mb-6 text-center font-heading text-2xl font-bold text-white">
            Gypsum Board <span className="text-gold-gradient">vs</span> POP
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-gold-gradient text-black">
                  {gypsumVsPop.headers.map((h) => (
                    <th key={h} scope="col" className="px-5 py-4 text-sm font-bold uppercase tracking-wide">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gypsumVsPop.rows.map((row, i) => (
                  <tr key={i} className="border-t border-white/10 transition-colors hover:bg-white/5">
                    {row.cells.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-5 py-4 align-top text-sm leading-relaxed ${
                          j === 0 ? 'font-semibold text-brandGold' : 'text-white/70'
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Design ideas */}
        <div className="mt-20">
          <SectionTitle
            eyebrow="Inspiration"
            title="Ceiling"
            highlight="Design Ideas"
            as="h3"
            light
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {gypsumDesignIdeas.map((idea, i) => (
              <motion.article
                key={idea.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={idea.image}
                    alt={idea.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-black">
                    {i + 1}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h4 className="mb-1.5 font-heading text-lg font-semibold text-white">
                    {idea.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-white/70">
                    {idea.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Quality checklist */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 rounded-3xl border border-brandGold/20 bg-white/5 p-8 md:p-10"
        >
          <h3 className="mb-6 font-heading text-2xl font-bold text-white">
            Installation <span className="text-gold-gradient">Quality Checklist</span>
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gypsumQualityChecklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-black">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
