import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import {
  ArrowRight, Check, Bell,
  CreditCard, Shield, RefreshCw, FileText,
  Wifi,
} from 'lucide-react'
import { Tilt3DCard } from '../components/Tilt3DCard'

// ─── Constants ────────────────────────────────────────────────────────────────
const HERO_BG = `
  radial-gradient(ellipse 75% 65% at 5% 25%, rgba(16,185,129,0.28) 0%, transparent 62%),
  radial-gradient(ellipse 65% 60% at 92% 12%, rgba(213,201,248,0.82) 0%, transparent 60%),
  radial-gradient(ellipse 55% 55% at 65% 90%, rgba(251,113,133,0.20) 0%, transparent 58%),
  #f9f9fb
`
const HOW_BG = `
  radial-gradient(ellipse 60% 55% at 0% 50%, rgba(16,185,129,0.06) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 100% 50%, rgba(213,201,248,0.30) 0%, transparent 60%),
  #ffffff
`
const marqueeItems = [
  'AI Budgeting', 'Debt Payoff Planner', 'Subscription Manager', 'Bill Negotiation',
  'Tax Engine', 'Net Worth Tracker', 'Free Trial Radar', 'Financial Health Score',
  'Portfolio Radar', 'Cash Flow Forecasting', 'Credit Score Monitor', 'Household Mode',
]

// ─── Animated section wrapper ─────────────────────────────────────────────────
function FadeIn({
  children, delay = 0, x = 0, style = {},
}: {
  children: React.ReactNode; delay?: number; x?: number; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: x === 0 ? 28 : 0, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      style={style}
    >{children}</motion.div>
  )
}


// ─── Dark bento data ──────────────────────────────────────────────────────────
// color = data signal: #4353ff neutral info | #10b981 emerald = savings win | #fb7185 coral = alert
const bento = [
  {
    color: '#4353ff',
    bg: 'rgba(16,18,42,0.82)',
    title: 'AI Spend Tracking',
    heroStat: '$2,962', heroLabel: 'tracked this month',
    desc: 'Every transaction across all accounts, auto-categorised in real time. Zero manual tagging — ever.',
    visual: 'spend',
  },
  {
    color: '#10b981',
    bg: 'rgba(8,20,14,0.82)',
    title: 'Subscription Manager',
    heroStat: '$312', heroLabel: 'per month recovered',
    desc: 'Finds every recurring charge across bank AND email. Cancels wasteful ones in one tap.',
    visual: 'subs',
  },
  {
    color: '#10b981',
    bg: 'rgba(14,12,24,0.82)',
    title: 'Debt Payoff Planner',
    heroStat: '74%', heroLabel: 'paid off today',
    desc: 'Optimal avalanche or snowball plan, updating daily progress toward your debt-free date.',
    visual: 'debt',
  },
  {
    color: '#10b981',
    bg: 'rgba(8,18,12,0.82)',
    title: 'Autonomous Tax Engine',
    heroStat: '$1,593', heroLabel: 'in tax savings found',
    desc: 'Tracks every deductible expense year-round across all 50 states. Tax season becomes effortless.',
    visual: 'tax',
  },
  {
    color: '#f69c20',
    bg: 'rgba(20,12,8,0.82)',
    title: 'Bill Negotiation AI',
    heroStat: '$456', heroLabel: 'saved per year',
    desc: 'Our AI calls your providers and negotiates lower rates. You only pay if we succeed.',
    visual: 'bill',
  },
  {
    color: '#fb7185',
    bg: 'rgba(10,14,22,0.82)',
    title: 'Free Trial Radar',
    heroStat: '0', heroLabel: 'surprise charges ever',
    desc: 'Never get surprise-charged. Alerts you before any trial converts to a paid plan.',
    visual: 'trial',
  },
]

