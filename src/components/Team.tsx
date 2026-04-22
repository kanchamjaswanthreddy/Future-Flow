import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const team = [
  { name:'Alex Kumar',  role:'CEO & Co-Founder',         initials:'AK', color:'#4F46E5', bg:'#EEF2FF',
    badge:'Ex-Plaid',    desc:'Led data infrastructure for 4,000+ bank integrations at Plaid from Series A to D. Stanford CS + MBA.' },
  { name:'Jordan Park', role:'CTO & Co-Founder',         initials:'JP', color:'#059669', bg:'#ECFDF5',
    badge:'Ex-Mint',     desc:"Built Mint's real-time transaction classification engine, processing 400M+ transactions per month." },
  { name:'Maya Nair',   role:'Chief Product Officer',    initials:'MN', color:'#D97706', bg:'#FFFBEB',
    badge:'Ex-Goldman',  desc:'Designed consumer finance products at Goldman Sachs Marcus, serving 2M+ users and $12B in deposits.' },
  { name:'David Lee',   role:'Chief Financial Officer',  initials:'DL', color:'#7C3AED', bg:'#F5F3FF',
    badge:'Ex-Sequoia',  desc:'Former Sequoia associate who closed $130M+ in institutional fintech fundraises across Series A–C.' },
]

export default function Team() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="team" ref={ref} className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <span className="badge mb-4">The Team</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            Built by People Who've Done This Before
          </h2>
          <p className="text-ink-2 text-[17px] mt-4 font-sans leading-relaxed">
            Ex-Plaid, ex-Mint, ex-Goldman — we've spent our careers inside the exact problem we're solving.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="card p-6 group"
            >
              {/* Avatar */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold text-white font-sans mb-4"
                style={{ background: m.bg, color: m.color, border: `1px solid ${m.color}20` }}
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 280 }}
              >
                {m.initials}
              </motion.div>

              {/* Badge */}
              <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans mb-2"
                style={{ background: m.bg, color: m.color }}>
                {m.badge}
              </span>

              <h3 className="font-sans text-[15px] font-semibold text-ink">{m.name}</h3>
              <p className="text-[12px] text-ink-2 font-sans mb-3">{m.role}</p>
              <p className="text-[12px] text-ink-3 leading-relaxed font-sans">{m.desc}</p>

              <motion.button
                className="mt-4 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
                whileHover={{ borderColor: '#CBD5E1', background: '#F1F5F9' }}
                whileTap={{ scale: 0.93 }}
              >
                <ExternalLink size={12} color="#94A3B8" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
