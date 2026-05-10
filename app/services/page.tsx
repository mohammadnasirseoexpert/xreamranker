// app/services/page.tsx — Services page (Luxury Redesign)

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Code2, TrendingUp, Share2, PenTool, CheckCircle2, ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import CtaBanner from '@/components/sections/CtaBanner'
import { SERVICES } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Digital Marketing Services | SEO, Ads, Web Dev & More | Xtream Ranker',
  description:
    "Explore Xtream Ranker's full range of UK digital marketing services: SEO & AI Optimization, Web Development, Google Ads, Meta Ads, Social Media Marketing, and Content Writing.",
}

const ICON_MAP: Record<string, React.ElementType> = { Search, Code2, TrendingUp, Share2, PenTool }

const SERVICE_IMAGES: Record<string, string> = {
  seo:     '/ai-search-engine-technology-concept-person-using-laptop-with-ai-powered-search-bar-interface.webp',
  web:     '/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.webp',
  ads:     '/digital-marketing-commerce-online-sale-concept-businessman-using-laptop-with-ads-dashboard.webp',
  social:  '/ad-on-website-and-social-media-banner-ads-on-internet-digital-marketing-concept-marketer.webp',
  content: '/it-man-working-on-notebook-planning-to-increase-website-traffic.webp',
}

