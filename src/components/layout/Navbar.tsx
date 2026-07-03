import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, CalendarCheck } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { scrollToSection } from '../../lib/scroll'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Solid background once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    scrollToSection(href)
  }

  const solid = scrolled || menuOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/90 shadow-card backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-px flex h-20 items-center justify-between"
        aria-label="Primary"
      >
        <button
          onClick={() => handleNav('home')}
          aria-label="Go to top"
          className="shrink-0"
        >
          <Logo light={!solid} />
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-brandOrange'
                        : 'text-brandCharcoal hover:text-brandOrange'
                      : isActive
                        ? 'text-brandGold'
                        : 'text-white/90 hover:text-brandGold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-gradient"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden xl:block">
          <Button
            size="sm"
            variant="primary"
            iconLeft={<CalendarCheck className="h-4 w-4" aria-hidden />}
            onClick={() => handleNav('contact')}
          >
            Book Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors xl:hidden ${
            solid ? 'text-brandCharcoal hover:bg-black/5' : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/5 bg-white xl:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      activeSection === link.href
                        ? 'bg-brandGold/10 text-brandOrange'
                        : 'text-brandCharcoal hover:bg-black/5'
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="mt-3">
                <Button
                  fullWidth
                  variant="primary"
                  iconLeft={<CalendarCheck className="h-4 w-4" aria-hidden />}
                  onClick={() => handleNav('contact')}
                >
                  Book Consultation
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
