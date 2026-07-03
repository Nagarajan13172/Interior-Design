import { motion } from 'framer-motion'
import { Info } from 'lucide-react'
import type { ProcessStepData } from '../../types'
import { fadeInLeft, fadeInRight, viewportOnce } from '../../lib/motion'
import Checklist from './Checklist'
import DataTable from './DataTable'

interface ProcessStepProps {
  data: ProcessStepData
  /** Alternate image/content sides for a zig-zag timeline. */
  reversed?: boolean
  isLast?: boolean
}

/**
 * A single timeline step for the construction process: numbered marker,
 * image, description, and any of checklist / table / sub-stages / estimates.
 */
export default function ProcessStep({ data, reversed = false, isLast = false }: ProcessStepProps) {
  const { step, title, description, image, checklist, stages, table, note, estimates } = data

  return (
    <div className="relative">
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Image side */}
        <motion.div
          variants={reversed ? fadeInRight : fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Big step number badge */}
            <div className="absolute left-5 top-5 flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-black/70 backdrop-blur-sm">
              <span className="text-[10px] font-medium uppercase tracking-widest text-brandGold">
                Step
              </span>
              <span className="font-heading text-2xl font-bold text-white">
                {String(step).padStart(2, '0')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Content side */}
        <motion.div
          variants={reversed ? fadeInLeft : fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h3 className="mb-4 font-heading text-2xl font-bold text-brandCharcoal sm:text-3xl">
            {title}
          </h3>
          <p className="mb-6 text-base leading-relaxed text-brandGray">
            {description}
          </p>

          {checklist && <Checklist items={checklist} columns={2} />}

          {/* Sub-stages as numbered chips (Construction Execution) */}
          {stages && (
            <ol className="grid gap-2.5 sm:grid-cols-2">
              {stages.map((stage, i) => (
                <motion.li
                  key={stage}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-2.5 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-black">
                    {i + 1}
                  </span>
                  <span className="text-sm text-brandCharcoal">{stage}</span>
                </motion.li>
              ))}
            </ol>
          )}

          {/* Estimate cards (Cost & Timeline) */}
          {estimates && (
            <div className="grid gap-4 sm:grid-cols-3">
              {estimates.map((est) => (
                <div
                  key={est.label}
                  className="rounded-2xl border border-brandGold/30 bg-white p-5 shadow-card"
                >
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-brandGray">
                    {est.label}
                  </p>
                  <p className="font-heading text-lg font-bold text-brandOrange">
                    {est.value}
                  </p>
                  {est.note && (
                    <p className="mt-1 text-xs leading-relaxed text-brandGray">
                      {est.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Full-width table below the split (when present) */}
      {table && (
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8"
        >
          <DataTable headers={table.headers} rows={table.rows} />
        </motion.div>
      )}

      {/* Important note callout */}
      {note && (
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brandGold/40 bg-brandGold/10 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brandOrange" aria-hidden />
          <p className="text-sm leading-relaxed text-brandCharcoal">
            <span className="font-semibold">Important: </span>
            {note}
          </p>
        </div>
      )}

      {/* Connector line to next step */}
      {!isLast && (
        <div
          className="mx-auto mt-12 hidden h-12 w-px bg-gradient-to-b from-brandGold to-transparent lg:block"
          aria-hidden
        />
      )}
    </div>
  )
}
