import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Building2, ArrowRight, Clock, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputBase: React.CSSProperties = {
    width: '100%', padding: '13px 18px', borderRadius: 12,
    border: '1.5px solid rgba(0,0,0,0.10)', background: 'rgba(255,255,255,0.85)',
    fontFamily: 'Lato', fontSize: 15, color: 'var(--dark)',
    outline: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
    boxSizing: 'border-box',
  }

  const focusEmerald = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'var(--emerald)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.12)'
  }
  const blurReset = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.10)'
    e.currentTarget.style.boxShadow = 'none'
  }

  const contacts = [
    { Icon: Mail,         title: 'Email Support',   desc: 'For product questions, billing, or general help.',        contact: 'support@joinfutureflow.com',  color: '#4353ff' },
    { Icon: Building2,    title: 'Press & Media',   desc: 'For journalists, researchers, and media inquiries.',       contact: 'press@futureflow.app',        color: '#10b981' },
    { Icon: MessageSquare,title: 'Partnerships',    desc: 'For business, API, and integration partnerships.',         contact: 'partnerships@futureflow.app', color: '#f69c20' },
  ]

  const responseTimes = [
    { plan: 'Free plan',  time: 'Within 48 hours',            color: 'rgba(255,255,255,0.55)' },
    { plan: 'Pro',        time: 'Within 24 hours',            color: '#10b981' },
    { plan: 'Household',  time: 'Within 4 hours (priority)',  color: '#f69c20' },
  ]

  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero — dark with emerald accent ── */}
      <section style={{ background: 'var(--surface)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 480, height: 380, background: 'rgba(16,185,129,0.08)', top: -140, right: -100 }} />
        <div className="ff-blob" style={{ width: 320, height: 320, background: 'rgba(67,83,255,0.06)', bottom: -80, left: -60 }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>Get in Touch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16, maxWidth: 560 }}
          >
            We'd love to{' '}
            <span style={{ color: 'var(--emerald)' }}>hear from you.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 440, lineHeight: 1.7 }}
          >
            Whether you have a question, feedback, or a partnership idea — we're here.
          </motion.p>
        </div>
      </section>

      {/* ── Contact options + form — neutral bg ── */}
      <section style={{ padding: '80px 24px 100px', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 500, height: 400, background: 'rgba(16,185,129,0.06)', top: -100, left: -120 }} />
        <div className="ff-blob" style={{ width: 400, height: 400, background: 'rgba(67,83,255,0.05)', bottom: -80, right: -100 }} />

        <div className="ff-container" style={{ position: 'relative', display: 'grid', gap: 48, alignItems: 'start', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>

          {/* ── Left: contact options + response times ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {contacts.map((opt, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.015, y: -3 }}
                transition={{ duration: 0.2 }}
                className="ff-glass"
                style={{ borderRadius: 18, padding: '24px 22px', display: 'flex', gap: 18, alignItems: 'flex-start' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: `radial-gradient(circle, ${opt.color}20 0%, ${opt.color}08 100%)`,
                  boxShadow: `0 0 16px ${opt.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <opt.Icon size={20} color={opt.color} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 700, color: 'var(--dark)', marginBottom: 6 }}>{opt.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', marginBottom: 10, lineHeight: 1.6 }}>{opt.desc}</p>
                  <a href={`mailto:${opt.contact}`} style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 700, color: opt.color, textDecoration: 'none' }}>{opt.contact}</a>
                </div>
              </motion.div>
            ))}

            {/* Response time — explicit dark card */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              style={{
                borderRadius: 18, padding: '24px 22px',
                background: '#0c0c0f',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.22)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', boxShadow: '0 0 14px rgba(16,185,129,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={16} color="var(--emerald)" strokeWidth={2} />
                </div>
                <h3 style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>Response Time</h3>
              </div>
              {responseTimes.map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <span style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}>{r.plan}</span>
                  <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: r.color }}>{r.time}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: form — glass ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="ff-glass"
            style={{ borderRadius: 24, padding: '40px 36px' }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16,185,129,0.12)', boxShadow: '0 0 24px rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <CheckCircle size={30} color="var(--emerald)" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: 'Manrope', fontSize: 24, fontWeight: 800, color: 'var(--dark)', marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-3)', lineHeight: 1.7 }}>
                  Thanks for reaching out. We'll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <h2 style={{ fontFamily: 'Manrope', fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginBottom: 4 }}>Send us a message</h2>
                  <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)' }}>We read every message personally.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Name</label>
                    <input
                      type="text" required placeholder="Jane Smith"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      style={inputBase} onFocus={focusEmerald} onBlur={blurReset}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Email</label>
                    <input
                      type="email" required placeholder="jane@email.com"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      style={inputBase} onFocus={focusEmerald} onBlur={blurReset}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark-2)', display: 'block', marginBottom: 8 }}>Subject</label>
                  <select
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required
                    style={{ ...inputBase, appearance: 'none', cursor: 'pointer' }}
                    onFocus={focusEmerald} onBlur={blurReset}
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
                  <textarea
                    required rows={5} placeholder="Tell us how we can help..."
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: 'vertical', lineHeight: 1.6 }}
                    onFocus={focusEmerald} onBlur={blurReset}
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
