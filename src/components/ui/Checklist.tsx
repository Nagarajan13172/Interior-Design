import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerContainer, viewportOnce } from '../../lib/motion'

interface ChecklistProps {
  items: string[]
  title?: string
  /** Visual tone — 'gold' (default) or 'danger' (for "don'ts"). */
  tone?: 'gold' | 'danger'
  columns?: 1 | 2
  light?: boolean
}

/** A reusable animated checklist with gold check icons. */
export default function Checklist({
  items,
  title,
  tone = 'gold',
  columns = 1,
  light = false,
}: ChecklistProps) {
  return (
    <div>
      {title && (
        <h4
          className={`mb-4 text-sm font-semibold uppercase tracking-wider ${
            light ? 'text-brandGold' : 'text-brandOrange'
          }`}
        >
          {title}
        </h4>
      )}
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={`grid gap-3 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                tone === 'gold'
                  ? 'bg-gold-gradient text-black'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
            </span>
            <span
              className={`text-sm leading-relaxed ${
                light ? 'text-white/80' : 'text-brandGray'
              }`}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}
