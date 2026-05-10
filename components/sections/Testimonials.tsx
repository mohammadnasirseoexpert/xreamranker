// components/sections/Testimonials.tsx — Luxury gold testimonials

import { Star, Quote } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { TESTIMONIALS } from '@/lib/config'

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #b8860b, #edc84a)',
  'linear-gradient(135deg, #1a3560, #d4a017)',
  'linear-gradient(135deg, #8b6508, #f5df89)',
  'linear-gradient(135deg, #5c4205, #d4a017)',
]

export default function Testimonials() {
  return (
    <section style={{ padding: '5rem 0', background: '#050d1a', position: 'relative', overflow: 'hidden' }} aria-labelledby="testimonials-heading">
      {/* Background decorative element */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(212,160,23,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '1rem',
            }}>
              <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5))' }} />
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                Client Results
              </span>
              <div style={{ height: '1px', width: '40px', background: 'linear-gradient(90deg, rgba(212,160,23,0.5), transparent)' }} />
            </div>
            <h2
              id="testimonials-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              Real Businesses.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}>
                Real Results.
              </span>
            </h2>
            <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              Don&apos;t take our word for it. Here&apos;s what UK business owners say after partnering with Xtream Ranker.
            </p>
          </div>
        </RevealOnScroll>

        {/* Testimonial grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px' }} className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 90}>
              <article style={{
                background: 'rgba(8,18,35,0.7)',
                border: '1px solid rgba(212,160,23,0.1)',
                borderRadius: '16px', padding: '24px',
                display: 'flex', flexDirection: 'column',
                height: '100%',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                position: 'relative', overflow: 'hidden',
              }} className="testimonial-card">
                {/* Corner gold accent */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '60px', height: '60px',
                  background: 'linear-gradient(135deg, transparent 50%, rgba(212,160,23,0.08) 50%)',
                }} />

                {/* Quote icon */}
                <div style={{ marginBottom: '14px' }}>
                  <Quote size={22} style={{ color: 'rgba(212,160,23,0.3)' }} />
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={12} style={{ color: '#edc84a', fill: '#edc84a' }} />
                  ))}
                </div>

                {/* Text */}
                <p style={{ color: 'rgba(200,214,232,0.75)', fontSize: '0.83rem', lineHeight: 1.7, flex: 1, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div style={{ marginTop: '18px', paddingTop: '16px', borderTop: '1px solid rgba(212,160,23,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#030711', fontSize: '0.9rem', fontWeight: 700,
                    fontFamily: "'Cormorant Garamond', serif",
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(212,160,23,0.25)',
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ color: '#ffffff', fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>{t.name}</p>
                    <p style={{ color: 'rgba(200,214,232,0.4)', fontSize: '0.7rem', fontFamily: "'Outfit', sans-serif" }}>{t.role}</p>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Overall rating */}
        <RevealOnScroll>
          <div style={{
            marginTop: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: '16px', flexWrap: 'wrap', textAlign: 'center',
          }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} size={18} style={{ color: '#edc84a', fill: '#edc84a' }} />
              ))}
            </div>
            <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>
              <span style={{ color: '#ffffff', fontWeight: 700 }}>5.0/5.0</span> average rating across{' '}
              <span style={{ color: '#f5df89', fontWeight: 700 }}>200+ verified reviews</span>
            </p>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .testimonial-card:hover { border-color: rgba(212,160,23,0.25) !important; transform: translateY(-4px) !important; box-shadow: 0 20px 50px rgba(3,7,17,0.5), 0 0 24px rgba(212,160,23,0.08) !important; }
        @media (max-width: 900px) { .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
