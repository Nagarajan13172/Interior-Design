import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, viewportOnce } from '../../lib/motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  /** Optional highlighted portion of the title, rendered in gold gradient. */
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  /** Render heading as h2 (default) or h3 for nested sections. */
  as?: 'h2' | 'h3'
  light?: boolean
}

/**
 * Reusable section heading: eyebrow label + title (with optional gold
 * highlight) + subtitle. Animates in on scroll.
 */
export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  as = 'h2',
  light = false,
}: SectionTitleProps) {
  const Heading = as
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-3xl ${
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeInUp}
          className="eyebrow mb-4"
        >
          <span className="h-px w-6 bg-brandOrange" aria-hidden />
          {eyebrow}
        </motion.span>
      )}
      <motion.div variants={fadeInUp}>
        <Heading
          className={`text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem] ${
            light ? 'text-white' : 'text-brandCharcoal'
          }`}
        >
          {title}{' '}
          {highlight && <span className="text-gold-gradient">{highlight}</span>}
        </Heading>
      </motion.div>
      {subtitle && (
        <motion.p
          variants={fadeInUp}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-white/70' : 'text-brandGray'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
