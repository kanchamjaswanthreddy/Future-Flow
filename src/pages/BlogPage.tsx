import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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

const featured = {
  slug: 'the-9400-problem',
  tag: 'Money Tips',
  title: 'The $9,400 Problem: How Hidden Fees Are Draining American Wallets',
  excerpt: 'Most Americans don\'t know they\'re leaking thousands of dollars a year to forgotten subscriptions, bad debt payoff order, and high-interest traps. Here\'s exactly how it happens — and how to stop it.',
  date: 'April 14, 2026',
  readTime: '8 min read',
  author: 'FutureFlow Team',
}

const posts = [
  {
    slug: 'avalanche-vs-snowball',
    tag: 'Personal Finance',
    title: 'Avalanche vs. Snowball: Which Debt Payoff Method Saves You More?',
    excerpt: 'We ran the numbers on 50,000 real debt payoff plans. The results might surprise you.',
    date: 'April 10, 2026',
    readTime: '6 min read',
    color: '#4353ff',
  },
  {
    slug: '12-subscriptions',
    tag: 'Subscriptions',
    title: '12 Subscriptions You\'re Probably Paying For Right Now (And Don\'t Know It)',
    excerpt: 'Our data shows the average American pays for 3.4 subscriptions they haven\'t used in over 6 months.',
    date: 'April 7, 2026',
    readTime: '5 min read',
    color: '#f69c20',
  },
  {
    slug: '11-tax-deductions',
    tag: 'Taxes',
    title: 'The 11 Most Missed Tax Deductions for Freelancers and Remote Workers',
    excerpt: 'If you work from home or freelance, you\'re likely leaving hundreds — maybe thousands — on the table.',
    date: 'April 2, 2026',
    readTime: '9 min read',
    color: '#2db37d',
  },
  {
    slug: '50-30-20-rule-dead',
    tag: 'Budgeting',
    title: 'The 50/30/20 Rule Is Dead. Here\'s What Actually Works in 2026.',
    excerpt: 'Rigid percentage-based budgets break down fast. Here\'s a modern, flexible system our data shows actually works.',
    date: 'March 28, 2026',
    readTime: '7 min read',
    color: '#9b59b6',
  },
  {
    slug: 'investing-with-100',
    tag: 'Investing',
    title: 'How to Start Investing With $100: A No-Hype Beginner\'s Guide',
    excerpt: 'You don\'t need thousands to start building wealth. Here\'s a realistic, actionable plan for total beginners.',
    date: 'March 22, 2026',
    readTime: '6 min read',
    color: '#e74c3c',
  },
  {
    slug: 'credit-score-went-down',
    tag: 'Credit',
    title: 'Why Your Credit Score Went Down (Even If You Did Nothing Wrong)',
    excerpt: 'Credit score drops can feel mysterious. We break down the 7 most common causes and exactly how to fix each one.',
    date: 'March 17, 2026',
    readTime: '5 min read',
    color: '#4353ff',
  },
]

