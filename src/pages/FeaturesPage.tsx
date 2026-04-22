import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'
import {
  ArrowRight, Check, X, Minus,
  TrendingUp, DollarSign, CreditCard,
  Shield, FileText, PieChart,
} from 'lucide-react'

const HERO_BG = `
  radial-gradient(ellipse 80% 60% at 10% 40%, rgba(204,246,234,0.62) 0%, transparent 60%),
  radial-gradient(ellipse 60% 60% at 90% 20%, rgba(213,201,248,0.55) 0%, transparent 60%),
  #ffffff
`

function FadeIn({
  children, delay = 0, style = {}, x = 0,
}: {
  children: React.ReactNode; delay?: number; style?: React.CSSProperties; x?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: x === 0 ? 28 : 0, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      style={style}>
      {children}
    </motion.div>
  )
}

// ─── Bento data ───────────────────────────────────────────────────────────────
const bento = [
  {
    span: 2, color: '#4353ff', bg: 'rgba(67,83,255,0.05)', border: 'rgba(67,83,255,0.12)',
    Icon: TrendingUp, tag: 'Pillar 1', title: 'Connect Everything',
    desc: 'Banks, email & brokerage accounts unified in one real-time dashboard via Plaid (12,000+ institutions). Zero manual setup.',
    visual: 'bars',
  },
  {
    span: 1, color: '#f69c20', bg: 'rgba(246,156,32,0.05)', border: 'rgba(246,156,32,0.12)',
    Icon: CreditCard, tag: 'Pillar 2', title: 'Predict Problems',
    desc: 'AI forecasts cash flow 30 days ahead, flags risks before they happen, and spots hidden savings automatically.',
    visual: null,
  },
  {
    span: 1, color: '#9b59b6', bg: 'rgba(155,89,182,0.05)', border: 'rgba(155,89,182,0.12)',
    Icon: DollarSign, tag: 'Pillar 3', title: 'Act Automatically',
    desc: 'Cancels subscriptions, executes savings, files taxes, splits bills — FutureFlow does it for you.',
    visual: null,
  },
  {
    span: 2, color: '#2db37d', bg: 'rgba(45,179,125,0.05)', border: 'rgba(45,179,125,0.12)',
    Icon: FileText, tag: 'Pillar 4 · Exclusive', title: 'Subscription Radar',
    desc: 'Detects every subscription via Plaid + email. Alerts before charges. One-tap AI cancellation — no phone calls needed.',
    visual: 'subs',
  },
  {
    span: 1, color: '#e05c5c', bg: 'rgba(224,92,92,0.05)', border: 'rgba(224,92,92,0.12)',
    Icon: Shield, tag: 'Pillar 5 · Exclusive', title: 'AI Financial Assistant + Tax Engine',
    desc: 'Proactive cash-flow predictions, anomaly detection, goal tracking + autonomous tax harvesting & filing across all 50 states.',
    visual: null,
  },
  {
    span: 1, color: '#4353ff', bg: 'rgba(67,83,255,0.05)', border: 'rgba(67,83,255,0.12)',
    Icon: PieChart, tag: 'Pillar 6 · Exclusive', title: 'Portfolio & Bill Splitting',
    desc: 'Portfolio Health Radar links investments to real cash flow. Fraud-proof Bill Splitting uses real bank transactions — no manual entry.',
    visual: null,
  },
]

