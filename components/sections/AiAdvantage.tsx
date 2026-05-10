// components/sections/AiAdvantage.tsx — NEW: AI advantage section with uploaded images

import Image from 'next/image'
import { Zap, Brain, TrendingUp, Search } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const AI_FEATURES = [
  {
    icon: Brain,
    title: 'AI-Powered Keyword Intelligence',
    desc: 'Our proprietary AI scans millions of data points to find the exact search terms your ideal customers use — before your competitors even know they exist.',
    image: '/ai-search-engine-technology-concept-person-using-laptop-with-ai-powered-search-bar-interface.webp',
  },
  {
    icon: Zap,
    title: 'Automated Campaign Optimization',
    desc: 'Machine learning algorithms adjust your ad bids, targeting, and creatives 24/7 — maximizing every penny of your budget for peak performance.',
    image: '/ai-automation-technology-with-digital-artificial-intelligence-machine-learning-robotic.webp',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Traffic Analytics',
    desc: 'We identify traffic trends before they peak, positioning your brand ahead of the curve so you capture demand at its highest-converting moment.',
    image: '/advanced-digital-traffic-analysis-business-professional-utilizing-cutting-edge-technology-and.webp',
  },
]

export default function AiAdvantage() {
  return (
    <section style={{ padding: '5rem 0', background: '#050d1a', position: 'relative', overflow: 'hidden' }} aria-labelledby="ai-heading">
      {/* Ambient gold glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'radial-gradient(ellipse at top right, rgba(212,160,23,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '1rem',
              padding: '5px 16px', borderRadius: '999px',
              border: '1px solid rgba(212,160,23,0.3)',
              background: 'rgba(212,160,23,0.06)',
            }}>
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                AI-First Approach
              </span>
            </div>
            <h2
              id="ai-heading"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: 1.1,
              }}
            >
              The{' '}
              <span style={{
                background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}>
                AI Advantage
              </span>{' '}
              Others Can&apos;t Match
            </h2>
            <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              We pair human expertise with cutting-edge AI to deliver results that traditional agencies simply cannot replicate.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="ai-grid">
          {AI_FEATURES.map((feat, i) => {
            const Icon = feat.icon
            return (
              <RevealOnScroll key={feat.title} delay={i * 100}>
                <div style={{
                  background: 'rgba(8,18,35,0.7)',
                  border: '1px solid rgba(212,160,23,0.1)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                }} className="ai-card">
                  {/* Image */}
                  <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="ai-card-img"
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(3,7,17,0.2), rgba(8,18,35,0.8))' }} />
                    {/* Floating icon */}
                    <div style={{
                      position: 'absolute', top: '16px', right: '16px',
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'rgba(212,160,23,0.15)',
                      border: '1px solid rgba(212,160,23,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                    }}>
                      <Icon size={18} color="#edc84a" />
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '22px' }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.2rem', marginBottom: '10px', lineHeight: 1.2 }}>
                      {feat.title}
                    </h3>
                    <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.83rem', lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .ai-card:hover { border-color: rgba(212,160,23,0.25) !important; transform: translateY(-5px) !important; box-shadow: 0 24px 60px rgba(3,7,17,0.5), 0 0 30px rgba(212,160,23,0.08) !important; }
        .ai-card:hover .ai-card-img { transform: scale(1.05) !important; }
        @media (max-width: 900px) { .ai-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
