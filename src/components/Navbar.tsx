import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing',  to: '/pricing' },
  { label: 'About',    to: '/about' },
  { label: 'Blog',     to: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setScrolled(window.scrollY > 40)
    setOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (to: string) => location.pathname === to
  const solidBg = scrolled || open

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: solidBg ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: solidBg ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: solidBg ? 'blur(20px)' : 'none',
        borderBottom: solidBg ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
        boxShadow: scrolled && !open ? '0 2px 24px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.35s, box-shadow 0.35s, border-color 0.35s',
      }}
    >
      {/* Top bar */}
      <div className="ff-container" style={{ height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Wordmark */}
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{
            fontFamily: 'Manrope', fontWeight: 800, fontSize: 26,
            letterSpacing: '-1px', lineHeight: 1,
            background: 'linear-gradient(135deg, #0e0e0e 0%, #4353ff 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>FutureFlow</span>
        </Link>

        {/* Desktop nav links */}
        <nav className="ff-nav-desktop" style={{ alignItems: 'center', gap: 38 }}>
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontFamily: 'Lato', fontWeight: 600, fontSize: 15,
              color: isActive(l.to) ? 'var(--primary)' : 'var(--dark-2)',
              textDecoration: 'none', transition: 'color 0.2s', whiteSpace: 'nowrap',
            }}>{l.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="ff-nav-desktop" style={{ alignItems: 'center' }}>
          <Link to="/contact" className="btn-dark" style={{ fontSize: 15, padding: '10px 22px' }}>
            Contact <ArrowRight size={15} />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="ff-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 8,
            color: 'var(--dark)', alignItems: 'center', justifyContent: 'center',
            borderRadius: 8, transition: 'background 0.2s',
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
              {open ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.07)', background: 'rgba(255,255,255,0.98)' }}
          >
            <div className="ff-container" style={{ paddingTop: 12, paddingBottom: 24 }}>
              {navLinks.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{
                  fontFamily: 'Lato', fontWeight: 600, fontSize: 17,
                  color: isActive(l.to) ? 'var(--primary)' : 'var(--dark)',
                  textDecoration: 'none', display: 'block',
                  padding: '14px 0', borderBottom: '1px solid var(--border)',
                }}>
                  {l.label}
                </Link>
              ))}
              <div style={{ marginTop: 20 }}>
                <Link to="/contact" className="btn-dark" onClick={() => setOpen(false)}
                  style={{ fontSize: 16, padding: '13px 28px', width: '100%', justifyContent: 'center' }}>
                  Contact <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
