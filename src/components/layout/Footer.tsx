import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUp,
} from 'lucide-react'
import { siteConfig } from '../../config/site'
import { navLinks } from '../../data/navigation'
import { services } from '../../data/services'
import { scrollToSection } from '../../lib/scroll'
import Logo from '../ui/Logo'

const socialIcons = [
  { key: 'instagram', Icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { key: 'facebook', Icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
  { key: 'youtube', Icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  { key: 'linkedin', Icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-dark-gradient text-white">
      {/* Gold top accent line */}
      <div className="h-1 w-full bg-gold-gradient" />

      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + description */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ key, Icon, href, label }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-brandGold hover:bg-brandGold hover:text-black"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-heading text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-white/70 transition-colors hover:text-brandGold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-heading text-lg font-semibold text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-left text-sm text-white/70 transition-colors hover:text-brandGold"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-heading text-lg font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-brandGold"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brandGold" aria-hidden />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailHref}
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-brandGold"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brandGold" aria-hidden />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.mapHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 transition-colors hover:text-brandGold"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brandGold" aria-hidden />
                  {siteConfig.contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs text-white/50 sm:text-left">
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>
          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-brandGold"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brandGold">
              <ArrowUp className="h-4 w-4" aria-hidden />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
