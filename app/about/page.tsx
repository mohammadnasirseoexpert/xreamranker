// app/about/page.tsx — About Us page (Luxury Redesign)

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Users, Globe, Award } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import CtaBanner from '@/components/sections/CtaBanner'
import { STATS } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Us | Xtream Ranker Digital Marketing Agency',
  description:
    'Learn about Xtream Ranker — a London-based UK digital marketing agency driven by results. Our team of SEO, ads, and web specialists have helped 500+ businesses grow online.',
}

const TIMELINE = [
  { year: '2019', title: 'Founded in London', desc: 'Started as a two-person SEO consultancy in Bethnal Green with a clear mission: deliver real ROI, not fluff.' },
  { year: '2020', title: 'Expanded to Paid Media', desc: 'Launched our Google Ads and Facebook Ads division, immediately generating 4× ROAS for our first 10 clients.' },
  { year: '2021', title: 'Full Web Development Studio', desc: 'Built our in-house dev team to create conversion-optimized websites that complement every campaign we run.' },
  { year: '2022', title: '200+ Clients Milestone', desc: 'Hit 200 active clients across the UK — from local traders to national e-commerce brands and B2B SaaS companies.' },
  { year: '2023', title: 'AI-Powered Services Launch', desc: 'Integrated AI tools into our SEO and content workflows, delivering 3× faster results for clients at scale.' },
  { year: '2024', title: '500+ Clients & £12M Revenue', desc: 'Generated over £12 million in tracked revenue for clients. Expanded our team to 25+ specialists across all disciplines.' },
]

const TEAM_VALUES = [
  { icon: Target, title: 'Results-Obsessed',       desc: 'Every decision is measured against one goal: growing your business revenue.' },
  { icon: Users,  title: 'Collaborative',           desc: 'We work as an extension of your team, not a distant agency.' },
  { icon: Globe,  title: 'Transparent',             desc: 'No hidden fees, no jargon. You always know exactly what we\'re doing and why.' },
  { icon: Award,  title: 'Continuously Improving',  desc: 'We invest in training, tools, and research to stay ahead of every algorithm change.' },
]

