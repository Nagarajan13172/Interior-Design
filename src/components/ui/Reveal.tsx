import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeInUp, viewportOnce } from '../../lib/motion'

interface RevealProps {
  children: ReactNode
  variants?: Variants
  className?: string
  /** Delay in seconds before the reveal animation starts. */
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'span'
}

/**
 * Scroll-triggered reveal wrapper. Animates once when it enters the viewport.
 * Defaults to a subtle fade-up. Respects prefers-reduced-motion via Framer's
 * built-in reduced-motion handling + our global CSS override.
 */
export default function Reveal({
  children,
  variants = fadeInUp,
  className = '',
  delay = 0,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