// ─── Comparison table data ────────────────────────────────────────────────────
type CellVal = boolean | 'partial'
const competitors = ['Monarch Money', 'Rocket Money', 'Copilot Money', 'YNAB', 'PocketGuard', 'FutureFlow']
const rows: { name: string; values: CellVal[] }[] = [
  { name: 'Spending Analytics',              values: [true,     true,     true,     true,     true,     true] },
  { name: 'Auto Categorisation',             values: [true,     true,     true,     true,     true,     true] },
  { name: 'Flexible Budgeting',              values: [true,     true,     true,     true,     true,     true] },
  { name: 'Bill & Due Date Alerts',          values: [true,     true,     true,     'partial',true,     true] },
  { name: 'Savings Goals',                   values: [true,     true,     true,     true,     true,     true] },
  { name: 'Net Worth Tracker',               values: [true,     true,     true,     false,    true,     true] },
  { name: 'Subscription Manager',            values: [true,     true,     true,     false,    true,     true] },
  { name: 'Cash Flow Forecasting',           values: [true,     false,    true,     false,    'partial',true] },
  { name: 'Investment Tracking',             values: [true,     'partial',true,     false,    'partial',true] },
  { name: 'Credit Score Monitor',            values: [true,     true,     false,    false,    false,    true] },
  { name: 'Debt Payoff Tracker',             values: [true,     true,     false,    true,     true,     true] },
  { name: 'Couples / Household Mode',        values: [true,     false,    false,    false,    false,    true] },
  { name: 'Bill Negotiation',                values: [false,    true,     false,    false,    true,     false] },
  { name: 'No Ads / No Data Sales',          values: [true,     false,    true,     true,     true,     true] },
  { name: 'Free Tier Available',             values: [false,    true,     false,    false,    'partial',true] },
  { name: 'Financial Advisor Mode',          values: [true,     false,    false,    false,    false,    false] },
  { name: 'Real-Time Bank Sync',             values: [true,     true,     'partial',true,     true,     true] },
  { name: 'Multi-Currency Support',          values: [false,    false,    false,    false,    false,    'partial'] },
  { name: 'Dark Mode',                       values: [true,     true,     true,     false,    true,     true] },
  { name: 'Data Export (CSV/PDF)',            values: [true,     'partial',true,     true,     false,    true] },
  { name: 'Recurring Payment Detection',     values: [true,     true,     true,     'partial',true,     true] },
  { name: 'AI Chatbot / Assistant',          values: [true,     false,    'partial',false,    false,    true] },
  { name: 'Customisable Categories',         values: [true,     true,     true,     true,     true,     true] },
  { name: 'Shared Goals (Couples)',          values: [true,     false,    false,    false,    false,    true] },
  { name: 'Panic-Sell Prevention',           values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Email + Plaid Sub Radar',       values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Free Trial Ending Alerts',      values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Fraud-Proof Bill Splitting',    values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Portfolio Health Radar',        values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Autonomous Tax Engine',         values: [false,    false,    false,    false,    false,    true] },
  { name: '★ 50-State Tax Guidance',         values: [false,    false,    false,    false,    false,    true] },
]

function Cell({ val, isFF }: { val: CellVal; isFF: boolean }) {
  if (val === true)      return <Check  size={16} color={isFF ? '#4353ff' : '#2db37d'} strokeWidth={2.5} />
  if (val === 'partial') return <Minus  size={16} color="#f69c20" strokeWidth={2.5} />
  return                        <X      size={16} color="#e05c5c" strokeWidth={2} />
}

// ─── Bento mini-visuals ───────────────────────────────────────────────────────
function BarsVisual() {
  const heights = [38, 55, 42, 72, 50, 88, 65]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, marginTop: 24, height: 70 }}>
      {heights.map((h, i) => (
        <div key={i} style={{
          flex: 1, height: h, borderRadius: 5,
          background: i === 5 ? '#4353ff' : `rgba(67,83,255,${0.12 + i * 0.04})`,
          transition: 'height 0.4s',
        }} />
      ))}
    </div>
  )
}

function TaxVisual() {
  const items = [
    { label: 'Home Office', amt: '$3,240' },
    { label: 'Business Travel', amt: '$1,870' },
    { label: 'Software & Tools', amt: '$840' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '8px 12px', background: 'rgba(45,179,125,0.1)', borderRadius: 8,
          border: '1px solid rgba(45,179,125,0.15)',
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)' }}>{item.label}</span>
          <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 800, color: '#2db37d' }}>{item.amt}</span>
        </div>
      ))}
    </div>
  )
}

