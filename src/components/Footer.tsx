import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Camera, PlayCircle, Globe, ArrowRight, Shield, Lock, Eye } from 'lucide-react'

const cols = [
  {
    heading: 'Product',
    links: [
      { label: 'Features',        to: '/features' },
      { label: 'Pricing',         to: '/pricing' },
      { label: 'How It Works',    to: '/' },
      { label: 'Security',        to: '/about#security' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us',        to: '/about' },
      { label: 'Blog',            to: '/blog' },
      { label: 'Careers',         to: '/about' },
      { label: 'Contact',         to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',  to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Security',        to: '/about' },
    ],
  },
]

const socials = [
  { Icon: X,          href: '#', label: 'X (Twitter)' },
  { Icon: Globe,      href: '#', label: 'LinkedIn' },
  { Icon: Camera,     href: '#', label: 'Instagram' },
  { Icon: PlayCircle, href: '#', label: 'YouTube' },
]

const trust = [
  { Icon: Lock,   text: '256-bit AES Encryption' },
  { Icon: Eye,    text: 'Read-Only Bank Access' },
  { Icon: Shield, text: 'SOC 2 Type II Compliant' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* ── Top CTA strip ── */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="ff-container ff-footer-cta" style={{
          padding: '40px 40px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
        }}>
          <div>
            <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 22, letterSpacing: '-0.5px', color: 'var(--white)', marginBottom: 6 }}>
              Be first in the door.
            </p>
            <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
              Join our waitlist and get early access when we launch in 2026.
            </p>
          </div>
          <Link to="/contact" className="btn-outline-white" style={{ fontSize: 15, padding: '12px 26px', flexShrink: 0 }}>
            Join the Waitlist <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="ff-container" style={{ padding: '64px 40px 48px' }}>

        {/* 4-column grid: brand (2fr) + 3 link columns (1fr each) */}
        <div className="ff-footer-grid">

          {/* Brand column */}
          <div style={{ paddingRight: 24 }}>
            <Link to="/" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: 18 }}>
              <span style={{
                fontFamily: 'Manrope', fontWeight: 800, fontSize: 24,
                letterSpacing: '-0.5px', lineHeight: 1,
                background: 'linear-gradient(135deg, #ffffff 0%, #a8b4ff 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>FutureFlow</span>
            </Link>

            <p style={{
              fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.42)',
              lineHeight: 1.8, marginBottom: 28, maxWidth: 260,
            }}>
              The intelligent personal finance platform that unifies your spending, saving, debt payoff, and wealth building — all in one place.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a key={i} href={href} aria-label={label} whileHover={{ y: -2 }}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,0.12)'
                    el.style.color = 'var(--white)'
                    el.style.borderColor = 'rgba(255,255,255,0.25)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = 'rgba(255,255,255,0.06)'
                    el.style.color = 'rgba(255,255,255,0.4)'
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                  }}
                >
                  <Icon size={15} strokeWidth={1.8} />
                </motion.a>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {trust.map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <Icon size={12} color="rgba(255,255,255,0.25)" strokeWidth={2} />
                  <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.01em' }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.heading}>
              <p style={{
                fontFamily: 'Manrope', fontWeight: 700, fontSize: 11,
                color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase',
                letterSpacing: '0.1em', marginBottom: 22,
              }}>
                {col.heading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.links.map(l => (
                  <Link key={l.label} to={l.to} style={{
                    fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.42)',
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.42)')}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 24 }} />

        {/* ── Bottom bar ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 18 }}>
          <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>
            © {new Date().getFullYear()} FutureFlow, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Privacy', to: '/privacy', isLink: true },
              { label: 'Terms',   to: '/terms',   isLink: true },
            ].map(({ label, to }) => (
              <Link key={label} to={to} style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
              >{label}</Link>
            ))}
            <a href="mailto:hello@futureflow.app" style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
            >hello@futureflow.app</a>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p style={{ fontFamily: 'Lato', fontSize: 11, color: 'rgba(255,255,255,0.18)', lineHeight: 1.75 }}>
          FutureFlow is not a bank. Information on this platform is for informational purposes only and should not be construed as financial advice. Banking services, where applicable, will be provided by FDIC-insured partner institutions.
        </p>

      </div>
    </footer>
  )
}
