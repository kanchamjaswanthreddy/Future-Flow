import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import {
  ArrowRight, Check, TrendingUp, DollarSign, Bell,
  CreditCard, Shield, BarChart3, RefreshCw, FileText, Zap,
} from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────
const HERO_BG = `
  radial-gradient(ellipse 80% 70% at 5% 30%, rgba(213,201,248,0.78) 0%, transparent 60%),
  radial-gradient(ellipse 60% 60% at 95% 15%, rgba(255,213,191,0.68) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 70% 88%, rgba(204,246,234,0.62) 0%, transparent 58%),
  #ffffff
`
const HOW_BG = `
  radial-gradient(ellipse 75% 65% at 0% 50%, rgba(213,201,248,0.5) 0%, transparent 65%),
  radial-gradient(ellipse 55% 55% at 100% 50%, rgba(204,246,234,0.4) 0%, transparent 62%),
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

// ─── Problem stat cards ───────────────────────────────────────────────────────
const problems = [
  { stat: '$312',   unit: '/mo', label: 'lost monthly to forgotten subscriptions', color: '#4353ff' },
  { stat: '$6,200', unit: '',    label: 'lost per person from wrong debt payoff order', color: '#f69c20' },
  { stat: '6+',     unit: ' apps', label: 'juggled by the average American with no clarity', color: '#2db37d' },
  { stat: '78%',    unit: '',    label: 'of high earners still live paycheck-to-paycheck', color: '#9b59b6' },
]

// ─── Dark bento data ──────────────────────────────────────────────────────────
const bento = [
  {
    span: 2, color: '#4353ff', border: 'rgba(67,83,255,0.18)',
    Icon: TrendingUp, tag: 'Core',
    title: 'AI Spend Tracking',
    desc: 'Every transaction across all accounts, auto-categorised in real time. Zero manual tagging — ever.',
    visual: 'bars',
  },
  {
    span: 1, color: '#f69c20', border: 'rgba(246,156,32,0.18)',
    Icon: CreditCard, tag: 'Exclusive',
    title: 'Subscription Manager',
    desc: 'Finds every recurring charge across bank AND email. Cancels wasteful ones in one tap.',
    visual: 'subs',
  },
  {
    span: 1, color: '#9b59b6', border: 'rgba(155,89,182,0.18)',
    Icon: DollarSign, tag: 'Premium',
    title: 'Debt Payoff Planner',
    desc: 'Optimal avalanche or snowball plan, updating daily progress toward your debt-free date.',
    visual: null,
  },
  {
    span: 2, color: '#2db37d', border: 'rgba(45,179,125,0.18)',
    Icon: FileText, tag: 'Exclusive',
    title: 'Autonomous Tax Engine',
    desc: 'Tracks every deductible expense year-round across all 50 states. Tax season becomes effortless.',
    visual: 'tax',
  },
  {
    span: 1, color: '#e05c5c', border: 'rgba(224,92,92,0.18)',
    Icon: Shield, tag: 'Premium+',
    title: 'Bill Negotiation AI',
    desc: 'Our AI calls your providers and negotiates lower rates. You only pay if we succeed.',
    visual: null,
  },
  {
    span: 1, color: '#4353ff', border: 'rgba(67,83,255,0.18)',
    Icon: Zap, tag: 'Exclusive',
    title: 'Free Trial Radar',
    desc: 'Never get surprise-charged. Alerts you before any trial converts to a paid plan.',
    visual: null,
  },
]

// ─── Dark bento mini-visuals ──────────────────────────────────────────────────
function DarkBarsVisual() {
  const h = [38, 55, 42, 72, 50, 88, 65]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, marginTop: 24, height: 68 }}>
      {h.map((v, i) => (
        <div key={i} style={{
          flex: 1, height: v, borderRadius: 5,
          background: i === 5 ? '#4353ff' : `rgba(67,83,255,${0.1 + i * 0.04})`,
        }} />
      ))}
    </div>
  )
}

function DarkTaxVisual() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
      {[
        { label: 'Home Office', amt: '$3,240' },
        { label: 'Business Travel', amt: '$1,870' },
        { label: 'Software & Tools', amt: '$840' },
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 12px', background: 'rgba(45,179,125,0.1)', borderRadius: 8,
          border: '1px solid rgba(45,179,125,0.12)',
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{item.label}</span>
          <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 800, color: '#2db37d' }}>{item.amt}</span>
        </div>
      ))}
    </div>
  )
}

function DarkSubsVisual() {
  return (
    <div style={{ marginTop: 16 }}>
      {[
        { name: 'Netflix', price: '$17.99', cancel: true },
        { name: 'Adobe CC', price: '$59.99', cancel: true },
        { name: 'Spotify', price: '$9.99', cancel: false },
      ].map((s, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '7px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{s.name}</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.4)' }}>{s.price}</span>
            <span style={{
              fontFamily: 'Lato', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4,
              background: s.cancel ? 'rgba(224,92,92,0.15)' : 'rgba(45,179,125,0.15)',
              color: s.cancel ? '#e05c5c' : '#2db37d',
            }}>{s.cancel ? 'Cancel' : 'Keep'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── AI activity feed (Exclusive section) ─────────────────────────────────────
const aiEvents = [
  { Icon: Bell,       color: '#f69c20', msg: 'Adobe Creative Cloud trial ends in 2 days',    time: '2m ago',    action: 'Alert' },
  { Icon: CreditCard, color: '#e05c5c', msg: 'Peloton subscription cancelled — $44.00/mo saved', time: '1h ago', action: 'Saved' },
  { Icon: FileText,   color: '#2db37d', msg: 'Tax deduction detected: Home office $3,240',  time: '3h ago',    action: 'Added' },
  { Icon: Shield,     color: '#4353ff', msg: 'Comcast bill negotiated down — $27/mo less',  time: 'Yesterday', action: 'Done'  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const isMobileBento = useIsMobile(560)
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ background: HERO_BG, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="ff-container ff-hero-inner" style={{ paddingTop: 152, paddingBottom: 100, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 72, alignItems: 'center' }}>

            {/* Left */}
            <div>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                <span className="ff-badge" style={{ marginBottom: 28, display: 'inline-flex' }}>Early Access Now Open</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
                style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(42px, 6vw, 74px)', lineHeight: 1.04, letterSpacing: '-2.5px', color: 'var(--dark)', marginBottom: 22 }}
              >
                Moving Money.<br />
                <span style={{ color: 'var(--primary)' }}>Building Futures.</span>
              </motion.h1>
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
                <Link to="/contact" className="btn-dark">Join the Waitlist <ArrowRight size={17} /></Link>
                <Link to="/features" className="btn-text">Explore features <ArrowRight size={16} /></Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 22, paddingTop: 28, borderTop: '1px solid rgba(0,0,0,0.1)' }}
              >
                {['No credit card required', 'Free tier at launch', '256-bit encryption'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Check size={14} color="var(--primary)" strokeWidth={2.5} />
                    <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)' }}>{t}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — upgraded dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 22 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.22, ease: 'easeOut' }}
              className="hidden lg:flex"
              style={{ justifyContent: 'flex-end', position: 'relative' }}
            >
              <div style={{ width: 440, position: 'relative' }}>
                <div style={{
                  background: 'var(--white)', borderRadius: 20,
                  border: '1px solid rgba(213,201,248,0.6)',
                  boxShadow: '0 24px 80px rgba(67,83,255,0.12), 0 4px 20px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                }}>
                  {/* Top bar */}
                  <div style={{ background: 'var(--lavender)', padding: '13px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 13, background: 'linear-gradient(135deg,#0e0e0e,#4353ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FutureFlow</span>
                    <div style={{ display: 'flex', gap: 5 }}>
                      {['Overview', 'Budget', 'Goals'].map((t, i) => (
                        <span key={t} style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 20, background: i === 0 ? 'rgba(67,83,255,0.15)' : 'transparent', color: i === 0 ? 'var(--primary)' : 'var(--dark-3)' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Net worth */}
                  <div style={{ padding: '22px 24px 16px', borderBottom: '1px solid var(--border)' }}>
                    <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 5 }}>Total Net Worth</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 32, color: 'var(--dark)', letterSpacing: '-1.5px' }}>$47,320</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 12, color: '#2db37d', fontWeight: 700 }}>↑ +$2,140/mo</span>
                    </div>
                  </div>

                  {/* Progress bars */}
                  <div style={{ padding: '18px 24px 8px' }}>
                    {[
                      { label: 'Savings Goal', val: '$12,890 / $20,000', pct: 64, color: '#4353ff' },
                      { label: 'Debt Payoff',  val: '74% complete',       pct: 74, color: '#f69c20' },
                      { label: 'Health Score', val: '782 / 850',          pct: 92, color: '#2db37d' },
                    ].map((r, i) => (
                      <div key={r.label} style={{ marginBottom: 16 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-3)' }}>{r.label}</span>
                          <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: r.color }}>{r.val}</span>
                        </div>
                        <div style={{ height: 5, borderRadius: 99, background: 'rgba(0,0,0,0.06)' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${r.pct}%` }}
                            transition={{ duration: 1.2, delay: 0.8 + i * 0.2, ease: 'easeOut' }}
                            style={{ height: '100%', borderRadius: 99, background: r.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Alert strip */}
                  <div style={{ margin: '0 16px 18px', padding: '10px 14px', background: 'rgba(246,156,32,0.07)', borderRadius: 10, border: '1px solid rgba(246,156,32,0.18)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Bell size={13} color="#f69c20" strokeWidth={2} />
                    <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)' }}>
                      Found <strong>$77.98/mo</strong> in subscriptions to cancel
                    </span>
                  </div>
                </div>

                {/* Floating savings */}
                <motion.div
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', bottom: -28, left: -44, background: 'var(--dark)', borderRadius: 14, padding: '14px 20px', boxShadow: '0 12px 40px rgba(0,0,0,0.28)', minWidth: 180 }}
                >
                  <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Projected annual savings</p>
                  <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 24, color: 'var(--mint)', letterSpacing: '-0.5px' }}>$1,200 / yr</p>
                </motion.div>

                {/* Floating alert */}
                <motion.div
                  animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  style={{ position: 'absolute', top: -22, right: -24, background: 'var(--white)', borderRadius: 12, padding: '11px 14px', boxShadow: '0 6px 28px rgba(0,0,0,0.1)', border: '1px solid rgba(213,201,248,0.6)', display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(246,156,32,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Bell size={14} color="#f69c20" strokeWidth={2} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Manrope', fontSize: 11, fontWeight: 700, color: 'var(--dark)', whiteSpace: 'nowrap' }}>Trial ending in 2 days</p>
                    <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)' }}>Adobe Creative Cloud</p>
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

      {/* ── PROBLEM ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--white)' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 72, alignItems: 'center' }}>
            <FadeIn>
              <span className="ff-badge-lavender" style={{ marginBottom: 20, display: 'inline-flex' }}>The Problem</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 50px)', letterSpacing: '-1.5px', lineHeight: 1.12, color: 'var(--dark)', marginTop: 14, marginBottom: 20 }}>
                Financial chaos costs Americans<br />
                <span style={{ color: 'var(--primary)' }}>$9,400 a year.</span>
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-2)', lineHeight: 1.8, marginBottom: 32 }}>
                Forgotten subscriptions. Wrong debt payoff order. No single tool that brings it together. FutureFlow fixes all of it.
              </p>
              <Link to="/features" className="btn-outline-dark" style={{ fontSize: 15, padding: '11px 26px' }}>
                See how we solve it <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <div className="ff-stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {problems.map((p, i) => (
                <FadeIn key={i} delay={i * 0.08} style={{ height: '100%' }}>
                  <div style={{
                    background: 'var(--white)', borderRadius: 16,
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${p.color}`,
                    padding: '28px 22px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    height: '100%', display: 'flex', flexDirection: 'column',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${p.color}22` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)' }}
                  >
                    <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 34, color: 'var(--dark)', letterSpacing: '-1.5px', lineHeight: 1 }}>
                      {p.stat}<span style={{ fontSize: 16, fontWeight: 600, color: p.color }}>{p.unit}</span>
                    </p>
                    <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-3)', lineHeight: 1.6, marginTop: 10 }}>{p.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BENTO (dark) ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--dark)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>The Solution</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(30px, 3.8vw, 50px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--white)', marginTop: 14 }}>
                One platform. Total financial clarity.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginTop: 16, maxWidth: 480, margin: '16px auto 0' }}>
                FutureFlow replaces six fragmented apps with a single intelligent hub that works for you around the clock.
              </p>
            </div>
          </FadeIn>

          <div className="ff-bento">
            {bento.map((card, i) => (
              <FadeIn key={i} delay={i * 0.06} style={{ gridColumn: card.span === 2 && !isMobileBento ? 'span 2' : undefined, height: '100%' }}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${card.border}`,
                    borderRadius: 20, padding: '30px 28px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.3s, background 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: `${card.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <card.Icon size={20} color={card.color} strokeWidth={1.8} />
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 4, letterSpacing: '0.05em', background: `${card.color}14`, color: card.color }}>
                      {card.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: card.span === 2 ? 21 : 17, color: 'var(--white)', marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.72, flex: 1 }}>
                    {card.desc}
                  </p>
                  {card.visual === 'bars' && <DarkBarsVisual />}
                  {card.visual === 'tax'  && <DarkTaxVisual />}
                  {card.visual === 'subs' && <DarkSubsVisual />}
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn style={{ textAlign: 'center', marginTop: 48 }}>
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
              <span className="ff-badge-lavender" style={{ marginBottom: 18, display: 'inline-flex' }}>How It Works</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 3.8vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginTop: 14 }}>
                Up and running in 5 minutes.
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              { Icon: RefreshCw, color: '#4353ff', num: '01', title: 'Connect Your Accounts', desc: 'Link banks, cards, loans, and investments via Plaid — 12,000+ institutions, 90-second setup.' },
              { Icon: BarChart3,  color: '#2db37d', num: '02', title: 'AI Analyzes Everything', desc: 'Our models instantly surface hidden money leaks, optimisation opportunities, and financial risks.' },
              { Icon: TrendingUp, color: '#f69c20', num: '03', title: 'Take Action, Build Wealth', desc: 'One-tap personalised recommendations to save more, pay less, and grow your net worth every month.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.12} style={{ height: '100%' }}>
                <div className="ff-card" style={{ padding: '36px 30px', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    position: 'absolute', top: 20, right: 24,
                    fontFamily: 'Manrope', fontWeight: 800, fontSize: 56,
                    color: `${s.color}0d`, lineHeight: 1, letterSpacing: '-2px', userSelect: 'none',
                  }}>{s.num}</span>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    <s.Icon size={22} color={s.color} strokeWidth={1.7} />
                  </div>
                  <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 12, color: s.color, letterSpacing: '0.08em', marginBottom: 12, textTransform: 'uppercase' }}>Step {s.num}</p>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 19, color: 'var(--dark)', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-3)', lineHeight: 1.72 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
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
      <section style={{ background: 'var(--dark)', padding: 'var(--sp) 0', textAlign: 'center' }}>
        <div className="ff-container">
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 62px)', letterSpacing: '-2px', lineHeight: 1.08, color: 'var(--white)', marginBottom: 18 }}>
              Take control of your money.<br />
              <span style={{ color: 'var(--mint)' }}>Starting today.</span>
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 19, color: 'rgba(255,255,255,0.5)', maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.72 }}>
              Join the waitlist and be among the first to access FutureFlow at launch.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 32 }}>
              <Link to="/contact" className="btn-white">Join the Waitlist <ArrowRight size={17} /></Link>
              <Link to="/contact" className="btn-outline-white">Schedule a Demo</Link>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 28 }}>
              {['No credit card needed', 'Free tier at launch', '256-bit encryption'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Check size={14} color="rgba(255,255,255,0.35)" strokeWidth={2.5} />
                  <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>{t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