function SubsVisual() {
  const subs = [
    { name: 'Netflix', price: '$17.99', cancel: true },
    { name: 'Adobe CC', price: '$59.99', cancel: true },
    { name: 'Spotify', price: '$9.99', cancel: false },
  ]
  return (
    <div style={{ marginTop: 18 }}>
      {subs.map((s, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '7px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark)' }}>{s.name}</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'var(--dark-2)' }}>{s.price}</span>
            <span style={{
              fontFamily: 'Lato', fontSize: 10, fontWeight: 700,
              padding: '2px 8px', borderRadius: 4,
              background: s.cancel ? 'rgba(224,92,92,0.1)' : 'rgba(45,179,125,0.1)',
              color: s.cancel ? '#e05c5c' : '#2db37d',
            }}>{s.cancel ? 'Cancel' : 'Keep'}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Spotlight mock UIs ───────────────────────────────────────────────────────
function SubSpotlightMock() {
  const subs = [
    { name: 'Netflix', amt: '$17.99/mo', action: 'Cancel', ac: '#e05c5c', abg: 'rgba(224,92,92,0.15)' },
    { name: 'Adobe Creative Cloud', amt: '$59.99/mo', action: 'Cancel', ac: '#e05c5c', abg: 'rgba(224,92,92,0.15)' },
    { name: 'Spotify', amt: '$9.99/mo', action: 'Keep', ac: '#2db37d', abg: 'rgba(45,179,125,0.15)' },
    { name: 'Peloton', amt: '$44.00/mo', action: 'Review', ac: '#f69c20', abg: 'rgba(246,156,32,0.15)' },
    { name: 'Hulu', amt: '$7.99/mo', action: 'Keep', ac: '#2db37d', abg: 'rgba(45,179,125,0.15)' },
  ]
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        background: 'rgba(255,255,255,0.05)', borderRadius: 20,
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(16px)', overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: '#fff' }}>Subscriptions Found</span>
          <span style={{
            fontFamily: 'Manrope', fontSize: 12, fontWeight: 800,
            background: 'var(--primary)', color: '#fff',
            padding: '3px 10px', borderRadius: 20,
          }}>12</span>
        </div>
        <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 4 }}>
          Scanned 847 transactions + 2,340 emails
        </p>
      </div>
      <div style={{ padding: '8px 0' }}>
        {subs.map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '12px 24px',
            background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
          }}>
            <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>{s.name}</span>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.55)' }}>{s.amt}</span>
              <span style={{
                fontFamily: 'Lato', fontSize: 11, fontWeight: 700,
                padding: '4px 12px', borderRadius: 6,
                background: s.abg, color: s.ac, cursor: 'pointer',
              }}>{s.action}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Potential monthly savings</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 18, fontWeight: 800, color: '#2db37d' }}>$121.98</span>
      </div>
    </motion.div>
  )
}

