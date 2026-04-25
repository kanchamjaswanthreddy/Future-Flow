import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowRight, Check, X, Minus, AlertTriangle,
} from 'lucide-react'
import { Tilt3DCard } from '../components/Tilt3DCard'

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
    span: 2, color: '#4353ff',
    bg: 'linear-gradient(145deg, #eef0ff 0%, #f2f4ff 100%)',
    tag: 'Pillar 1', title: 'Connect Everything',
    heroStat: '12,000+', heroLabel: 'institutions connected',
    desc: 'Banks, email & brokerage accounts unified in one real-time dashboard via Plaid. Zero manual setup.',
    visual: 'connect',
  },
  {
    span: 1, color: '#f69c20',
    bg: 'linear-gradient(145deg, #fff8ee 0%, #fffcf7 100%)',
    tag: 'Pillar 2', title: 'Predict Problems',
    heroStat: '30 days', heroLabel: 'ahead of cash flow dips',
    desc: 'AI forecasts cash flow ahead, flags risks before they happen, and spots hidden savings automatically.',
    visual: 'predict',
  },
  {
    span: 1, color: '#4353ff',
    bg: 'linear-gradient(145deg, #eef0ff 0%, #f2f4ff 100%)',
    tag: 'Pillar 3', title: 'Act Automatically',
    heroStat: '100%', heroLabel: 'automated, no effort needed',
    desc: 'Cancels subscriptions, executes savings, files taxes — FutureFlow does it for you.',
    visual: 'act',
  },
  {
    span: 2, color: '#10b981',
    bg: 'linear-gradient(145deg, #edfff5 0%, #f2fff8 100%)',
    tag: 'Pillar 4 · Exclusive', title: 'Subscription Radar',
    heroStat: '$312/mo', heroLabel: 'in hidden subscriptions found',
    desc: 'Detects every subscription via Plaid + email. Alerts before charges. One-tap AI cancellation — no phone calls.',
    visual: 'radar',
  },
  {
    span: 1, color: '#fb7185',
    bg: 'linear-gradient(145deg, #fff0f0 0%, #fff5f5 100%)',
    tag: 'Pillar 5 · Exclusive', title: 'AI Tax Engine',
    heroStat: 'All 50', heroLabel: 'US states covered',
    desc: 'Proactive cash-flow predictions, anomaly detection + autonomous tax harvesting & filing across all 50 states.',
    visual: 'taxengine',
  },
  {
    span: 1, color: '#4353ff',
    bg: 'linear-gradient(145deg, #f0f4ff 0%, #f5f7ff 100%)',
    tag: 'Pillar 6 · Exclusive', title: 'Portfolio & Bill Splitting',
    heroStat: '+2.4%', heroLabel: 'portfolio this week',
    desc: 'Portfolio Health Radar links investments to real cash flow. Fraud-proof Bill Splitting uses real bank transactions.',
    visual: 'portfolio',
  },
]

// ─── Comparison table data ────────────────────────────────────────────────────
type CellVal = boolean | 'partial'
const competitors = ['Monarch Money', 'Rocket Money', 'Copilot Money', 'YNAB', 'PocketGuard', 'FutureFlow']
const rows: { name: string; values: CellVal[] }[] = [
  // ── FutureFlow exclusives — shown first ──
  { name: '★ Email + Plaid Sub Radar',       values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Free Trial Ending Alerts',      values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Fraud-Proof Bill Splitting',    values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Portfolio Health Radar',        values: [false,    false,    false,    false,    false,    true] },
  { name: '★ Autonomous Tax Engine',         values: [false,    false,    false,    false,    false,    true] },
  { name: '★ 50-State Tax Guidance',         values: [false,    false,    false,    false,    false,    true] },
  // ── Standard features ──
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
]

function Cell({ val, isFF }: { val: CellVal; isFF: boolean }) {
  if (val === true)      return <Check  size={16} color={isFF ? '#4353ff' : '#10b981'} strokeWidth={2.5} />
  if (val === 'partial') return <Minus  size={16} color="#f69c20" strokeWidth={2.5} />
  return                        <X      size={16} color="#fb7185" strokeWidth={2} />
}

// ─── Bento mini-visuals ───────────────────────────────────────────────────────
// Connect Everything (span 2) — staggered bank pills
function ConnectVisual() {
  const banks = ['Chase', 'Wells Fargo', 'Robinhood', 'Vanguard', 'Coinbase', 'Fidelity', 'Bank of America', 'Schwab']
  return (
    <div style={{ marginTop: 'auto', paddingTop: 18 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {banks.map((bank, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.3, ease: 'easeOut' }}
            style={{
              fontFamily: 'Lato', fontSize: 12, fontWeight: 600,
              padding: '5px 13px', borderRadius: 24,
              background: 'rgba(67,83,255,0.07)',
              border: '1px solid rgba(67,83,255,0.18)',
              color: '#4353ff',
              display: 'inline-flex', alignItems: 'center', gap: 5,
            }}
          >
            <Check size={9} color="#10b981" strokeWidth={3} /> {bank}
          </motion.span>
        ))}
        <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--muted)', padding: '5px 13px', background: 'rgba(0,0,0,0.04)', borderRadius: 20 }}>
          +11,992 more
        </span>
      </div>
    </div>
  )
}