// ─── Dark bento mini-visuals ──────────────────────────────────────────────────
// AI Spend Tracking (span 2) — animated category bars
function DarkSpendVisual() {
  const cats = [
    { label: 'Housing',      amt: '$1,850', pct: 82, color: '#4353ff' },
    { label: 'Food & Dining',amt: '$620',   pct: 54, color: '#f69c20' },
    { label: 'Subscriptions',amt: '$312',   pct: 38, color: '#fb7185' },
    { label: 'Transport',    amt: '$180',   pct: 22, color: '#10b981' },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontFamily: 'Lato', fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>This Month</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.45)' }}>$2,962 total</span>
      </div>
      {cats.map((cat, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{cat.label}</span>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: cat.color }}>{cat.amt}</span>
          </div>
          <div style={{ height: 5, borderRadius: 99, background: 'rgba(255,255,255,0.06)' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${cat.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: 'easeOut' }}
              style={{ height: '100%', borderRadius: 99, background: `linear-gradient(90deg,${cat.color},${cat.color}88)` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Subscription Manager (span 1) — list with badges
function DarkSubsVisual() {
  const subs = [
    { name: 'Netflix',   price: '$17.99', cancel: true },
    { name: 'Adobe CC',  price: '$59.99', cancel: true },
    { name: 'Spotify',   price: '$9.99',  cancel: false },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16 }}>
      {subs.map((s, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '9px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{s.name}</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)' }}>{s.price}</span>
            <span style={{
              fontFamily: 'Lato', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 4,
              background: s.cancel ? 'rgba(251,113,133,0.18)' : 'rgba(16,185,129,0.18)',
              color: s.cancel ? '#fb7185' : '#10b981',
            }}>{s.cancel ? 'Cancel' : 'Keep'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Debt Payoff Planner (span 1) — circular progress ring
function DarkDebtVisual() {
  const r = 34
  const circ = 2 * Math.PI * r
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ position: 'relative', width: 86, height: 86 }}>
        <svg width="86" height="86" viewBox="0 0 86 86">
          <circle cx="43" cy="43" r={r} fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="7"/>
          <motion.circle
            cx="43" cy="43" r={r} fill="none"
            stroke="#10b981" strokeWidth="7" strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ * 0.26 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
            transform="rotate(-90 43 43)"
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 800, color: '#10b981', lineHeight: 1 }}>74%</span>
          <span style={{ fontFamily: 'Lato', fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>paid off</span>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'Lato', fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>Debt-free date</p>
        <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>Dec 2026</p>
      </div>
    </div>
  )
}

// Tax Engine (span 2) — deduction rows with animated bars
function DarkTaxVisual() {
  const items = [
    { label: 'Home Office',    amt: '$3,240', pct: 78 },
    { label: 'Business Travel',amt: '$1,870', pct: 62 },
    { label: 'Software & Tools',amt: '$840',  pct: 44 },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 20 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '9px 12px', background: 'rgba(16,185,129,0.07)', borderRadius: 8,
          border: '1px solid rgba(16,185,129,0.14)', marginBottom: 7,
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
          <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 800, color: '#10b981' }}>{item.amt}</span>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0 0', borderTop: '1px solid rgba(255,255,255,0.07)', marginTop: 4 }}>
        <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>Est. tax savings</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 800, color: '#10b981' }}>$1,593</span>
      </div>
    </div>
  )
}

