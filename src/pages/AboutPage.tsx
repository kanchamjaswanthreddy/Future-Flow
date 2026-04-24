import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Lock, Eye, Lightbulb, Puzzle, MapPin, Calendar, CheckCircle, XCircle } from 'lucide-react'

const HERO_BG = `#f5f5f7`

function FadeIn({
  children, delay = 0, x = 0, style = {},
}: {
  children: React.ReactNode; delay?: number; x?: number; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: x === 0 ? 28 : 0, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      style={style}>
      {children}
    </motion.div>
  )
}

const values = [
  { accent: '0',    accentSub: 'data ever sold',    color: '#4353ff', title: 'Privacy First',          desc: 'No ads. No data brokering. No referral kickbacks. Our only revenue is your subscription — which means our only job is to make you richer.' },
  { accent: '5min', accentSub: 'to full clarity',   color: '#f69c20', title: 'Simple by Design',       desc: 'Connect your accounts, see your full financial picture in under five minutes. No spreadsheets. No finance degree. No setup headaches.' },
  { accent: '$0',   accentSub: 'hidden fees',        color: '#fb7185', title: 'Radically Transparent',  desc: 'One flat subscription. No upsells dressed as features. No partner banks paying us to push their products. What you see is all there is.' },
  { accent: '100%', accentSub: 'built for everyone', color: '#10b981', title: 'Accessible to All',      desc: 'Financial clarity isn\'t a luxury for the wealthy. Our free tier gives everyone access to the tools that actually move the needle on their money.' },
]

const gaps = [
  { tool: 'Monarch Money', had: 'Full-featured tracking',   missing: 'Tax engine, AI automation, subscription radar' },
  { tool: 'Rocket Money',  had: 'Subscription canceling',   missing: 'Net worth tracking, tax engine, investment insights' },
  { tool: 'YNAB',          had: 'Budgeting discipline',     missing: 'Everything outside manual budgeting — AI, tax, investments' },
  { tool: 'Copilot',       had: 'Beautiful UI',             missing: 'Tax planning, bill negotiation, credit monitoring' },
  { tool: 'Personal Cap.', had: 'Investment tracking',      missing: 'Subscription radar, bill negotiation, AI budgeting coach' },
]

const timeline = [
  { year: '2025',      label: 'The Question',          event: 'Frustrated bouncing between three different finance apps and still not having a full picture, a simple question was asked: why doesn\'t one tool just do all of this?' },
  { year: 'Early 2026', label: 'The Build Begins',     event: 'With no industry pedigree — just curiosity and stubbornness — building started in Boston, MA. First connected bank account. First real transaction insight.' },
  { year: 'Mid 2026',  label: 'FutureFlow Takes Shape', event: 'The AI budgeting engine, Subscription Radar, Tax Engine, Debt Payoff Planner, and Bill Negotiation AI all come together in one unified platform.' },
  { year: 'Now',       label: 'Launch Imminent',        event: 'Waitlist is open. FutureFlow is nearly ready to ship the product that should have existed years ago.' },
]

