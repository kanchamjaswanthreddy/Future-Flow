import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import {
  ArrowRight, Check, X, Minus, AlertTriangle,
} from 'lucide-react'

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

// ─── Floating Badges ──────────────────────────────────────────────────────────
const badges = [
  { label: 'Net Worth Tracker',      color: '#4353ff', depth: 0.8 },
  { label: 'AI Budget Coach',        color: '#10b981', depth: 0.5 },
  { label: 'Subscription Radar',     color: '#fb7185', depth: 1.0 },
  { label: 'Tax Engine',             color: '#f69c20', depth: 0.6 },
  { label: 'Bill Negotiation AI',    color: '#4353ff', depth: 0.9 },
  { label: 'Credit Monitor',         color: '#10b981', depth: 0.4 },
  { label: 'Debt Payoff Planner',    color: '#fb7185', depth: 0.7 },
  { label: 'Cash Flow Forecast',     color: '#f69c20', depth: 1.0 },
  { label: 'Investment Insights',    color: '#4353ff', depth: 0.5 },
  { label: 'Free Trial Radar',       color: '#10b981', depth: 0.8 },
  { label: 'Spending Analyzer',      color: '#fb7185', depth: 0.6 },
  { label: 'Emergency Fund Planner', color: '#f69c20', depth: 0.9 },
  { label: 'Financial Health Score', color: '#4353ff', depth: 0.4 },
  { label: 'Auto Categorization',    color: '#10b981', depth: 1.0 },
  { label: 'Bank-Level Security',    color: '#fb7185', depth: 0.7 },
]

// Fixed grid positions (col 0–3, row 0–4) mapped to % within container
const positions = [
  { x: 4,  y: 2  }, { x: 52, y: 0  }, { x: 26, y: 8  },
  { x: 68, y: 14 }, { x: 8,  y: 22 }, { x: 44, y: 20 },
  { x: 70, y: 30 }, { x: 18, y: 36 }, { x: 52, y: 40 },
  { x: 2,  y: 50 }, { x: 66, y: 50 }, { x: 30, y: 58 },
  { x: 10, y: 68 }, { x: 56, y: 64 }, { x: 36, y: 76 },
]

function FloatingBadges() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 18 })
  const [smX, setSmX] = useState(0)
  const [smY, setSmY] = useState(0)

  useEffect(() => {
    const unsubX = smoothX.on('change', v => setSmX(v))
    const unsubY = smoothY.on('change', v => setSmY(v))
    return () => { unsubX(); unsubY() }
  }, [smoothX, smoothY])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
    const onLeave = () => { mouseX.set(0); mouseY.set(0) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [mouseX, mouseY])

  // suppress unused warning
  void mouse; void setMouse

  return (
    <div ref={containerRef} style={{ position: 'relative', height: 420, userSelect: 'none' }}>
      {badges.map((b, i) => {
        const pos = positions[i] || { x: 20, y: 20 }
        const dx = smX * b.depth * 0.05
        const dy = smY * b.depth * 0.05
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: 'easeOut' }}
            whileHover={{ scale: 1.12, zIndex: 10 }}
            style={{ position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, x: dx, y: dy }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.8 + i * 0.25, repeat: Infinity, ease: 'easeInOut', delay: i * 0.18 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '8px 14px', borderRadius: 50,
                background: '#ffffff',
                border: `1.5px solid ${b.color}35`,
                boxShadow: `0 4px 20px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.05)`,
                cursor: 'default', whiteSpace: 'nowrap',
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: b.color, flexShrink: 0 }} />
              <span style={{ fontFamily: 'Lato', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)' }}>{b.label}</span>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function FeaturesPage() {
  return (
    <div style={{ paddingTop: 72 }}>

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
      <section style={{ padding: '100px 0 80px' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>

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

            {/* Right — floating feature badges */}
            <FloatingBadges />

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
                  <div style={{
                    fontFamily: 'Manrope', fontWeight: 800,
                    fontSize: 'clamp(36px, 3.2vw, 48px)',
                    color: card.color, letterSpacing: '-2px', lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {card.heroStat}
                  </div>
                  <div style={{ fontFamily: 'Lato', fontSize: 12, fontWeight: 600, color: `${card.color}80`, marginBottom: 20 }}>
                    {card.heroLabel}
                  </div>

                  {/* Divider */}
                  <div style={{ height: 1, background: `${card.color}14`, marginBottom: 18 }} />

                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 17, color: 'var(--dark)', marginBottom: 8, lineHeight: 1.25 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-3)', lineHeight: 1.7, flex: 1 }}>
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
                      fontFamily: 'Manrope', fontSize: 13, fontWeight: 700,
                      color: 'rgba(255,255,255,0.4)', textAlign: 'left',
                      padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}>Feature</th>
                    {competitors.map((c, i) => (
                      <th key={c} style={{
                        fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, textAlign: 'center',
                        padding: '16px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)',
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
