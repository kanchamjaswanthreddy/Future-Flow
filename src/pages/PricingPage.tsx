import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check, Star, Zap, Shield } from 'lucide-react'

function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }} style={style}>
      {children}
    </motion.div>
  )
}

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    desc: 'Essential tools to get started. No credit card. No commitment.',
    color: 'rgba(255,255,255,0.45)',
    accentColor: 'rgba(255,255,255,0.3)',
    highlight: false,
    features: [
      'Spending analytics',
      'Auto categorisation',
      'Up to 2 connected accounts',
      'Monthly budget overview',
      'Basic savings goals',
      'Email support',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    desc: 'The complete FutureFlow experience. Everything you need to win financially.',
    color: '#10b981',
    accentColor: '#10b981',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Everything in Free',
      'Unlimited connected accounts',
      'AI subscription manager',
      'Debt payoff planner',
      'Cash flow forecasting',
      'Bill & due date alerts',
      'Credit score monitor',
      'Net worth tracker',
      'Investment tracking',
      'Email + Plaid Sub Radar ★',
      'Free trial ending alerts ★',
      'Portfolio health radar ★',
      'Couples / household mode',
      'Priority support',
    ],
    cta: 'Start 30-Day Free Trial',
  },
  {
    name: 'Household',
    price: '$14.99',
    period: '/month',
    desc: 'Designed for couples and households. Every signup brings a partner.',
    color: '#f69c20',
    accentColor: '#f69c20',
    highlight: false,
    features: [
      'Everything in Pro',
      'Unlimited connected accounts',
      'Couples / household mode',
      'Fraud-proof bill splitting ★',
      'Shared savings goals',
      'Joint cash flow forecasting',
      'Household net worth tracker',
      'Bill & due date alerts',
      'Investment tracking',
      'Email + Plaid Sub Radar ★',
      'Free trial ending alerts ★',
      'Portfolio health radar ★',
      'Autonomous tax engine ★',
      '50-state tax guidance ★',
      'Priority support',
    ],
    cta: 'Start 30-Day Free Trial',
  },
]

const faqs = [
  { q: 'Is my financial data safe?', a: 'Yes. FutureFlow uses 256-bit AES encryption and connects to your accounts via Plaid — a bank-grade, read-only connection. We never store your banking credentials.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel at any time from your account settings with no cancellation fees. You keep access until the end of your billing period.' },
  { q: 'How does the 30-day free trial work?', a: 'Pro and Household plans include a 30-day free trial. No charge until the trial ends, and you can cancel before then with zero fees.' },
  { q: 'How does bill negotiation work?', a: 'Our AI calls your service providers and negotiates lower rates. We only charge a success fee — 40% of first-year savings — if we actually succeed.' },
  { q: 'Does FutureFlow sell my data?', a: 'Never. We are 100% ad-free and never sell user data to third parties. Our revenue comes from subscriptions only.' },
  { q: 'When does FutureFlow launch?', a: 'We are accepting waitlist signups now and plan to launch publicly in 2026. Join the waitlist for early access and a free extended trial.' },
]