const categories = ['All', 'Personal Finance', 'Budgeting', 'Subscriptions', 'Investing', 'Taxes', 'Credit', 'Money Tips']

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ background: 'var(--dark)', padding: '80px 24px 60px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>FutureFlow Blog</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: 16, maxWidth: 640 }}
          >
            Financial clarity,<br /><span style={{ color: 'var(--peach)' }}>in plain English.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
            style={{ fontFamily: 'Lato', fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 460, lineHeight: 1.7 }}
          >
            Practical guides, data-driven insights, and honest advice to help you take control of your money.
          </motion.p>
        </div>
      </section>

      {/* Category filter */}
      <section style={{ background: 'var(--lavender)', padding: '16px 24px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="ff-container" style={{ display: 'flex', gap: 10, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {categories.map((c, i) => (
            <button key={c} style={{
              fontFamily: 'Lato', fontSize: 13, fontWeight: 600,
              padding: '8px 18px', borderRadius: 50, border: 'none', cursor: 'pointer', whiteSpace: 'nowrap',
              background: i === 0 ? 'var(--dark)' : 'rgba(0,0,0,0.08)',
              color: i === 0 ? 'var(--white)' : 'var(--dark-2)',
              transition: 'all 0.3s',
            }}>
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding: '60px 24px 40px', background: 'var(--white)' }}>
        <div className="ff-container">
          <FadeIn>
            <div className="ff-card ff-featured-post" style={{ padding: '48px 44px', background: 'var(--dark)', borderColor: 'rgba(213,201,248,0.2)', display: 'grid', gap: 40, alignItems: 'center', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div>
                <span style={{ display: 'inline-block', background: 'var(--peach)', color: 'var(--dark)', fontFamily: 'Lato', fontSize: 12, fontWeight: 700, padding: '5px 14px', borderRadius: 4, marginBottom: 20 }}>{featured.tag}</span>
                <h2 style={{ fontFamily: 'Manrope', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: 'var(--white)', lineHeight: 1.25, letterSpacing: '-0.5px', marginBottom: 16 }}>{featured.title}</h2>
                <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 28 }}>{featured.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{featured.date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                  <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{featured.readTime}</span>
                </div>
                <Link to={`/blog/${featured.slug}`} className="btn-white" style={{ fontSize: 15, padding: '11px 24px' }}>
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
              {/* Decorative card */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 220, background: 'rgba(213,201,248,0.08)', border: '1px solid rgba(213,201,248,0.15)', borderRadius: 16, padding: '24px 20px' }}>
                  <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>The real cost of financial chaos</p>
                  {[
                    { label: 'Forgotten subscriptions', val: '$3,720/yr' },
                    { label: 'Excess debt interest', val: '$2,800/yr' },
                    { label: 'Missed deductions', val: '$1,400/yr' },
                    { label: 'Overdraft fees', val: '$840/yr' },
                    { label: 'High-fee accounts', val: '$640/yr' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.label}</span>
                      <span style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: '#ff6b6b' }}>{item.val}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12 }}>
                    <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 700, color: 'var(--white)' }}>Total leak</span>
                    <span style={{ fontFamily: 'Manrope', fontSize: 16, fontWeight: 800, color: '#ff6b6b' }}>$9,400/yr</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ padding: `40px 24px var(--sp)`, background: 'var(--white)' }}>
        <div className="ff-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
            {posts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.07} style={{ height: '100%' }}>
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="ff-card" style={{ padding: '28px', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                      <span style={{ display: 'inline-block', background: `${post.color}18`, color: post.color, fontFamily: 'Lato', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 4 }}>{post.tag}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--muted)' }}>{post.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: 'Manrope', fontSize: 18, fontWeight: 700, color: 'var(--dark)', lineHeight: 1.35, marginBottom: 12, flex: 1 }}>{post.title}</h3>
                    <p style={{ fontFamily: 'Lato', fontSize: 14, color: 'var(--dark-3)', lineHeight: 1.65, marginBottom: 20 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                      <span style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--muted)' }}>{post.date}</span>
                      <span style={{ fontFamily: 'Lato', fontSize: 13, fontWeight: 700, color: post.color, display: 'flex', alignItems: 'center', gap: 4 }}>
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--lavender)', textAlign: 'center' }}>
        <div className="ff-container">
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'var(--dark)', letterSpacing: '-0.8px', marginBottom: 16 }}>
              Get weekly money tips in your inbox.
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-2)', marginBottom: 32, maxWidth: 400, margin: '0 auto 32px' }}>
              No spam. Just actionable, data-driven personal finance insights every week.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 480, margin: '0 auto' }}>
              <input type="email" placeholder="your@email.com" style={{
                flex: 1, minWidth: 220, padding: '13px 20px', borderRadius: 50, border: '1px solid rgba(0,0,0,0.15)',
                fontFamily: 'Lato', fontSize: 15, background: 'rgba(255,255,255,0.8)', outline: 'none',
              }} />
              <button className="btn-dark" style={{ fontSize: 15, padding: '13px 24px' }}>Subscribe</button>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
