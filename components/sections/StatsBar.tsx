// components/sections/StatsBar.tsx — Luxury gold stats ticker strip

import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { STATS } from '@/lib/config'

const SERVICES_TICKER = [
  'SEO & AI Optimization', 'Google Ads', 'Meta Ads', 'Web Development',
  'Social Media Marketing', 'Content Writing', 'Local SEO', 'E-Commerce',
  'Lead Generation', 'Brand Strategy',
]

export default function StatsBar() {
  return (
    <>
      {/* Stats grid */}
      <section
        aria-label="Key Statistics"
        style={{
          borderTop: '1px solid rgba(212,160,23,0.12)',
          borderBottom: '1px solid rgba(212,160,23,0.12)',
          background: 'rgba(8,18,35,0.6)',
          padding: '3rem 0',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-grid">
            {STATS.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={i * 100}>
                <div style={{ textAlign: 'center', padding: '1rem', position: 'relative' }}>
                  {/* Decorative gold vertical separator (not on last) */}
                  {i < STATS.length - 1 && (
                    <div style={{
                      position: 'absolute', right: 0, top: '10%', bottom: '10%', width: '1px',
                      background: 'linear-gradient(to bottom, transparent, rgba(212,160,23,0.3), transparent)',
                    }} className="stat-divider" />
                  )}
                  <p style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                    background: 'linear-gradient(135deg, #d4a017 0%, #f5df89 50%, #b8860b 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 4s linear infinite',
                    marginBottom: '6px',
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.03em' }}>
                    {stat.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gold ticker marquee */}
      <div style={{
        background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 40%, #edc84a 100%)',
        padding: '12px 0',
        overflow: 'hidden',
      }}>
        <div className="marquee-inner">
          {[...SERVICES_TICKER, ...SERVICES_TICKER].map((item, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: '16px',
              color: '#030711', fontWeight: 700, fontSize: '0.75rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              fontFamily: "'Outfit', sans-serif",
              whiteSpace: 'nowrap', padding: '0 2rem',
            }}>
              ◆ {item}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-divider { display: none; }
        }
      `}</style>
    </>
  )
}