// Predict Problems (span 1) — mini sparkline SVG with forecast marker
function PredictVisual() {
  const points = [42,38,45,41,50,44,48,43,40,35,38,42,30]
  const max = 55, min = 25, w = 200, h = 60
  const toX = (i: number) => (i / (points.length - 1)) * w
  const toY = (v: number) => h - ((v - min) / (max - min)) * h
  const d = points.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(v)}`).join(' ')
  const forecastX = toX(10)
  return (
    <div style={{ marginTop: 'auto', paddingTop: 18 }}>
      <div style={{ position: 'relative' }}>
        <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ height: 60, display: 'block' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4353ff"/>
              <stop offset={`${(10/12)*100}%`} stopColor="#4353ff"/>
              <stop offset={`${(10/12)*100}%`} stopColor="#fb7185"/>
              <stop offset="100%" stopColor="#fb7185"/>
            </linearGradient>
          </defs>
          <path d={d} fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1={forecastX} y1="0" x2={forecastX} y2={h} stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="3,3"/>
        </svg>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(251,113,133,0.08)', borderRadius: 8, border: '1px solid rgba(251,113,133,0.2)' }}>
          <AlertTriangle size={13} color="#fb7185" strokeWidth={2} />
          <span style={{ fontFamily: 'Lato', fontSize: 12, color: '#fb7185', fontWeight: 600 }}>Cash flow dip predicted May 3rd</span>
        </div>
      </div>
    </div>
  )
}

// Act Automatically (span 1) — AI action feed
function ActVisual() {
  const actions = [
    { msg: 'Netflix cancelled', amt: '−$17.99/mo', color: '#10b981', time: '2m ago' },
    { msg: 'Savings transfer', amt: '+$200',       color: '#4353ff', time: '1h ago' },
    { msg: 'Tax deduction logged', amt: '$840',    color: '#f69c20', time: '3h ago' },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 7 }}>
      {actions.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', background: 'rgba(255,255,255,0.5)', borderRadius: 8, border: '1px solid rgba(0,0,0,0.06)' }}
        >
          <div>
            <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)', margin: 0 }}>{a.msg}</p>
            <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', margin: 0, marginTop: 1 }}>{a.time}</p>
          </div>
          <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: a.color }}>{a.amt}</span>
        </motion.div>
      ))}
    </div>
  )
}

// Subscription Radar (span 2) — scan results
function RadarVisual() {
  const subs = [
    { name: 'Netflix',              amt: '$17.99/mo', action: 'Cancel', ac: '#fb7185', abg: 'rgba(251,113,133,0.1)' },
    { name: 'Adobe Creative Cloud', amt: '$59.99/mo', action: 'Cancel', ac: '#fb7185', abg: 'rgba(251,113,133,0.1)' },
    { name: 'Spotify',              amt: '$9.99/mo',  action: 'Keep',   ac: '#10b981', abg: 'rgba(16,185,129,0.1)' },
    { name: 'Peloton',              amt: '$44.00/mo', action: 'Review', ac: '#f69c20', abg: 'rgba(246,156,32,0.1)' },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontFamily: 'Lato', fontSize: 11, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Scanned 847 txns + 2,340 emails</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 800, color: 'var(--primary)' }}>12 found</span>
      </div>
      {subs.map((s, i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '9px 12px', background: i % 2 === 0 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.3)',
          borderRadius: 8, marginBottom: 5, border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark)' }}>{s.name}</span>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'var(--dark-3)' }}>{s.amt}</span>
            <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 5, background: s.abg, color: s.ac }}>{s.action}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// AI Tax Engine (span 1) — deduction tracker
function TaxEngineVisual() {
  const items = [
    { label: 'Home Office',  amt: '$3,240', pct: 78 },
    { label: 'Travel',       amt: '$1,870', pct: 62 },
    { label: 'Software',     amt: '$840',   pct: 44 },
  ]
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16 }}>
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)' }}>{item.label}</span>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: '#10b981' }}>{item.amt}</span>
          </div>
          <div style={{ height: 4, borderRadius: 99, background: 'rgba(16,185,129,0.12)' }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.12, ease: 'easeOut' }}
              style={{ height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,#10b981,#10b98188)' }}
            />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 10, borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: 4 }}>
        <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--muted)' }}>Est. tax savings</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 800, color: '#10b981' }}>$1,593</span>
      </div>
    </div>
  )
}

// Portfolio & Bill Splitting (span 1) — two mini panels
function PortfolioVisual() {
  return (
    <div style={{ marginTop: 'auto', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ padding: '10px 12px', background: 'rgba(67,83,255,0.06)', borderRadius: 10, border: '1px solid rgba(67,83,255,0.12)' }}>
        <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Portfolio</p>
        {[{ label: 'Stocks', val: '+2.4%', color: '#10b981' }, { label: 'ETFs', val: '+1.2%', color: '#4353ff' }, { label: 'Crypto', val: '-0.8%', color: '#fb7185' }].map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)' }}>{r.label}</span>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: r.color }}>{r.val}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 12px', background: 'rgba(246,156,32,0.06)', borderRadius: 10, border: '1px solid rgba(246,156,32,0.12)' }}>
        <p style={{ fontFamily: 'Lato', fontSize: 10, color: 'var(--muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Bill Split · Dinner</p>
        {['You', 'Alex', 'Sam'].map((name, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-2)' }}>{name}</span>
            <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: '#f69c20' }}>$28.00</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Spotlight mock UIs ───────────────────────────────────────────────────────
function SubSpotlightMock() {
  const subs = [
    { name: 'Netflix', amt: '$17.99/mo', action: 'Cancel', ac: '#fb7185', abg: 'rgba(251,113,133,0.15)' },
    { name: 'Adobe Creative Cloud', amt: '$59.99/mo', action: 'Cancel', ac: '#fb7185', abg: 'rgba(251,113,133,0.15)' },
    { name: 'Spotify', amt: '$9.99/mo', action: 'Keep', ac: '#10b981', abg: 'rgba(16,185,129,0.15)' },
    { name: 'Peloton', amt: '$44.00/mo', action: 'Review', ac: '#f69c20', abg: 'rgba(246,156,32,0.15)' },
    { name: 'Hulu', amt: '$7.99/mo', action: 'Keep', ac: '#10b981', abg: 'rgba(16,185,129,0.15)' },
  ]
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        background: 'rgba(255,255,255,0.05)', borderRadius: 24,
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
            padding: '3px 10px', borderRadius: 24,
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
        <span style={{ fontFamily: 'Manrope', fontSize: 18, fontWeight: 800, color: '#10b981' }}>$121.98</span>
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
        background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(67,83,255,0.04) 100%)',
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
              <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: '#10b981' }}>{item.amt}</span>
            </div>
            <div style={{ height: 4, borderRadius: 99, background: 'var(--border)' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.pct}%` }}
                transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                style={{ height: '100%', borderRadius: 99, background: '#10b981' }}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{
        padding: '16px 24px', borderTop: '1px solid var(--border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(16,185,129,0.04)',
      }}>
        <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-2)' }}>Estimated tax savings</span>
        <span style={{ fontFamily: 'Manrope', fontSize: 20, fontWeight: 800, color: '#10b981' }}>$1,593</span>
      </div>
    </motion.div>
  )
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function AnimCounter({ value, color }: { value: string; color: string }) {
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = value.match(/[^0-9.]+$/)?.[0] ?? ''
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 18 })
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    mv.set(0)
    spring.set(0)
    const t = setTimeout(() => mv.set(numeric), 80)
    return () => clearTimeout(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  useEffect(() => spring.on('change', v => {
    setDisplay(numeric % 1 !== 0 ? v.toFixed(1) : Math.round(v).toString())
  }), [spring, numeric])
  return (
    <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 36, color, letterSpacing: '-2px', lineHeight: 1 }}>
      {prefix}{display}{suffix}
    </span>
  )
}

