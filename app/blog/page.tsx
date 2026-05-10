// app/blog/page.tsx — Blog listing page (Luxury Redesign)

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | SEO Tips, Ads & Growth Strategies | Xtream Ranker',
  description:
    'Expert digital marketing insights from the Xtream Ranker team. Get actionable SEO tips, Google Ads strategies, social media advice, and web design best practices for UK businesses.',
}

const POSTS = [
  { slug: 'seo-for-uk-small-businesses-2024', category: 'SEO', title: '7 SEO Strategies Every UK Small Business Needs in 2024', excerpt: "Google's algorithm continues to evolve rapidly. Here are the seven highest-impact SEO actions you can take right now to generate more organic traffic without a massive budget.", author: 'Xtream Ranker Team', date: 'November 12, 2024', readTime: '8 min read', featured: true },
  { slug: 'google-ads-vs-meta-ads', category: 'Paid Ads', title: 'Google Ads vs Meta Ads: Which Should Your Business Use in 2024?', excerpt: 'Not sure whether to invest in Google Search campaigns or Facebook & Instagram ads? We break down the pros, cons, and ideal use cases for each platform with real client data.', author: 'Xtream Ranker Team', date: 'October 28, 2024', readTime: '6 min read', featured: false },
  { slug: 'conversion-rate-optimization-tips', category: 'Web Design', title: '10 CRO Tweaks That Doubled Our Clients\' Lead Generation', excerpt: 'Getting traffic is only half the battle. These ten proven conversion rate optimization techniques helped our clients double their leads from the same amount of traffic.', author: 'Xtream Ranker Team', date: 'October 15, 2024', readTime: '7 min read', featured: false },
  { slug: 'local-seo-london-guide', category: 'Local SEO', title: 'The Complete Local SEO Guide for London Businesses (2024)', excerpt: 'If you want customers in London to find you on Google Maps and local search, this step-by-step guide covers everything from Google Business Profile to local citations.', author: 'Xtream Ranker Team', date: 'September 30, 2024', readTime: '10 min read', featured: false },
  { slug: 'ai-seo-tools-2024', category: 'SEO', title: 'How We Use AI to Get SEO Results 3× Faster (Without Sacrificing Quality)', excerpt: 'AI tools have transformed the speed at which we deliver SEO results for clients. Here\'s exactly how we integrate AI into our content, keyword research, and technical SEO workflows.', author: 'Xtream Ranker Team', date: 'September 14, 2024', readTime: '9 min read', featured: false },
  { slug: 'social-media-strategy-uk', category: 'Social Media', title: 'The Social Media Strategy That Grew Our Client\'s Revenue by 280% in 6 Months', excerpt: 'A flooring company in Birmingham came to us with zero social media presence. Six months later, social was their #1 lead source. Here\'s the exact strategy we used.', author: 'Xtream Ranker Team', date: 'August 20, 2024', readTime: '8 min read', featured: false },
]

const CAT_COLORS: Record<string, string> = {
  'SEO': '#6366f1', 'Paid Ads': '#f97316', 'Web Design': '#3b82f6',
  'Local SEO': '#10b981', 'Social Media': '#ec4899',
}

