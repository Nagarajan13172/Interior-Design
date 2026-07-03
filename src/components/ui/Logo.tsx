import { siteConfig } from '../../config/site'

interface LogoProps {
  /** Use light text (for dark/transparent backgrounds). */
  light?: boolean
  className?: string
}

/**
 * Brand logo mark + wordmark. Edit the label text in src/config/site.ts.
 */
export default function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Mark */}
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-gold">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden>
          <path d="M16 4 L27 26 H21 L16 15 L11 26 H5 Z" fill="#000" />
          <path d="M16 15 L21 26 H11 Z" fill="#1a1a1a" />
        </svg>
      </span>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-lg font-bold tracking-tight ${
            light ? 'text-white' : 'text-brandCharcoal'
          }`}
        >
          {siteConfig.brandShort}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brandOrange">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  )
}
