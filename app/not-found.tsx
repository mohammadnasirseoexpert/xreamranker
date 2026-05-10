// app/not-found.tsx — Custom 404 page (Luxury Redesign)

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'linear-gradient(135deg, #030711 0%, #050d1a 40%, #081223 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Gold ambient */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,160,23,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(6rem, 15vw, 10rem)', background: 'linear-gradient(135deg, #d4a017, #f5df89, #b8860b)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite', lineHeight: 1, marginBottom: '1rem' }}>
          404
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#ffffff', marginBottom: '1rem' }}>
          Page Not Found
        </h1>
        <p style={{ color: 'rgba(200,214,232,0.55)', marginBottom: '2.5rem', maxWidth: '360px', margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: "'Outfit', sans-serif", fontWeight: 300 }}>
          The page you&apos;re looking for doesn&apos;t exist. Let us take you back home.
        </p>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '13px 26px', borderRadius: '6px', background: 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)', color: '#030711', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', fontFamily: "'Outfit', sans-serif", boxShadow: '0 6px 24px rgba(212,160,23,0.35)' }} className="btn-gold">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
      <style>{`
        @keyframes shimmer { 0% { background-position: 0% center; } 100% { background-position: 200% center; } }
        .btn-gold:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.5) !important; transform: translateY(-2px) !important; filter: brightness(1.08) !important; }
      `}</style>
    </div>
  )
}
