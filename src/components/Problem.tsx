import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  { stat: '78%',  color: '#EF4444', bg: '#FEF2F2', bar: '#EF4444', w: 78,
    title: 'Live Paycheck to Paycheck',
    desc: 'Nearly 4 in 5 Americans have less than one month of savings — one emergency from financial crisis.' },
  { stat: '$1.3T', color: '#F97316', bg: '#FFF7ED', bar: '#F97316', w: 65,
    title: 'Lost to Fees & Subscriptions',
    desc: 'Americans lose $1.3 trillion every year to hidden bank fees, forgotten subscriptions, and high-interest traps.' },
  { stat: '4+',   color: '#8B5CF6', bg: '#F5F3FF', bar: '#8B5CF6', w: 45,
    title: 'Disconnected Finance Apps',
    desc: 'The average person juggles 4+ apps with no unified view — creating blind spots and chronic inaction.' },
]

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-alt py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="badge mb-4">The Problem</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink leading-tight mt-3">
            America's Financial System Is Failing Its People
          </h2>
          <p className="text-ink-2 text-[17px] leading-relaxed mt-4 font-sans">
            Millions of Americans are losing wealth every day — not through bad decisions, but through a system designed to keep them confused.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="card p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: c.bg }}
              >
                <span className="text-xl font-bold font-sans" style={{ color: c.color }}>{c.stat}</span>
              </div>
              <h3 className="font-sans text-[17px] font-semibold text-ink mb-2">{c.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed font-sans mb-5">{c.desc}</p>
              <div className="progress-track">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: c.bar }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${c.w}%` } : {}}
                  transition={{ duration: 1.1, delay: i * 0.12 + 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
