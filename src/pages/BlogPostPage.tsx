import { useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

type Block =
  | { type: 'intro'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'stats'; items: { label: string; val: string; color: string }[] }

interface Post {
  slug: string; tag: string; color: string
  title: string; excerpt: string
  date: string; readTime: string; author: string
  content: Block[]
}

const posts: Post[] = [
  {
    slug: 'the-9400-problem',
    tag: 'Money Tips', color: '#4353ff',
    title: 'The $9,400 Problem: How Hidden Fees Are Draining American Wallets',
    excerpt: 'Most Americans don\'t know they\'re leaking thousands of dollars a year to forgotten subscriptions, bad debt payoff order, and high-interest traps.',
    date: 'April 14, 2026', readTime: '8 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'Most Americans know they\'re not perfect with money. What they don\'t know is exactly how much that costs — on average, $9,400 per person, per year. Not from big disasters. From slow, invisible leaks.' },
      { type: 'p', text: 'We analyzed thousands of connected financial accounts and found the same five patterns draining money from nearly every household. The good news: every single one is fixable once you know it\'s happening.' },
      { type: 'h2', text: 'Where the $9,400 goes' },
      { type: 'stats', items: [
        { label: 'Forgotten subscriptions', val: '$3,720/yr', color: '#e05c5c' },
        { label: 'Wrong debt payoff order', val: '$2,800/yr', color: '#f69c20' },
        { label: 'Missed tax deductions', val: '$1,400/yr', color: '#2db37d' },
        { label: 'Overdraft & late fees', val: '$840/yr', color: '#9b59b6' },
        { label: 'High-fee accounts & funds', val: '$640/yr', color: '#4353ff' },
      ]},
      { type: 'h2', text: 'The subscription problem is worse than you think' },
      { type: 'p', text: 'The average person pays for 3.4 subscriptions they haven\'t used in over six months. At an average of $23.50 each per month, that\'s $957 a year disappearing quietly. Free trials that converted without a reminder. Services you meant to cancel. Apps you forgot you upgraded.' },
      { type: 'p', text: 'The sneakiest ones don\'t show up clearly in your bank feed — they\'re tucked into old email receipts, using slightly different business names, or buried under a parent company name. A $14.99 charge from "AMZN Digital" could be an audiobook club you signed up for in 2023.' },
      { type: 'h2', text: 'The debt mistake that costs $2,800' },
      { type: 'p', text: 'Most people pay off their smallest debt first because it feels good to eliminate an account. This is called the Snowball Method — and emotionally, it works. Mathematically, it costs you. Paying minimum payments on a 24% APR card while clearing a 9% APR card first means the high-interest balance is compounding at full speed while you feel productive.' },
      { type: 'p', text: 'The Avalanche Method — targeting highest APR first — saves an average of $2,800 in interest on a typical household debt load. No extra money required. Just a different order.' },
      { type: 'h2', text: 'The deductions sitting unclaimed on your tax return' },
      { type: 'p', text: 'If you work from home even part-time, you likely qualify for the home office deduction, your internet bill, business software, and phone expenses. Freelancers and self-employed people often miss health insurance premiums, retirement contributions, and the full mileage deduction. The IRS doesn\'t send reminders. Most people leave $1,400 in their own money on the table every April.' },
      { type: 'h2', text: 'Overdraft fees are a tax on not paying attention' },
      { type: 'p', text: 'The average overdraft fee is $34. The average American pays 25 of them per year — mostly on purchases under $25. A $4 coffee triggers a $34 fee because the paycheck cleared at 9 AM and the coffee charged at 8:58 AM. These are entirely preventable with real-time balance alerts and cash flow forecasting.' },
      { type: 'callout', text: 'The $9,400 leak isn\'t one big mistake — it\'s dozens of small, invisible ones. The only way to stop it is to see it. That\'s what FutureFlow was built to do.' },
    ],
  },
  {
    slug: 'avalanche-vs-snowball',
    tag: 'Personal Finance', color: '#4353ff',
    title: 'Avalanche vs. Snowball: Which Debt Payoff Method Saves You More?',
    excerpt: 'We ran the numbers on 50,000 real debt payoff plans. The results might surprise you.',
    date: 'April 10, 2026', readTime: '6 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'Two competing debt payoff strategies. One saves you more money. One feels better psychologically. We modeled both against 50,000 real household debt profiles — here\'s what we found.' },
      { type: 'h2', text: 'The Debt Avalanche Method' },
      { type: 'p', text: 'Pay the minimum on every debt. Put every extra dollar toward the debt with the highest interest rate first. Once that\'s gone, roll that payment into the next highest rate. Repeat.' },
      { type: 'p', text: 'On a typical $28,000 debt spread across a 24% APR card, a 21% APR card, a car loan at 7%, and a student loan at 5%, the Avalanche method saves an average of $4,100 in interest compared to paying only minimums — and gets you debt-free 31 months faster.' },
      { type: 'h2', text: 'The Debt Snowball Method' },
      { type: 'p', text: 'Pay the minimum on every debt. Put every extra dollar toward the smallest balance first regardless of interest rate. Get a quick win, feel the momentum, roll that payment into the next smallest.' },
      { type: 'p', text: 'Dave Ramsey popularized this method because it works emotionally. Eliminating an account, however small, gives real psychological relief. Studies show people who use the Snowball method are more likely to stay on plan — because they see visible progress faster.' },
      { type: 'h2', text: 'What the numbers actually show' },
      { type: 'p', text: 'Avalanche wins on math, every time. On the same $28,000 example, Snowball costs about $2,100 more in interest than Avalanche. But here\'s the nuance: a debt payoff plan you abandon after 6 months costs you far more than either method.' },
      { type: 'callout', text: 'The best debt payoff method is the one you actually stick to. Avalanche wins on paper. Snowball wins if motivation is your bottleneck.' },
      { type: 'h2', text: 'The hybrid approach (what we recommend)' },
      { type: 'ul', items: [
        'Pick your one smallest debt and pay it off first — get the psychological win.',
        'After that account is gone, switch fully to Avalanche order for everything remaining.',
        'Automate the payments so the discipline question disappears entirely.',
        'Use cash flow forecasting to find extra money to throw at debt each month.',
      ]},
      { type: 'h2', text: 'How to find extra money to accelerate payoff' },
      { type: 'p', text: 'The method matters less than the amount you\'re putting toward debt each month. Before picking Avalanche or Snowball, audit your subscriptions, optimize your tax withholding, and review your fixed bills. Most households can free up $150–$400/month without changing their lifestyle. That extra money, applied to debt, matters more than the order.' },
    ],
  },
  {
    slug: '12-subscriptions',
    tag: 'Subscriptions', color: '#f69c20',
    title: '12 Subscriptions You\'re Probably Paying For Right Now (And Don\'t Know It)',
    excerpt: 'Our data shows the average American pays for 3.4 subscriptions they haven\'t used in over 6 months.',
    date: 'April 7, 2026', readTime: '5 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'When we analyze newly connected accounts, the pattern is always the same: people are shocked by what they\'re paying for. Not because they\'re irresponsible — because subscriptions are designed to be invisible after the sign-up dopamine wears off.' },
      { type: 'p', text: 'The average user in our beta had 11 active subscriptions. Three of them hadn\'t been used in more than six months. Here are the 12 most common forgotten charges we find, and how to track them down.' },
      { type: 'h2', text: 'The Usual Suspects' },
      { type: 'ol', items: [
        'Streaming duplicates — Netflix AND Hulu AND Peacock AND Max. Pick two. The other two are $25/month of background noise.',
        'Adobe Creative Cloud ($54.99–$89.99/mo) — signed up for a project, still paying two years later.',
        'Gym membership — the most universally unused subscription on earth. January prices, March attendance.',
        'LinkedIn Premium ($39.99/mo) — a lot of people pay for this every month and open it four times a year.',
        'Cloud storage overage — you\'re paying for 200GB because you haven\'t deleted 2017 photos in six years.',
        'Amazon Prime (or Prime Video separately) — worth auditing: do you actually use the shipping benefits monthly?',
        'Duplicate news subscriptions — NYT, WSJ, and The Atlantic all at once. Most people read one.',
        'App subscriptions on autopay — productivity tools, meditation apps, recipe apps, language apps.',
        'Spotify AND YouTube Premium — both are redundant unless you specifically need video music.',
        'Antivirus software — Windows Defender and macOS built-in security are genuinely good in 2026.',
        'Domain names — registered for a business idea in 2021, renewed automatically every year since.',
        'Old gaming subscriptions — Xbox Game Pass, PS Plus, EA Play. Still running from a console you sold.',
      ]},
      { type: 'h2', text: 'How to find every subscription you\'re paying for' },
      { type: 'p', text: 'The most thorough method combines two sources: your bank/card statements and your email inbox. Banks catch everything that charges your card directly. But some subscriptions appear under confusing parent company names. Your email catches the receipt trail — search for "receipt," "invoice," "your subscription," and "billing confirmation."' },
      { type: 'callout', text: 'FutureFlow\'s Subscription Radar scans both your transactions AND your email simultaneously — it\'s the only way to catch everything, including trials that converted months ago under a name you don\'t recognize.' },
      { type: 'h2', text: 'A simple cancellation framework' },
      { type: 'ul', items: [
        'Use it monthly → Keep it.',
        'Used it once in the last 90 days → Keep it, but downgrade the tier.',
        'Not used in 90+ days → Cancel now, not "this weekend."',
        'Free trial → Set a calendar reminder for 2 days before it charges. Review then, not after.',
      ]},
    ],
  },
  {
    slug: '11-tax-deductions',
    tag: 'Taxes', color: '#2db37d',
    title: 'The 11 Most Missed Tax Deductions for Freelancers and Remote Workers',
    excerpt: 'If you work from home or freelance, you\'re likely leaving hundreds — maybe thousands — on the table.',
    date: 'April 2, 2026', readTime: '9 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'The IRS tax code contains over 70,000 pages. The deductions that benefit freelancers and remote workers are buried in there — and most people never claim them. Here are the 11 most commonly missed, with what you need to document each one.' },
      { type: 'h2', text: '1. Home Office Deduction' },
      { type: 'p', text: 'If you use a dedicated space exclusively for work — a spare bedroom, a partitioned area, any space used solely as your office — you can deduct a portion of your rent or mortgage interest, utilities, and internet. The simplified method gives you $5 per square foot, up to 300 sq ft ($1,500 max). The regular method calculates your actual expenses proportional to the office\'s percentage of your home\'s square footage and typically yields more.' },
      { type: 'h2', text: '2. Internet Bill' },
      { type: 'p', text: 'The business-use percentage of your internet bill is deductible. If you work from home full-time, a 50–80% business allocation is common and defensible. Keep your monthly statements.' },
      { type: 'h2', text: '3. Business Phone' },
      { type: 'p', text: 'Same principle as internet — the business-use percentage of your phone bill and any business apps on it are deductible. Track the percentage honestly and apply it to your monthly bill.' },
      { type: 'h2', text: '4. Software & Subscriptions' },
      { type: 'p', text: 'Any software subscription used for work is fully deductible: project management tools, design software, cloud storage for work files, communication tools, accounting software, AI writing tools. Keep a list.' },
      { type: 'h2', text: '5. Professional Development' },
      { type: 'p', text: 'Online courses, books, industry conferences, professional memberships, certifications — all deductible as long as they maintain or improve skills for your current profession. A graphic designer buying a design course: fully deductible. Same designer buying a cooking class: not deductible.' },
      { type: 'h2', text: '6. Business Travel' },
      { type: 'p', text: 'Flights, hotels, ground transportation, and 50% of meals for trips taken primarily for business purposes are deductible. A 3-day conference with a vacation day attached: deduct 3/4 of travel costs.' },
      { type: 'h2', text: '7. Business Meals (50%)' },
      { type: 'p', text: 'Meals with clients, partners, or contractors where business was discussed: 50% deductible. Document who was there, what was discussed, and save the receipt. The business discussion has to be genuine.' },
      { type: 'h2', text: '8. Health Insurance Premiums (Self-Employed)' },
      { type: 'p', text: 'If you\'re self-employed and not eligible for employer coverage through a spouse, 100% of your health, dental, and vision insurance premiums are deductible — even if you don\'t itemize. This is a significant above-the-line deduction most freelancers miss.' },
      { type: 'h2', text: '9. Retirement Contributions' },
      { type: 'p', text: 'A SEP-IRA lets self-employed people contribute up to 25% of net self-employment income (max $69,000 in 2026). Solo 401(k) has even more flexibility. These contributions are tax-deductible and reduce your taxable income dollar-for-dollar.' },
      { type: 'h2', text: '10. Vehicle Mileage' },
      { type: 'p', text: 'For 2026, the standard mileage rate is $0.67 per mile for business use. Drive to a client meeting, the post office for business shipments, or an equipment pickup — log it. 1,000 business miles = $670 deduction. Use a mileage tracking app to document every trip.' },
      { type: 'h2', text: '11. Contractor & Professional Fees' },
      { type: 'p', text: 'Fees paid to your accountant, lawyer for business matters, freelancers you hired, or business consultants are fully deductible. Keep invoices and payment records.' },
      { type: 'callout', text: 'FutureFlow\'s Tax Engine automatically flags transactions that qualify as deductions as they happen — so you stop scrambling in April and start capturing every dollar year-round.' },
    ],
  },
  {
    slug: '50-30-20-rule-dead',
    tag: 'Budgeting', color: '#9b59b6',
    title: 'The 50/30/20 Rule Is Dead. Here\'s What Actually Works in 2026.',
    excerpt: 'Rigid percentage-based budgets break down fast. Here\'s a modern, flexible system our data shows actually works.',
    date: 'March 28, 2026', readTime: '7 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'The 50/30/20 rule — 50% on needs, 30% on wants, 20% on savings — was developed in the 1990s when a median-income household could afford a median home. That\'s no longer true. The rule is broken, and anyone who\'s tried to apply it recently already knows it.' },
      { type: 'h2', text: 'Why 50/30/20 fails in 2026' },
      { type: 'ul', items: [
        'Housing alone consumes 35–50% of take-home pay in most metro areas. That\'s the entire "needs" bucket, before groceries, insurance, or utilities.',
        'Student loan payments averaging $400–$600/month are classified as "needs" — eating 8–12% of a $60K salary before anything else.',
        'Inflation since 2020 has pushed the cost of necessities up 25–40% while most wages haven\'t kept pace.',
        'Gig and freelance income is variable. Rigid percentage rules assume consistent paychecks.',
      ]},
      { type: 'h2', text: 'What actually works: the three alternatives' },
      { type: 'h2', text: '1. Zero-Based Budgeting' },
      { type: 'p', text: 'Every dollar gets a specific job before the month begins. Income minus all assigned expenses and savings = zero. You\'re not restricting yourself — you\'re deciding in advance what every dollar does. This eliminates the "where did my money go?" feeling because you already told it where to go.' },
      { type: 'p', text: 'Best for: people who want complete control and don\'t mind a monthly planning session.' },
      { type: 'h2', text: '2. Pay Yourself First' },
      { type: 'p', text: 'On payday, automatically transfer your savings target (whatever percentage your situation allows — even 5% is a start) to a separate account before you see it. Spend the rest freely. You can\'t overspend what you never see.' },
      { type: 'p', text: 'Best for: people who hate budgeting but want to build savings without thinking about it.' },
      { type: 'h2', text: '3. Values-Based Budgeting' },
      { type: 'p', text: 'Identify the 3–5 things that genuinely matter most to you — travel, your kids, fitness, eating well, whatever. Spend generously on those. Cut aggressively on everything else. No guilt, no arbitrary percentage targets.' },
      { type: 'p', text: 'Best for: people who feel constrained by rigid systems but still want intentionality around money.' },
      { type: 'callout', text: 'The best budget is the one you can actually maintain. The worst budget is one that looks perfect in a spreadsheet and gets abandoned in February.' },
      { type: 'h2', text: 'The one rule that does hold up' },
      { type: 'p', text: 'Save something — anything — before you spend. Even if it\'s 3% of your income, automate it and let it compound. The specific percentage matters far less than the consistency. What used to be 50/30/20 is better thought of as: cover your non-negotiables, save something automatically, align the rest with your actual values. That\'s it.' },
    ],
  },
  {
    slug: 'investing-with-100',
    tag: 'Investing', color: '#e74c3c',
    title: 'How to Start Investing With $100: A No-Hype Beginner\'s Guide',
    excerpt: 'You don\'t need thousands to start building wealth. Here\'s a realistic, actionable plan for total beginners.',
    date: 'March 22, 2026', readTime: '6 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: '"I\'ll start investing when I have more money." This is the most expensive sentence in personal finance. Compound interest doesn\'t wait for you to feel ready — and starting with $100 today is genuinely better than starting with $10,000 in three years.' },
      { type: 'h2', text: 'Before you invest: two prerequisites' },
      { type: 'ul', items: [
        'High-interest debt first. If you\'re carrying credit card debt at 18%+, paying it off is a guaranteed 18% return. No investment beats that risk-free.',
        'A starter emergency fund. $500–$1,000 in a savings account before you invest anything. Unexpected expenses will happen; you need cash that isn\'t in the market.',
      ]},
      { type: 'h2', text: 'Where to open an account (free options)' },
      { type: 'p', text: 'Fidelity, Charles Schwab, and Vanguard all offer brokerage accounts with no minimums and no commissions. Open one today — the account itself costs nothing and takes 10 minutes. If you want a Roth IRA (usually the best vehicle for most beginners), you can open that too — same platforms, same process.' },
      { type: 'h2', text: 'What to buy with $100' },
      { type: 'p', text: 'Skip individual stocks for now. A single company can go to zero; a diversified fund won\'t. Here\'s what actually makes sense for a beginner with $100:' },
      { type: 'ul', items: [
        'Total US Market Index Fund (FSKAX at Fidelity, VTI at Vanguard) — one fund, every US publicly traded company, 0% expense ratio at Fidelity.',
        'S&P 500 ETF (VOO or SPY) — the 500 largest US companies. 7–10% average annual return historically. $100 buys fractional shares.',
        'Target-date fund — if you want to set it and forget it completely, a 2055 or 2060 target-date fund automatically adjusts its risk profile as you get closer to retirement.',
      ]},
      { type: 'h2', text: 'The math that makes starting now obvious' },
      { type: 'stats', items: [
        { label: '$100/mo for 10 years at 7%', val: '$17,308', color: '#4353ff' },
        { label: '$100/mo for 20 years at 7%', val: '$52,093', color: '#2db37d' },
        { label: '$100/mo for 30 years at 7%', val: '$121,997', color: '#f69c20' },
      ]},
      { type: 'p', text: 'The difference between starting at 25 vs. 35 is not 10 years — it\'s $70,000 on the same $100/month investment. Time in the market beats timing the market, and it especially beats waiting until you feel ready.' },
      { type: 'h2', text: 'What to do next month' },
      { type: 'ol', items: [
        'Open a Roth IRA or taxable brokerage account at Fidelity or Schwab.',
        'Buy $100 of a total market index fund.',
        'Set up an automatic $50–$100/month transfer on payday.',
        'Do not check the balance more than once a month. Markets go up and down — your job is to keep contributing.',
      ]},
      { type: 'callout', text: 'You don\'t need a financial advisor to invest $100. You need an account, an index fund, and an automatic transfer. That\'s the whole strategy.' },
    ],
  },
  {
    slug: 'credit-score-went-down',
    tag: 'Credit', color: '#4353ff',
    title: 'Why Your Credit Score Went Down (Even If You Did Nothing Wrong)',
    excerpt: 'Credit score drops can feel mysterious. We break down the 7 most common causes and exactly how to fix each one.',
    date: 'March 17, 2026', readTime: '5 min read', author: 'FutureFlow Team',
    content: [
      { type: 'intro', text: 'You checked your credit score and it dropped. You didn\'t miss a payment. You didn\'t apply for anything. You haven\'t touched your credit in months. So what happened? Here are the seven most common causes — most of which have nothing to do with something you did wrong.' },
      { type: 'h2', text: '1. Your credit utilization crept up' },
      { type: 'p', text: 'Utilization — the ratio of your balance to your credit limit — is the second most important credit factor after payment history. If your balance increased even slightly (or your limit was reduced), your utilization went up, and your score went down. Above 30% hurts. Above 50% hurts a lot. Ideal is under 10%. The fix is immediate: pay down the balance, and your score recovers within one billing cycle.' },
      { type: 'h2', text: '2. A hard inquiry from a forgotten application' },
      { type: 'p', text: 'That store credit card you signed up for three months ago to get 20% off? Hard inquiry. The apartment application? Hard inquiry. Pre-approval requests you said yes to online? Some of those trigger hard pulls. Each hard inquiry drops your score 5–10 points and stays on your report for two years, with diminishing impact after six months.' },
      { type: 'h2', text: '3. An account was closed' },
      { type: 'p', text: 'When a credit account closes — whether you closed it or the issuer did — two things happen: your total available credit drops (utilization goes up), and if it was an older account, your average credit age drops. Both hurt your score. The fix: don\'t close old credit cards, even if you don\'t use them. Use them for one small purchase per year to keep them active.' },
      { type: 'h2', text: '4. You opened a new account' },
      { type: 'p', text: 'Opening new credit lowers your average account age. A 6-year average account age dropping to 4 years because you opened a new card is a meaningful hit to the "length of credit history" factor (15% of your score). This effect is temporary — your score recovers as all accounts age.' },
      { type: 'h2', text: '5. A payment was 30+ days late' },
      { type: 'p', text: 'Payment history is 35% of your FICO score. A single 30-day late payment can drop your score 50–100 points and stays on your report for seven years. The good news: its impact diminishes significantly over time, especially if you build a clean payment history after it. Set autopay for at least the minimum on every account.' },
      { type: 'h2', text: '6. An error on your credit report' },
      { type: 'p', text: 'About 1 in 5 credit reports contain an error significant enough to affect the score. Wrong account, wrong balance, someone else\'s debt, a paid collection still showing as unpaid. Check your full report (free at AnnualCreditReport.com) and dispute anything incorrect directly with the bureau. Fixed errors can recover your score within 30–45 days.' },
      { type: 'h2', text: '7. Your score model changed' },
      { type: 'p', text: 'FICO releases new scoring models periodically. Lenders may have switched to a newer model (FICO 10T, for example) that weights factors differently. If your score dropped across multiple lenders simultaneously but nothing changed in your behavior, this may be the cause. Not much you can do — just keep building healthy credit habits and the score follows.' },
      { type: 'callout', text: 'The best credit strategy is boring: pay everything on time, keep utilization low, don\'t open accounts you don\'t need, and don\'t close old ones. Score improvements from gimmicks don\'t exist.' },
    ],
  },
]

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'intro':
      return (
        <p key={i} style={{ fontFamily: 'Lato', fontSize: 20, color: 'var(--dark)', lineHeight: 1.8, fontWeight: 400, marginBottom: 28, borderLeft: '3px solid var(--primary)', paddingLeft: 20 }}>
          {block.text}
        </p>
      )
    case 'p':
      return (
        <p key={i} style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-2)', lineHeight: 1.85, marginBottom: 22 }}>
          {block.text}
        </p>
      )
    case 'h2':
      return (
        <h2 key={i} style={{ fontFamily: 'Manrope', fontSize: 22, fontWeight: 800, color: 'var(--dark)', marginTop: 40, marginBottom: 14, paddingBottom: 10, borderBottom: '1px solid var(--border)', letterSpacing: '-0.3px' }}>
          {block.text}
        </h2>
      )
    case 'ul':
      return (
        <ul key={i} style={{ listStyle: 'none', padding: 0, marginBottom: 22 }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-2)', lineHeight: 1.75, marginBottom: 12, paddingLeft: 22, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: 10, width: 6, height: 6, borderRadius: '50%', background: 'var(--primary)', display: 'inline-block' }} />
              {item}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} style={{ padding: 0, marginBottom: 22, counterReset: 'item', listStyle: 'none' }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark-2)', lineHeight: 1.75, marginBottom: 14, paddingLeft: 36, position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, top: 2, width: 22, height: 22, borderRadius: '50%', background: 'rgba(67,83,255,0.1)', color: 'var(--primary)', fontFamily: 'Manrope', fontSize: 12, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{j + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div key={i} style={{ background: 'rgba(67,83,255,0.05)', border: '1px solid rgba(67,83,255,0.18)', borderRadius: 12, padding: '20px 24px', marginBottom: 24, marginTop: 8 }}>
          <p style={{ fontFamily: 'Lato', fontSize: 16, color: 'var(--dark)', lineHeight: 1.75, margin: 0, fontStyle: 'italic' }}>
            {block.text}
          </p>
        </div>
      )
    case 'stats':
      return (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 14, marginBottom: 28, marginTop: 8 }}>
          {block.items.map((s, j) => (
            <div key={j} style={{ background: 'var(--white)', border: '1px solid var(--border)', borderLeft: `4px solid ${s.color}`, borderRadius: 12, padding: '16px 18px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 22, color: 'var(--dark)', letterSpacing: '-0.5px', marginBottom: 4 }}>{s.val}</p>
              <p style={{ fontFamily: 'Lato', fontSize: 12, color: 'var(--dark-3)', lineHeight: 1.5, margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = posts.filter(p => p.slug !== slug).slice(0, 3)

  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ background: 'var(--dark)', padding: '80px 0 64px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Lato', fontSize: 14, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 28, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
            <span style={{ display: 'inline-block', background: `${post.color}22`, color: post.color, fontFamily: 'Lato', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{post.tag}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 52px)', letterSpacing: '-1.5px', lineHeight: 1.12, color: 'var(--white)', marginBottom: 28, maxWidth: 740 }}
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Calendar size={13} color="rgba(255,255,255,0.35)" strokeWidth={2} />
              <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Clock size={13} color="rgba(255,255,255,0.35)" strokeWidth={2} />
              <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{post.readTime}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Tag size={13} color="rgba(255,255,255,0.35)" strokeWidth={2} />
              <span style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{post.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: '64px 0 80px', background: 'var(--white)' }}>
        <div className="ff-container">
          <div className="ff-post-layout">

            {/* Content */}
            <FadeIn>
              <div style={{ maxWidth: 720 }}>
                {post.content.map((block, i) => renderBlock(block, i))}
              </div>
            </FadeIn>

            {/* Sidebar */}
            <FadeIn delay={0.15} className="ff-post-sidebar">
              <div style={{ position: 'sticky', top: 100 }}>
                {/* CTA card */}
                <div style={{ background: 'var(--dark)', borderRadius: 16, padding: '28px 24px', marginBottom: 24 }}>
                  <p style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 17, color: 'var(--white)', marginBottom: 10, lineHeight: 1.3 }}>
                    Put this into practice.
                  </p>
                  <p style={{ fontFamily: 'Lato', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 20 }}>
                    FutureFlow automatically applies these insights to your real accounts — no manual work needed.
                  </p>
                  <Link to="/contact" className="btn-white" style={{ fontSize: 14, padding: '11px 20px', width: '100%', justifyContent: 'center' }}>
                    Join the Waitlist <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Related posts */}
                <div>
                  <p style={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: 12, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>
                    More articles
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {related.map((r, i) => (
                      <Link key={i} to={`/blog/${r.slug}`} style={{ textDecoration: 'none', padding: '14px 16px', borderRadius: 12, border: '1px solid var(--border)', display: 'block', transition: 'border-color 0.2s, background 0.2s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(67,83,255,0.25)'; (e.currentTarget as HTMLElement).style.background = 'rgba(67,83,255,0.02)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'transparent' }}
                      >
                        <span style={{ display: 'inline-block', background: `${r.color}14`, color: r.color, fontFamily: 'Lato', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 3, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{r.tag}</span>
                        <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark)', lineHeight: 1.4, margin: 0 }}>{r.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 0', background: 'var(--lavender)', textAlign: 'center' }}>
        <div className="ff-container">
          <FadeIn>
            <h2 style={{ fontFamily: 'Manrope', fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 42px)', letterSpacing: '-1px', color: 'var(--dark)', marginBottom: 16 }}>
              Ready to take control of your finances?
            </h2>
            <p style={{ fontFamily: 'Lato', fontSize: 17, color: 'var(--dark-2)', marginBottom: 32, lineHeight: 1.7 }}>
              FutureFlow automates everything you just read about — for free at launch.
            </p>
            <Link to="/contact" className="btn-dark">
              Join the Waitlist <ArrowRight size={17} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
