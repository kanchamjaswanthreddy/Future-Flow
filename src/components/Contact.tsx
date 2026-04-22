import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

const checkSizes = ['$250K – $500K', '$500K – $1M', '$1M – $2M', '$2M+']

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState('')
  const [selected, setSelected] = useState('')

  const inputStyle = (name: string) => ({
    background: '#FFFFFF',
    border: `1.5px solid ${focused === name ? '#4F46E5' : '#E2E8F0'}`,
    boxShadow: focused === name ? '0 0 0 3px rgba(79,70,229,0.08)' : 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  })

  const base = 'w-full px-4 py-3 rounded-xl text-sm text-ink outline-none bg-transparent font-sans placeholder:text-slate-300'

  return (
    <section id="contact" ref={ref} className="py-28 section-alt">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="badge mb-4">Get In Touch</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mt-3 leading-tight">
            Let's Build the<br />Financial Future Together
          </h2>
          <p className="text-ink-2 text-[16px] mt-4 font-sans leading-relaxed">
            Fill in your details and we'll reach out within 24 hours with the full investor deck and data room access.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div key="ok"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card p-14 text-center"
            >
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18, delay: 0.1 }}>
                <CheckCircle size={52} className="mx-auto mb-4" color="#059669" />
              </motion.div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-2">Message Received</h3>
              <p className="text-ink-2 font-sans text-sm">We'll reach back within 24 hours with the full deck and data room.</p>
            </motion.div>
          ) : (
            <motion.form key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={e => { e.preventDefault(); setSent(true) }}
              className="card p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5 font-sans">Full Name *</label>
                  <div style={inputStyle('name')} className="rounded-xl">
                    <input type="text" required placeholder="Jane Smith" className={base}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused('')} />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5 font-sans">Firm / Company</label>
                  <div style={inputStyle('firm')} className="rounded-xl">
                    <input type="text" placeholder="Acme Ventures" className={base}
                      onFocus={() => setFocused('firm')} onBlur={() => setFocused('')} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5 font-sans">Work Email *</label>
                <div style={inputStyle('email')} className="rounded-xl">
                  <input type="email" required placeholder="jane@acmeventures.com" className={base}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused('')} />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-2.5 font-sans">Check Size Range</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {checkSizes.map(s => (
                    <motion.button type="button" key={s}
                      onClick={() => setSelected(s)}
                      className="py-2 px-2 rounded-lg text-[12px] font-medium font-sans cursor-pointer border-none text-center"
                      style={{
                        background: selected === s ? '#EEF2FF' : '#F8FAFC',
                        border: `1.5px solid ${selected === s ? '#4F46E5' : '#E2E8F0'}`,
                        color: selected === s ? '#4F46E5' : '#64748B',
                      }}
                      whileTap={{ scale: 0.97 }}>
                      {s}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5 font-sans">
                  Message <span className="text-ink-3 font-normal">(optional)</span>
                </label>
                <div style={inputStyle('msg')} className="rounded-xl">
                  <textarea rows={3} placeholder="Questions, portfolio context, or areas of interest…"
                    className={`${base} resize-none`}
                    onFocus={() => setFocused('msg')} onBlur={() => setFocused('')} />
                </div>
              </div>

              <motion.button type="submit"
                className="btn-primary w-full justify-center py-3.5 text-sm"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                Send Message & Request Deck <Send size={14} />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
