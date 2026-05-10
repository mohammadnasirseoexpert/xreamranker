// components/ui/WhatsAppButton.tsx — Luxury floating WhatsApp/call CTA

'use client'

import { useState } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'
import { SITE } from '@/lib/config'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
      {/* Expanded panel */}
      <div style={{
        background: 'rgba(8,18,35,0.97)',
        border: '1px solid rgba(212,160,23,0.25)',
        borderRadius: '16px',
        padding: '20px',
        width: '240px',
        boxShadow: '0 20px 60px rgba(3,7,17,0.7), 0 0 40px rgba(212,160,23,0.1)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        maxHeight: open ? '300px' : '0',
        opacity: open ? 1 : 0,
        transition: 'max-height 0.35s ease, opacity 0.3s ease',
      }}>
        <p style={{ color: '#ffffff', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>
          Talk to an Expert
        </p>
        <p style={{ color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', fontFamily: "'Outfit', sans-serif", marginBottom: '14px' }}>
          Response guaranteed in 2 hrs
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #15803d, #16a34a)',
              color: '#ffffff', textDecoration: 'none',
              fontSize: '0.8rem', fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              boxShadow: '0 4px 16px rgba(22,163,74,0.35)',
            }}
          >
            <MessageCircle size={16} />
            WhatsApp Chat
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', borderRadius: '8px',
              border: '1px solid rgba(212,160,23,0.3)',
              color: '#edc84a', textDecoration: 'none',
              fontSize: '0.8rem', fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              background: 'rgba(212,160,23,0.05)',
            }}
          >
            <Phone size={16} />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: open
            ? 'linear-gradient(135deg, #5c4205, #8b6508)'
            : 'linear-gradient(135deg, #b8860b, #d4a017, #edc84a)',
          border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 28px rgba(212,160,23,0.45)',
          transition: 'all 0.3s ease',
          color: '#030711',
        }}
        aria-label="Contact us"
        className="float-btn"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        .float-btn:hover { box-shadow: 0 10px 40px rgba(212,160,23,0.6) !important; transform: scale(1.08) !important; }
      `}</style>
    </div>
  )
}
