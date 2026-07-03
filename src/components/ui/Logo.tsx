import { siteConfig } from '../../config/site'

interface LogoProps {
  /** Use light text (for dark/transparent backgrounds). */
  light?: boolean
  className?: string
}

/**
 * Brand logo: the Kinoah trident emblem in a dark badge + wordmark.
 * ⚠️ REPLACE the emblem at public/images/brand/logo-gold.png and the label
 * text in src/config/site.ts (brandShort / tagline).
 */
export default function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Emblem in a dark badge — keeps the gold mark high-contrast on any nav state */}
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brandBlack shadow-gold ring-1 ring-brandGold/30">
        <img
          src="/images/brand/logo-gold.png"
          alt={`${siteConfig.brandName} logo`}
          className="h-7 w-7 object-contain"
        />
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
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-brandOrange">
          {siteConfig.tagline}
        </span>
      </span>
    </span>
  )
}
