import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Layers, CreditCard, DollarSign, TrendingUp, PhoneCall, Shield } from 'lucide-react'

const features = [
  { Icon: Layers,    color: '#4F46E5', bg: '#EEF2FF', title: 'AI Spend Tracking',      desc: 'Auto-categorizes every transaction across all accounts in real time. Zero manual tagging, ever.' },
  { Icon: CreditCard,color: '#059669', bg: '#ECFDF5', title: 'Subscription Manager',   desc: 'Find and cancel wasteful subscriptions in one tap. Average user saves $312/year in week one.' },
  { Icon: DollarSign,color: '#D97706', bg: '#FFFBEB', title: 'Debt Payoff Planner',    desc: 'Avalanche or snowball — our engine builds the optimal payoff strategy and tracks progress daily.' },
  { Icon: TrendingUp,color: '#7C3AED', bg: '#F5F3FF', title: 'Wealth Builder',          desc: 'Set savings goals, track net worth in real time, and receive personalized investment nudges.' },
  { Icon: PhoneCall, color: '#0284C7', bg: '#F0F9FF', title: 'Bill Negotiation',        desc: 'AI agents call providers on your behalf to lower cable, insurance, and utility bills — automatically.' },
  { Icon: Shield,    color: '#0F766E', bg: '#F0FDFA', title: 'Financial Health Score',  desc: 'A real-time 0–850 score with actionable steps — like a credit score for your whole financial life.' },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="product" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge mb-4">The Solution</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            One Platform.<br />Total Financial Clarity.
          </h2>
          <p className="text-ink-2 text-[17px] leading-relaxed mt-4 font-sans">
            FutureFlow replaces the chaos with a single intelligent hub that works for you 24/7.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="card p-7 group"
            >
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg }}
                whileHover={{ scale: 1.1, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <f.Icon size={20} color={f.color} strokeWidth={1.8} />
              </motion.div>
              <h3 className="font-sans text-[16px] font-semibold text-ink mb-1.5">{f.title}</h3>
              <p className="text-sm text-ink-2 leading-relaxed font-sans">{f.desc}</p>

              {/* Hover underline */}
              <motion.div
                className="mt-5 h-px rounded-full"
                style={{ background: f.color }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.35 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
