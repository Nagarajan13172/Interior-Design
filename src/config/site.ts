/**
 * ============================================================================
 *  SITE CONFIG — single source of truth for brand & contact details.
 *  ⚠️  REPLACE the placeholder values below with your real business details.
 * ============================================================================
 */

export const siteConfig = {
  /* ⚠️ REPLACE: Brand name (also used in the logo, navbar, footer, SEO). */
  brandName: 'Aurum Build & Interiors',
  brandShort: 'Aurum',
  tagline: 'Build & Interiors',

  /* Short brand description used in the footer and meta tags. */
  description:
    'Aurum Build & Interiors delivers premium construction, interior design, gypsum ceiling, and wooden work solutions for modern homes.',

  /* ⚠️ REPLACE: Contact details. */
  contact: {
    phone: '+91 98765 43210', // ⚠️ REPLACE: Phone number
    phoneHref: 'tel:+919876543210', // ⚠️ REPLACE: Phone number (digits only, with country code)
    whatsapp: '+91 98765 43210', // ⚠️ REPLACE: WhatsApp number
    whatsappHref: 'https://wa.me/919876543210', // ⚠️ REPLACE: WhatsApp link (wa.me/<countrycode><number>)
    email: 'hello@aurumbuild.com', // ⚠️ REPLACE: Email
    emailHref: 'mailto:hello@aurumbuild.com', // ⚠️ REPLACE: Email
    // ⚠️ REPLACE: Office address
    address: 'No. 24, Aurum Towers, Anna Salai, Chennai, Tamil Nadu 600002',
    // ⚠️ REPLACE: Google Maps link for the office location
    mapHref: 'https://maps.google.com/?q=Chennai',
    workingHours: 'Mon – Sat · 9:30 AM to 7:00 PM',
  },

  /* ⚠️ REPLACE: Social media profile links. */
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    youtube: 'https://youtube.com/',
    linkedin: 'https://linkedin.com/',
  },

  /* Headline stats shown under the hero. */
  stats: [
    { value: '100+', label: 'Completed Projects' },
    { value: '10+', label: 'Years Combined Expertise' },
    { value: 'End-to-End', label: 'Home Solutions' },
    { value: 'Transparent', label: 'Planning & Execution' },
  ],
} as const

export type SiteConfig = typeof siteConfig
