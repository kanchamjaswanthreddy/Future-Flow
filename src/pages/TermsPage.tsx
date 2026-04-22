import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EFFECTIVE_DATE = 'April 1, 2026'
const COMPANY = 'FutureFlow, Inc.'
const EMAIL = 'legal@futureflow.app'
const ADDRESS = '548 Market Street, Suite 12100, San Francisco, CA 94104'

export default function TermsPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Header */}
      <section style={{ background: 'var(--dark)', padding: '80px 24px 60px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 14 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.45)' }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;|&nbsp; Last Updated: {EFFECTIVE_DATE}
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '60px 24px 100px', background: 'var(--white)' }}>
        <div className="ff-container legal-layout">

          {/* TOC */}
          <aside style={{ position: 'sticky', top: 100 }} className="hidden lg:block">
            <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contents</p>
            {[
              'Acceptance of Terms', 'Description of Services', 'Eligibility & Account Registration',
              'Connected Financial Accounts', 'Subscription & Billing', 'Free Trial',
              'Acceptable Use', 'Intellectual Property', 'Disclaimer of Warranties',
              'Limitation of Liability', 'Indemnification', 'Dispute Resolution & Arbitration',
              'Governing Law', 'Termination', 'Changes to Terms', 'Contact Us',
            ].map((item, i) => (
              <a key={i} href={`#tos-${i + 1}`} style={{
                display: 'block', fontFamily: 'Lato', fontSize: 13, color: 'var(--muted)',
                textDecoration: 'none', padding: '5px 0', lineHeight: 1.5,
                borderLeft: '2px solid var(--border)', paddingLeft: 12, marginBottom: 4,
                transition: 'color 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                {i + 1}. {item}
              </a>
            ))}
          </aside>

          {/* Content */}
          <div>
            <div className="legal-prose">

              <p>Please read these Terms of Service ("Terms") carefully before using the FutureFlow platform (the "Service") operated by <strong>{COMPANY}</strong> ("FutureFlow," "we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access the Service.</p>

              <h2 id="tos-1">1. Acceptance of Terms</h2>
              <p>By creating an account, clicking "I Agree," or otherwise accessing or using the FutureFlow Service, you confirm that you have read, understood, and agree to be bound by these Terms, along with our <Link to="/privacy">Privacy Policy</Link>, which is incorporated herein by reference. These Terms constitute a legally binding agreement between you and {COMPANY}.</p>
              <p>If you are using the Service on behalf of an organization or entity, you represent and warrant that you have authority to bind that organization to these Terms, and "you" refers to both you individually and that organization.</p>

              <h2 id="tos-2">2. Description of Services</h2>
              <p>FutureFlow is a personal finance management platform that provides users with tools to track spending, manage budgets, monitor subscriptions, plan debt payoff, track investments, and improve financial health. The Service connects to third-party financial institutions through Plaid Technologies, Inc. and other data aggregation services.</p>
              <p>FutureFlow is <strong>not a bank, broker-dealer, or registered investment advisor.</strong> The financial information and insights provided by FutureFlow are for informational and educational purposes only and do not constitute financial, investment, legal, or tax advice. You should consult a qualified professional before making significant financial decisions.</p>

              <h2 id="tos-3">3. Eligibility & Account Registration</h2>
              <p>To use the Service, you must:</p>
              <ul>
                <li>Be at least 18 years of age (or the age of majority in your jurisdiction);</li>
                <li>Be a resident of the United States;</li>
                <li>Provide accurate, complete, and current registration information;</li>
                <li>Maintain the security of your account credentials;</li>
                <li>Promptly notify us of any unauthorized access to your account.</li>
              </ul>
              <p>You are responsible for all activity that occurs under your account. FutureFlow reserves the right to refuse registration or cancel accounts at our discretion.</p>

              <h2 id="tos-4">4. Connected Financial Accounts</h2>
              <p>FutureFlow connects to your external financial accounts (banks, credit cards, investment accounts, etc.) through Plaid Technologies, Inc. By connecting an account, you:</p>
              <ul>
                <li>Authorize FutureFlow and Plaid to access your financial account data on a <strong>read-only basis</strong>. FutureFlow cannot initiate transactions, move funds, or alter your accounts;</li>
                <li>Agree to Plaid's End User Privacy Policy in addition to ours;</li>
                <li>Acknowledge that FutureFlow does not store your banking login credentials;</li>
                <li>Understand that the accuracy of data depends on the third-party institution and Plaid's aggregation services.</li>
              </ul>
              <p>FutureFlow is not responsible for errors, omissions, or inaccuracies in data provided by third-party financial institutions or aggregation services.</p>

              <h2 id="tos-5">5. Subscription & Billing</h2>
              <p>FutureFlow offers Free, Premium, and Premium+ subscription tiers. Paid plans are billed on a monthly or annual basis, depending on your selection.</p>
              <ul>
                <li><strong>Automatic Renewal:</strong> Paid subscriptions automatically renew at the end of each billing period unless cancelled before the renewal date.</li>
                <li><strong>Price Changes:</strong> We will provide at least 30 days' notice of any price changes before they take effect.</li>
                <li><strong>Refunds:</strong> All subscription fees are non-refundable except where required by applicable law. If you cancel your subscription, you retain access until the end of your paid billing period.</li>
                <li><strong>Payment Processing:</strong> Payments are processed by our third-party payment processor. FutureFlow does not store complete credit card information.</li>
                <li><strong>Failed Payments:</strong> If a payment fails, we will attempt to notify you and retry. Your account may be downgraded to the Free tier if payment cannot be collected.</li>
              </ul>

              <h2 id="tos-6">6. Free Trial</h2>
              <p>We may offer a free trial period for paid subscription plans. During the trial:</p>
              <ul>
                <li>You will have access to all features of the trial plan;</li>
                <li>No charge will be made until the trial period ends;</li>
                <li>You may cancel at any time before the trial ends without being charged;</li>
                <li>If you do not cancel before the trial ends, your subscription will convert to a paid plan and your payment method will be charged.</li>
              </ul>
              <p>Free trials are available once per user and are non-transferable. FutureFlow reserves the right to modify or discontinue free trial offers at any time.</p>

              <h2 id="tos-7">7. Acceptable Use</h2>
              <p>You agree not to use the Service to:</p>
              <ul>
                <li>Violate any applicable laws, regulations, or third-party rights;</li>
                <li>Provide false, misleading, or inaccurate information;</li>
                <li>Attempt to gain unauthorized access to any part of the Service or other users' accounts;</li>
                <li>Reverse engineer, decompile, or disassemble any portion of the Service;</li>
                <li>Use automated tools, bots, or scripts to access the Service without our express written permission;</li>
                <li>Interfere with or disrupt the integrity or performance of the Service;</li>
                <li>Sell, resell, or sublicense access to the Service;</li>
                <li>Use the Service in any way that could damage, disable, or impair FutureFlow's systems or infrastructure.</li>
              </ul>

              <h2 id="tos-8">8. Intellectual Property</h2>
              <p>The Service and all content, features, and functionality (including but not limited to software, text, graphics, logos, icons, images, and audio clips) are owned by {COMPANY} and are protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes only.</p>
              <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any part of the Service without our prior written consent.</p>

              <h2 id="tos-9">9. Disclaimer of Warranties</h2>
              <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FUTUREFLOW DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p>FUTUREFLOW DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. FINANCIAL DATA DISPLAYED IN THE SERVICE MAY NOT BE ACCURATE, COMPLETE, OR UP-TO-DATE, AND SHOULD NOT BE SOLELY RELIED UPON FOR FINANCIAL DECISION-MAKING.</p>

              <h2 id="tos-10">10. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, FUTUREFLOW AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR FINANCIAL LOSSES — ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.</p>
              <p>IN NO EVENT SHALL FUTUREFLOW'S TOTAL LIABILITY TO YOU EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO FUTUREFLOW IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100.00).</p>

              <h2 id="tos-11">11. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless {COMPANY} and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your violation of these Terms; (b) your use of the Service; (c) your violation of any third-party right, including intellectual property or privacy rights; or (d) any content you submit to the Service.</p>

              <h2 id="tos-12">12. Dispute Resolution & Arbitration</h2>
              <p>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND WILL IMPACT HOW DISPUTES ARE RESOLVED.</p>
              <p><strong>Informal Resolution:</strong> Before initiating arbitration, you agree to first contact us at {EMAIL} and attempt to resolve the dispute informally. We will attempt to resolve the dispute within 30 days.</p>
              <p><strong>Binding Arbitration:</strong> If informal resolution fails, any dispute arising from or relating to these Terms or the Service shall be resolved by final and binding arbitration administered by JAMS under its Comprehensive Arbitration Rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement, misappropriation, or violation of intellectual property rights.</p>
              <p><strong>Class Action Waiver:</strong> You agree that any arbitration or proceeding shall be limited to the dispute between us individually. To the fullest extent permitted by law, you waive any right to participate in a class action lawsuit or class-wide arbitration.</p>
              <p>This arbitration agreement does not apply to: (a) small claims court actions within the applicable limits; (b) claims by either party for injunctive or equitable relief.</p>

              <h2 id="tos-13">13. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. To the extent any arbitration or court proceeding is permitted under these Terms, you agree to personal jurisdiction in courts located in San Francisco County, California.</p>

              <h2 id="tos-14">14. Termination</h2>
              <p>You may terminate your account at any time by contacting us at {EMAIL} or through the account settings in the Service. Upon termination, your right to access the Service will immediately cease.</p>
              <p>FutureFlow reserves the right to suspend or terminate your account at any time for any reason, including if we reasonably believe you have violated these Terms. We will attempt to provide reasonable notice where practicable, though we are not obligated to do so in cases of serious violations.</p>
              <p>Upon termination, we will handle your data as described in our Privacy Policy.</p>

              <h2 id="tos-15">15. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. When we make material changes, we will notify you by email or through a prominent notice within the Service at least 30 days before the changes take effect. Your continued use of the Service after the effective date of updated Terms constitutes your acceptance of those Terms.</p>
              <p>It is your responsibility to review these Terms periodically. If you do not agree to the updated Terms, you must stop using the Service and cancel your subscription before the effective date of the changes.</p>

              <h2 id="tos-16">16. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><strong>Mail:</strong> {COMPANY}, {ADDRESS}</li>
                <li><strong>Support:</strong> <Link to="/contact">futureflow.app/contact</Link></li>
              </ul>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
