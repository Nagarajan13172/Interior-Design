import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { portfolioFilters, projects } from '../../data/portfolio'
import type { Project, ProjectCategory } from '../../types'
import { viewportOnce } from '../../lib/motion'
import { scrollToSection } from '../../lib/scroll'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import Button from '../ui/Button'

type Filter = 'All' | ProjectCategory

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  )

  return (
    <section id="portfolio" className="section-y bg-white">
      <div className="container-px">
        <SectionTitle
          eyebrow="Our Work"
          title="Projects &"
          highlight="Portfolio"
          subtitle="A selection of homes we have built and styled — spanning construction, interiors, ceilings, and custom woodwork."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-black'
                    : 'text-brandGray hover:text-brandCharcoal'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-pill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onView={setSelected}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          className="mt-14 text-center"
        >
          <Button
            variant="dark"
            size="lg"
            iconRight={<ArrowRight className="h-5 w-5" aria-hidden />}
            onClick={() => scrollToSection('contact')}
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            {/* Scrim */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-cardHover"
            >
              <div className="relative h-64 sm:h-72">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brandCharcoal transition-colors hover:bg-brandGold"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
                <span className="absolute left-5 top-4 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {selected.category}
                </span>
              </div>
              <div className="p-7">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-brandOrange">
                  {selected.scope}
                </p>
                <h3 className="mb-3 font-heading text-2xl font-bold text-brandCharcoal">
                  {selected.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-brandGray">
                  {selected.description}
                </p>
                <Button
                  variant="primary"
                  iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
                  onClick={() => {
                    setSelected(null)
                    scrollToSection('contact')
                  }}
                >
                  Enquire About Similar Work
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
