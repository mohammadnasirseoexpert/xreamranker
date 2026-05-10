// components/layout/Header.tsx — Luxury dark-blue & gold sticky header

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/config'

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(5,13,26,0.97)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(3,7,17,0.6)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? '68px' : '80px', transition: 'height 0.4s ease' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }} aria-label="Xtream Ranker Home">
            <div style={{
              width: '44px', height: '44px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(212,160,23,0.35)',
              overflow: 'hidden',
            }}>
              <Image src="/logo.png" alt="Xtream Ranker Logo" width={44} height={44} style={{ objectFit: 'cover' }} priority />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: '1.35rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}>
                Xtream<span style={{ background: 'linear-gradient(135deg, #d4a017, #edc84a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ranker</span>
              </span>
              <span style={{ fontSize: '0.6rem', color: 'rgba(212,160,23,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>
                The Algorithm of Success
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="lg-nav" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(200,214,232,0.85)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '0.03em',
                  padding: '4px 0',
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
                className="nav-link-item"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href={`tel:${SITE.phoneRaw}`}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(212,160,23,0.8)', textDecoration: 'none', fontSize: '0.8rem', fontFamily: "'Outfit', sans-serif", transition: 'color 0.2s' }}
            >
              <Phone size={13} />
              {SITE.phone}
            </a>
            <Link
              href="/contact"
              style={{
                padding: '10px 22px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #edc84a 100%)',
                color: '#030711',
                fontWeight: 700,
                fontSize: '0.8rem',
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.05em',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              className="btn-gold-nav"
            >
              Free Strategy Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#edc84a', padding: '8px' }}
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden',
        maxHeight: isOpen ? '600px' : '0',
        opacity: isOpen ? 1 : 0,
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
        background: 'rgba(5,13,26,0.98)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(212,160,23,0.1)',
      }}>
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'rgba(200,214,232,0.85)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                fontFamily: "'Outfit', sans-serif",
                padding: '8px 0',
                borderBottom: '1px solid rgba(212,160,23,0.07)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href={`tel:${SITE.phoneRaw}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#edc84a', textDecoration: 'none', fontSize: '0.875rem' }}>
              <Phone size={14} /> {SITE.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block', textAlign: 'center', padding: '14px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
                color: '#030711', fontWeight: 700, textDecoration: 'none',
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Free Strategy Call
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; align-items: center; gap: 36px; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 1023px) {
          .lg-nav { display: none !important; }
          .desktop-cta { display: none !important; }
        }
        .nav-link-item:hover { color: #edc84a !important; }
        .btn-gold-nav:hover { box-shadow: 0 8px 32px rgba(212,160,23,0.5) !important; transform: translateY(-1px) !important; filter: brightness(1.08) !important; }
      `}</style>
    </header>
  )
}
