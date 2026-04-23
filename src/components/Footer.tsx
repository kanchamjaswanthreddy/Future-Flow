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

function AppStoreBtn() {
  return (
    <a href="#" aria-label="Download on the App Store" style={{
      display: 'flex', alignItems: 'center', gap: 11,
      padding: '10px 20px', borderRadius: 12, textDecoration: 'none',
      background: '#111', border: '1px solid rgba(255,255,255,0.18)',
      transition: 'border-color 0.2s, background 0.2s', minWidth: 148,
    }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1c1c1c'; el.style.borderColor = 'rgba(255,255,255,0.35)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111'; el.style.borderColor = 'rgba(255,255,255,0.18)' }}
    >
      {/* Apple logo SVG */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div>
        <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'rgba(255,255,255,0.55)', lineHeight: 1, marginBottom: 3 }}>Download on the</p>
        <p style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1 }}>App Store</p>
      </div>
    </a>
  )
}

function GooglePlayBtn() {
  return (
    <a href="#" aria-label="Get it on Google Play" style={{
      display: 'flex', alignItems: 'center', gap: 11,
      padding: '10px 20px', borderRadius: 12, textDecoration: 'none',
      background: '#111', border: '1px solid rgba(255,255,255,0.18)',
      transition: 'border-color 0.2s, background 0.2s', minWidth: 148,
    }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#1c1c1c'; el.style.borderColor = 'rgba(255,255,255,0.35)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111'; el.style.borderColor = 'rgba(255,255,255,0.18)' }}
    >
      {/* Google Play icon — Simple Icons */}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
      </svg>
      <div>
        <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'rgba(255,255,255,0.55)', lineHeight: 1, marginBottom: 3 }}>Get it on</p>
        <p style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1 }}>Google Play</p>
      </div>
    </a>
  )
}

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
              <img
                src="/futureflow-logo.svg"
                alt="FutureFlow"
                style={{
                  height: 160, width: 'auto', display: 'block',
                  filter: 'brightness(0) invert(1)',
                }}
              />
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

          {/* Right side: link columns + app store buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="ff-footer-links-inner" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
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

            {/* App store buttons — below link columns, right aligned */}
            <div className="ff-app-btns" style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              <AppStoreBtn />
              <GooglePlayBtn />
            </div>
          </div>
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
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms',   to: '/terms' },
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
