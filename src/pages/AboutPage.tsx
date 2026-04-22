import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Lock, Eye, Heart, Zap, Globe, Lightbulb, Puzzle, MapPin, Calendar } from 'lucide-react'

const HERO_BG = `
  radial-gradient(ellipse 70% 60% at 0% 40%, rgba(213,201,248,0.55) 0%, transparent 65%),
  radial-gradient(ellipse 50% 50% at 100% 60%, rgba(204,246,234,0.45) 0%, transparent 60%),
  #ffffff
`

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
  { Icon: Lock,      color: '#4353ff', title: 'Privacy First',       desc: 'We never sell your data, never show ads, and always give you full control. Our revenue comes only from your subscription.' },
  { Icon: Zap,       color: '#f69c20', title: 'Simple by Design',    desc: 'Powerful financial intelligence delivered through an interface anyone can pick up in minutes, no finance degree required.' },
  { Icon: Heart,     color: '#e05c5c', title: 'Genuinely on Your Side', desc: 'No referral kickbacks from banks. No upsells disguised as features. Just one honest subscription and one clear goal.' },
  { Icon: Globe,     color: '#2db37d', title: 'Accessible to All',   desc: 'Financial clarity shouldn\'t be a luxury. Our free tier ensures everyone can access the tools that actually move the needle.' },
]

const gaps = [
  { tool: 'Mint',         had: 'Expense tracking',      missing: 'Subscription management, tax help, debt payoff planning' },
  { tool: 'Rocket Money', had: 'Subscription canceling', missing: 'Net worth tracking, tax engine, investment insights' },
  { tool: 'YNAB',         had: 'Budgeting discipline',  missing: 'Everything outside manual budgeting — AI, tax, investments' },
  { tool: 'Copilot',      had: 'Beautiful UI',           missing: 'Tax planning, bill negotiation, credit monitoring' },
  { tool: 'Personal Cap.', had: 'Investment tracking',   missing: 'Subscription radar, bill negotiation, AI budgeting coach' },
]