export default function AboutPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', background: HERO_BG, padding: 'calc(var(--sp) + 72px) 0 80px', overflow: 'hidden' }}>
        {/* Ambient blobs */}
        <div className="ff-blob" style={{ width: 480, height: 480, background: 'rgba(16,185,129,0.10)', top: -120, left: -120 }} />
        <div className="ff-blob" style={{ width: 360, height: 360, background: 'rgba(67,83,255,0.07)', bottom: -80, right: -80 }} />

        <div className="ff-container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Our Story</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginBottom: 20 }}
            >
              We looked at everything out there.{' '}
              <span style={{ color: 'var(--emerald)' }}>Something was always missing.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', lineHeight: 1.8, maxWidth: 500 }}
            >
              FutureFlow wasn't built by industry veterans or ex-Plaid engineers. It was built by people who were just tired of using five apps to get one clear picture of their finances.
            </motion.p>
          </div>

          {/* Fact card — glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="ff-glass"
            style={{ borderRadius: 24, padding: '36px' }}
          >
            {[
              { label: 'Founded',          val: '2026',          Icon: Calendar, highlight: false },
              { label: 'Headquarters',     val: 'Boston, MA',    Icon: MapPin,   highlight: false },
              { label: 'Banks Supported',  val: '12,000+',       Icon: null,     highlight: false },
              { label: 'States Covered',   val: 'All 50',        Icon: null,     highlight: false },
              { label: 'Built by',         val: 'Indie Founders', Icon: null,     highlight: false },
              { label: 'Launch Status',    val: 'Coming Soon',   Icon: null,     highlight: true  },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: i < 5 ? '1px solid rgba(0,0,0,0.07)' : 'none',
              }}>
                <span style={{ fontFamily: 'Lato', fontSize: 14, color: '#6b7280', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.Icon && <s.Icon size={13} color="#6b7280" strokeWidth={2} />}
                  {s.label}
                </span>
                <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 15, color: s.highlight ? 'var(--emerald)' : 'var(--dark)' }}>
                  {s.val}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Origin story — dark ── */}
      <section style={{ background: 'var(--surface)', padding: 'var(--sp) 0', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 500, height: 500, background: 'rgba(16,185,129,0.06)', top: -200, right: -160 }} />
        <div className="ff-blob" style={{ width: 320, height: 320, background: 'rgba(67,83,255,0.05)', bottom: -100, left: -80 }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>

            {/* Text */}
            <FadeIn x={-30}>
              <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>How It Started</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-1px', lineHeight: 1.15, color: '#ffffff', marginTop: 16, marginBottom: 20 }}>
                A simple "what if" in Boston, 2026.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 18 }}>
                It started with the kind of frustration that's easy to ignore but hard to shake. Using Rocket Money to cancel subscriptions, YNAB to stay on budget, Copilot for a clean UI — and still not really knowing where the money was going.
              </p>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 18 }}>
                The question wasn't complicated: <em style={{ color: 'rgba(255,255,255,0.85)' }}>what if everything these apps do individually existed in one place — and it was actually intelligent?</em>
              </p>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85 }}>
                No background in fintech. No investors lined up. No blueprint. Just a conviction that the product people actually needed didn't exist yet — and a decision to build it.
              </p>
            </FadeIn>

            {/* Gap visual — updated with emerald/coral signals */}
            <FadeIn x={30} delay={0.1}>
              <div className="ff-glass-dark" style={{ borderRadius: 24, padding: '28px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <Puzzle size={16} color="var(--emerald)" strokeWidth={1.8} />
                  <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: 'var(--emerald)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Gaps We Found</span>
                </div>
                {gaps.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      marginBottom: 8,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
                      <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: '#ffffff' }}>{g.tool}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, color: '#10b981', background: 'rgba(16,185,129,0.12)', padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                        <CheckCircle size={10} strokeWidth={2.5} /> {g.had}
                      </span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 12, color: '#fb7185', lineHeight: 1.5, margin: 0, display: 'flex', alignItems: 'flex-start', gap: 5 }}>
                      <XCircle size={11} strokeWidth={2.5} style={{ marginTop: 1, flexShrink: 0 }} />
                      Missing: {g.missing}
                    </p>
                  </motion.div>
                ))}
                <div style={{ marginTop: 16, padding: '14px 16px', borderRadius: 10, background: 'rgba(16,185,129,0.10)', border: '1px solid rgba(16,185,129,0.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Lightbulb size={14} color="var(--emerald)" strokeWidth={2} />
                    <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: 'var(--emerald)' }}>FutureFlow — built to have it all.</span>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Mission + Values — merged section ── */}
      <section style={{ padding: 'var(--sp) 0', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 600, height: 400, background: 'rgba(16,185,129,0.07)', top: -100, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>

          {/* Mission header */}
          <FadeIn>
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 64px' }}>
              <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>Our Mission</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginTop: 16, marginBottom: 20 }}>
                Financial clarity for{' '}
                <span style={{ color: 'var(--emerald)' }}>every American.</span>
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', lineHeight: 1.8 }}>
                Managing money shouldn't require a finance degree, a premium advisor, or five different apps. FutureFlow brings the intelligence of a private wealth manager into one place — and it pays for itself in the first week.
              </p>
            </div>
          </FadeIn>

          {/* Values bento */}
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span className="ff-badge" style={{ marginBottom: 14, display: 'inline-flex' }}>What We Stand For</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 42px)', letterSpacing: '-1px', color: 'var(--dark)', marginTop: 12 }}>Our Values</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08} style={{ height: '100%' }}>
                <div className="ff-clay ff-gloss-on-hover" style={{ padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 48, color: v.color, letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>{v.accent}</div>
                  <p style={{ fontFamily: 'Lato', fontSize: 10, fontWeight: 700, color: v.color, opacity: 0.7, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{v.accentSub}</p>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 17, color: 'var(--dark)', marginBottom: 10, letterSpacing: '-0.3px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'var(--dark-3)', lineHeight: 1.75, flex: 1 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Timeline — dark ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 400, height: 400, background: 'rgba(67,83,255,0.06)', bottom: -120, right: -80 }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>The Journey</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: '#ffffff', marginTop: 14 }}>
                From idea to launch.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.4)', marginTop: 14 }}>Built without a roadmap. Figured it out as we went.</p>
            </div>
          </FadeIn>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {timeline.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 28, marginBottom: 24 }}>
                  <div style={{ width: 14, flexShrink: 0, paddingTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      background: i === timeline.length - 1 ? 'var(--emerald)' : 'rgba(16,185,129,0.3)',
                      border: `2px solid ${i === timeline.length - 1 ? 'var(--emerald)' : 'rgba(16,185,129,0.4)'}`,
                      boxShadow: i === timeline.length - 1 ? '0 0 12px rgba(16,185,129,0.5)' : 'none',
                      flexShrink: 0,
                    }} />
                    {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(16,185,129,0.15)', marginTop: 8, minHeight: 40 }} />}
                  </div>
                  <div className="ff-glass-dark" style={{ borderRadius: 14, padding: '22px 26px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'var(--emerald)', background: 'rgba(16,185,129,0.12)', padding: '4px 10px', borderRadius: 4 }}>{t.year}</span>
                      <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 700, color: '#ffffff' }}>{t.label}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{t.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security — neutral light with glass cards ── */}
      <section id="security" style={{ padding: 'var(--sp) 0', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 500, height: 300, background: 'rgba(16,185,129,0.07)', top: -60, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Security</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: 'var(--dark)', marginTop: 14 }}>
                Your money. Your data.{' '}
                <span style={{ color: 'var(--emerald)' }}>Your rules.</span>
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-2)', marginTop: 14, lineHeight: 1.7, maxWidth: 520, margin: '14px auto 0' }}>
                Being first-timers doesn't mean cutting corners. We built the security architecture that user trust demands.
              </p>
            </div>
          </FadeIn>

          <div className="ff-grid-3" style={{ gap: 24 }}>
            {[
              { Icon: Lock,   title: '256-bit AES Encryption',  desc: 'All data encrypted at rest and in transit using bank-grade AES-256 encryption and TLS 1.3.' },
              { Icon: Eye,    title: 'Read-Only Access',         desc: 'Plaid connection is strictly read-only. FutureFlow can never move, transfer, or modify your funds.' },
              { Icon: Shield, title: 'SOC 2 Type II Compliant',  desc: 'Our security practices meet the highest enterprise standards through independent third-party auditing.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <motion.div
                  whileHover={{ scale: 1.015, y: -6 }}
                  transition={{ duration: 0.22 }}
                  className="ff-glass"
                  style={{ borderRadius: 24, padding: '36px 28px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0.06) 100%)',
                    boxShadow: '0 0 24px rgba(16,185,129,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 20, flexShrink: 0,
                  }}>
                    <s.Icon size={24} color="var(--emerald)" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 18, color: 'var(--dark)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark ── */}
      <section style={{ padding: 'calc(var(--sp) * 0.9) 0', background: 'var(--surface)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ width: 500, height: 300, background: 'rgba(16,185,129,0.08)', top: -60, left: '50%', transform: 'translateX(-50%)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', color: '#ffffff', marginBottom: 16 }}>
              Be the first to know{' '}
              <span style={{ color: 'var(--emerald)' }}>when we launch.</span>
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.5)', marginBottom: 36, lineHeight: 1.7 }}>
              No fluff. When it's ready, you'll be the first in.
            </p>
            <Link to="/contact" className="btn-white">
              Join the Waitlist <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