// ─── Scroll-triggered counter ─────────────────────────────────────────────────
function ScrollCounter({ value, color, style = {} }: { value: string; color: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
  const suffix = value.match(/[^0-9.]+$/)?.[0] ?? ''
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 48, damping: 16 })
  const [display, setDisplay] = useState('0')
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => mv.set(numeric), 120)
    return () => clearTimeout(t)
  }, [inView, mv, numeric])
  useEffect(() => spring.on('change', v => {
    const n = Math.round(v)
    setDisplay(
      numeric % 1 !== 0 ? v.toFixed(1) :
      numeric >= 1000 ? n.toLocaleString() :
      n.toString()
    )
  }), [spring, numeric])
  return (
    <div ref={ref} style={{ fontFamily: 'Manrope', fontWeight: 800, color, lineHeight: 1, ...style }}>
      {prefix}{display}{suffix}
    </div>
  )
}

// ─── Feature Drum ─────────────────────────────────────────────────────────────
const DRUM_INTERVAL = 9000

const drumFeatures = [
  {
    name: 'Net Worth Tracker',   color: '#4353ff',
    tagline: 'Your full financial picture, live.',
    points: ['Every account, asset & liability in one view', 'Auto-updates daily from 12,000+ banks', 'Tracks month-over-month growth automatically'],
    stat: '$47,320', statLabel: 'avg tracked per user',
    chips: [{ val: '+12%', label: 'monthly growth' }, { val: '12k+', label: 'banks linked' }],
  },
  {
    name: 'AI Budget Coach',     color: '#10b981',
    tagline: 'Budgeting that thinks for you.',
    points: ['Built from your actual spending history', 'Adjusts in real-time as your life changes', 'Flags overspend before it happens'],
    stat: '94%', statLabel: 'of users stay on budget',
    chips: [{ val: '3.2×', label: 'savings increase' }, { val: '94%', label: 'on budget rate' }],
  },
  {
    name: 'Subscription Radar',  color: '#fb7185',
    tagline: 'Never pay for a forgotten trial again.',
    points: ['Detects every recurring charge automatically', 'Free trial alerts before they convert to paid', 'One-tap cancellation for unused services'],
    stat: '$312', statLabel: 'avg saved in year one',
    chips: [{ val: '12', label: 'subs detected avg' }, { val: '$312', label: 'avg saved/yr' }],
  },
  {
    name: 'Tax Engine',          color: '#f69c20',
    tagline: 'Keep more of what you earn.',
    points: ['Auto-tracks deductible expenses year-round', 'Flags freelance & remote worker deductions', 'Exports clean data ready for filing'],
    stat: '$1,400', statLabel: 'avg in missed deductions found',
    chips: [{ val: 'All 50', label: 'states covered' }, { val: '$1,400', label: 'deductions found' }],
  },
  {
    name: 'Debt Payoff Planner', color: '#4353ff',
    tagline: 'Debt-free, on your timeline.',
    points: ['Avalanche vs Snowball comparison built in', 'Shows exact payoff date for every scenario', 'Recalculates live as income and balances change'],
    stat: '2.4 yrs', statLabel: 'avg time saved vs min payments',
    chips: [{ val: '2.4 yrs', label: 'faster payoff' }, { val: '$8,200', label: 'interest saved' }],
  },
  {
    name: 'Bill Negotiation AI', color: '#10b981',
    tagline: 'We argue. You save.',
    points: ['Identifies every bill eligible for negotiation', 'Drafts and sends negotiation requests for you', 'Logs outcomes and applies savings automatically'],
    stat: '$840', statLabel: 'avg saved on recurring bills',
    chips: [{ val: '−30%', label: 'avg bill cut' }, { val: '$840', label: 'saved per year' }],
  },
  {
    name: 'Credit Monitor',      color: '#fb7185',
    tagline: 'Know your score. Grow your score.',
    points: ['Real-time alerts the moment your score changes', 'AI-powered tips tailored to your credit profile', 'Explains every factor impacting your number'],
    stat: '+47pts', statLabel: 'avg score gain in 6 months',
    chips: [{ val: '+47pts', label: 'in 6 months' }, { val: '782', label: 'avg score reached' }],
  },
  {
    name: 'Cash Flow Forecast',  color: '#f69c20',
    tagline: '30 days ahead. Always.',
    points: ['Predicts your exact balance 30 days out', 'Flags upcoming bills and shortfalls in advance', 'Spots saving windows before they close'],
    stat: '30 days', statLabel: 'of financial visibility ahead',
    chips: [{ val: '98%', label: 'forecast accuracy' }, { val: '30d', label: 'visibility ahead' }],
  },
]

