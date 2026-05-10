// components/ui/LeadForm.tsx — Luxury gold-accented lead form

'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface LeadFormProps { compact?: boolean }

export default function LeadForm({ compact }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    background: 'rgba(5,13,26,0.8)',
    border: '1px solid rgba(212,160,23,0.15)',
    color: '#e2e8f0',
    fontSize: '0.85rem',
    fontFamily: "'Outfit', sans-serif",
    outline: 'none',
    transition: 'border-color 0.25s',
    boxSizing: 'border-box' as const,
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'rgba(212,160,23,0.1)', border: '2px solid rgba(212,160,23,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1rem',
        }}>
          <CheckCircle size={28} style={{ color: '#d4a017' }} />
        </div>
        <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#ffffff', fontSize: '1.4rem', marginBottom: '8px' }}>Message Received!</h4>
        <p style={{ color: 'rgba(200,214,232,0.6)', fontSize: '0.85rem', fontFamily: "'Outfit', sans-serif" }}>
          Our team will be in touch within 2 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-row">
        <div>
          <label style={{ display: 'block', color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', marginBottom: '5px', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em' }}>
            Full Name *
          </label>
          <input
            type="text" name="name" required
            placeholder="John Smith"
            value={form.name} onChange={handleChange}
            style={inputStyle}
            className="form-input"
          />
        </div>
        <div>
          <label style={{ display: 'block', color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', marginBottom: '5px', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em' }}>
            Email Address *
          </label>
          <input
            type="email" name="email" required
            placeholder="john@company.com"
            value={form.email} onChange={handleChange}
            style={inputStyle}
            className="form-input"
          />
        </div>
      </div>

      {!compact && (
        <div>
          <label style={{ display: 'block', color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', marginBottom: '5px', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em' }}>
            Phone Number
          </label>
          <input
            type="tel" name="phone"
            placeholder="+44 7xxx xxxxxx"
            value={form.phone} onChange={handleChange}
            style={inputStyle}
            className="form-input"
          />
        </div>
      )}

      <div>
        <label style={{ display: 'block', color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', marginBottom: '5px', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em' }}>
          Service Interested In
        </label>
        <select
          name="service"
          value={form.service} onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          className="form-input"
        >
          <option value="" style={{ background: '#081223' }}>Select a service...</option>
          <option value="seo" style={{ background: '#081223' }}>SEO & AI Optimization</option>
          <option value="web" style={{ background: '#081223' }}>Web Development</option>
          <option value="ads" style={{ background: '#081223' }}>Google Ads & Meta Ads</option>
          <option value="social" style={{ background: '#081223' }}>Social Media Marketing</option>
          <option value="content" style={{ background: '#081223' }}>Content Writing</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', color: 'rgba(200,214,232,0.5)', fontSize: '0.72rem', marginBottom: '5px', fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em' }}>
          Message
        </label>
        <textarea
          name="message" rows={compact ? 3 : 4}
          placeholder="Tell us about your business goals..."
          value={form.message} onChange={handleChange}
          style={{ ...inputStyle, resize: 'vertical' as const, minHeight: compact ? '80px' : '100px' }}
          className="form-input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
          padding: '13px',
          borderRadius: '8px',
          background: loading ? 'rgba(212,160,23,0.5)' : 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #edc84a 100%)',
          color: '#030711',
          fontWeight: 700, fontSize: '0.85rem',
          letterSpacing: '0.05em',
          border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
          transition: 'all 0.25s ease',
          fontFamily: "'Outfit', sans-serif",
          width: '100%',
        }}
        className="submit-btn"
      >
        {loading ? (
          <>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(3,7,17,0.3)', borderTopColor: '#030711', animation: 'spin 0.8s linear infinite' }} />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} />
            Send Message — It&apos;s Free
          </>
        )}
      </button>

      <style>{`
        .form-input:focus { border-color: rgba(212,160,23,0.5) !important; box-shadow: 0 0 0 3px rgba(212,160,23,0.06) !important; }
        .form-input::placeholder { color: rgba(200,214,232,0.25); }
        .submit-btn:hover:not(:disabled) { box-shadow: 0 8px 32px rgba(212,160,23,0.5) !important; transform: translateY(-1px) !important; filter: brightness(1.08) !important; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 500px) { .form-row { grid-template-columns: 1fr !important; } }
      `}</style>
    </form>
  )
}
