import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react'
import { siteConfig } from '../../config/site'
import { images } from '../../data/images'
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
  viewportOnce,
} from '../../lib/motion'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const projectTypes = [
  'New Home Construction',
  'Interior Design',
  'Gypsum Ceiling',
  'Wooden Work',
  'Modular Kitchen',
  '3D Design Consultation',
]

const contactCards = [
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.contact.whatsapp,
    href: siteConfig.contact.whatsappHref,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
  {
    icon: MapPin,
    label: 'Office Location',
    value: siteConfig.contact.address,
    href: siteConfig.contact.mapHref,
    external: true,
  },
]

type Status = 'idle' | 'submitting' | 'success'

const inputClass =
  'w-full rounded-xl border border-black/10 bg-brandLight px-4 py-3 text-sm text-brandCharcoal transition-colors placeholder:text-brandGray/60 focus:border-brandGold focus:bg-white focus:outline-none focus:ring-2 focus:ring-brandGold/30'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    // ⚠️ REPLACE: wire this up to your email service / backend / form provider
    // (e.g. Formspree, EmailJS, or your own API). This is a front-end demo submit.
    setTimeout(() => {
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setStatus('idle'), 5000)
    }, 1400)
  }

  return (
    <section id="contact" className="section-y relative overflow-hidden bg-dark-gradient text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-0">
        <img
          src={images.contact}
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
      </div>
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-brandGold/10 blur-[130px]" />

      <div className="container-px relative">
        <SectionTitle
          eyebrow="Consultation"
          title="Start Your Home Project with"
          highlight="Confidence"
          subtitle="Share your project details with us. Our team will help you understand the right process, design approach, material options, timeline, and budget planning."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {contactCards.map(({ icon: Icon, label, value, href, external }) => (
              <motion.a
                key={label}
                variants={fadeInLeft}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brandGold/50 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-black transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wider text-brandGold">
                    {label}
                  </span>
                  <span className="mt-1 block break-words text-sm text-white/80">
                    {value}
                  </span>
                </span>
              </motion.a>
            ))}
            <motion.p
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-xs leading-relaxed text-white/60"
            >
              <span className="font-semibold text-brandGold">Working hours: </span>
              {siteConfig.contact.workingHours}
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/95 p-6 shadow-cardHover backdrop-blur-md sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Full Name <span className="text-brandOrange">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Phone Number <span className="text-brandOrange">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City / area"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Project Type <span className="text-brandOrange">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="size" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Plot / Home Size
                  </label>
                  <input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="e.g. 1000 sq.ft"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brandCharcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project, timeline, and requirements…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === 'submitting'}
                  iconLeft={
                    status === 'submitting' ? (
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                    ) : (
                      <Send className="h-5 w-5" aria-hidden />
                    )
                  }
                >
                  {status === 'submitting' ? 'Sending…' : 'Request Consultation'}
                </Button>

                {/* Accessible success feedback */}
                <p
                  aria-live="polite"
                  className={`flex items-center gap-2 text-sm font-medium text-green-600 transition-opacity ${
                    status === 'success' ? 'opacity-100' : 'sr-only opacity-0'
                  }`}
                >
                  {status === 'success' && (
                    <>
                      <CheckCircle2 className="h-5 w-5" aria-hidden />
                      Thank you! We&apos;ll be in touch shortly.
                    </>
                  )}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