// ─── Glass Chip (floating stat badge) ────────────────────────────────────────
function GlassChip({ val, label, color }: { val: string; label: string; color: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: 16,
      padding: '12px 18px',
      border: '1px solid rgba(255,255,255,0.85)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
      minWidth: 100,
    }}>
      <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 20, color, lineHeight: 1, letterSpacing: '-0.5px' }}>{val}</div>
      <div style={{ fontFamily: 'Lato', fontSize: 11, color: 'var(--muted)', marginTop: 4, whiteSpace: 'nowrap' }}>{label}</div>
    </div>
  )
}

function FeatureDrumScene() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [dir, setDir] = useState(1)

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const tick = setInterval(() => {
      const pct = Math.min((Date.now() - start) / DRUM_INTERVAL, 1)
      setProgress(pct)
      if (pct >= 1) {
        setDir(1)
        setActive(i => (i + 1) % drumFeatures.length)
        clearInterval(tick)
      }
    }, 40)
    return () => clearInterval(tick)
  }, [active])

  const f = drumFeatures[active]
  const handleSelect = (i: number) => { setDir(i > active ? 1 : -1); setActive(i) }

  return (
    <div style={{ position: 'relative', padding: '52px 36px' }}>

      {/* ── BG: big saturated radial glow ── */}
      <motion.div
        animate={{ background: `radial-gradient(ellipse 130% 110% at 50% 50%, ${f.color}40 0%, ${f.color}14 40%, transparent 68%)` }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: -32, borderRadius: 60, pointerEvents: 'none', filter: 'blur(40px)' }}
      />

      {/* ── Pulsing halo ring ── */}
      <motion.div
        animate={{ boxShadow: [`0 0 0px 0px ${f.color}00`, `0 0 80px 28px ${f.color}30`, `0 0 0px 0px ${f.color}00`] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', inset: 36, borderRadius: 32, pointerEvents: 'none', zIndex: 0 }}
      />

      {/* ── Stacked ghost cards (depth effect) ── */}
      <div style={{ position: 'relative' }}>
        <motion.div
          animate={{ borderColor: `${f.color}22`, background: `${f.color}07` }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute', inset: 0, borderRadius: 28,
            border: '1.5px solid', zIndex: 1,
            transform: 'rotate(4.5deg) translateY(12px) scale(0.97)',
            transformOrigin: 'bottom center',
          }}
        />
        <motion.div
          animate={{ borderColor: `${f.color}16`, background: `${f.color}04` }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute', inset: 0, borderRadius: 28,
            border: '1.5px solid', zIndex: 2,
            transform: 'rotate(2deg) translateY(6px) scale(0.985)',
            transformOrigin: 'bottom center',
          }}
        />

        {/* ── Main Tilt3D card ── */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Tilt3DCard intensity={14} style={{ width: '100%' }} radius={28}>
            <div className="ff-clay" style={{
              borderRadius: 28, overflow: 'hidden', position: 'relative',
              display: 'flex', flexDirection: 'column', boxShadow: 'none',
            }}>

              {/* Animated top color stripe */}
              <motion.div
                animate={{ background: `linear-gradient(90deg, ${f.color} 0%, ${f.color}55 100%)` }}
                transition={{ duration: 0.6 }}
                style={{ height: 4, flexShrink: 0 }}
              />

              {/* Inner corner glow */}
              <motion.div
                animate={{ background: `radial-gradient(ellipse 70% 55% at 95% 0%, ${f.color}20 0%, transparent 65%)` }}
                transition={{ duration: 0.7 }}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none', top: 4 }}
              />

              {/* Header */}
              <div style={{ padding: '22px 26px 0', position: 'relative' }}>
                <div style={{ display: 'flex', gap: 5, marginBottom: 18 }}>
                  {drumFeatures.map((feat, i) => (
                    <motion.div key={i} onClick={() => handleSelect(i)}
                      animate={{ width: i === active ? 24 : 6, background: i === active ? f.color : 'rgba(0,0,0,0.1)' }}
                      transition={{ duration: 0.3 }}
                      style={{ height: 6, borderRadius: 99, cursor: 'pointer', flexShrink: 0 }}
                      title={feat.name}
                    />
                  ))}
                </div>
                <div style={{ height: 40, overflow: 'hidden', position: 'relative', marginBottom: 8 }}>
                  <AnimatePresence mode="popLayout" custom={dir}>
                    <motion.div key={active} custom={dir}
                      initial={{ y: dir > 0 ? 40 : -40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: dir > 0 ? -40 : 40, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      style={{ position: 'absolute', width: '100%' }}
                    >
                      <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 22, letterSpacing: '-0.5px', color: f.color }}>
                        {f.name}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.5 }}>{f.tagline}</p>
              </div>

              {/* Body */}
              <AnimatePresence mode="wait">
                <motion.div key={active}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ padding: '18px 26px 24px' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                    {f.points.map((pt, pi) => (
                      <motion.div key={pi} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pi * 0.08 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}
                      >
                        <motion.div animate={{ background: f.color }} transition={{ duration: 0.5 }}
                          style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0, marginTop: 6 }} />
                        <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-2)', lineHeight: 1.6 }}>{pt}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                    borderRadius: 16, background: `${f.color}08`, border: `1px solid ${f.color}18`,
                  }}>
                    <AnimCounter value={f.stat} color={f.color} />
                    <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--muted)', lineHeight: 1.4, maxWidth: 160 }}>{f.statLabel}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div style={{ height: 3, background: 'rgba(0,0,0,0.05)' }}>
                <motion.div style={{ height: '100%', background: f.color, width: `${progress * 100}%`, transition: 'background 0.6s' }} />
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>

      {/* ── Floating chips (above everything) ── */}
      {/* Live indicator — top left */}
      <motion.div
        animate={{ y: [0, -7, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: 16, left: 8, zIndex: 30 }}
      >
        <div style={{
          background: 'rgba(255,255,255,0.93)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 12, padding: '8px 14px', border: '1px solid rgba(255,255,255,0.9)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.10)', display: 'flex', alignItems: 'center', gap: 7,
        }}>
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.3, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', flexShrink: 0 }}
          />
          <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, color: 'var(--dark-2)', whiteSpace: 'nowrap' }}>Live sync</span>
        </div>
      </motion.div>

      {/* Chip A — top right */}
      <AnimatePresence mode="wait">
        <motion.div key={`ca-${active}`}
          initial={{ opacity: 0, scale: 0.7, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', top: 16, right: -4, zIndex: 30 }}
        >
          <motion.div animate={{ y: [0, -11, 0] }} transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut' }}>
            <GlassChip val={f.chips[0].val} label={f.chips[0].label} color={f.color} />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Chip B — bottom left */}
      <AnimatePresence mode="wait">
        <motion.div key={`cb-${active}`}
          initial={{ opacity: 0, scale: 0.7, x: -16 }} animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.45, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ position: 'absolute', bottom: 16, left: -4, zIndex: 30 }}
        >
          <motion.div animate={{ y: [0, 11, 0] }} transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
            <GlassChip val={f.chips[1].val} label={f.chips[1].label} color={f.color} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  return (
    <div>

      {/* ── HERO + SIX PILLARS — unified gradient background ── */}
      <div style={{
        background: `
          radial-gradient(ellipse 80% 55% at 8% 25%, rgba(16,185,129,0.25) 0%, transparent 58%),
          radial-gradient(ellipse 65% 55% at 92% 10%, rgba(213,201,248,0.82) 0%, transparent 58%),
          radial-gradient(ellipse 55% 40% at 85% 82%, rgba(67,83,255,0.12) 0%, transparent 52%),
          #f5f5f7
        `,
      }}>

      {/* ── HERO ── */}
      <section style={{ padding: 'calc(var(--sp) + 72px) 0 80px' }}>
        <div className="ff-container">
          <div className="ff-2col-hero">

            {/* Left — text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Complete Feature Set</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  fontFamily: 'Manrope', fontWeight: 800,
                  fontSize: 'clamp(36px, 4.5vw, 64px)',
                  letterSpacing: '-2.5px', lineHeight: 1.02,
                  color: 'var(--dark)', marginBottom: 24, marginTop: 24,
                }}
              >
                Everything you need.<br />
                <span style={{ color: 'var(--primary)' }}>Nothing you don't.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
                style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', lineHeight: 1.75, marginBottom: 40 }}
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

            {/* Right — feature drum scene */}
            <div className="ff-hide-mobile"><FeatureDrumScene /></div>

          </div>
        </div>
      </section>

      {/* ── BENTO GRID — Six Pillars ── */}
      <section style={{ padding: 'var(--sp) 0', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle mid-section depth blobs */}
        <div className="ff-blob" style={{ top: '10%', right: '5%', width: 300, height: 300, background: 'rgba(67,83,255,0.05)', filter: 'blur(80px)' }} />
        <div className="ff-blob" style={{ bottom: '5%', left: '8%', width: 280, height: 280, background: 'rgba(16,185,129,0.06)', filter: 'blur(80px)' }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Features</span>
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

          <div className="ff-grid-3" style={{ gap: 20 }}>
            {bento.map((card, i) => (
              <FadeIn key={i} delay={i * 0.06} style={{ height: '100%' }}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.012 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    background: card.bg,
                    borderRadius: 24,
                    padding: '32px 28px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    cursor: 'default',
                    border: `1px solid ${card.color}18`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.04), 0 8px 32px ${card.color}08`,
                  }}
                >
                  {/* Subtle radial glow — no top line */}
                  <div style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200, borderRadius: '50%',
                    background: `radial-gradient(circle, ${card.color}10 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Tag */}
                  <span style={{
                    fontFamily: 'Lato', fontSize: 10, fontWeight: 700,
                    color: card.color, letterSpacing: '0.08em',
                    textTransform: 'uppercase', display: 'inline-block', marginBottom: 16,
                  }}>
                    {card.tag}
                  </span>

                  {/* Hero stat */}
                  <ScrollCounter value={card.heroStat} color={card.color} style={{ fontSize: 'clamp(36px, 3.2vw, 48px)', letterSpacing: '-2px', marginBottom: 6 }} />
                  <div style={{ fontFamily: 'Lato', fontSize: 12, fontWeight: 600, color: `${card.color}80`, marginBottom: 20 }}>
                    {card.heroLabel}
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: `${card.color}14`, marginBottom: 18 }} />

                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 17, color: 'var(--dark)', marginBottom: 8, lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.75, flex: 1 }}>
                    {card.desc}
                  </p>

                  {card.visual === 'connect'   && <ConnectVisual />}
                  {card.visual === 'predict'   && <PredictVisual />}
                  {card.visual === 'act'       && <ActVisual />}
                  {card.visual === 'radar'     && <RadarVisual />}
                  {card.visual === 'taxengine' && <TaxEngineVisual />}
                  {card.visual === 'portfolio' && <PortfolioVisual />}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end unified gradient wrapper */}

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
      <section style={{ padding: 'var(--sp) 0', background: '#f5f5f7' }}>
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
                background: 'rgba(16,185,129,0.12)', color: '#10b981',
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
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Check size={11} color="#10b981" strokeWidth={2.5} />
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
                      fontFamily: 'Manrope', fontSize: 15, fontWeight: 700,
                      color: 'rgba(255,255,255,0.5)', textAlign: 'left',
                      padding: '18px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>Feature</th>
                    {competitors.map((c, i) => (
                      <th key={c} style={{
                        fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, textAlign: 'center',
                        padding: '18px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                        color: i === 5 ? 'var(--emerald)' : 'rgba(255,255,255,0.35)',
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
                        fontFamily: 'Lato', fontSize: 15, padding: '14px 20px',
                        color: row.name.startsWith('★') ? '#f69c20' : 'rgba(255,255,255,0.75)',
                        fontWeight: row.name.startsWith('★') ? 700 : 500,
                      }}>{row.name}</td>
                      {row.values.map((val, vi) => (
                        <td key={vi} style={{
                          textAlign: 'center', padding: '14px 10px',
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
      <section style={{ padding: '80px 0', background: 'var(--surface)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 500, height: 280, background: 'rgba(16,185,129,0.07)', top: -60, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <h2 style={{
              fontFamily: 'Manrope', fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 48px)',
              letterSpacing: '-1.5px', color: '#ffffff', marginBottom: 18,
            }}>
              Ready to{' '}
              <span style={{ color: 'var(--emerald)' }}>take control?</span>
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 36 }}>
              Join the waitlist. Free tier available at launch.
            </p>
            <Link to="/contact" className="btn-white">Join the Waitlist <ArrowRight size={17} /></Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