export default function BlogPage() {
  const featured = POSTS.find((p) => p.featured)
  const rest = POSTS.filter((p) => !p.featured)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '4rem', overflow: 'hidden', background: 'linear-gradient(135deg, #030711 0%, #050d1a 40%, #081223 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <RevealOnScroll>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.06)', marginBottom: '1.25rem' }}>
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Insights & Strategy</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.08 }}>
              Digital Marketing{' '}
              <span style={{ background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>Insights for UK Businesses</span>
            </h1>
            <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto', lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              Actionable strategies, real case studies, and expert advice — free from our team to you.
            </p>
          </RevealOnScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, #050d1a, transparent)' }} />
        <style>{`@keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }`}</style>
      </section>

      {/* Featured post */}
      {featured && (
        <section style={{ padding: '3rem 0', background: '#050d1a' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
            <RevealOnScroll>
              <Link href={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block' }} className="featured-card">
                <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.15)', borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s', backdropFilter: 'blur(10px)' }}>
                  {/* Gold accent bar */}
                  <div style={{ height: '3px', background: 'linear-gradient(90deg, #b8860b, #d4a017, #edc84a)' }} />
                  <div style={{ padding: '2.5rem 3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                      <span style={{ padding: '4px 12px', borderRadius: '999px', background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.25)', color: '#edc84a', fontSize: '0.7rem', fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>Featured Post</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(200,214,232,0.4)', fontSize: '0.75rem', fontFamily: "'Outfit', sans-serif" }}><Tag size={11} /> {featured.category}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', marginBottom: '1rem', lineHeight: 1.15 }}>{featured.title}</h2>
                    <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '700px', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{featured.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                      <div style={{ display: 'flex', gap: '20px', color: 'rgba(200,214,232,0.4)', fontSize: '0.75rem', fontFamily: "'Outfit', sans-serif" }}>
                        <span>{featured.author}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={11} /> {featured.readTime}</span>
                        <span>{featured.date}</span>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#edc84a', fontSize: '0.85rem', fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>
                        Read Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          </div>
          <style>{`.featured-card > div:hover { border-color: rgba(212,160,23,0.35) !important; transform: translateY(-3px) !important; box-shadow: 0 20px 50px rgba(3,7,17,0.5) !important; }`}</style>
        </section>
      )}

      {/* Post grid */}
      <section style={{ paddingBottom: '5rem', background: '#050d1a' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="blog-grid">
            {rest.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 70}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }} className="blog-card">
                  <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.1)', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column', flex: 1, backdropFilter: 'blur(10px)', transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s' }}>
                    {/* Category color bar */}
                    <div style={{ height: '2px', background: CAT_COLORS[post.category] || '#d4a017' }} />
                    <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: 'rgba(200,214,232,0.4)', fontSize: '0.72rem', fontFamily: "'Outfit', sans-serif" }}>
                        <Tag size={10} /> {post.category}
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.2rem', marginBottom: '10px', lineHeight: 1.2, flex: 1 }}>{post.title}</h3>
                      <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.8rem', lineHeight: 1.65, marginBottom: '18px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid rgba(212,160,23,0.08)', color: 'rgba(200,214,232,0.35)', fontSize: '0.72rem', fontFamily: "'Outfit', sans-serif" }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={10} /> {post.readTime}</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`
          .blog-card > div:hover { border-color: rgba(212,160,23,0.25) !important; transform: translateY(-4px) !important; box-shadow: 0 20px 50px rgba(3,7,17,0.5) !important; }
          @media (max-width: 900px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 580px) { .blog-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Newsletter */}
      <section style={{ padding: '4rem 0', background: '#081223', borderTop: '1px solid rgba(212,160,23,0.1)' }}>
        <div style={{ maxWidth: '620px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <RevealOnScroll>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#ffffff', marginBottom: '0.75rem' }}>Get Free Marketing Tips Weekly</h2>
            <p style={{ color: 'rgba(200,214,232,0.55)', marginBottom: '2rem', fontSize: '0.9rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              Join 2,000+ UK business owners who receive our actionable digital marketing newsletter every Thursday.
            </p>
            <div style={{ display: 'flex', gap: '10px', maxWidth: '420px', margin: '0 auto' }} className="newsletter-form">
              <input type="email" placeholder="Enter your email…" style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.15)', color: '#e2e8f0', fontSize: '0.85rem', outline: 'none', fontFamily: "'Outfit', sans-serif" }} className="newsletter-input" />
              <button style={{ padding: '12px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)', color: '#030711', fontWeight: 700, fontSize: '0.82rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: "'Outfit', sans-serif", boxShadow: '0 4px 20px rgba(212,160,23,0.35)' }} className="btn-gold">
                Subscribe Free
              </button>
            </div>
          </RevealOnScroll>
        </div>
        <style>{`
          .newsletter-input:focus { border-color: rgba(212,160,23,0.4) !important; box-shadow: 0 0 0 3px rgba(212,160,23,0.06) !important; }
          .btn-gold:hover { box-shadow: 0 8px 32px rgba(212,160,23,0.5) !important; transform: translateY(-1px) !important; }
          @media (max-width: 480px) { .newsletter-form { flex-direction: column !important; } }
        `}</style>
      </section>
    </>
  )
}