const pageHeroStyle = {
  position: 'relative' as const,
  paddingTop: '8rem',
  paddingBottom: '5rem',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #030711 0%, #050d1a 40%, #081223 100%)',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={pageHeroStyle}>
        <div style={{ position: 'absolute', top: '30%', left: '-8rem', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
          <RevealOnScroll>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.06)', marginBottom: '1.25rem' }}>
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Our Story</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.08 }}>
              Built for One Purpose:{' '}
              <span style={{ background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>Your Growth</span>
            </h1>
            <p style={{ color: 'rgba(200,214,232,0.75)', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              We are a London-based team of digital marketers, developers, and strategists united
              by a single mission — to turn UK businesses into online market leaders.
            </p>
          </RevealOnScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #050d1a, transparent)' }} />
        <style>{`@keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }`}</style>
      </section>

      {/* Stats grid */}
      <section style={{ padding: '4rem 0', background: '#050d1a', borderBottom: '1px solid rgba(212,160,23,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="about-stats">
            {STATS.map((s, i) => (
              <RevealOnScroll key={s.label} delay={i * 80}>
                <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.12)', borderRadius: '14px', padding: '1.5rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '2.5rem', background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite', marginBottom: '4px' }}>{s.value}</p>
                  <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif" }}>{s.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
          @media (max-width: 640px) { .about-stats { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      {/* Mission + Image */}
      <section style={{ padding: '5rem 0', background: '#081223' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="mission-grid">
            <RevealOnScroll>
              <div>
                <div style={{ display: 'inline-block', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.06)', marginBottom: '1.25rem' }}>
                  <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Our Mission</span>
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                  Revenue You Can See in Your Bank Account
                </h2>
                <blockquote style={{ borderLeft: '3px solid #d4a017', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                  <p style={{ color: 'rgba(200,214,232,0.8)', lineHeight: 1.8, fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem' }}>
                    &ldquo;To make powerful, results-driven digital marketing accessible to every UK business —
                    from ambitious startups to established enterprises — and to be the agency that delivers
                    growth you can actually see in your bank account.&rdquo;
                  </p>
                </blockquote>
                <p style={{ color: 'rgba(212,160,23,0.6)', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.05em' }}>
                  — Xtream Ranker Leadership Team, London
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '6px', background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)', color: '#030711', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", boxShadow: '0 6px 24px rgba(212,160,23,0.35)' }} className="btn-gold">
                    Work With Us <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(212,160,23,0.15)', boxShadow: '0 20px 60px rgba(3,7,17,0.6)' }}>
                <Image src="/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.webp" alt="Our team at work" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(3,7,17,0.1), rgba(8,18,35,0.4))' }} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
        <style>{`
          .btn-gold:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.5) !important; transform: translateY(-2px) !important; filter: brightness(1.08) !important; }
          @media (max-width: 900px) { .mission-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 0', background: '#050d1a' }} aria-labelledby="timeline-heading">
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 id="timeline-heading" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '0.75rem' }}>Our Journey</h2>
              <p style={{ color: 'rgba(200,214,232,0.5)', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>From two people in a London office to the UK&apos;s fastest-growing digital agency.</p>
            </div>
          </RevealOnScroll>

          <div style={{ position: 'relative' }}>
            {/* Vertical gold line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, rgba(212,160,23,0.5), transparent)', transform: 'translateX(-50%)' }} className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {TIMELINE.map((item, i) => (
                <RevealOnScroll key={item.year} delay={i * 60}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1.5rem', alignItems: 'center' }} className="timeline-row">
                    {/* Left */}
                    <div style={{ textAlign: 'right' }} className={i % 2 === 0 ? 'tl-content' : 'tl-empty'}>
                      {i % 2 === 0 ? (
                        <>
                          <span style={{ color: '#edc84a', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em' }}>{item.year}</span>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.15rem', marginTop: '2px', marginBottom: '4px' }}>{item.title}</h3>
                          <p style={{ color: 'rgba(200,214,232,0.55)', fontSize: '0.82rem', lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{item.desc}</p>
                        </>
                      ) : null}
                    </div>
                    {/* Center dot */}
                    <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: 'linear-gradient(135deg, #b8860b, #edc84a)', border: '3px solid #050d1a', boxShadow: '0 0 12px rgba(212,160,23,0.5)', flexShrink: 0 }} />
                    {/* Right */}
                    <div style={{ textAlign: 'left' }} className={i % 2 === 1 ? 'tl-content' : 'tl-empty'}>
                      {i % 2 === 1 ? (
                        <>
                          <span style={{ color: '#edc84a', fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em' }}>{item.year}</span>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.15rem', marginTop: '2px', marginBottom: '4px' }}>{item.title}</h3>
                          <p style={{ color: 'rgba(200,214,232,0.55)', fontSize: '0.82rem', lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{item.desc}</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 600px) {
            .timeline-line { left: 14px !important; transform: none !important; }
            .timeline-row { grid-template-columns: auto 1fr !important; }
            .tl-empty { display: none !important; }
            .tl-content { text-align: left !important; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 0', background: '#081223' }} aria-labelledby="values-heading">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 id="values-heading" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '0.5rem' }}>Our Core Values</h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="values-grid">
            {TEAM_VALUES.map((v, i) => {
              const Icon = v.icon
              return (
                <RevealOnScroll key={v.title} delay={i * 80}>
                  <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.1)', borderRadius: '14px', padding: '24px', textAlign: 'center', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s, transform 0.3s' }} className="value-card">
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                      <Icon size={20} color="#edc84a" />
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.15rem', marginBottom: '8px' }}>{v.title}</h3>
                    <p style={{ color: 'rgba(200,214,232,0.55)', fontSize: '0.82rem', lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{v.desc}</p>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
        <style>{`
          .value-card:hover { border-color: rgba(212,160,23,0.25) !important; transform: translateY(-4px) !important; }
          @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 480px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <CtaBanner />
    </>
  )
}