const timeline = [
  { year: '2025', label: 'The Question', event: 'Frustrated bouncing between three different finance apps and still not having a full picture, a simple question was asked: why doesn\'t one tool just do all of this?' },
  { year: 'Early 2026', label: 'The Build Begins', event: 'With no industry pedigree — just curiosity and stubbornness — building started in Boston, MA. First connected bank account. First real transaction insight.' },
  { year: 'Mid 2026', label: 'FutureFlow Takes Shape', event: 'The AI budgeting engine, Subscription Radar, Tax Engine, Debt Payoff Planner, and Bill Negotiation AI all come together in one unified platform.' },
  { year: 'Now', label: 'Launch Imminent', event: 'Waitlist is open. FutureFlow is nearly ready to ship the product that should have existed years ago.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ background: HERO_BG, padding: 'var(--sp) 0 80px' }}>
        <div className="ff-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Our Story</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(36px, 4.5vw, 60px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginBottom: 20 }}
            >
              We looked at everything out there. Something was always missing.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', lineHeight: 1.8, maxWidth: 500 }}
            >
              FutureFlow wasn't built by industry veterans or ex-Plaid engineers. It was built by people who were just tired of using five apps to get one clear picture of their finances.
            </motion.p>
          </div>

          {/* Fact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="ff-card" style={{ padding: '36px' }}
          >
            {[
              { label: 'Founded',        val: '2026',           Icon: Calendar },
              { label: 'Headquarters',   val: 'Boston, MA',     Icon: MapPin },
              { label: 'Banks Supported', val: '12,000+',       Icon: null },
              { label: 'States Covered', val: 'All 50',         Icon: null },
              { label: 'Built by',       val: 'First-timers',   Icon: null },
              { label: 'Launch Status',  val: 'Coming Soon',    Icon: null },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '14px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
              }}>
                <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  {s.Icon && <s.Icon size={13} color="var(--muted)" strokeWidth={2} />}
                  {s.label}
                </span>
                <span style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 15, color: i === 5 ? 'var(--primary)' : 'var(--dark)' }}>
                  {s.val}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Origin story — dark spotlight */}
      <section style={{ background: 'var(--dark)', padding: 'var(--sp) 0' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 72, alignItems: 'center' }}>

            {/* Text */}
            <FadeIn x={-30}>
              <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>How It Started</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-1px', lineHeight: 1.15, color: 'var(--white)', marginTop: 16, marginBottom: 20 }}>
                A simple "what if" in Boston, 2026.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 18 }}>
                It started with the kind of frustration that's easy to ignore but hard to shake. Using Mint for spending, Rocket Money to cancel subscriptions, YNAB to stay on budget, and still not really knowing where the money was going.
              </p>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85, marginBottom: 18 }}>
                The question wasn't complicated: <em style={{ color: 'rgba(255,255,255,0.85)' }}>what if everything these apps do individually existed in one place — and it was actually intelligent?</em>
              </p>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>
                No background in fintech. No investors lined up. No blueprint. Just a conviction that the product people actually needed didn't exist yet — and a decision to build it.
              </p>
            </FadeIn>

            {/* Gap visual */}
            <FadeIn x={30} delay={0.1}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <Puzzle size={16} color="var(--lavender)" strokeWidth={1.8} />
                  <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: 'var(--lavender)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>The Gaps We Found</span>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                      <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: 'var(--white)' }}>{g.tool}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 11, fontWeight: 700, color: '#2db37d', background: 'rgba(45,179,125,0.12)', padding: '3px 8px', borderRadius: 4 }}>Good at: {g.had}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, margin: 0 }}>
                      Missing: {g.missing}
                    </p>
                  </motion.div>
                ))}
                <div style={{ marginTop: 16, padding: '14px 16px', borderRadius: 10, background: 'rgba(67,83,255,0.12)', border: '1px solid rgba(67,83,255,0.25)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Lightbulb size={14} color="var(--primary)" strokeWidth={2} />
                    <span style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 13, color: 'var(--lavender)' }}>FutureFlow — built to have it all.</span>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--lavender)' }}>
        <div className="ff-container" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto' }}>
          <FadeIn>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-flex' }}>Our Mission</span>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', lineHeight: 1.1, color: 'var(--dark)', marginTop: 16, marginBottom: 20 }}>
              Financial clarity for every American.
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'var(--dark-2)', lineHeight: 1.8 }}>
              Managing money shouldn't require a finance degree, a premium advisor, or five different apps. FutureFlow brings the intelligence of a private wealth manager into one place — and it pays for itself in the first week.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--white)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge-lavender" style={{ marginBottom: 16, display: 'inline-flex' }}>What We Stand For</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: 'var(--dark)', marginTop: 14 }}>Our Values</h2>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08} style={{ height: '100%' }}>
                <div className="ff-card" style={{ padding: '36px 28px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${v.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>
                    <v.Icon size={22} color={v.color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 19, color: 'var(--dark)', marginBottom: 12 }}>{v.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.7, flex: 1 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--dark)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>The Journey</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: 'var(--white)', marginTop: 14 }}>
                From idea to launch.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.45)', marginTop: 14 }}>Built without a roadmap. Figured it out as we went.</p>
            </div>
          </FadeIn>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            {timeline.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 28, marginBottom: 24 }}>
                  <div style={{ width: 14, flexShrink: 0, paddingTop: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: i === timeline.length - 1 ? 'var(--primary)' : 'rgba(213,201,248,0.5)', border: '2px solid var(--lavender)', flexShrink: 0 }} />
                    {i < timeline.length - 1 && <div style={{ width: 1, flex: 1, background: 'rgba(213,201,248,0.15)', marginTop: 8, minHeight: 40 }} />}
                  </div>
                  <div className="ff-card-dark" style={{ padding: '22px 26px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 700, color: 'var(--primary)', background: 'rgba(67,83,255,0.15)', padding: '4px 10px', borderRadius: 4 }}>{t.year}</span>
                      <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>{t.label}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0 }}>{t.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section id="security" style={{ padding: 'var(--sp) 0', background: 'var(--mint)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>Security</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: 'var(--dark)', marginTop: 14 }}>
                Your money. Your data. Your rules.
              </h2>
              <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-2)', marginTop: 14, lineHeight: 1.7, maxWidth: 520, margin: '14px auto 0' }}>
                Being first-timers doesn't mean cutting corners. We built the security architecture that user trust demands.
              </p>
            </div>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { Icon: Lock,   title: '256-bit AES Encryption',  desc: 'All data encrypted at rest and in transit using bank-grade AES-256 encryption and TLS 1.3.' },
              { Icon: Eye,    title: 'Read-Only Access',         desc: 'Plaid connection is strictly read-only. FutureFlow can never move, transfer, or modify your funds.' },
              { Icon: Shield, title: 'SOC 2 Type II Compliant',  desc: 'Our security practices meet the highest enterprise standards through independent third-party auditing.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <div className="ff-card" style={{ padding: '32px 28px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(67,83,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, flexShrink: 0 }}>
                    <s.Icon size={22} color="var(--primary)" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 18, color: 'var(--dark)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'calc(var(--sp) * 0.8) 0', background: 'var(--dark)', textAlign: 'center' }}>
        <div className="ff-container">
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-1.5px', color: 'var(--white)', marginBottom: 20 }}>
              Be the first to know when we launch.
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
