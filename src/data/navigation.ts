import type { NavLink } from '../types'

/**
 * Primary navigation. `href` values are in-page section ids (the sections
 * render matching `id` attributes). Add or reorder freely.
 */
export const navLinks: NavLink[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Process', href: 'process' },
  { label: 'Interiors', href: 'interior' },
  { label: 'Gypsum', href: 'gypsum' },
  { label: 'Woodwork', href: 'wooden' },
  { label: '3D Showcase', href: 'showcase' },
  { label: 'Projects', href: 'portfolio' },
  { label: 'Gallery', href: 'gallery' },
  { label: 'Contact', href: 'contact' },
]