const SERVICE_EXTRAS: Record<string, { process: string[]; ideal: string; outcome: string }> = {
  seo: {
    process: [
      'Comprehensive SEO audit — technical, on-page & off-page',
      'Competitor analysis & keyword opportunity mapping',
      'Content gap analysis & editorial calendar creation',
      'On-page optimization of existing pages',
      'Authority building via digital PR & link outreach',
      'Monthly reporting with rank tracking & traffic analysis',
    ],
    ideal: 'Businesses wanting long-term, compounding organic traffic and brand authority.',
    outcome: 'Our clients typically see a 60–120% increase in organic sessions within 6 months.',
  },
  web: {
    process: [
      'Discovery call — goals, audience, brand guidelines',
      'UX wireframing & design concepts',
      'Development in Next.js / WordPress / Shopify',
      'Core Web Vitals optimization (target: 90+ Lighthouse)',
      'SEO structure implementation pre-launch',
      'QA testing & launch support',
    ],
    ideal: 'Businesses needing a new website or a high-converting redesign of an underperforming one.',
    outcome: 'Our sites average a 55% increase in conversion rate vs the sites they replaced.',
  },
  ads: {
    process: [
      'Account audit & competitor ad intelligence',
      'Audience persona building & keyword research',
      'Campaign architecture & ad creative production',
      'Landing page optimization for Quality Score',
      'Weekly bid management & budget pacing',
      'Continuous A/B testing & ROAS optimization',
    ],
    ideal: 'Businesses ready to invest in paid growth and generate predictable, trackable leads.',
    outcome: 'Average ROAS across our client portfolio: 5.8× on Google, 4.2× on Meta.',
  },
  social: {
    process: [
      'Social media audit & competitor benchmarking',
      'Platform-specific content strategy development',
      'Monthly content calendar & creative production',
      'Community management & comment engagement',
      'Paid social campaign management if required',
      'Monthly analytics review & strategy refinement',
    ],
    ideal: 'Brands wanting to build authority, community, and customer loyalty through social channels.',
    outcome: 'Clients see an average of 3× follower growth and 5× engagement rate within 90 days.',
  },
  content: {
    process: [
      'Brand voice & tone guidelines development',
      'Topic cluster & pillar page strategy',
      'SEO-optimized long-form article & blog writing',
      'Landing page & conversion copy creation',
      'Email marketing sequence writing',
      'Performance review — traffic, CTR & conversion tracking',
    ],
    ideal: 'Businesses wanting to rank for more keywords and build trust through expert content.',
    outcome: 'Content clients rank for 3× more keywords within 6 months on average.',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '5rem', overflow: 'hidden', background: 'linear-gradient(135deg, #030711 0%, #050d1a 40%, #081223 100%)' }}>
        <div style={{ position: 'absolute', right: '-8rem', top: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
          <RevealOnScroll>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.06)', marginBottom: '1.25rem' }}>
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Our Services</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.08 }}>
              Everything You Need to{' '}
              <span style={{ background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>Win Online</span>
            </h1>
            <p style={{ color: 'rgba(200,214,232,0.75)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              Five expert-run service lines. One integrated strategy. Engineered to grow your business faster than anything you&apos;ve tried before.
            </p>
          </RevealOnScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #050d1a, transparent)' }} />
        <style>{`@keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }`}</style>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => {
        const Icon = ICON_MAP[service.icon] ?? Search
        const extra = SERVICE_EXTRAS[service.id]
        const isEven = i % 2 === 0
        const imgSrc = SERVICE_IMAGES[service.id]

        return (
          <section
            key={service.id}
            id={service.id}
            style={{ padding: '5rem 0', background: isEven ? '#050d1a' : '#081223', position: 'relative' }}
            aria-labelledby={`${service.id}-heading`}
          >
            {/* Subtle gold separator */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.15), transparent)' }} />

            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className={`service-section-grid ${!isEven ? 'reverse-grid' : ''}`}>

                {/* Content */}
                <RevealOnScroll>
                  <div style={{ order: isEven ? 1 : 2 }} className="srv-content">
                    {/* Icon + number */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1.5rem' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(212,160,23,0.35)' }}>
                        <Icon size={24} color="#030711" />
                      </div>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: 'rgba(212,160,23,0.2)', fontSize: '3.5rem', lineHeight: 1 }}>0{i + 1}</span>
                    </div>

                    <h2 id={`${service.id}-heading`} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#ffffff', marginBottom: '0.5rem', lineHeight: 1.1 }}>
                      {service.title}
                    </h2>
                    <p style={{ background: 'linear-gradient(135deg, #d4a017, #edc84a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.03em' }}>
                      {service.tagline}
                    </p>
                    <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.75rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{service.description}</p>

                    {/* Benefits */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
                      {service.benefits.map((b) => (
                        <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(200,214,232,0.75)', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>
                          <CheckCircle2 size={16} style={{ color: '#d4a017', marginTop: '2px', flexShrink: 0 }} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Ideal for */}
                    {extra && (
                      <div style={{ background: 'rgba(212,160,23,0.05)', border: '1px solid rgba(212,160,23,0.15)', borderRadius: '10px', padding: '14px 16px', marginBottom: '1.75rem' }}>
                        <p style={{ color: 'rgba(212,160,23,0.6)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", marginBottom: '4px' }}>Ideal For</p>
                        <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }}>{extra.ideal}</p>
                      </div>
                    )}

                    <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 24px', borderRadius: '6px', background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)', color: '#030711', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", boxShadow: '0 6px 24px rgba(212,160,23,0.35)' }} className="btn-gold">
                      Get Started <ArrowRight size={15} />
                    </Link>
                  </div>
                </RevealOnScroll>

                {/* Right: Image + Process */}
                <RevealOnScroll delay={130}>
                  <div style={{ order: isEven ? 2 : 1 }} className="srv-panel">
                    {/* Service image */}
                    <div style={{ position: 'relative', height: '220px', borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(212,160,23,0.15)', marginBottom: '20px', boxShadow: '0 12px 40px rgba(3,7,17,0.5)' }}>
                      <Image src={imgSrc} alt={service.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 50vw" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(3,7,17,0.05), rgba(8,18,35,0.5))' }} />
                    </div>

                    {/* Process */}
                    <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.12)', borderRadius: '14px', padding: '24px', backdropFilter: 'blur(10px)' }}>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.25rem', marginBottom: '18px', borderBottom: '1px solid rgba(212,160,23,0.1)', paddingBottom: '12px' }}>How We Do It</h3>
                      <ol style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0 }}>
                        {extra?.process.map((step, j) => (
                          <li key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #b8860b, #edc84a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#030711', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0, marginTop: '1px', fontFamily: "'Outfit', sans-serif" }}>{j + 1}</span>
                            <p style={{ color: 'rgba(200,214,232,0.65)', fontSize: '0.82rem', lineHeight: 1.6, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{step}</p>
                          </li>
                        ))}
                      </ol>

                      {/* Outcome pill */}
                      {extra?.outcome && (
                        <div style={{ marginTop: '18px', padding: '12px 16px', borderRadius: '8px', background: 'rgba(212,160,23,0.08)', border: '1px solid rgba(212,160,23,0.2)' }}>
                          <p style={{ color: 'rgba(212,160,23,0.6)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", marginBottom: '3px' }}>Typical Outcome</p>
                          <p style={{ color: '#f5df89', fontWeight: 600, fontSize: '0.82rem', fontFamily: "'Outfit', sans-serif" }}>{extra.outcome}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          </section>
        )
      })}

      <CtaBanner />

      <style>{`
        .btn-gold:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.5) !important; transform: translateY(-2px) !important; filter: brightness(1.08) !important; }
        @media (max-width: 900px) {
          .service-section-grid { grid-template-columns: 1fr !important; }
          .srv-content, .srv-panel { order: unset !important; }
        }
      `}</style>
    </>
  )
}
