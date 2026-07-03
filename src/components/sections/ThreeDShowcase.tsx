import { lazy, Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Boxes, Loader2 } from 'lucide-react'
import { interiorModels } from '../../data/models'
import { fadeInUp, viewportOnce } from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'

// Lazy-load the 3D viewer (pulls in Three.js) only when this section renders.
const InteriorModelViewer = lazy(() => import('../ui/InteriorModelViewer'))

function ViewerLoading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#1a1a1a] to-black">
      <Loader2 className="h-8 w-8 animate-spin text-brandGold" aria-hidden />
      <p className="text-xs font-medium text-white/70">Loading 3D experience…</p>
    </div>
  )
}

export default function ThreeDShowcase() {
  const [activeId, setActiveId] = useState(interiorModels[0]?.id)
  const activeModel =
    interiorModels.find((m) => m.id === activeId) ?? interiorModels[0]

  return (
    <section id="showcase" className="section-y relative overflow-hidden bg-brandBlack text-white">
      {/* Grid texture + glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden
      />
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brandGold/15 blur-[120px]" />

      <div className="container-px relative">
        <SectionTitle
          eyebrow="Interactive 3D"
          title="Experience Interiors"
          highlight="in 3D"
          subtitle="Explore interior concepts in an interactive 3D format. Rotate, zoom, and view room layouts, furniture placement, lighting, and design details before final execution."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Viewer */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 shadow-cardHover sm:aspect-video">
              {activeModel && (
                <Suspense fallback={<ViewerLoading />}>
                  <InteriorModelViewer key={activeModel.id} model={activeModel} />
                </Suspense>
              )}
            </div>
          </motion.div>

          {/* Model selector / gallery */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brandGold">
              <Boxes className="h-4 w-4" aria-hidden />
              3D Gallery
            </div>
            {interiorModels.map((model) => {
              const isActive = model.id === activeModel?.id
              return (
                <button
                  key={model.id}
                  onClick={() => setActiveId(model.id)}
                  aria-pressed={isActive}
                  className={`group flex gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-brandGold bg-white/10 shadow-gold'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? 'bg-gold-gradient text-black'
                        : 'bg-white/10 text-brandGold'
                    }`}
                  >
                    <Box className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-heading text-base font-semibold text-white">
                      {model.name}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-white/60">
                      {model.description}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white/70">
                      {model.type === 'sketchfab'
                        ? 'Sketchfab embed'
                        : model.type === 'local'
                          ? 'Local model'
                          : 'Built-in scene'}
                    </span>
                  </span>
                </button>
              )
            })}
            <p className="mt-2 text-xs leading-relaxed text-white/40">
              Add more interiors by editing{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/60">
                src/data/models.ts
              </code>
              . Local <code className="text-white/60">.glb</code>/
              <code className="text-white/60">.gltf</code> files go in{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/60">
                public/models/
              </code>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
