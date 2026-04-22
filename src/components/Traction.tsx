import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v).toString())
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(count, to, { duration: 2, ease: 'easeOut' })
    return c.stop
  }, [inView, to, count])
  return <span ref={ref} className="tabular-nums">{prefix}<motion.span>{rounded}</motion.span>{suffix}</span>
}

const metrics = [
  { to: 47,  suffix: '%', label: 'MoM User Growth',   sub: 'Consistent for 6 months',   color: '#4F46E5' },
  { to: 12,  prefix:'$',  label: 'ARPU',               sub: 'Targeting $35 in 12 months', color: '#059669' },
  { to: 89,  suffix: '%', label: 'Monthly Retention',  sub: 'Industry average: 65%',       color: '#7C3AED' },
  { to: 12,               label: 'Bank Partnerships',   sub: 'Including top-3 US banks',    color: '#D97706' },
]

const chartPts = [130, 125, 115, 100, 82, 65, 50, 38, 27, 18, 10, 4, 0]
const pathD = chartPts.map((y, i) => `${i === 0 ? 'M' : 'L'} ${(i / (chartPts.length - 1)) * 800} ${y}`).join(' ')
const areaD = pathD + ' L 800 140 L 0 140 Z'

export default function Traction() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="traction" ref={ref} className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="badge mb-4">Traction</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            Not a Concept.<br />We're Growing Fast.
          </h2>
          <p className="text-ink-2 text-[17px] mt-4 font-sans leading-relaxed">
            18 months post-launch. Real numbers, real users, real impact.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -3 }}
              className="card p-6"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${m.color}15` }}>
                <TrendingUp size={15} color={m.color} strokeWidth={2} />
              </div>
              <div className="text-3xl font-bold text-ink mb-1 font-sans">
                <Counter to={m.to} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <p className="text-[13px] font-semibold text-ink font-sans">{m.label}</p>
              <p className="text-xs text-ink-3 mt-0.5 font-sans">{m.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="card p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="font-sans text-[16px] font-semibold text-ink">User Growth Trajectory</h3>
              <p className="text-[13px] text-ink-3 font-sans mt-0.5">Monthly active users — Oct 2024 to Apr 2026</p>
            </div>
            <span className="badge" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              +47% MoM
            </span>
          </div>

          <div className="relative h-36 overflow-hidden">
            <svg viewBox="0 0 800 140" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path d={areaD} fill="url(#lg)"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }} />
              <motion.path d={pathD} fill="none" stroke="#4F46E5" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }} />
              <motion.circle cx="800" cy="0" r="4" fill="#4F46E5"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 2.2, type: 'spring' }} />
            </svg>
          </div>
          <div className="flex justify-between mt-2 text-[11px] text-ink-3 font-sans">
            {["Oct '24","Jan '25","Apr '25","Jul '25","Oct '25","Jan '26","Apr '26"].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
