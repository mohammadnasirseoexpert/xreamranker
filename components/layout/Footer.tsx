// components/layout/Footer.tsx — Luxury gold/navy footer

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { SITE, NAV_LINKS, SERVICES } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: '#030711', borderTop: '1px solid rgba(212,160,23,0.15)' }} aria-label="Site Footer">

      {/* Gold accent line */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #b8860b, #edc84a, #d4a017, transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem' }} className="footer-grid">

          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
              }}>
                <Image src="/logo.png" alt="Xtream Ranker" width={48} height={48} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700, fontSize: '1.4rem', color: '#ffffff', letterSpacing: '-0.01em',
                }}>
                  Xtream<span style={{ background: 'linear-gradient(135deg, #d4a017, #edc84a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ranker</span>
                </span>
                <span style={{ display: 'block', fontSize: '0.6rem', color: 'rgba(212,160,23,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                  The Algorithm of Success
                </span>
              </div>
            </Link>
            <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300, maxWidth: '280px' }}>
              A results-driven UK digital marketing agency helping businesses win more leads,
              sales, and sustainable growth through SEO, paid ads, web development, and content.
            </p>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '7px',
              padding: '5px 14px', borderRadius: '999px',
              background: 'rgba(212,160,23,0.06)', border: '1px solid rgba(212,160,23,0.2)',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px rgba(34,197,94,0.5)', animation: 'pulse 2s infinite' }} />
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: '0.06em' }}>24/7 — Always Online</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(212,160,23,0.15)', paddingBottom: '10px' }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'rgba(200,214,232,0.5)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif', transition: 'color 0.2s'" }}
                    className="footer-link"
                  >
                    <ArrowRight size={12} style={{ color: '#d4a017' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(212,160,23,0.15)', paddingBottom: '10px' }}>
              Our Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'rgba(200,214,232,0.5)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }}
                    className="footer-link"
                  >
                    <ArrowRight size={12} style={{ color: '#d4a017' }} />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(212,160,23,0.15)', paddingBottom: '10px' }}>
              Get In Touch
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: Phone, href: `tel:${SITE.phoneRaw}`, text: SITE.phone },
                { icon: Mail, href: `mailto:${SITE.email}`, text: SITE.email },
              ].map(({ icon: Icon, href, text }) => (
                <li key={href}>
                  <a href={href} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(200,214,232,0.5)', textDecoration: 'none', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }} className="footer-link">
                    <Icon size={14} style={{ color: '#d4a017', marginTop: '2px', flexShrink: 0 }} />
                    {text}
                  </a>
                </li>
              ))}
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(200,214,232,0.5)', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }}>
                <MapPin size={14} style={{ color: '#d4a017', marginTop: '2px', flexShrink: 0 }} />
                {SITE.address}
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(200,214,232,0.5)', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }}>
                <Clock size={14} style={{ color: '#d4a017', marginTop: '2px', flexShrink: 0 }} />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(212,160,23,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: 'rgba(200,214,232,0.3)', fontSize: '0.75rem', fontFamily: "'Outfit', sans-serif" }}>
            © {currentYear} Xtream Ranker. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['/privacy', '/terms'].map((href, i) => (
              <Link key={href} href={href} style={{ color: 'rgba(200,214,232,0.3)', fontSize: '0.75rem', textDecoration: 'none', fontFamily: "'Outfit', sans-serif" }} className="footer-link">
                {i === 0 ? 'Privacy Policy' : 'Terms of Service'}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #edc84a !important; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
