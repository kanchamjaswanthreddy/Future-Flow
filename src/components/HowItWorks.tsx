import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link2, Cpu, Zap } from 'lucide-react'

const steps = [
  { Icon: Link2, num: '01', color: '#4F46E5', bg: '#EEF2FF',
    title: 'Connect Your Accounts',
    desc: 'Securely link bank accounts, cards, loans, and investments via Plaid — 12,000+ institutions, 90-second setup.' },
  { Icon: Cpu,   num: '02', color: '#7C3AED', bg: '#F5F3FF',
    title: 'AI Analyzes Everything',
    desc: 'Our models surface hidden money leaks, optimization opportunities, and risks instantly across your full picture.' },
  { Icon: Zap,   num: '03', color: '#059669', bg: '#ECFDF5',
    title: 'Take Action, Build Wealth',
    desc: 'Follow one-tap personalized recommendations to save more, pay less, and grow your net worth month over month.' },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">How It Works</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3">
            Up and Running in Under 5 Minutes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[22%] right-[22%] h-px"
            style={{ background: 'linear-gradient(90deg, #E2E8F0, #C7D2FE, #E2E8F0)' }} />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              className="text-center relative"
            >
              {/* Step icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center relative"
                style={{ background: s.bg, border: `1px solid ${s.color}20` }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                <s.Icon size={24} color={s.color} strokeWidth={1.8} />
                {/* Step number badge */}
                <span
                  className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-sans text-white"
                  style={{ background: s.color }}
                >
                  {i + 1}
                </span>
              </motion.div>

              <h3 className="font-sans text-[16px] font-semibold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed font-sans max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