export default function PricingPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* ── HERO ── */}
      <section style={{
        background: `
          radial-gradient(ellipse 55% 50% at 10% 30%, rgba(16,185,129,0.07) 0%, transparent 65%),
          radial-gradient(ellipse 50% 45% at 90% 70%, rgba(213,201,248,0.35) 0%, transparent 60%),
          #f5f5f7
        `,
        padding: 'var(--sp) 0 80px', textAlign: 'center',
      }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Simple Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(38px, 5vw, 68px)', letterSpacing: '-2.5px', lineHeight: 1.04, color: 'var(--dark)', marginBottom: 20 }}
          >
            Plans that pay for<br />
            <span style={{ color: 'var(--emerald)' }}>themselves.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 19, color: 'var(--dark-2)', maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.75 }}
          >
            Average Pro user saves over $1,200/year. At $9.99/month, the math writes itself.
          </motion.p>
          {/* ROI signal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 22px', borderRadius: 50, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
          >
            <Zap size={14} color="var(--emerald)" strokeWidth={2} />
            <span style={{ fontFamily: 'Lato', fontSize: 14, fontWeight: 600, color: 'var(--emerald)' }}>Average break-even: 2.4 days after joining</span>
          </motion.div>
        </div>
      </section>

      {/* ── PLANS — dark glass ── */}
      <section style={{ padding: '80px 0 100px', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient blobs */}
        <div className="ff-blob" style={{ top: '10%', left: '5%', width: 360, height: 360, background: 'rgba(16,185,129,0.07)' }} />
        <div className="ff-blob" style={{ bottom: '15%', right: '8%', width: 300, height: 300, background: 'rgba(67,83,255,0.08)' }} />
        <div className="ff-blob" style={{ top: '50%', left: '38%', width: 240, height: 240, background: 'rgba(246,156,32,0.05)' }} />

        <div className="ff-container" style={{ position: 'relative' }}>
          <div className="ff-grid-3" style={{ gap: 20, alignItems: 'start' }}>
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <motion.div
                  whileHover={{ y: plan.highlight ? -4 : -3 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: plan.highlight
                      ? 'rgba(16,185,129,0.06)'
                      : i === 2 ? 'rgba(246,156,32,0.05)' : 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(24px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                    border: plan.highlight
                      ? '1px solid rgba(16,185,129,0.35)'
                      : `1px solid ${plan.accentColor === '#f69c20' ? 'rgba(246,156,32,0.15)' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: 24,
                    padding: plan.highlight ? '40px 36px 44px' : '36px 32px 40px',
                    display: 'flex', flexDirection: 'column',
                    position: 'relative', height: '100%',
                    boxShadow: plan.highlight
                      ? '0 24px 80px rgba(16,185,129,0.12)'
                      : '0 4px 32px rgba(0,0,0,0.2)',
                  }}
                >
                  {/* Most Popular badge */}
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--emerald)', color: '#fff',
                      fontFamily: 'Manrope', fontSize: 11, fontWeight: 700,
                      padding: '5px 18px', borderRadius: 50, whiteSpace: 'nowrap',
                      boxShadow: '0 4px 16px rgba(16,185,129,0.4)',
                    }}>
                      <Star size={10} strokeWidth={2.5} style={{ display: 'inline', marginRight: 4, marginBottom: 1 }} />
                      {plan.badge}
                    </div>
                  )}

                  {/* Plan header */}
                  <div style={{ marginBottom: 28 }}>
                    <p style={{
                      fontFamily: 'Lato', fontSize: 11, fontWeight: 700,
                      color: plan.accentColor, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: 16,
                    }}>{plan.name}</p>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
                      <span style={{
                        fontFamily: 'Manrope', fontWeight: 800,
                        fontSize: plan.highlight ? 56 : 48,
                        color: 'rgba(255,255,255,0.95)',
                        letterSpacing: '-2.5px', lineHeight: 1,
                      }}>{plan.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>{plan.period}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65 }}>{plan.desc}</p>
                  </div>

                  {/* CTA */}
                  <Link to="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '13px 24px', borderRadius: 50, textDecoration: 'none',
                    fontFamily: 'Lato', fontSize: 15, fontWeight: 700, marginBottom: 28,
                    background: plan.highlight ? 'var(--emerald)' : i === 2 ? 'rgba(246,156,32,0.15)' : 'rgba(255,255,255,0.08)',
                    color: plan.highlight ? '#fff' : plan.accentColor,
                    border: plan.highlight ? 'none' : `1px solid ${plan.accentColor}30`,
                    boxShadow: plan.highlight ? '0 8px 28px rgba(16,185,129,0.35)' : 'none',
                    transition: 'all 0.25s',
                  }}>
                    {plan.cta} {plan.highlight && <ArrowRight size={15} />}
                  </Link>

                  {/* Divider */}
                  <div style={{ height: 1, background: `${plan.accentColor}18`, marginBottom: 22 }} />

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {plan.features.map((f, fi) => {
                      const isStar = f.includes('★')
                      return (
                        <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                          <Check
                            size={14}
                            color={isStar ? '#f69c20' : plan.accentColor}
                            strokeWidth={2.5}
                            style={{ flexShrink: 0, marginTop: 2 }}
                          />
                          <span style={{
                            fontFamily: 'Lato', fontSize: 13,
                            color: isStar ? 'rgba(246,156,32,0.85)' : 'rgba(255,255,255,0.65)',
                            lineHeight: 1.5,
                            fontWeight: isStar ? 600 : 400,
                          }}>{f}</span>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Annual savings — emerald signal */}
          <FadeIn delay={0.35}>
            <motion.div
              style={{
                marginTop: 36, padding: '20px 28px',
                background: 'rgba(16,185,129,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(16,185,129,0.2)',
                borderRadius: 16, maxWidth: 560, margin: '36px auto 0',
                display: 'flex', alignItems: 'center', gap: 16,
                boxShadow: '0 4px 24px rgba(16,185,129,0.08)',
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={18} color="var(--emerald)" strokeWidth={2} />
              </div>
              <div>
                <p style={{ fontFamily: 'Manrope', fontSize: 15, fontWeight: 700, color: 'var(--emerald)' }}>
                  Save 20% with annual billing
                </p>
                <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>
                  Pro for just $7.99/month billed annually — that's 2 months free.
                </p>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ — light neutral ── */}
      <section style={{ padding: 'var(--sp) 0', background: '#f5f5f7', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ top: '0%', right: '5%', width: 280, height: 280, background: 'rgba(213,201,248,0.2)', filter: 'blur(80px)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <span className="ff-badge" style={{ marginBottom: 16, display: 'inline-flex' }}>FAQ</span>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1.5px', color: 'var(--dark)', marginTop: 14 }}>
                Frequently asked questions.
              </h2>
            </div>
          </FadeIn>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="ff-glass"
                  style={{ padding: '26px 30px', borderRadius: 24 }}
                >
                  <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(67,83,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontFamily: 'Manrope', fontSize: 12, fontWeight: 800, color: 'var(--primary)' }}>{i + 1}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'Manrope', fontSize: 16, fontWeight: 700, color: 'var(--dark)', marginBottom: 8 }}>{faq.q}</h3>
                      <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.78 }}>{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — dark ── */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--surface)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="ff-blob" style={{ top: '20%', left: '50%', transform: 'translateX(-50%)', width: 500, height: 300, background: 'rgba(16,185,129,0.06)' }} />
        <div className="ff-container" style={{ position: 'relative' }}>
          <FadeIn>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
              borderRadius: 50, padding: '6px 16px', marginBottom: 28,
            }}>
              <Shield size={13} color="var(--emerald)" strokeWidth={2} />
              <span style={{ fontFamily: 'Lato', fontSize: 12, fontWeight: 600, color: 'var(--emerald)' }}>256-bit encrypted · Read-only access · SOC 2 compliant</span>
            </div>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-1.5px', color: 'var(--white)', marginBottom: 18 }}>
              Join the waitlist today.
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.45)', marginBottom: 36, maxWidth: 400, margin: '0 auto 36px', lineHeight: 1.75 }}>
              30-day free trial at launch. No credit card required.
            </p>
            <Link to="/contact" className="btn-white">
              Join the Waitlist <ArrowRight size={17} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
