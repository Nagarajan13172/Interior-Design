import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { scrollToSection } from '../../lib/scroll'

/** Floating WhatsApp button + scroll-to-top, fixed bottom-right. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="to-top"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => scrollToSection('home')}
            aria-label="Scroll to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-brandBlack text-white shadow-card transition-colors hover:bg-brandCharcoal"
          >
            <ArrowUp className="h-5 w-5" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ⚠️ REPLACE: WhatsApp link via src/config/site.ts → contact.whatsappHref */}
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative h-7 w-7" aria-hidden />
      </a>
    </div>
  )
}
