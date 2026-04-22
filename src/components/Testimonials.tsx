import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  { name: 'Sarah Chen',    role: 'Marketing Manager, Austin TX', initials: 'SC', color: '#4F46E5',
    text: '"FutureFlow found $420 in forgotten subscriptions and saved another $60/month on my internet bill. It paid for itself in the first week."' },
  { name: 'Marcus Rivera', role: 'Software Engineer, Chicago IL', initials: 'MR', color: '#059669',
    text: '"I paid off $28,000 in student loans 14 months ahead of schedule using FutureFlow\'s payoff plan. This app genuinely changed my financial life."' },
  { name: 'Aisha Johnson', role: 'Nurse Practitioner, Atlanta GA', initials: 'AJ', color: '#D97706',
    text: '"Finally a finance app that doesn\'t feel like filing taxes. My Health Score went from 620 to 781 in just 8 months."' },
  { name: 'David Park',    role: 'Small Business Owner, NYC',    initials: 'DP', color: '#7C3AED',
    text: '"FutureFlow negotiated my cable bill from $220 down to $89 while I was asleep. I honestly don\'t know how I managed money before this."' },
  { name: 'Priya Nair',    role: 'Grad Student, Boston MA',      initials: 'PN', color: '#0284C7',
    text: '"On a student budget this is a lifesaver. The AI categorizes everything automatically and the budgets actually stick because they\'re realistic."' },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [cur, setCur] = useState(0)

  const visible = [0, 1, 2].map(offset => reviews[(cur + offset) % reviews.length])

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6"
        >
          <div>
            <span className="badge mb-4">User Love</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3">
              500,000 People<br />Can't Be Wrong
            </h2>
          </div>
          <div className="flex gap-2">
            <motion.button onClick={() => setCur(c => (c - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-ink-2 cursor-pointer"
              style={{ border: '1.5px solid #E2E8F0' }}
              whileHover={{ borderColor: '#CBD5E1', background: '#F8FAFC' }}
              whileTap={{ scale: 0.93 }}>
              <ChevronLeft size={17} />
            </motion.button>
            <motion.button onClick={() => setCur(c => (c + 1) % reviews.length)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-ink-2 cursor-pointer"
              style={{ border: '1.5px solid #E2E8F0' }}
              whileHover={{ borderColor: '#CBD5E1', background: '#F8FAFC' }}
              whileTap={{ scale: 0.93 }}>
              <ChevronRight size={17} />
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-7">
          {visible.map((r, i) => (
            <motion.div
              key={r.name + cur}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="card p-7"
            >
              <Stars />
              <p className="text-[15px] text-ink-2 leading-relaxed italic font-sans mb-6">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white font-sans flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink font-sans">{r.name}</p>
                  <p className="text-[11px] text-ink-3 font-sans">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1.5">
          {reviews.map((_, i) => (
            <motion.button key={i} onClick={() => setCur(i)}
              className="h-1.5 rounded-full cursor-pointer border-none"
              animate={{ width: i === cur ? 20 : 6, background: i === cur ? '#4F46E5' : '#E2E8F0' }}
              transition={{ duration: 0.25 }} />
          ))}
        </div>
      </div>
    </section>
  )
}