function TaxSpotlightMock() {
  const items = [
    { label: 'Home Office', amt: '$3,240', pct: 78 },
    { label: 'Business Travel', amt: '$1,870', pct: 62 },
    { label: 'Professional Dev', amt: '$840', pct: 44 },
    { label: 'Software & Tools', amt: '$420', pct: 28 },
    { label: 'Phone (business %)', amt: '$360', pct: 22 },
  ]
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className="ff-card"
      style={{ overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.12)' }}
    >
      <div style={{
        padding: '20px 24px', borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(135deg, rgba(45,179,125,0.06) 0%, rgba(67,83,255,0.04) 100%)',
      }}>
        <span style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: 'var(--dark)' }}>
          2026 Deductions Tracked
        </span>
        <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
          Auto-detected · Updated daily
        </p>
      </div>
      <div style={{ padding: '12px 0' }}>
        {items.map((item, i) => (
          <div key={i} style={{ padding: '10px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-2)' }}>{item.label}</span>
              <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: '#2db37d' }}>{item.amt}</span>
            </div>
            <div style={{ height: 4, borderRadius: 99, background: 'var(--border)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                style={{ height: '100%', borderRadius: 99, background: '#2db37d' }}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '16px 24px', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(45,179,125,0.04)',
      }}>
        <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-2)' }}>Estimated tax savings</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 20, fontWeight: 800, color: '#2db37d' }}>$1,593</span>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  const isMobileBento = useIsMobile(560)
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <section style={{ background: HERO_BG, padding: '100px 0 80px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Complete Feature Set</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Manrope', fontWeight: 800,
              fontSize: 'clamp(38px, 5.5vw, 72px)',
              letterSpacing: '-2.5px', lineHeight: 1.02,
              color: 'var(--dark)', marginBottom: 24, maxWidth: 680,
            }}
          >
            Everything you need.<br />
            <span style={{ color: 'var(--primary)' }}>Nothing you don't.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 19, color: 'var(--dark-2)', maxWidth: 500, lineHeight: 1.75, marginBottom: 40 }}
          >
            Every tool a modern American needs to manage, protect, and grow their money — in one intelligent platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <Link to="/contact" className="btn-dark">Join the Waitlist <ArrowRight size={16} /></Link>
            <Link to="/pricing" className="btn-outline-dark">View Pricing <ArrowRight size={16} /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO GRID ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--white)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge-lavender" style={{ marginBottom: 16, display: 'inline-flex' }}>Features</span>
              <h2 style={{
                fontFamily: 'Manrope', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '-1.5px', color: 'var(--dark)', marginTop: 14,
              }}>
                Six Pillars. One Platform.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-3)', marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>
                The AI-first personal finance app that connects, predicts, and acts on your entire financial life.
              </p>
            </div>
          </FadeIn>

          <div className="ff-bento">
            {bento.map((card, i) => (
              <FadeIn key={i} delay={i * 0.06} style={{ gridColumn: card.span === 2 && !isMobileBento ? 'span 2' : undefined, height: '100%' }}>
                <div
                  style={{
                    background: card.bg,
                    border: `1px solid ${card.border}`,
                    borderRadius: 20, padding: '32px 30px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${card.border}`
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%', flexShrink: 0,
                      background: `radial-gradient(circle at 35% 35%, ${card.color}30 0%, ${card.color}08 100%)`,
                      border: `1px solid ${card.color}35`,
                      boxShadow: `0 4px 20px ${card.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <card.Icon size={22} color={card.color} strokeWidth={1.7} />
                    </div>
                    <span style={{
                      fontFamily: 'Lato', fontSize: 11, fontWeight: 700,
                      padding: '4px 10px', borderRadius: 4, letterSpacing: '0.05em',
                      background: `${card.color}14`, color: card.color,
                    }}>
                      {card.tag}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: card.span === 2 ? 22 : 17, color: 'var(--dark)', marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.7, flex: 1 }}>
                    {card.desc}
                  </p>

                  {card.visual === 'bars' && <BarsVisual />}
                  {card.visual === 'tax'  && <TaxVisual />}
                  {card.visual === 'subs' && <SubsVisual />}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT 1: SUBSCRIPTION MANAGER (dark) ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--dark)' }}>
        <div className="ff-container">
          <div style={{
            display: 'grid', alignItems: 'center', gap: 72,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}>
            {/* Text */}
            <FadeIn x={-30}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(246,156,32,0.15)', color: '#f69c20',
                fontFamily: 'Lato', fontSize: 11, fontWeight: 700,
                padding: '5px 14px', borderRadius: 4, letterSpacing: '0.06em',
                marginBottom: 24, textTransform: 'uppercase',
              }}>
                Exclusive Feature
              </span>
              <h2 style={{
                fontFamily: 'Manrope', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '-1.5px', lineHeight: 1.12,
                color: 'var(--white)', marginBottom: 20,
              }}>
                We found $312/mo you forgot you were paying.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 32 }}>
                FutureFlow is the only app that scans both your bank transactions AND your email inbox to surface every single recurring charge — including the ones that stopped showing up in your bank feed.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                {[
                  'Scans bank transactions + email receipts simultaneously',
                  'One-tap cancellation for any subscription, any provider',
                  'Free trial alerts before they charge your card',
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(246,156,32,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Check size={11} color="#f69c20" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-white" style={{ fontSize: 15 }}>
                Join the Waitlist <ArrowRight size={16} />
              </Link>
            </FadeIn>

            {/* Mockup */}
            <FadeIn x={30} delay={0.15}>
              <SubSpotlightMock />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT 2: TAX ENGINE (light) ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--light-grey)' }}>
        <div className="ff-container">
          <div style={{
            display: 'grid', alignItems: 'center', gap: 72,
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}>
            {/* Mockup first on desktop */}
            <FadeIn x={-30} delay={0.15}>
              <TaxSpotlightMock />
            </FadeIn>

            {/* Text */}
            <FadeIn x={30}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: 'rgba(45,179,125,0.12)', color: '#2db37d',
                fontFamily: 'Lato', fontSize: 11, fontWeight: 700,
                padding: '5px 14px', borderRadius: 4, letterSpacing: '0.06em',
                marginBottom: 24, textTransform: 'uppercase',
              }}>
                Exclusive Feature
              </span>
              <h2 style={{
                fontFamily: 'Manrope', fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                letterSpacing: '-1.5px', lineHeight: 1.12,
                color: 'var(--dark)', marginBottom: 20,
              }}>
                Tax season ends before it begins.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-2)', lineHeight: 1.8, marginBottom: 32 }}>
                Our Autonomous Tax Engine silently tracks every deductible expense year-round across all 50 states. When April arrives, your return is practically already filed.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                {[
                  'Auto-detects deductible expenses from every transaction',
                  'State-specific guidance for all 50 US states',
                  'Year-round tracking means no scramble at tax time',
                ].map((pt, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(45,179,125,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Check size={11} color="#2db37d" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.6 }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link to="/pricing" className="btn-dark" style={{ fontSize: 15 }}>
                See Pricing <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--dark)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Feature Comparison</span>
              <h2 style={{
                fontFamily: 'Manrope', fontWeight: 800,
                fontSize: 'clamp(28px, 4vw, 48px)',
                letterSpacing: '-1.5px', color: 'var(--white)', marginTop: 14,
              }}>
                See how we stack up.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.35)', marginTop: 12 }}>
                ★ = FutureFlow exclusive features
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="ff-table-wrap">
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.04)' }}>
                    <th style={{
                      fontFamily: 'Manrope', fontSize: 13, fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)', textAlign: 'left',
                      padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>Feature</th>
                    {competitors.map((c, i) => (
                      <th key={c} style={{
                        fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, textAlign: 'center',
                        padding: '16px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                        color: i === 5 ? 'var(--mint)' : 'rgba(255,255,255,0.35)',
                        background: i === 5 ? 'rgba(67,83,255,0.14)' : 'transparent',
                        borderLeft: i === 5 ? '1px solid rgba(67,83,255,0.3)' : 'none',
                        borderRight: i === 5 ? '1px solid rgba(67,83,255,0.3)' : 'none',
                      }}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, ri) => (
                    <tr key={ri} style={{
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      background: row.name.startsWith('★') ? 'rgba(246,156,32,0.03)' : 'transparent',
                    }}>
                      <td style={{
                        fontFamily: 'Lato', fontSize: 13, padding: '12px 20px',
                        color: row.name.startsWith('★') ? '#f69c20' : 'rgba(255,255,255,0.6)',
                        fontWeight: row.name.startsWith('★') ? 700 : 400,
                      }}>{row.name}</td>
                      {row.values.map((val, vi) => (
                        <td key={vi} style={{
                          textAlign: 'center', padding: '12px 10px',
                          background: vi === 5 ? 'rgba(67,83,255,0.08)' : 'transparent',
                          borderLeft: vi === 5 ? '1px solid rgba(67,83,255,0.2)' : 'none',
                          borderRight: vi === 5 ? '1px solid rgba(67,83,255,0.2)' : 'none',
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Cell val={val} isFF={vi === 5} />
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', background: 'var(--lavender)', textAlign: 'center' }}>
        <div className="ff-container">
          <FadeIn>
            <h2 style={{
              fontFamily: 'Manrope', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '-1.5px', color: 'var(--dark)', marginBottom: 18,
            }}>
              Ready to take control?
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', marginBottom: 36 }}>
              Join the waitlist. Free tier available at launch.
            </p>
            <Link to="/contact" className="btn-dark">Join the Waitlist <ArrowRight size={17} /></Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
