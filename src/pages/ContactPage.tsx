import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Building2, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 18px', borderRadius: 12,
    border: '1.5px solid var(--border)', background: 'var(--white)',
    fontFamily: 'Lato', fontSize: 15, color: 'var(--dark)',
    outline: 'none', transition: 'border-color 0.3s',
  }

  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ background: 'var(--dark)', padding: '80px 24px 60px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16, maxWidth: 560 }}
          >
            We'd love to hear from you.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 440, lineHeight: 1.7 }}
          >
            Whether you have a question, feedback, or a partnership idea — we're here.
          </motion.p>
        </div>
      </section>

      {/* Contact options + form */}
      <section style={{ padding: '80px 24px 100px', background: 'var(--light-grey)' }}>
        <div className="ff-container" style={{ display: 'grid', gap: 48, alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>

          {/* Left: options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            {[
              { Icon: Mail, title: 'Email Support', desc: 'For product questions, billing, or general help.', contact: 'support@futureflow.app', color: '#4353ff' },
              { Icon: Building2, title: 'Press & Media', desc: 'For journalists, researchers, and media inquiries.', contact: 'press@futureflow.app', color: '#2db37d' },
              { Icon: MessageSquare, title: 'Partnerships', desc: 'For business, API, and integration partnerships.', contact: 'partnerships@futureflow.app', color: '#f69c20' },
            ].map((opt, i) => (
              <div key={i} className="ff-card" style={{ padding: '28px 24px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${opt.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <opt.Icon size={20} color={opt.color} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{opt.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', marginBottom: 10, lineHeight: 1.6 }}>{opt.desc}</p>
                  <a href={`mailto:${opt.contact}`} style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 700, color: opt.color, textDecoration: 'none' }}>{opt.contact}</a>
                </div>
              </div>
            ))}

            <div className="ff-card" style={{ padding: '28px 24px', background: 'var(--mint)', borderColor: 'var(--mint)' }}>
              <h3 style={{ fontFamily: 'Manrope', fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>Response Time</h3>
              <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-2)', lineHeight: 1.65 }}>
                Free plan: within 48 hours<br />
                Premium: within 24 hours<br />
                Premium+: within 4 hours (phone & chat available)
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="ff-card" style={{ padding: '40px 36px' }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
                <h3 style={{ fontFamily: 'Manrope', fontSize: 24, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-3)', lineHeight: 1.7 }}>
                  Thanks for reaching out. We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <h2 style={{ fontFamily: 'Manrope', fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>Send us a message</h2>
                <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', marginBottom: 8 }}>We read every message personally.</p>

                <div style={{ display: 'grid', gap: 16 }} className="sm:grid-cols-2">
                  <div>
                    <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Name</label>
                    <input type="text" required placeholder="Jane Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Email</label>
                    <input type="email" required placeholder="jane@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Subject</label>
                  <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  >
                    <option value="">Select a topic...</option>
                    <option>General Question</option>
                    <option>Billing & Subscription</option>
                    <option>Technical Support</option>
                    <option>Partnership Inquiry</option>
                    <option>Press & Media</option>
                    <option>Feature Request</option>
                    <option>Report a Bug</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Message</label>
                  <textarea required rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                  />
                </div>

                <button type="submit" className="btn-dark" style={{ justifyContent: 'center', marginTop: 4 }}>
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </div>
  )
}
