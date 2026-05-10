// components/sections/WhyUs.tsx — Luxury Why Us with image panel

import Image from 'next/image'
import { Target, Cpu, LayoutGrid, BarChart3, MapPin, Clock } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { WHY_US } from '@/lib/config'

const ICON_MAP: Record<string, React.ElementType> = { Target, Cpu, LayoutGrid, BarChart3, MapPin, Clock }

export default function WhyUs() {
  return (
    <section
      style={{ padding: '5rem 0', background: 'rgba(8,18,35,0.6)', position: 'relative', overflow: 'hidden' }}
      aria-labelledby="why-us-heading"
    >
      {/* Gold top border */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.4), transparent)' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="why-grid">

          {/* Left — image collage */}
          <RevealOnScroll>
            <div style={{ position: 'relative', height: '520px' }} className="why-images">
              {/* Primary image */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: '80px', bottom: '100px',
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(212,160,23,0.15)',
                boxShadow: '0 20px 60px rgba(3,7,17,0.6)',
              }}>
                <Image
                  src="/growth-strategy-busines-trend-concept-businessman-hand-on-arrow-investment-icon-increase-sale.webp"
                  alt="Growth Strategy"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(3,7,17,0.1), rgba(8,18,35,0.4))' }} />
              </div>

              {/* Secondary image */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0, width: '220px', height: '240px',
                borderRadius: '16px', overflow: 'hidden',
                border: '1px solid rgba(212,160,23,0.2)',
                boxShadow: '0 16px 40px rgba(3,7,17,0.7)',
              }}>
                <Image
                  src="/new-business-plan-setting-goals-for-the-new-year-2026-businessman-using-laptop-and-tablet-to.webp"
                  alt="Business Goals 2026"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="220px"
                />
              </div>

              {/* Gold accent badge */}
              <div style={{
                position: 'absolute', bottom: '120px', left: '-20px',
                background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
                borderRadius: '12px', padding: '16px 20px',
                boxShadow: '0 8px 32px rgba(212,160,23,0.4)',
              }}>
                <p style={{ color: '#030711', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>5+</p>
                <p style={{ color: 'rgba(3,7,17,0.7)', fontSize: '0.7rem', fontFamily: "'Outfit', sans-serif", fontWeight: 600, letterSpacing: '0.05em' }}>Years of Excellence</p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — copy + feature grid */}
          <div>
            <RevealOnScroll>
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '5px 16px', borderRadius: '999px',
                  border: '1px solid rgba(212,160,23,0.3)',
                  background: 'rgba(212,160,23,0.06)',
                  marginBottom: '1rem',
                }}>
                  <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                    Why Xtream Ranker?
                  </span>
                </div>
                <h2
                  id="why-us-heading"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                    color: '#ffffff',
                    lineHeight: 1.1,
                    marginBottom: '1rem',
                  }}
                >
                  We Don&apos;t Just Run Campaigns —{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 4s linear infinite',
                  }}>
                    We Build Growth Engines
                  </span>
                </h2>
                <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.95rem', lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                  Most agencies deliver reports. We deliver revenue. Our integrated approach means
                  every channel works in harmony to compound your results month after month.
                </p>
              </div>
            </RevealOnScroll>

            {/* Feature grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              {WHY_US.map((item, i) => {
                const Icon = ICON_MAP[item.icon] ?? Target
                return (
                  <RevealOnScroll key={item.title} delay={i * 70}>
                    <div style={{
                      background: 'rgba(8,18,35,0.6)',
                      border: '1px solid rgba(212,160,23,0.1)',
                      borderRadius: '12px', padding: '16px',
                      transition: 'border-color 0.3s, background 0.3s',
                    }} className="why-card">
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '8px',
                        background: 'rgba(212,160,23,0.1)',
                        border: '1px solid rgba(212,160,23,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '10px',
                      }}>
                        <Icon size={16} color="#edc84a" />
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#ffffff', fontSize: '1rem', marginBottom: '5px' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.75rem', lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                        {item.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>

            <RevealOnScroll delay={300}>
              <div style={{ marginTop: '2rem' }}>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '13px 28px', borderRadius: '6px',
                    background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
                    color: '#030711', fontWeight: 700, fontSize: '0.85rem',
                    letterSpacing: '0.05em', textDecoration: 'none',
                    boxShadow: '0 6px 24px rgba(212,160,23,0.35)',
                    fontFamily: "'Outfit', sans-serif",
                  }}
                  className="btn-gold"
                >
                  Start Growing Today
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .why-card:hover { border-color: rgba(212,160,23,0.25) !important; background: rgba(212,160,23,0.04) !important; }
        .btn-gold:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.5) !important; transform: translateY(-2px) !important; filter: brightness(1.08) !important; }
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-images { display: none !important; }
        }
      `}</style>
    </section>
  )
}
