import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock, Eye } from 'lucide-react'

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

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
)

const socials = [
  { Icon: LinkedInIcon,  href: 'https://www.linkedin.com/company/joinfutureflow/?viewAsMember=true', label: 'LinkedIn' },
  { Icon: FacebookIcon,  href: 'https://www.facebook.com/people/FutureFlow/61560735508304/?mibextid=wwXIfr&rdid=luOhK6SoQQ1hVJAF&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CgHakkuoa%2F%3Fmibextid%3DwwXIfr', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/joinfutureflow?igsh=MW8xajFqZTd1cWdjeg%3D%3D&utm_source=qr', label: 'Instagram' },
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
            <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
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
            <Link to="/" style={{ display: 'block', textDecoration: 'none', marginBottom: 20 }}>
              <img
                src="/futureflow-logo.svg"
                alt="FutureFlow"
                style={{
                  height: 72, width: 'auto', display: 'block',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </Link>

            <p style={{
              fontFamily: 'Lato', fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.85, marginBottom: 28, maxWidth: 260,
            }}>
              The intelligent personal finance platform that unifies your spending, saving, debt payoff, and wealth building — all in one place.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
              {socials.map(({ Icon, href, label }, i) => (
                <motion.a key={i} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }}
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
                  <Icon />
                </motion.a>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {trust.map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <Icon size={14} color="rgba(255,255,255,0.6)" strokeWidth={2} />
                  <span style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.01em' }}>
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
                    fontFamily: 'Manrope', fontWeight: 800, fontSize: 13,
                    color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase',
                    letterSpacing: '0.1em', marginBottom: 22,
                  }}>
                    {col.heading}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {col.links.map(l => (
                      <Link key={l.label} to={l.to} style={{
                        fontFamily: 'Lato', fontWeight: 600, fontSize: 15, color: 'rgba(255,255,255,0.7)',
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
          <p style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} FutureFlow, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', alignItems: 'center' }}>
            {[
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms',   to: '/terms' },
            ].map(({ label, to }) => (
              <Link key={label} to={to} style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >{label}</Link>
            ))}
            <a href="mailto:help@joinfutureflow.com" style={{ fontFamily: 'Lato', fontWeight: 600, fontSize: 14, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >help@joinfutureflow.com</a>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p style={{ fontFamily: 'Lato', fontWeight: 500, fontSize: 13, color: 'rgba(255,255,255,0.48)', lineHeight: 1.8 }}>
          FutureFlow is not a bank. Information on this platform is for informational purposes only and should not be construed as financial advice. Banking services, where applicable, will be provided by FDIC-insured partner institutions.
        </p>

      </div>
    </footer>
  )
}
