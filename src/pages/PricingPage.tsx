import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

const HERO_BG = `
  radial-gradient(ellipse 70% 60% at 100% 20%, rgba(255,213,191,0.5) 0%, transparent 60%),
  radial-gradient(ellipse 60% 50% at 0% 80%, rgba(213,201,248,0.45) 0%, transparent 60%),
  #ffffff
`

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
    color: '#9a9a9a',
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
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    desc: 'The complete FutureFlow experience. Everything you need to win financially.',
    color: '#4353ff',
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
    name: 'Premium+',
    price: '$19.99',
    period: '/month',
    desc: 'Maximum automation, tax optimization, and white-glove support.',
    color: '#f69c20',
    highlight: false,
    features: [
      'Everything in Premium',
      'Bill negotiation AI',
      'Fraud-proof bill splitting ★',
      'Autonomous tax engine ★',
      '50-state tax guidance ★',
      'Dedicated financial advisor',
      'Phone + chat support',
      'Early access to new features',
    ],
    cta: 'Start 30-Day Free Trial',
  },
]

const faqs = [
  { q: 'Is my financial data safe?', a: 'Yes. FutureFlow uses 256-bit AES encryption and connects to your accounts via Plaid — a bank-grade, read-only connection. We never store your banking credentials.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel at any time from your account settings with no cancellation fees. You keep access until the end of your billing period.' },
  { q: 'How does the 30-day free trial work?', a: 'Premium and Premium+ plans include a 30-day free trial. No charge until the trial ends, and you can cancel before then with no fee.' },
  { q: 'How does bill negotiation work?', a: 'Our AI calls your service providers (cable, internet, insurance) and negotiates lower rates. We only charge a success fee — 40% of first-year savings — if we actually succeed.' },
  { q: 'Does FutureFlow sell my data?', a: 'Never. We are 100% ad-free and never sell user data to third parties. Our revenue comes from subscriptions only.' },
  { q: 'When does FutureFlow launch?', a: 'We are accepting waitlist signups now and plan to launch publicly in 2026. Join the waitlist for early access and a free extended trial.' },
]

export default function PricingPage() {
  const isMobile = useIsMobile(640)
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ background: HERO_BG, padding: 'var(--sp) 0 70px', textAlign: 'center' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="ff-badge" style={{ marginBottom: 24, display: 'inline-flex' }}>Simple Pricing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(38px, 5vw, 64px)', letterSpacing: '-2px', lineHeight: 1.05, color: 'var(--dark)', marginBottom: 20 }}
          >
            Plans that pay for themselves.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 20, color: 'var(--dark-2)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}
          >
            Projected average Premium user savings: over $1,200/year. At $9.99/month, the math is obvious.
          </motion.p>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: '64px 0 100px', background: 'var(--light-grey)' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'stretch' }}>
            {plans.map((plan, i) => (
              <FadeIn key={i} delay={i * 0.1} style={{ height: '100%' }}>
                <div style={{
                  background: plan.highlight ? 'var(--dark)' : 'var(--white)',
                  border: plan.highlight ? '2px solid var(--primary)' : '1px solid var(--border)',
                  borderRadius: 20, padding: '40px 34px',
                  boxShadow: plan.highlight ? '0 20px 60px rgba(67,83,255,0.2)' : '0 5px 25px rgba(0,0,0,0.06)',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative', height: '100%',
                  transform: plan.highlight && !isMobile ? 'scale(1.03)' : 'scale(1)',
                }}>
                  {plan.badge && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: 'var(--primary)', color: '#fff', fontFamily: 'Manrope',
                      fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 50, whiteSpace: 'nowrap',
                    }}>
                      {plan.badge}
                    </div>
                  )}

                  <div style={{ marginBottom: 28 }}>
                    <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: plan.color, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 12 }}>{plan.name}</p>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 12 }}>
                      <span style={{ fontFamily: 'Manrope', fontSize: 48, fontWeight: 800, color: plan.highlight ? 'var(--white)' : 'var(--dark)', letterSpacing: '-2px' }}>{plan.price}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 15, color: plan.highlight ? 'rgba(255,255,255,0.45)' : 'var(--muted)' }}>{plan.period}</span>
                    </div>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.55)' : 'var(--dark-2)', lineHeight: 1.65 }}>{plan.desc}</p>
                  </div>

                  <Link to="/contact" style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    padding: '12px 24px', borderRadius: 50, textDecoration: 'none',
                    fontFamily: 'Lato', fontSize: 16, fontWeight: 600, marginBottom: 28, transition: 'all 0.25s',
                    background: plan.highlight ? 'var(--primary)' : 'transparent',
                    color: plan.highlight ? '#fff' : 'var(--dark)',
                    border: plan.highlight ? '1px solid var(--primary)' : `1px solid ${plan.color}`,
                  }}>
                    {plan.cta} {plan.highlight && <ArrowRight size={16} />}
                  </Link>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                    {plan.features.map((f, fi) => (
                      <div key={fi} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <Check size={15} color={plan.color} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontFamily: 'Lato', fontSize: 14, color: plan.highlight ? 'rgba(255,255,255,0.75)' : 'var(--dark-2)', lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 40, textAlign: 'center', padding: '24px 32px', background: 'var(--mint)', borderRadius: 16, maxWidth: 540, margin: '40px auto 0', border: '1px solid rgba(0,0,0,0.05)' }}>
              <p style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 700, color: 'var(--dark)' }}>
                Save 20% with annual billing
              </p>
              <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-2)', marginTop: 8 }}>
                Premium for just $7.99/month when billed annually — that's 2 months free.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'var(--sp) 0', background: 'var(--white)' }}>
        <div className="ff-container">
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-1px', color: 'var(--dark)' }}>Frequently Asked Questions</h2>
            </div>
          </FadeIn>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="ff-card" style={{ padding: '26px 30px' }}>
                  <h3 style={{ fontFamily: 'Manrope', fontSize: 17, fontWeight: 700, color: 'var(--dark)', marginBottom: 10 }}>{faq.q}</h3>
                  <p style={{ fontFamily: 'Lato', fontSize: 15, color: 'var(--dark-2)', lineHeight: 1.75 }}>{faq.a}</p>
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
              Join the waitlist today.
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.55)', marginBottom: 36 }}>
              30-day free trial at launch. No credit card required.
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
