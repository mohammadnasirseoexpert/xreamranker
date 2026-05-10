// components/sections/CtaBanner.tsx — Luxury CTA with background image

import Image from 'next/image'
import { Phone, CheckCircle } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import LeadForm from '@/components/ui/LeadForm'
import { SITE } from '@/lib/config'

export default function CtaBanner() {
  return (
    <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', background: '#081223' }} aria-labelledby="cta-heading">
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.12 }}>
        <Image
          src="/advanced-digital-traffic-analysis-business-professional-utilizing-cutting-edge-technology-and.webp"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Gold overlay gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(5,13,26,0.96) 0%, rgba(8,18,35,0.9) 50%, rgba(11,22,45,0.95) 100%)',
      }} />

      {/* Gold top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #d4a017, #edc84a, #d4a017, transparent)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="cta-grid">

          {/* Left — copy */}
          <RevealOnScroll>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '5px 16px', borderRadius: '999px',
                border: '1px solid rgba(212,160,23,0.4)',
                background: 'rgba(212,160,23,0.08)',
                marginBottom: '1.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#edc84a', boxShadow: '0 0 8px rgba(212,160,23,0.6)' }} />
                <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                  Limited Spots Available
                </span>
              </div>

              <h2
                id="cta-heading"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: '#ffffff',
                  lineHeight: 1.08,
                  marginBottom: '1.25rem',
                }}
              >
                Ready to{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'shimmer 4s linear infinite',
                }}>
                  10× Your Online Revenue?
                </span>
              </h2>

              <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                Book a free 30-minute strategy call with our experts. We&apos;ll audit your current
                digital presence and map out a custom growth plan — completely free, no obligation.
              </p>

              {/* Reassurance points */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem' }}>
                {[
                  'Free personalized digital audit (worth £499)',
                  'Custom 90-day growth roadmap',
                  'No lock-in contracts — cancel anytime',
                  'Response within 2 hours — 24/7',
                ].map((point) => (
                  <li key={point} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(200,214,232,0.75)', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>
                    <CheckCircle size={16} style={{ color: '#d4a017', flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 24px', borderRadius: '6px',
                    background: 'linear-gradient(135deg, #166534, #15803d)',
                    color: '#ffffff', fontWeight: 700, fontSize: '0.85rem',
                    textDecoration: 'none', boxShadow: '0 6px 24px rgba(22,101,52,0.4)',
                    letterSpacing: '0.03em', fontFamily: "'Outfit', sans-serif",
                  }}
                  className="whatsapp-btn"
                >
                  💬 WhatsApp Us Now
                </a>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 22px', borderRadius: '6px',
                    border: '1px solid rgba(212,160,23,0.3)',
                    color: '#edc84a', fontWeight: 600, fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontFamily: "'Outfit', sans-serif",
                    background: 'rgba(212,160,23,0.04)',
                  }}
                  className="call-btn"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — lead form */}
          <RevealOnScroll delay={150}>
            <div style={{
              background: 'rgba(8,18,35,0.85)',
              border: '1px solid rgba(212,160,23,0.2)',
              borderRadius: '16px', padding: '32px',
              boxShadow: '0 0 60px rgba(212,160,23,0.12), 0 20px 60px rgba(3,7,17,0.5)',
              backdropFilter: 'blur(20px)',
            }}>
              {/* Form header with gold accent */}
              <div style={{ borderLeft: '3px solid #d4a017', paddingLeft: '14px', marginBottom: '8px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.5rem' }}>
                  Send Us a Message
                </h3>
              </div>
              <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.8rem', marginBottom: '1.5rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                We reply within 2 hours — guaranteed.
              </p>
              <LeadForm compact />
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .whatsapp-btn:hover { box-shadow: 0 10px 36px rgba(22,101,52,0.55) !important; transform: translateY(-2px) !important; filter: brightness(1.1) !important; }
        .call-btn:hover { background: rgba(212,160,23,0.1) !important; border-color: rgba(212,160,23,0.5) !important; }
        @media (max-width: 900px) { .cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
