import { motion } from 'framer-motion'
import { CalendarCheck, ArrowRight, ChevronDown } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { images } from '../../data/images'
import { scrollToSection } from '../../lib/scroll'
import Button from '../ui/Button'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh items-center overflow-hidden">
      {/* Background image + dark/gold overlays */}
      <div className="absolute inset-0 -z-10">
        {/* ⚠️ REPLACE hero image via src/data/images.ts → images.hero */}
        <img
          src={images.hero}
          alt="Luxury modern living room interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        {/* Subtle gold glow */}
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-brandGold/20 blur-[120px]" />
      </div>

      <div className="container-px w-full pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brandGold"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brandGold" />
            Premium Construction & Interior Design
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Build Your Dream Home with{' '}
            <span className="text-gold-gradient">Premium Construction</span> &
            Interior Solutions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            From approved building plans to elegant interiors, gypsum ceilings,
            modular woodwork, and complete home finishing, we deliver end-to-end
            solutions with quality, clarity, and professional execution.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="primary"
              iconLeft={<CalendarCheck className="h-5 w-5" aria-hidden />}
              onClick={() => scrollToSection('contact')}
            >
              Book a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              iconRight={<ArrowRight className="h-5 w-5" aria-hidden />}
              onClick={() => scrollToSection('services')}
            >
              Explore Our Services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brandGold/60 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-heading text-2xl font-bold text-brandGold sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-white/70 sm:text-sm">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 transition-colors hover:text-brandGold md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden />
      </motion.button>
    </section>
  )
}