// Bill Negotiation AI (span 1) — before/after
function DarkBillVisual() {
  const bills = [
    { provider: 'Comcast',    before: '$127', after: '$89', saved: '$456/yr' },
    { provider: 'Progressive',before: '$214', after: '$178',saved: '$432/yr' },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {bills.map((b, i) => (
        <div key={i} style={{ padding: '10px 12px', background: 'rgba(255,255,255,0.04)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>{b.provider}</span>
            <span style={{ fontFamily: 'Lato', fontSize: 10, fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.14)', padding: '2px 7px', borderRadius: 4 }}>Saved {b.saved}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'line-through' }}>{b.before}/mo</span>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>→</span>
            <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 800, color: '#10b981' }}>{b.after}/mo</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Free Trial Radar (span 1) — countdown pills (coral=urgent, amber=warn, emerald=safe)
function DarkTrialVisual() {
  const trials = [
    { name: 'Adobe CC', days: 2,  color: '#fb7185' },  // coral — urgent
    { name: 'Hulu',     days: 7,  color: '#f69c20' },  // amber  — warning
    { name: 'Notion',   days: 14, color: '#10b981' },  // emerald — safe
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {trials.map((t, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 12px', background: 'rgba(255,255,255,0.03)', borderRadius: 8,
          border: `1px solid ${t.color}22`,
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{t.name}</span>
          <span style={{ fontFamily: 'Manrope', fontSize: 11, fontWeight: 700, color: t.color, background: `${t.color}18`, padding: '3px 9px', borderRadius: 4 }}>
            {t.days}d left
          </span>
        </div>
      ))}
    </div>
  )
}

// ─── AI activity feed (Exclusive section) ─────────────────────────────────────
const aiEvents = [
  { Icon: Bell,       color: '#f69c20', msg: 'Adobe Creative Cloud trial ends in 2 days',    time: '2m ago',    action: 'Alert' },
  { Icon: CreditCard, color: '#fb7185', msg: 'Peloton subscription cancelled — $44.00/mo saved', time: '1h ago', action: 'Saved' },
  { Icon: FileText,   color: '#10b981', msg: 'Tax deduction detected: Home office $3,240',  time: '3h ago',    action: 'Added' },
  { Icon: Shield,     color: '#4353ff', msg: 'Comcast bill negotiated down — $27/mo less',  time: 'Yesterday', action: 'Done'  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const isMobile = useIsMobile(768)

  // Kinetic typography — hero text reacts to scroll
  const { scrollY } = useScroll()
  const heroY     = useTransform(scrollY, [0, 500], [0, -28])
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.96])

  // Skeleton loading — bank sync simulation
  const [syncing, setSyncing] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setSyncing(false), 2600)
    return () => clearTimeout(t)
  }, [])

  // Haptic pulse — CTA click feedback
  const [pulsed, setPulsed] = useState(false)
  const triggerPulse = () => {
    setPulsed(true)
    setTimeout(() => setPulsed(false), 600)
  }

  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ background: HERO_BG, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="ff-container ff-hero-inner" style={{ paddingTop: 152, paddingBottom: 100, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 72, alignItems: 'center' }}>

            {/* Left — Kinetic Typography */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="ff-badge" style={{ marginBottom: 28, display: 'inline-flex' }}>Early Access Now Open</span>
              </motion.div>

              {/* Kinetic headline — reacts to scroll */}
              <motion.div
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
              >
                <motion.h1
                  className="ff-kinetic"
                  style={{
                    y: heroY, scale: heroScale,
                    fontFamily: 'Manrope', fontWeight: 800,
                    fontSize: 'clamp(42px, 6vw, 74px)',
                    lineHeight: 1.04, letterSpacing: '-2.5px',
                    color: 'var(--dark)', marginBottom: 22,
                    transformOrigin: 'left center',
                  }}
                >
                  Moving Money.<br />
                  <span style={{ color: 'var(--primary)' }}>Building Futures.</span>
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.25 }}
                style={{ fontFamily: 'Lato', fontSize: 19, color: 'var(--dark-2)', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}
              >
                The intelligent personal finance platform that unifies your spending, saving, debt payoff, and wealth building — all in one place.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.38 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginBottom: 44 }}
              >
                <Link
                  to="/contact"
                  className={`btn-dark${pulsed ? ' ff-haptic' : ''}`}
                  onClick={triggerPulse}
                >
                  Join the Waitlist <ArrowRight size={17} />
                </Link>
                <Link to="/features" className="btn-text">Explore features <ArrowRight size={16} /></Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 22, paddingTop: 28, borderTop: '1px solid rgba(0,0,0,0.08)' }}
              >
                {[
                  { label: 'No credit card required', signal: false },
                  { label: 'Free tier at launch',     signal: true  },
                  { label: '256-bit encryption',      signal: false },
                ].map(({ label, signal }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={14} color={signal ? 'var(--emerald)' : 'var(--primary)'} strokeWidth={2.5} />
                    <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)' }}>{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — AI Financial Command Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: 'easeOut' }}
              className="hidden lg:flex"
              style={{ justifyContent: 'flex-end', position: 'relative' }}
            >
              <div style={{ width: 440, position: 'relative' }}>

                {/* Main card */}
                <div style={{
                  background: 'rgba(255,255,255,0.88)',
                  backdropFilter: 'blur(28px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                  borderRadius: 24,
                  border: '1px solid rgba(255,255,255,0.7)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.09), 0 4px 20px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                }}>

                  {/* Header */}
                  <div style={{ background: 'rgba(245,245,247,0.9)', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 13, background: 'linear-gradient(135deg,#0e0e0e,#4353ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FutureFlow</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {syncing ? (
                        <>
                          <Wifi size={11} color="#10b981" strokeWidth={2} />
                          <span style={{ fontFamily: 'Lato', fontSize: 11, color: '#10b981', fontWeight: 600 }}>Syncing accounts…</span>
                        </>
                      ) : (
                        <>
                          <motion.div
                            animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                            style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}
                          />
                          <span style={{ fontFamily: 'Lato', fontSize: 11, color: '#10b981', fontWeight: 600 }}>AI Active</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Sync progress bar */}
                  {syncing && (
                    <div style={{ height: 3, background: 'var(--neutral-100)' }}>
                      <div className="ff-progress-pulse" style={{ width: '100%' }} />
                    </div>
                  )}

                  {/* Net worth + sparkline */}
                  <div style={{ padding: '20px 24px 18px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 6 }}>Total Net Worth</p>
                    {syncing ? (
                      <div>
                        <div className="ff-skeleton-light" style={{ height: 38, width: 150, marginBottom: 8 }} />
                        <div className="ff-skeleton-light" style={{ height: 44, width: '100%', borderRadius: 8 }} />
                      </div>
                    ) : (
                      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14 }}>
                          <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 36, color: 'var(--dark)', letterSpacing: '-1.5px' }}>$47,320</span>
                          <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--emerald)', fontWeight: 700 }}>↑ +$2,140 this month</span>
                        </div>
                        {/* Animated sparkline */}
                        <svg width="100%" height="46" viewBox="0 0 390 46" preserveAspectRatio="none" style={{ display: 'block' }}>
                          <defs>
                            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4353ff" stopOpacity="0.14" />
                              <stop offset="100%" stopColor="#4353ff" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <motion.path
                            d="M0,40 L33,37 L66,33 L99,30 L132,32 L165,25 L198,21 L231,17 L264,13 L297,9 L330,6 L363,3 L390,1 L390,46 L0,46 Z"
                            fill="url(#sparkFill)"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                          />
                          <motion.path
                            d="M0,40 L33,37 L66,33 L99,30 L132,32 L165,25 L198,21 L231,17 L264,13 L297,9 L330,6 L363,3 L390,1"
                            fill="none" stroke="#4353ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                            transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
                          />
                          {/* End dot */}
                          <motion.circle cx="390" cy="1" r="4" fill="#4353ff"
                            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.6, duration: 0.3 }}
                          />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  {/* AI Action Feed */}
                  <div style={{ padding: '14px 20px 16px' }}>
                    <p style={{ fontFamily: 'Lato', fontSize: 10, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10 }}>AI Working For You — Today</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {syncing ? (
                        [1, 2, 3].map(i => <div key={i} className="ff-skeleton-light" style={{ height: 48, borderRadius: 10 }} />)
                      ) : (
                        [
                          { Icon: Bell,       color: '#fb7185', msg: 'Adobe CC trial ends in 2 days — cancel?',   action: 'Alert',    time: 'Just now' },
                          { Icon: CreditCard, color: '#10b981', msg: 'Peloton subscription cancelled successfully', action: '−$44/mo',  time: '1h ago'   },
                          { Icon: FileText,   color: '#f69c20', msg: 'Home office deduction logged: $3,240',        action: 'Saved',    time: '3h ago'   },
                        ].map((ev, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 18 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.55 + i * 0.2, duration: 0.45, ease: 'easeOut' }}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 10,
                              padding: '10px 12px',
                              background: `${ev.color}09`,
                              borderRadius: 10,
                              border: `1px solid ${ev.color}20`,
                            }}
                          >
                            <div style={{ width: 32, height: 32, borderRadius: 9, background: `${ev.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <ev.Icon size={14} color={ev.color} strokeWidth={2} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)', lineHeight: 1.4, margin: 0 }}>{ev.msg}</p>
                              <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', margin: '2px 0 0' }}>{ev.time}</p>
                            </div>
                            <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, color: ev.color, background: `${ev.color}14`, padding: '3px 10px', borderRadius: 5, whiteSpace: 'nowrap', flexShrink: 0 }}>
                              {ev.action}
                            </span>
                          </motion.div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Bottom — total value found strip */}
                  {!syncing && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.4 }}
                      style={{ margin: '0 16px 16px', padding: '12px 16px', background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(67,83,255,0.05))', borderRadius: 12, border: '1px solid rgba(16,185,129,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-2)' }}>Total found by AI this month</span>
                      <span style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 800, color: 'var(--emerald)', letterSpacing: '-0.5px' }}>+$456.97</span>
                    </motion.div>
                  )}
                </div>

                {/* Floating savings chip */}
                <motion.div
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', bottom: -28, left: -44, background: 'var(--dark)', borderRadius: 16, padding: '14px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.28)', minWidth: 190 }}
                >
                  <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Projected annual savings</p>
                  <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 24, color: '#10b981', letterSpacing: '-0.5px' }}>$1,200 / yr</p>
                </motion.div>

                {/* Floating financial health chip */}
                <motion.div
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  style={{ position: 'absolute', top: -22, right: -24, background: 'var(--white)', borderRadius: 14, padding: '11px 16px', boxShadow: '0 6px 28px rgba(0,0,0,0.10)', border: '1px solid rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(16,185,129,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Shield size={15} color="#10b981" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', marginBottom: 2 }}>Financial Health</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 3 }}>
                      <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 18, color: 'var(--dark)', letterSpacing: '-0.5px' }}>87</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--emerald)', fontWeight: 700 }}>/100 · Excellent</span>
                    </div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section style={{ background: 'var(--dark)', padding: '20px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <span key={i} style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: 13, color: i % 2 === 0 ? 'rgba(255,255,255,0.9)' : 'var(--lavender)', letterSpacing: '0.03em', flexShrink: 0, paddingRight: 52 }}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM — Asymmetric Bento ── */}
      <section style={{ padding: 'var(--sp) 0', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-container" style={{ position: 'relative' }}>

          {/* Section header */}
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>The Problem</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 52px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginTop: 14, marginBottom: 16 }}>
                Financial chaos costs Americans<br />
                <span style={{ color: '#fb7185' }}>$9,400 a year.</span>
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-3)', lineHeight: 1.75, maxWidth: 500, margin: '0 auto' }}>
                Forgotten subscriptions. Wrong debt order. No single tool. FutureFlow fixes all of it.
              </p>
            </div>
          </FadeIn>

          {/* Asymmetric bento grid */}
          <div className="bento-12">

            {/* Card A — 52% Stress (narrow, tall) */}
            <div className="b-5">
              <FadeIn delay={0} style={{ height: '100%' }}>
                <Tilt3DCard intensity={9} style={{ height: '100%' }}>
                  <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--dark)', lineHeight: 1.25, marginBottom: 20 }}>
                      Money Is Americans'<br />#1 Stress
                    </h3>
                    <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 80, color: '#fb7185', letterSpacing: '-5px', lineHeight: 1, marginBottom: 10 }}>52%</div>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.72, flex: 1 }}>
                      rank money as their #1 source of stress — costing productivity, health, and relationships every single day.
                    </p>
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <span style={{ fontFamily: 'Lato', fontSize: 11, color: 'var(--muted)', fontWeight: 600 }}>Financial Stress Index</span>
                        <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: '#fb7185' }}>High</span>
                      </div>
                      <div style={{ height: 6, borderRadius: 99, background: 'rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                        <motion.div
                          initial={{ width: 0 }} whileInView={{ width: '78%' }} viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                          style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #fb7185, #f43f5e)' }}
                        />
                      </div>
                    </div>
                  </div>
                </Tilt3DCard>
              </FadeIn>
            </div>

            {/* Card B — $460B Subscriptions (wide) */}
            <div className="b-7">
              <FadeIn delay={0.08} style={{ height: '100%' }}>
                <Tilt3DCard intensity={6} style={{ height: '100%' }}>
                  <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--dark)', lineHeight: 1.25, marginBottom: 8 }}>
                      Wasted on Forgotten Subscriptions
                    </h3>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.7, marginBottom: 20 }}>$460 billion evaporates every year from forgotten auto-renewals. Most people have no idea what they're paying for.</p>
                    <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 88, color: '#f69c20', letterSpacing: '-5px', lineHeight: 1, marginBottom: 4 }}>$460B</div>
                    <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(246,156,32,0.6)', fontWeight: 600, marginBottom: 'auto' }}>lost annually in the US alone</p>
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {[
                        { label: 'Streaming',  pct: 82, val: '$47/mo' },
                        { label: 'SaaS',       pct: 64, val: '$31/mo' },
                        { label: 'Fitness',    pct: 48, val: '$29/mo' },
                        { label: 'News',       pct: 35, val: '$18/mo' },
                      ].map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 9 }}>
                          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-3)', width: 72, flexShrink: 0 }}>{item.label}</span>
                          <div style={{ flex: 1, height: 5, borderRadius: 99, background: 'rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                            <motion.div
                              initial={{ width: 0 }} whileInView={{ width: `${item.pct}%` }} viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: idx * 0.08 + 0.3 }}
                              style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #f69c20, #fbbf24)' }}
                            />
                          </div>
                          <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: '#f69c20', width: 48, textAlign: 'right', flexShrink: 0 }}>{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3DCard>
              </FadeIn>
            </div>

            {/* Card C — 51% Paycheck (wide) */}
            <div className="b-7">
              <FadeIn delay={0.16} style={{ height: '100%' }}>
                <Tilt3DCard intensity={6} style={{ height: '100%' }}>
                  <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--dark)', lineHeight: 1.25, marginBottom: 8 }}>
                      Live Paycheck to Paycheck
                    </h3>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.7, marginBottom: 20 }}>Not just a low-income problem. High earners with no visibility into their money face the same cycle.</p>
                    <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 88, color: '#4353ff', letterSpacing: '-5px', lineHeight: 1, marginBottom: 4 }}>51%</div>
                    <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(67,83,255,0.55)', fontWeight: 600, marginBottom: 'auto' }}>of Americans, regardless of income</p>
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: 8, alignItems: 'flex-end' }}>
                      {[
                        { label: 'Rent/Mortgage', pct: 35, color: '#4353ff' },
                        { label: 'Debt', pct: 22, color: '#f69c20' },
                        { label: 'Food', pct: 15, color: '#fb7185' },
                        { label: 'Subs', pct: 12, color: '#10b981' },
                        { label: 'Savings', pct: 16, color: 'rgba(0,0,0,0.12)' },
                      ].map((s, idx) => (
                        <div key={idx} style={{ flex: s.pct, display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                          <motion.div
                            initial={{ height: 0 }} whileInView={{ height: s.pct * 1.6 }} viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.08 + 0.2 }}
                            style={{ width: '100%', borderRadius: 6, background: s.color }}
                          />
                          <span style={{ fontFamily: 'Lato', fontSize: 9, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.3 }}>{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3DCard>
              </FadeIn>
            </div>

            {/* Card D — 3+ Apps (narrow, tall) */}
            <div className="b-5">
              <FadeIn delay={0.24} style={{ height: '100%' }}>
                <Tilt3DCard intensity={9} style={{ height: '100%' }}>
                  <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(20px, 2.2vw, 26px)', color: 'var(--dark)', lineHeight: 1.25, marginBottom: 20 }}>
                      Apps Just to<br />Track Money
                    </h3>
                    <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 80, color: '#10b981', letterSpacing: '-5px', lineHeight: 1, marginBottom: 10 }}>3+</div>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.72, flex: 1 }}>
                      The average American juggles 3–5 separate apps and still can't see their full financial picture.
                    </p>
                    <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                      {[
                        { name: 'Budgeting App',    crossed: true },
                        { name: 'Investment App',   crossed: true },
                        { name: 'Debt Tracker',     crossed: true },
                        { name: 'FutureFlow',       crossed: false },
                      ].map((item) => (
                        <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                          <div style={{ width: 16, height: 16, borderRadius: '50%', background: item.crossed ? 'rgba(0,0,0,0.07)' : 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            {!item.crossed && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} />}
                          </div>
                          <span style={{ fontFamily: 'Lato', fontSize: 13, color: item.crossed ? 'var(--muted)' : 'var(--dark)', fontWeight: item.crossed ? 400 : 700, textDecoration: item.crossed ? 'line-through' : 'none' }}>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Tilt3DCard>
              </FadeIn>
            </div>

          </div>

          {/* CTA below bento */}
          <FadeIn style={{ textAlign: 'center', marginTop: 52 }}>
            <Link to="/features" className="btn-outline-dark" style={{ fontSize: 15, padding: '12px 28px' }}>
              See how FutureFlow solves all of this <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── PROBLEM TICKER ── */}
      <section style={{ background: 'var(--dark)', padding: '14px 0', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...Array(3)].flatMap(() => [
            'Mint shut down Jan 2024',
            '3.6M users left without a home',
            'The market is actively searching for an AI-first replacement',
          ]).map((t, i) => (
            <span key={i} style={{
              fontFamily: 'Manrope', fontWeight: 600, fontSize: 13,
              color: i % 2 === 0 ? 'rgba(255,255,255,0.85)' : '#10b981',
              flexShrink: 0, paddingRight: 52,
              letterSpacing: '0.02em',
            }}>
              · {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── FEATURES BENTO (dark liquid glass) ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient blobs — liquid glass refracts through these */}
        <div className="ff-blob" style={{ top: '8%', left: '5%', width: 340, height: 340, background: 'rgba(16,185,129,0.07)' }} />
        <div className="ff-blob" style={{ bottom: '10%', right: '8%', width: 280, height: 280, background: 'rgba(67,83,255,0.09)' }} />
        <div className="ff-blob" style={{ top: '50%', left: '42%', width: 220, height: 220, background: 'rgba(251,113,133,0.05)' }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>The Solution</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 50px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--white)', marginTop: 14 }}>
                One platform. Total financial clarity.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'rgba(255,255,255,0.40)', lineHeight: 1.75, marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>
                FutureFlow replaces six fragmented apps with a single intelligent hub that works for you around the clock.
              </p>
            </div>
          </FadeIn>

          <div className="ff-bento">
            {bento.map((card, i) => (
              <FadeIn key={i} delay={i * 0.06} style={{ height: '100%' }}>
                <Tilt3DCard intensity={7} gloss style={{ height: '100%' }}>
                  <div
                    style={{
                      background: card.bg,
                      backdropFilter: 'blur(24px) saturate(160%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                      borderRadius: 24,
                      padding: '36px 32px',
                      height: '100%', display: 'flex', flexDirection: 'column',
                      position: 'relative', overflow: 'hidden',
                      cursor: 'default',
                      border: '1px solid rgba(255,255,255,0.07)',
                      boxShadow: '0 4px 32px rgba(0,0,0,0.28)',
                    }}
                  >
                    {/* Radial glow */}
                    <div style={{ position: 'absolute', top: -50, left: -50, width: 180, height: 180, borderRadius: '50%', background: `radial-gradient(circle, ${card.color}18 0%, transparent 70%)`, pointerEvents: 'none' }} />

                    {/* Feature title */}
                    <h3 style={{
                      fontFamily: 'Manrope', fontWeight: 800,
                      fontSize: 'clamp(17px, 1.5vw, 20px)',
                      color: 'rgba(255,255,255,0.92)', marginBottom: 14, lineHeight: 1.2,
                    }}>
                      {card.title}
                    </h3>

                    {/* Hero stat */}
                    <div style={{ marginBottom: 8 }}>
                      <div style={{
                        fontFamily: 'Manrope', fontWeight: 800,
                        fontSize: 'clamp(42px, 3.6vw, 54px)',
                        color: card.color, letterSpacing: '-3px', lineHeight: 1,
                      }}>
                        {card.heroStat}
                      </div>
                      <div style={{ fontFamily: 'Lato', fontSize: 13, fontWeight: 600, color: `${card.color}99`, marginTop: 5 }}>
                        {card.heroLabel}
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '14px 0' }} />

                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.58)', lineHeight: 1.68 }}>
                      {card.desc}
                    </p>

                    {card.visual === 'spend' && <DarkSpendVisual />}
                    {card.visual === 'subs'  && <DarkSubsVisual />}
                    {card.visual === 'debt'  && <DarkDebtVisual />}
                    {card.visual === 'tax'   && <DarkTaxVisual />}
                    {card.visual === 'bill'  && <DarkBillVisual />}
                    {card.visual === 'trial' && <DarkTrialVisual />}
                  </div>
                </Tilt3DCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn style={{ textAlign: 'center', marginTop: 52 }}>
            <Link to="/features" className="btn-white" style={{ fontSize: 15, padding: '12px 28px' }}>
              View all features <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: 'var(--sp) 0', background: HOW_BG }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ maxWidth: 520, margin: '0 auto 72px', textAlign: 'center' }}>
              <span className="ff-badge" style={{ marginBottom: 18, display: 'inline-flex' }}>Built-in Features</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 3.8vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginTop: 14 }}>
                Everything you need,<br />
                <span style={{ color: '#4353ff' }}>nothing you don't.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="ff-grid-3" style={{ gap: 24 }}>

            {/* Card 1 — Net Worth Tracker */}
            <FadeIn delay={0} style={{ height: '100%' }}>
              <Tilt3DCard intensity={9} style={{ height: '100%' }}>
                <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 2.8vw, 34px)', color: 'var(--dark)', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.5px' }}>
                    Net Worth<br />Tracker
                  </h3>
                  <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 48, color: '#4353ff', letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>$47,320</div>
                  <p style={{ fontFamily: 'Lato', fontSize: 12, color: '#10b981', fontWeight: 700, marginBottom: 20 }}>+$2,840 this month</p>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.72, flex: 1 }}>Every account, asset, and liability in one live dashboard — updated automatically, every day.</p>
                  <div style={{ display: 'flex', gap: 6, marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)', flexWrap: 'wrap' }}>
                    {['Savings', 'Investments', 'Loans', 'Real Estate'].map((tag) => (
                      <span key={tag} style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 600, color: '#4353ff', background: 'rgba(67,83,255,0.08)', padding: '4px 10px', borderRadius: 50 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Tilt3DCard>
            </FadeIn>

            {/* Card 2 — Credit Score Monitor */}
            <FadeIn delay={0.12} style={{ height: '100%' }}>
              <Tilt3DCard intensity={9} style={{ height: '100%' }}>
                <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 2.8vw, 34px)', color: 'var(--dark)', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.5px' }}>
                    Credit Score<br />Monitor
                  </h3>
                  <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 48, color: '#10b981', letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>782</div>
                  <p style={{ fontFamily: 'Lato', fontSize: 12, color: '#10b981', fontWeight: 700, marginBottom: 20 }}>Excellent — top 12%</p>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.72, flex: 1 }}>Real-time alerts on score changes, plus AI-powered tips to push your score higher every month.</p>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
                      <span style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)' }}>300</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)' }}>850</span>
                    </div>
                    <div style={{ height: 6, borderRadius: 99, background: 'rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }} whileInView={{ width: '87%' }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg, #10b981, #34d399)' }}
                      />
                    </div>
                  </div>
                </div>
              </Tilt3DCard>
            </FadeIn>

            {/* Card 3 — Cash Flow Forecast */}
            <FadeIn delay={0.24} style={{ height: '100%' }}>
              <Tilt3DCard intensity={9} style={{ height: '100%' }}>
                <div className="ff-clay ff-gloss-on-hover" style={{ padding: '40px 36px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 2.8vw, 34px)', color: 'var(--dark)', lineHeight: 1.15, marginBottom: 20, letterSpacing: '-0.5px' }}>
                    Cash Flow<br />Forecast
                  </h3>
                  <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 48, color: '#f69c20', letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>30 days</div>
                  <p style={{ fontFamily: 'Lato', fontSize: 12, color: '#10b981', fontWeight: 700, marginBottom: 20 }}>No shortfalls predicted</p>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.72, flex: 1 }}>AI predicts your balance 30 days out — flagging upcoming bills and saving opportunities in advance.</p>
                  <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', gap: 3, alignItems: 'flex-end', height: 52 }}>
                    {[55, 42, 68, 52, 76, 61, 88, 70, 82, 75, 90, 85].map((h, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.04 }}
                        style={{ flex: 1, borderRadius: 3, background: idx >= 7 ? 'rgba(246,156,32,0.2)' : 'rgba(246,156,32,0.55)' }}
                      />
                    ))}
                  </div>
                </div>
              </Tilt3DCard>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── AI IN ACTION SPOTLIGHT (dark) ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--dark)' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>

            {/* Text */}
            <FadeIn x={-30}>
              <span style={{ display: 'inline-flex', background: 'rgba(67,83,255,0.15)', color: 'var(--primary)', fontFamily: 'Lato', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 4, letterSpacing: '0.06em', marginBottom: 24, textTransform: 'uppercase' }}>
                Only on FutureFlow
              </span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.12, color: 'var(--white)', marginBottom: 20 }}>
                Features built to work while you sleep.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 36 }}>
                FutureFlow's AI runs silently in the background — catching trials before they charge, cancelling wasteful subscriptions, tracking tax deductions, and negotiating your bills. You wake up to results.
              </p>
              <Link to="/features" className="btn-white" style={{ fontSize: 15 }}>
                See all exclusive features <ArrowRight size={16} />
              </Link>
            </FadeIn>

            {/* AI activity feed */}
            <FadeIn x={30} delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 8 }}>
                  FutureFlow AI — Live Activity
                </p>
                {aiEvents.map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 14, padding: '14px 18px',
                      display: 'flex', alignItems: 'center', gap: 14,
                    }}
                  >
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: `${ev.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ev.Icon size={16} color={ev.color} strokeWidth={1.8} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.78)', lineHeight: 1.5 }}>{ev.msg}</p>
                      <p style={{ fontFamily: 'Lato', fontSize: 11, color: 'rgba(255,255,255,0.28)', marginTop: 3 }}>{ev.time}</p>
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 6, background: `${ev.color}18`, color: ev.color, whiteSpace: 'nowrap' }}>
                      {ev.action}
                    </span>
                  </motion.div>
                ))}
                <div style={{ marginTop: 8, padding: '12px 18px', background: 'rgba(67,83,255,0.08)', border: '1px solid rgba(67,83,255,0.15)', borderRadius: 12, textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>
                    + 8 more actions this week
                  </span>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section style={{ background: 'var(--white)', padding: '56px 0', borderTop: '1px solid var(--border)' }}>
        <div className="ff-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 15, color: 'var(--dark)' }}>Built to the highest security standards</p>
            {[
              { Icon: Shield,    label: '256-bit AES Encryption' },
              { Icon: Check,     label: 'SOC 2 Type II Certified' },
              { Icon: RefreshCw, label: 'Read-Only Bank Access' },
              { Icon: CreditCard, label: 'No Credential Storage' },
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <t.Icon size={16} color="var(--primary)" strokeWidth={2} />
                <span style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 600, color: 'var(--dark-2)' }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'var(--surface)', padding: 'var(--sp) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, background: 'rgba(16,185,129,0.06)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 62px)', letterSpacing: '-2px', lineHeight: 1.08, color: 'var(--white)', marginBottom: 18 }}>
              Take control of your money.<br />
              <span style={{ color: '#10b981' }}>Starting today.</span>
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 19, color: 'rgba(255,255,255,0.45)', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.72 }}>
              Join the waitlist and be among the first to access FutureFlow at launch.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 32 }}>
              <Link to="/contact" className="btn-white" onClick={triggerPulse}>Join the Waitlist <ArrowRight size={17} /></Link>
              <Link to="/contact" className="btn-outline-white">Schedule a Demo</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28 }}>
              {[
                { label: 'No credit card needed', positive: false },
                { label: 'Free tier at launch',   positive: true  },
                { label: '256-bit encryption',    positive: false },
              ].map(({ label, positive }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Check size={14} color={positive ? '#10b981' : 'rgba(255,255,255,0.28)'} strokeWidth={2.5} />
                  <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THUMB ZONE — mobile-only sticky CTA (Thumb Zone hierarchy) ── */}
      {isMobile && (
        <div className="ff-thumb-zone">
          <Link
            to="/contact"
            className={`btn-dark${pulsed ? ' ff-haptic' : ''}`}
            onClick={triggerPulse}
            style={{ width: '100%', justifyContent: 'center', fontSize: 16, borderRadius: 16, padding: '15px 24px' }}
          >
            Join the Waitlist <ArrowRight size={17} />
          </Link>
        </div>
      )}

    </div>
  )
}
