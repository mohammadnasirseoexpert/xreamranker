// components/sections/Hero.tsx — Luxury video hero with gold branding

'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Phone, Play } from 'lucide-react'
import { SITE } from '@/lib/config'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
        background: '#030711',
      }}
    >
      {/* ── Background Video ── */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.25,
          zIndex: 0,
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay with gold gradient ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(3,7,17,0.82) 0%, rgba(5,13,26,0.65) 40%, rgba(3,7,17,0.95) 100%)',
      }} />

      {/* ── Gold radial ambient ── */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,160,23,0.08) 0%, transparent 70%)',
        zIndex: 2, pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '5%',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 70%)',
        zIndex: 2, pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse',
      }} />

      {/* ── Subtle gold grid ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', opacity: 0.03,
        backgroundImage: `linear-gradient(rgba(212,160,23,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,23,1) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '6rem 1.5rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">

          {/* Left — copy */}
          <div className="hero-copy" style={{ animation: 'fadeIn 1s ease both' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '999px',
              border: '1px solid rgba(212,160,23,0.35)',
              background: 'rgba(212,160,23,0.08)',
              marginBottom: '1.5rem',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', animation: 'pulse-gold 2s infinite', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
              <span style={{ color: '#edc84a', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                Award-Winning Digital Marketing Agency — UK
              </span>
            </div>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}>
              We Help Businesses{' '}
              <span style={{
                background: 'linear-gradient(135deg, #d4a017 0%, #f5df89 50%, #b8860b 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}>
                Get More Leads, Sales
              </span>{' '}
              &amp; Growth
            </h1>

            {/* Subheadline */}
            <p style={{
              color: 'rgba(200,214,232,0.8)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '520px',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
            }}>
              From SEO and paid ads to world-class web development and content — Xtream Ranker
              gives UK businesses the unfair advantage to dominate their market online.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.5rem' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 28px', borderRadius: '6px',
                  background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #edc84a 100%)',
                  color: '#030711', fontWeight: 700, fontSize: '0.9rem',
                  letterSpacing: '0.04em', textDecoration: 'none',
                  boxShadow: '0 6px 28px rgba(212,160,23,0.4)',
                  transition: 'all 0.25s ease',
                  fontFamily: "'Outfit', sans-serif",
                }}
                className="hero-cta-primary"
              >
                Get Free Strategy Call
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '14px 24px', borderRadius: '6px',
                  border: '1px solid rgba(212,160,23,0.3)',
                  color: '#edc84a', fontWeight: 500, fontSize: '0.9rem',
                  textDecoration: 'none', transition: 'all 0.25s ease',
                  fontFamily: "'Outfit', sans-serif",
                  background: 'rgba(212,160,23,0.04)',
                }}
                className="hero-cta-secondary"
              >
                <Phone size={15} />
                {SITE.phone}
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px', color: 'rgba(200,214,232,0.6)', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif" }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={13} style={{ color: '#edc84a', fill: '#edc84a' }} />
                ))}
                <span style={{ marginLeft: '4px', color: 'rgba(200,214,232,0.7)' }}>5.0 rating</span>
              </div>
              <div><span style={{ color: '#f5df89', fontWeight: 600 }}>500+</span> happy clients</div>
              <div><span style={{ color: '#f5df89', fontWeight: 600 }}>£12M+</span> revenue generated</div>
            </div>
          </div>

          {/* Right — floating dashboard card */}
          <div className="hero-card-wrap" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative', width: '340px', animation: 'float 6s ease-in-out infinite' }}>
              {/* Main glass card */}
              <div style={{
                background: 'rgba(8,18,35,0.85)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212,160,23,0.2)',
                borderRadius: '16px',
                padding: '28px',
                boxShadow: '0 0 60px rgba(212,160,23,0.15), 0 20px 60px rgba(3,7,17,0.6)',
              }}>
                {/* Card header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, color: '#ffffff', fontSize: '1.1rem' }}>
                    This Month So Far
                  </h3>
                  <span style={{
                    fontSize: '0.65rem', padding: '3px 10px', borderRadius: '999px',
                    background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                    color: '#22c55e', letterSpacing: '0.08em', fontFamily: "'Outfit', sans-serif",
                  }}>
                    LIVE
                  </span>
                </div>

                {/* Stats */}
                {[
                  { label: 'Leads Generated',       value: '2,847',  delta: '+34%',  color: '#22c55e' },
                  { label: 'Google #1 Rankings',     value: '128',    delta: '+12',   color: '#60a5fa' },
                  { label: 'Ad Revenue for Clients', value: '£84K',   delta: '+28%',  color: '#edc84a' },
                  { label: 'Average ROAS',           value: '6.2×',   delta: '↑ High','color': '#a78bfa' },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div>
                      <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.7rem', marginBottom: '2px', fontFamily: "'Outfit', sans-serif" }}>{stat.label}</p>
                      <p style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.4rem' }}>{stat.value}</p>
                    </div>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 600, padding: '3px 8px', borderRadius: '6px',
                      background: 'rgba(255,255,255,0.05)', color: stat.color,
                      fontFamily: "'Outfit', sans-serif",
                    }}>
                      {stat.delta}
                    </span>
                  </div>
                ))}

                {/* Gold divider */}
                <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.3), transparent)', margin: '4px 0 12px' }} />

                {/* Mini chart bars */}
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '32px' }}>
                  {[40, 55, 45, 70, 65, 80, 75, 95, 85, 100].map((h, i) => (
                    <div key={i} style={{ flex: 1, background: `linear-gradient(to top, #b8860b, #edc84a)`, height: `${h}%`, borderRadius: '2px 2px 0 0', opacity: 0.7 + (i * 0.03) }} />
                  ))}
                </div>
              </div>

              {/* Floating badge — Retention */}
              <div style={{
                position: 'absolute', top: '-16px', right: '-16px',
                background: 'rgba(8,18,35,0.95)', border: '1px solid rgba(212,160,23,0.3)',
                borderRadius: '10px', padding: '8px 12px', textAlign: 'center',
                boxShadow: '0 8px 24px rgba(3,7,17,0.5)',
              }}>
                <p style={{ background: 'linear-gradient(135deg, #d4a017, #edc84a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.3rem' }}>97%</p>
                <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.65rem', fontFamily: "'Outfit', sans-serif" }}>Retention</p>
              </div>

              {/* Floating badge — Support */}
              <div style={{
                position: 'absolute', bottom: '-16px', left: '-16px',
                background: 'rgba(8,18,35,0.95)', border: '1px solid rgba(212,160,23,0.25)',
                borderRadius: '10px', padding: '8px 12px',
                boxShadow: '0 8px 24px rgba(3,7,17,0.5)',
              }}>
                <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.6rem', fontFamily: "'Outfit', sans-serif" }}>Support</p>
                <p style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1rem' }}>24/7 Live</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #050d1a, transparent)', zIndex: 5 }} />

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } }
        .hero-cta-primary:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.55) !important; transform: translateY(-2px) !important; }
        .hero-cta-secondary:hover { background: rgba(212,160,23,0.1) !important; border-color: rgba(212,160,23,0.5) !important; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card-wrap { display: none !important; }
        }
      `}</style>
    </section>
  )
}
