import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }} style={style}>
      {children}
    </motion.div>
  )
}

const titleMap: Record<string, string> = {
  FA:  'Financial Advisor',
  SFA: 'Senior Financial Advisor',
  SM:  'Sales Manager',
}

const advisors = [
  { name: 'Shiv Thakur',                    title: 'SM',  phone: '(857) 205-3333', email: 'sthakur@experiorfinancialgroup.com',  color: '#10b981', bg: 'linear-gradient(145deg, #edfff5 0%, #f2fff8 100%)' },
  { name: 'Nikhil Bhatt',                   title: 'SFA', phone: '(603) 521-5877', email: 'nbhatt@experiorfinancialgroup.com',   color: '#4353ff', bg: 'linear-gradient(145deg, #eef0ff 0%, #f2f4ff 100%)' },
  { name: 'Rigoberto Antonio Ayala Rodas',  title: 'SFA', phone: '(617) 331-4093', email: 'rrodas@experiorfinancialgroup.com',   color: '#f69c20', bg: 'linear-gradient(145deg, #fff8ee 0%, #fffcf7 100%)' },
  { name: 'Vivek Daruka',                   title: 'FA',  phone: '(318) 789-4199', email: 'vdaruka@experiorfinancialgroup.com',  color: '#fb7185', bg: 'linear-gradient(145deg, #fff0f2 0%, #fff5f7 100%)' },
  { name: 'Carmelo Aguilar',                title: 'FA',  phone: '(857) 294-2204', email: 'caguilar@experiorfinancialgroup.com', color: '#4353ff', bg: 'linear-gradient(145deg, #eef0ff 0%, #f2f4ff 100%)' },
  { name: 'Andy Martinez',                  title: 'FA',  phone: '(857) 261-5938', email: 'amartinez@experiorfinancialgroup.com',color: '#10b981', bg: 'linear-gradient(145deg, #edfff5 0%, #f2fff8 100%)' },
  { name: 'Bimlesh Yadav',                  title: 'FA',  phone: '(501) 804-9596', email: 'byadav@experiorfinancialgroup.com',   color: '#f69c20', bg: 'linear-gradient(145deg, #fff8ee 0%, #fffcf7 100%)' },
  { name: 'Gita Thakur',                    title: 'FA',  phone: '(339) 241-9074', email: 'gthakur@experiorfinancialgroup.com',  color: '#fb7185', bg: 'linear-gradient(145deg, #fff0f2 0%, #fff5f7 100%)' },
  { name: 'Makeshwar Yadav',                title: 'FA',  phone: '(512) 521-8817', email: 'myadav@experiorfinancialgroup.com',   color: '#4353ff', bg: 'linear-gradient(145deg, #eef0ff 0%, #f2f4ff 100%)' },
  { name: 'Richard Kumpel',                 title: 'FA',  phone: '(857) 318-4306', email: 'rkumpel@experiorfinancialgroup.com',  color: '#10b981', bg: 'linear-gradient(145deg, #edfff5 0%, #f2fff8 100%)' },
]


export default function AdvisorsPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── Hero ── */}
      <section style={{ background: 'var(--surface)', padding: '80px 24px 64px', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 480, height: 380, background: 'rgba(16,185,129,0.08)', top: -140, right: -100 }} />
        <div className="ff-blob" style={{ width: 320, height: 320, background: 'rgba(67,83,255,0.06)', bottom: -80, left: -60 }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>Expert Team</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16, maxWidth: 600 }}
          >
            Meet your{' '}
            <span style={{ color: 'var(--emerald)' }}>financial advisors.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 500, lineHeight: 1.7 }}
          >
            Our team of licensed advisors is here to guide you. Reach out directly — no waiting rooms, no runaround.
          </motion.p>
        </div>
      </section>

      {/* ── Advisors Grid ── */}
      <section style={{ padding: '80px 24px 100px', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ top: '5%', right: '4%', width: 300, height: 300, background: 'rgba(67,83,255,0.05)', filter: 'blur(80px)' }} />
        <div className="ff-blob" style={{ bottom: '5%', left: '6%', width: 280, height: 280, background: 'rgba(16,185,129,0.06)', filter: 'blur(80px)' }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 40px)', letterSpacing: '-1px', color: 'var(--dark)' }}>
                Talk to a real person.{' '}
                <span style={{ color: 'var(--emerald)' }}>Today.</span>
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-3)', marginTop: 12, maxWidth: 460, margin: '12px auto 0', lineHeight: 1.7 }}>
                Every advisor below is reachable by phone or email. Click to connect directly.
              </p>
            </div>
          </FadeIn>

          <div className="ff-grid-3" style={{ gap: 20 }}>
            {advisors.map((a, i) => (
              <FadeIn key={i} delay={i * 0.06} style={{ height: '100%' }}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.012 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  style={{
                    background: a.bg,
                    borderRadius: 24,
                    padding: '32px 28px',
                    height: '100%', display: 'flex', flexDirection: 'column',
                    position: 'relative', overflow: 'hidden',
                    border: `1px solid ${a.color}18`,
                    boxShadow: `0 2px 12px rgba(0,0,0,0.04), 0 8px 32px ${a.color}08`,
                  }}
                >
                  {/* Corner glow */}
                  <div style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200, borderRadius: '50%',
                    background: `radial-gradient(circle, ${a.color}12 0%, transparent 70%)`,
                    pointerEvents: 'none',
                  }} />

                  {/* Role tag */}
                  <span style={{
                    fontFamily: 'Lato', fontSize: 12, fontWeight: 800,
                    color: a.color, letterSpacing: '0.1em',
                    textTransform: 'uppercase', display: 'inline-block', marginBottom: 16,
                    background: `${a.color}12`, padding: '5px 12px', borderRadius: 6,
                    alignSelf: 'flex-start',
                  }}>
                    {titleMap[a.title]}
                  </span>

                  {/* Name — hero */}
                  <h3 style={{
                    fontFamily: 'Manrope', fontWeight: 800,
                    fontSize: 'clamp(22px, 2.2vw, 28px)',
                    color: 'var(--dark)', lineHeight: 1.15,
                    letterSpacing: '-0.5px', marginBottom: 4, flex: 1,
                  }}>
                    {a.name}
                  </h3>

                  {/* Divider */}
                  <div style={{ height: 1, background: `${a.color}18`, margin: '18px 0' }} />

                  {/* Phone */}
                  <a href={`tel:${a.phone.replace(/\D/g, '')}`} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    textDecoration: 'none', marginBottom: 12,
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                      background: `${a.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Phone size={15} color={a.color} strokeWidth={2} />
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 15, fontWeight: 700, color: 'var(--dark)' }}>{a.phone}</span>
                  </a>

                  {/* Email */}
                  <a href={`mailto:${a.email}`} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    textDecoration: 'none',
                    transition: 'opacity 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <div style={{
                      width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                      background: `${a.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Mail size={15} color={a.color} strokeWidth={2} />
                    </div>
                    <span style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 600, color: a.color, wordBreak: 'break-all' }}>{a.email}</span>
                  </a>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
