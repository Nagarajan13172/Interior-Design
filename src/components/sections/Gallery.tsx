import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { galleryFilters, galleryItems } from '../../data/gallery'
import type { GalleryCategory, GalleryItem } from '../../data/gallery'
import { viewportOnce } from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

type Filter = 'All' | GalleryCategory

/** How many photos to show before the "Show all" button. */
const INITIAL_COUNT = 12

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const [expanded, setExpanded] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((g) => g.category === activeFilter),
    [activeFilter],
  )

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT)

  const changeFilter = (filter: Filter) => {
    setActiveFilter(filter)
    setExpanded(false)
  }

  // Lightbox navigation (operates over the full filtered list)
  const showAt = useCallback((i: number) => setLightboxIndex(i), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length],
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
    [filtered.length],
  )

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, prev, next])

  const current: GalleryItem | null =
    lightboxIndex === null ? null : filtered[lightboxIndex]

  return (
    <section id="gallery" className="section-y bg-brandLight">
      <div className="container-px">
        <SectionTitle
          eyebrow="Project Gallery"
          title="Our Completed"
          highlight="Work"
          subtitle="A closer look at real homes we have designed and built — interiors, wardrobes, modular kitchens, gypsum ceilings, and more. Tap any photo to view it larger."
        />

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {galleryFilters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                onClick={() => changeFilter(filter)}
                aria-pressed={isActive}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-black' : 'text-brandGray hover:text-brandCharcoal'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="gallery-pill"
                    className="absolute inset-0 rounded-full bg-gold-gradient shadow-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </div>

        {/* Masonry grid (CSS columns handle varied photo aspect ratios) */}
        <motion.div
          layout
          className="mt-12 [column-fill:_balance] gap-4 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {visible.map((item, i) => (
            <motion.button
              layout
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: (i % INITIAL_COUNT) * 0.03 }}
              onClick={() => showAt(filtered.indexOf(item))}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGold"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-black opacity-0 transition-all duration-500 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" aria-hidden />
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-brandGold">
                  {item.category}
                </span>
                <span className="mt-0.5 block font-heading text-sm font-semibold text-white">
                  {item.title}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Show all / show less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border-2 border-brandGold px-7 py-3 text-sm font-semibold text-brandOrange transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandGold hover:text-black"
            >
              {expanded
                ? 'Show less'
                : `Show all ${filtered.length} photos`}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onClick={close}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white transition-colors hover:bg-brandGold hover:text-black"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white transition-colors hover:bg-brandGold hover:text-black sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label="Next photo"
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-white transition-colors hover:bg-brandGold hover:text-black sm:right-6"
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>

            {/* Image */}
            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex max-h-full max-w-4xl flex-col items-center"
            >
              <img
                src={current.src}
                alt={current.title}
                className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-cardHover"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-brandGold">
                  {current.category}
                </span>
                <p className="mt-1 font-heading text-lg font-medium text-white">
                  {current.title}
                </p>
                <p className="mt-1 text-xs text-white/50">
                  {(lightboxIndex ?? 0) + 1} / {filtered.length}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
