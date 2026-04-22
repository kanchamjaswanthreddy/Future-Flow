import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

/* ── floating card data ── */
const floatCards = [
  { label: 'Net Worth',     value: '$127,430', change: '+$3,200', positive: true,  top: '18%', left: '-2%',   delay: 0 },
  { label: 'Health Score',  value: '782',      change: '+12 pts', positive: true,  top: '58%', right: '-2%',  delay: 0.15 },
  { label: 'Monthly Saved', value: '$843',     change: 'vs last month', positive: true, bottom: '18%', left: '4%', delay: 0.3 },
]

/* ── stats ── */
const stats = [
  { num: '500K+',  label: 'Active users' },
  { num: '$2.4B+', label: 'Money managed' },
  { num: '$18M+',  label: 'Saved for users' },
  { num: '4.8★',   label: 'App Store rating' },
]

/* ── word stagger ── */
const line1 = ['Moving', 'Money,']
const line2 = ['Building', 'Futures']

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden pt-16">

      {/* ── subtle blob decorations ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.04) 0%, transparent 70%)' }} />
        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#CBD5E1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: text ── */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7"
          >
            <span className="badge">
              <Sparkles size={11} />
              Seed Round · $8M · Now Open
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-tight text-ink mb-2">
            {line1.map((w, i) => (
              <motion.span key={w}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                className="inline-block mr-[0.18em]"
              >{w}</motion.span>
            ))}
            <br />
            {line2.map((w, i) => (
              <motion.span key={w}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                className={`inline-block mr-[0.18em] ${i === 1 ? 'text-accent italic' : ''}`}
              >{w}</motion.span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-[17px] text-ink-2 leading-relaxed max-w-[440px] mt-6 mb-10 font-sans"
          >
            The intelligent personal finance platform that unifies spending, saving, debt payoff, and wealth building — built for 500,000 Americans and growing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Investor Deck <ArrowRight size={15} />
            </motion.button>
            <motion.button
              onClick={() => document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              See the Product
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 pt-8 border-t border-slate-100"
          >
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95 + i * 0.08 }}>
                <p className="text-2xl font-bold text-ink font-sans">{s.num}</p>
                <p className="text-xs text-ink-3 mt-0.5 font-sans uppercase tracking-wide">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: floating card visual ── */}
        <div className="relative hidden lg:flex items-center justify-center h-[540px]">
          {/* Central phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative z-10 animate-float"
          >
            {/* App card */}
            <div className="w-64 rounded-3xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid #E2E8F0', background: '#fff' }}>
              {/* Header */}
              <div className="px-5 py-4" style={{ background: '#4F46E5' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white/80 text-xs font-sans font-medium">FutureFlow</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUpIcon />
                  </div>
                </div>
                <p className="text-white/70 text-xs font-sans">Net Worth</p>
                <p className="text-white text-3xl font-bold font-sans mt-0.5">$127,430</p>
                <p className="text-green-300 text-xs mt-1 font-sans">↑ +$3,200 this month</p>
              </div>
              {/* Body */}
              <div className="px-5 py-4 space-y-3">
                {[
                  { label: 'Savings', val: '68%', w: 68, color: '#4F46E5' },
                  { label: 'Debt Free', val: '43%', w: 43, color: '#F97316' },
                  { label: 'Goals',   val: '81%', w: 81, color: '#10B981' },
                ].map(r => (
                  <div key={r.label}>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-ink-2 font-sans">{r.label}</span>
                      <span className="text-xs font-semibold font-sans" style={{ color: r.color }}>{r.val}</span>
                    </div>
                    <div className="progress-track">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: r.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${r.w}%` }}
                        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs text-ink-2 font-sans">Health Score</span>
                  <span className="text-sm font-bold font-sans" style={{ color: '#10B981' }}>782</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating stat cards */}
          {floatCards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + c.delay, duration: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute card px-4 py-3 w-[160px]"
              style={{
                top: c.top, left: c.left, right: c.right, bottom: c.bottom,
                animation: `float ${7 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <p className="text-xs text-ink-3 font-sans mb-0.5">{c.label}</p>
              <p className="text-base font-bold text-ink font-sans">{c.value}</p>
              <p className="text-xs mt-0.5 font-sans" style={{ color: c.positive ? '#10B981' : '#EF4444' }}>
                {c.positive ? '↑' : '↓'} {c.change}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-slate-200 flex items-start justify-center p-1"
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-slate-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

function TrendingUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
