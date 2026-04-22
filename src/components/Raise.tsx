import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const backers = ['Sequoia', 'a16z', 'YC S24', 'Ribbit Capital', 'Index Ventures']

const raiseCards = [
  { label: 'Round Size',          val: '$8M' },
  { label: 'Pre-money Valuation', val: '$40M' },
  { label: 'Min. Check Size',     val: '$250K' },
]

export default function Raise() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref}>
      {/* Backers strip */}
      <div className="section-alt py-12 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-[11px] text-ink-3 uppercase tracking-widest font-sans mb-7"
          >
            Backed by world-class investors
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {backers.map((b, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="text-slate-400 font-semibold text-base font-sans tracking-tight select-none"
              >
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Dark raise section — one dramatic dark panel for contrast */}
      <div className="section-dark py-24 overflow-hidden relative">
        {/* Subtle blob */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold font-sans mb-6"
              style={{ background: 'rgba(79,70,229,0.2)', color: '#A5B4FC', border: '1px solid rgba(79,70,229,0.35)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Seed Round Open
            </span>

            <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Raising <span style={{ color: '#818CF8' }}>$8 Million</span>
            </h2>
            <p className="text-slate-400 text-[17px] leading-relaxed max-w-xl mx-auto mb-10 font-sans">
              $40M pre-money valuation. Join top-tier investors backing the next chapter of American personal finance.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
              {raiseCards.map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                  whileHover={{ background: 'rgba(255,255,255,0.09)' }}
                >
                  <p className="text-2xl font-bold text-white font-sans">{c.val}</p>
                  <p className="text-slate-400 text-sm mt-1 font-sans">{c.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white text-sm cursor-pointer border-none font-sans"
                style={{ background: '#4F46E5', boxShadow: '0 4px 20px rgba(79,70,229,0.4)' }}
                whileHover={{ background: '#4338CA', scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Request Full Deck <ArrowRight size={15} />
              </motion.button>
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-white text-sm cursor-pointer font-sans"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)' }}
                whileHover={{ background: 'rgba(255,255,255,0.12)' }}
                whileTap={{ scale: 0.97 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
