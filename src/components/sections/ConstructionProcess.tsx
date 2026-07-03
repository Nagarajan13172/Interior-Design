import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import {
  constructionIntro,
  constructionSteps,
  constructionTips,
} from '../../data/constructionProcess'
import { staggerContainer, fadeInUp, viewportOnce } from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'
import ProcessStep from '../ui/ProcessStep'

export default function ConstructionProcess() {
  return (
    <section id="process" className="section-y bg-brandLight">
      <div className="container-px">
        <SectionTitle
          eyebrow="How We Build"
          title="Step-by-Step Home"
          highlight="Construction Process"
          subtitle={constructionIntro}
        />

        {/* Timeline of steps */}
        <div className="mt-16 space-y-16 lg:space-y-20">
          {constructionSteps.map((step, i) => (
            <ProcessStep
              key={step.step}
              data={step}
              reversed={i % 2 === 1}
              isLast={i === constructionSteps.length - 1}
            />
          ))}
        </div>

        {/* Construction tips */}
        <div className="mt-20">
          <SectionTitle
            eyebrow="Good to Know"
            title="Practical"
            highlight="Construction Tips"
            as="h3"
          />
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {constructionTips.map((tip) => (
              <motion.li
                key={tip}
                variants={fadeInUp}
                className="group flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandGold/40 hover:shadow-card"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brandGold/15 text-brandOrange transition-colors group-hover:bg-gold-gradient group-hover:text-black">
                  <Lightbulb className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-brandCharcoal">
                  {tip}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
