// components/sections/ServicesOverview.tsx — Luxury services grid with media images

import Link from 'next/link'
import Image from 'next/image'
import { Search, Code2, TrendingUp, Share2, PenTool, ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { SERVICES } from '@/lib/config'

const ICON_MAP: Record<string, React.ElementType> = { Search, Code2, TrendingUp, Share2, PenTool }

// Map each service to an uploaded image
const SERVICE_IMAGES: Record<string, string> = {
  seo:     '/ai-search-engine-technology-concept-person-using-laptop-with-ai-powered-search-bar-interface.webp',
  web:     '/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.webp',
  ads:     '/digital-marketing-commerce-online-sale-concept-businessman-using-laptop-with-ads-dashboard.webp',
  social:  '/social-media-marketing-bg.webp',
  content: '/it-man-working-on-notebook-planning-to-increase-website-traffic.webp',
}

const GOLD_GRADIENTS: Record<string, string> = {
  seo:     'from #b8860b to #edc84a',
  web:     'from #1a3560 to #d4a017',
  ads:     'from #8b6508 to #f5df89',
  social:  'from #5c4205 to #d4a017',
  content: 'from #0c1a30 to #edc84a',
}

export default function ServicesOverview() {
  return (
    <section id="services" style={{ padding: '5rem 0', background: '#050d1a' }} aria-labelledby="services-heading">
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section header */}
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '5px 18px', borderRadius: '999px',
              border: '1px solid rgba(212,160,23,0.3)',
              background: 'rgba(212,160,23,0.06)',
              marginBottom: '1rem',
            }}>
              <div style={{ width: '24px', height: '1px', background: 'linear-gradient(90deg, transparent, #d4a017)' }} />
              <span style={{ color: '#edc84a', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                What We Do
              </span>
              <div style={{ width: '24px', height: '1px', background: 'linear-gradient(90deg, #d4a017, transparent)' }} />
            </div>
            <h2
              id="services-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              Every Service You Need to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #d4a017 0%, #f5df89 50%, #b8860b 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}>
                Dominate Online
              </span>
            </h2>
            <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              We don&apos;t offer cookie-cutter packages. Each strategy is tailored to your business goals
              and engineered to deliver measurable revenue growth.
            </p>
          </div>
        </RevealOnScroll>

        {/* Service cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Search
            const imgSrc = SERVICE_IMAGES[service.id]
            return (
              <RevealOnScroll key={service.id} delay={i * 80}>
                <div
                  style={{
                    background: 'rgba(8,18,35,0.7)',
                    border: '1px solid rgba(212,160,23,0.1)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                    backdropFilter: 'blur(10px)',
                  }}
                  className="service-card"
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <Image
                      src={imgSrc}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="service-img"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gold gradient overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, rgba(3,7,17,0.1) 0%, rgba(8,18,35,0.85) 100%)',
                    }} />
                    {/* Icon badge */}
                    <div style={{
                      position: 'absolute', bottom: '16px', left: '16px',
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'linear-gradient(135deg, #b8860b, #edc84a)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(212,160,23,0.4)',
                    }}>
                      <Icon size={20} color="#030711" />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <p style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px', fontFamily: "'Outfit', sans-serif" }}>
                      {service.tagline}
                    </p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.3rem', marginBottom: '10px', lineHeight: 1.2 }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.83rem', lineHeight: 1.65, flex: 1, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {service.benefits.slice(0, 3).map((b) => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.75rem', color: 'rgba(200,214,232,0.55)', fontFamily: "'Outfit', sans-serif" }}>
                          <span style={{ color: '#d4a017', marginTop: '2px', flexShrink: 0 }}>◆</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/services#${service.id}`}
                      style={{
                        marginTop: '18px',
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        color: '#edc84a', fontSize: '0.78rem', fontWeight: 600,
                        textDecoration: 'none', letterSpacing: '0.04em',
                        fontFamily: "'Outfit', sans-serif",
                        transition: 'gap 0.2s ease',
                        borderTop: '1px solid rgba(212,160,23,0.1)',
                        paddingTop: '14px',
                      }}
                      className="service-link"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn more <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>

        {/* View all CTA */}
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/services"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', borderRadius: '6px',
                border: '1px solid rgba(212,160,23,0.35)',
                color: '#edc84a', fontSize: '0.85rem', fontWeight: 600,
                textDecoration: 'none', letterSpacing: '0.04em',
                fontFamily: "'Outfit', sans-serif",
                background: 'rgba(212,160,23,0.04)',
                transition: 'all 0.25s ease',
              }}
              className="view-all-btn"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .service-card:hover { transform: translateY(-6px) !important; box-shadow: 0 24px 64px rgba(0,0,0,0.4), 0 0 32px rgba(212,160,23,0.1) !important; border-color: rgba(212,160,23,0.25) !important; }
        .service-card:hover .service-img { transform: scale(1.06); }
        .service-link:hover { gap: 10px !important; color: #f5df89 !important; }
        .view-all-btn:hover { background: rgba(212,160,23,0.1) !important; border-color: rgba(212,160,23,0.6) !important; }
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
