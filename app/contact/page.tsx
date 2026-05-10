// app/contact/page.tsx — Contact page (Luxury Redesign)

import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import LeadForm from '@/components/ui/LeadForm'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact Us | Free Strategy Call | Xtream Ranker',
  description:
    "Get in touch with Xtream Ranker — UK digital marketing agency. Book a free strategy call, send a message or WhatsApp us. 24/7 support available.",
}

const CONTACT_ITEMS = [
  { icon: Phone,   label: 'Phone / WhatsApp',  value: SITE.phone,   href: `tel:${SITE.phoneRaw}`, description: 'Call or text us anytime' },
  { icon: Mail,    label: 'Email',             value: SITE.email,   href: `mailto:${SITE.email}`, description: 'We reply within 2 hours' },
  { icon: MapPin,  label: 'Address',           value: SITE.address, href: 'https://maps.google.com/?q=Malcolm+Rd+Bethnal+Green+London+E1+4HN', description: 'Our London HQ' },
  { icon: Clock,   label: 'Business Hours',    value: '24/7 — Always Available', href: undefined, description: 'Support around the clock' },
]

const FAQ = [
  { q: 'How quickly will you respond to my inquiry?', a: 'Within 2 hours — guaranteed, any time of day. Our team operates 24/7.' },
  { q: 'Is the strategy call really free?', a: 'Yes, completely. No credit card, no commitment. We will audit your current setup and map out a custom growth plan at zero cost.' },
  { q: 'Do you work with businesses outside London?', a: 'Absolutely — we serve businesses all across the UK, from Edinburgh to Exeter. Our work is fully remote-compatible.' },
  { q: 'Are there any long-term contracts?', a: 'No lock-in contracts. We work on monthly retainers and earn your continued business through results, not paperwork.' },
]

const goldCard = {
  background: 'rgba(8,18,35,0.7)',
  border: '1px solid rgba(212,160,23,0.12)',
  borderRadius: '14px',
  padding: '18px',
  backdropFilter: 'blur(10px)',
  transition: 'border-color 0.3s, transform 0.3s',
  display: 'block',
  textDecoration: 'none',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', paddingTop: '8rem', paddingBottom: '4rem', overflow: 'hidden', background: 'linear-gradient(135deg, #030711 0%, #050d1a 40%, #081223 100%)' }}>
        <div style={{ position: 'absolute', left: '-6rem', top: '40%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
          <RevealOnScroll>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 16px', borderRadius: '999px', border: '1px solid rgba(212,160,23,0.3)', background: 'rgba(212,160,23,0.06)', marginBottom: '1.25rem' }}>
              <span style={{ color: '#edc84a', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>Get In Touch</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.08 }}>
              Let&apos;s Talk About{' '}
              <span style={{ background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>Growing Your Business</span>
            </h1>
            <p style={{ color: 'rgba(200,214,232,0.7)', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
              No pushy sales calls. Just an honest conversation about where you are and how we can help you get to where you want to be.
            </p>
          </RevealOnScroll>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to top, #050d1a, transparent)' }} />
        <style>{`@keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }`}</style>
      </section>

      {/* Main content */}
      <section style={{ padding: '4rem 0', background: '#050d1a' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem' }} className="contact-grid">

            {/* Form */}
            <RevealOnScroll>
              <div style={{ background: 'rgba(8,18,35,0.85)', border: '1px solid rgba(212,160,23,0.2)', borderRadius: '18px', padding: '36px', boxShadow: '0 0 60px rgba(212,160,23,0.12), 0 20px 60px rgba(3,7,17,0.5)', backdropFilter: 'blur(20px)' }}>
                <div style={{ borderLeft: '3px solid #d4a017', paddingLeft: '14px', marginBottom: '6px' }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.8rem' }}>Send Us a Message</h2>
                </div>
                <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.82rem', marginBottom: '1.75rem', fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>Fill in the form and we&apos;ll get back to you within 2 hours.</p>
                <LeadForm />
              </div>
            </RevealOnScroll>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {CONTACT_ITEMS.map((item, i) => {
                const Icon = item.icon
                const inner = (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212,160,23,0.1)', border: '1px solid rgba(212,160,23,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={17} color="#edc84a" />
                    </div>
                    <div>
                      <p style={{ color: 'rgba(200,214,232,0.4)', fontSize: '0.68rem', marginBottom: '3px', letterSpacing: '0.08em', fontFamily: "'Outfit', sans-serif" }}>{item.label}</p>
                      <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>{item.value}</p>
                      <p style={{ color: 'rgba(200,214,232,0.35)', fontSize: '0.72rem', marginTop: '2px', fontFamily: "'Outfit', sans-serif" }}>{item.description}</p>
                    </div>
                  </div>
                )
                return (
                  <RevealOnScroll key={item.label} delay={i * 70}>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={goldCard} className="contact-card">{inner}</a>
                    ) : (
                      <div style={goldCard}>{inner}</div>
                    )}
                  </RevealOnScroll>
                )
              })}

              {/* WhatsApp */}
              <RevealOnScroll delay={320}>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" style={{ ...goldCard, background: 'rgba(22,101,52,0.12)', borderColor: 'rgba(22,163,74,0.2)' }} className="contact-card whatsapp-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <MessageSquare size={20} color="#4ade80" />
                    <div>
                      <p style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>WhatsApp Us Directly</p>
                      <p style={{ color: 'rgba(200,214,232,0.4)', fontSize: '0.72rem', fontFamily: "'Outfit', sans-serif" }}>Get a reply in minutes</p>
                    </div>
                  </div>
                </a>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        <style>{`
          .contact-card:hover { border-color: rgba(212,160,23,0.3) !important; transform: translateY(-2px) !important; }
          .whatsapp-card:hover { border-color: rgba(34,197,94,0.4) !important; }
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0', background: '#081223' }} aria-labelledby="faq-heading">
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
          <RevealOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 id="faq-heading" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff' }}>
                Frequently Asked Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQ.map((item, i) => (
              <RevealOnScroll key={item.q} delay={i * 70}>
                <div style={{ background: 'rgba(8,18,35,0.7)', border: '1px solid rgba(212,160,23,0.1)', borderRadius: '14px', padding: '22px 24px', backdropFilter: 'blur(10px)', transition: 'border-color 0.3s' }} className="faq-card">
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#ffffff', fontSize: '1.1rem', marginBottom: '8px' }}>{item.q}</h3>
                  <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>{item.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <style>{`.faq-card:hover { border-color: rgba(212,160,23,0.25) !important; }`}</style>
      </section>
    </>
  )
}
