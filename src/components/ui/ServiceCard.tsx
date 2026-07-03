import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types'
import { fadeInUp } from '../../lib/motion'
import { scrollToSection } from '../../lib/scroll'

interface ServiceCardProps {
  service: Service
  /** Section id to scroll to when the card is activated. */
  target?: string
}

/**
 * Premium service card: image with warm gold/black overlay, floating icon
 * badge, title, description, and a hover "explore" affordance.
 */
export default function ServiceCard({ service, target = 'contact' }: ServiceCardProps) {
  const { title, description, icon: Icon, image } = service

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-cardHover"
    >
      {/* Image + overlay */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gold-black-overlay opacity-90" />
        {/* Floating icon badge */}
        <div className="absolute -bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-black shadow-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 pt-10">
        <h3 className="mb-3 font-heading text-xl font-semibold text-brandCharcoal">
          {title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-brandGray">
          {description}
        </p>
        <button
          type="button"
          onClick={() => scrollToSection(target)}
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brandOrange transition-colors hover:text-brandGold"
        >
          Learn more
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </button>
      </div>

      {/* Gold bottom accent on hover */}
      <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
    </motion.article>
  )
}
