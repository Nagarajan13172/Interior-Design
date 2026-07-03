import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Maximize2 } from 'lucide-react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  onView?: (project: Project) => void
}

/**
 * Portfolio project card with image overlay, category chip, and hover CTA.
 * forwardRef so `AnimatePresence mode="popLayout"` can measure it directly.
 */
const ProjectCard = forwardRef<HTMLElement, ProjectCardProps>(
  ({ project, onView }, ref) => {
    const { title, category, description, scope, image } = project

    return (
      <motion.article
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-3xl bg-brandCharcoal shadow-card"
      >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brandOrange/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category chip */}
        <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          {category}
        </span>

        {/* Expand icon */}
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" aria-hidden />
        </span>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brandGold">
            {scope}
          </p>
          <h3 className="mb-2 font-heading text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="mb-4 max-h-0 overflow-hidden text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
            {description}
          </p>
          <button
            type="button"
            onClick={() => onView?.(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-brandGold"
          >
            View Details
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </button>
          </div>
        </div>
      </motion.article>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
