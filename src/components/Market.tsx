import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rows = [
  { label:'Total Addressable Market',     sub:'Personal Finance Management — US',    val:'$45B',  color:'#4F46E5', w:100 },
  { label:'Serviceable Addressable Market',sub:'Mobile-first Millennials & Gen Z',   val:'$12B',  color:'#7C3AED', w:27  },
  { label:'Serviceable Obtainable Market', sub:'3-year conservative target',          val:'$1.2B', color:'#059669', w:10  },
  { label:'Market Growth Rate',            sub:'CAGR 2024–2030',                      val:'18.3%', color:'#D97706', w:55  },
]

export default function Market() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="market" ref={ref} className="py-28 section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge mb-4">Market Opportunity</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            A $45 Billion<br />Underserved Market
          </h2>
          <p className="text-ink-2 text-[17px] mt-4 font-sans leading-relaxed">
            Fragmented, legacy, and ripe for a unified AI-native solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Concentric circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center w-72 h-72">
              {[
                { size: 256, label: 'TAM', val: '$45B', color: '#4F46E5', opacity: 0.06, bord: '#C7D2FE', delay: 0.1, textY: '-120px' },
                { size: 176, label: 'SAM', val: '$12B', color: '#7C3AED', opacity: 0.09, bord: '#DDD6FE', delay: 0.25 },
                { size: 96,  label: 'SOM', val: '$1.2B',color: '#059669', opacity: 0.14, bord: '#A7F3D0', delay: 0.4 },
              ].map((c, i) => (
                <motion.div key={i}
                  className="absolute rounded-full flex items-center justify-center"
                  style={{
                    width: c.size, height: c.size,
                    background: `rgba(${c.color === '#4F46E5' ? '79,70,229' : c.color === '#7C3AED' ? '124,58,237' : '5,150,105'},${c.opacity})`,
                    border: `1px solid ${c.bord}`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: c.delay, type: 'spring', stiffness: 160 }}
                >
                  {i > 0 && (
                    <div className="text-center">
                      <p className="text-[10px] text-ink-3 uppercase tracking-wide font-sans">{c.label}</p>
                      <p className="text-lg font-bold font-sans" style={{ color: c.color }}>{c.val}</p>
                    </div>
                  )}
                  {i === 0 && (
                    <div className="absolute" style={{ top: -52 }}>
                      <p className="text-[10px] text-ink-3 uppercase tracking-wide font-sans text-center">{c.label}</p>
                      <p className="text-xl font-bold font-sans text-center" style={{ color: c.color }}>{c.val}</p>
                    </div>
                  )}
                </motion.div>
              ))}
              {/* Orbiting ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ width: 260, height: 260, border: '1px dashed #E2E8F0' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          {/* Bars */}
          <div className="space-y-4">
            {rows.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ x: 3 }}
                className="card p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-[14px] font-semibold text-ink font-sans">{r.label}</p>
                    <p className="text-xs text-ink-3 font-sans">{r.sub}</p>
                  </div>
                  <p className="text-xl font-bold font-sans" style={{ color: r.color }}>{r.val}</p>
                </div>
                <div className="progress-track">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: r.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${r.w}%` } : {}}
                    transition={{ duration: 1.1, delay: i * 0.1 + 0.3, ease: 'easeOut' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
