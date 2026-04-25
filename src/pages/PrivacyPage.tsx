import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const EFFECTIVE_DATE = 'April 1, 2026'
const COMPANY = 'FutureFlow, Inc.'
const EMAIL = 'privacy@futureflow.app'
const ADDRESS = '548 Market Street, Suite 12100, San Francisco, CA 94104'

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: 72 }}>

      {/* Header */}
      <section className="ff-page-hero" style={{ background: 'var(--dark)', padding: '80px 24px 60px' }}>
        <div className="ff-container">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="ff-badge" style={{ marginBottom: 20, display: 'inline-block' }}>Legal</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ fontFamily: 'Manrope', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: 'var(--white)', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 14 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{ fontFamily: 'Lato', fontSize: 15, color: 'rgba(255,255,255,0.45)' }}>
            Effective Date: {EFFECTIVE_DATE} &nbsp;|&nbsp; Last Updated: {EFFECTIVE_DATE}
          </motion.p>
        </div>
      </section>

      {/* Promise banner */}
      <section style={{ background: 'var(--mint)', padding: '20px 24px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="ff-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', textAlign: 'center' }}>
          {['We never sell your data', 'We never show you ads', 'Read-only bank access', 'You can delete everything anytime'].map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle2 size={16} color="#2db37d" strokeWidth={2} />
              <span style={{ fontFamily: 'Manrope', fontSize: 14, fontWeight: 700, color: 'var(--dark)' }}>{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: '60px 24px 100px', background: 'var(--white)' }}>
        <div className="ff-container legal-layout">

          {/* TOC */}
          <aside style={{ position: 'sticky', top: 100 }} className="hidden lg:block">
            <p style={{ fontFamily: 'Manrope', fontSize: 13, fontWeight: 700, color: 'var(--dark)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Contents</p>
            {[
              'Introduction', 'Information We Collect', 'How We Collect Information',
              'How We Use Your Information', 'How We Share Information', 'Plaid & Third-Party Services',
              'Cookies & Tracking', 'Data Retention', 'Your Rights & Choices',
              'Data Security', "Children's Privacy", 'California Privacy Rights (CCPA)',
              'Changes to This Policy', 'Contact Us',
            ].map((item, i) => (
              <a key={i} href={`#pp-${i + 1}`} style={{
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

              <p>At {COMPANY} ("FutureFlow," "we," "us," or "our"), your privacy is not a feature — it is a fundamental right. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the FutureFlow platform and services (the "Service"). By using the Service, you agree to the collection and use of your information as described in this Policy.</p>

              <h2 id="pp-1">1. Introduction</h2>
              <p>FutureFlow is a personal finance management platform. To provide our Service, we must process certain personal and financial information about you. We take this responsibility seriously and are committed to:</p>
              <ul>
                <li>Collecting only the data necessary to provide and improve the Service;</li>
                <li>Never selling your personal data to third parties;</li>
                <li>Never using your data to serve you third-party advertisements;</li>
                <li>Giving you meaningful control over your data;</li>
                <li>Protecting your data with industry-leading security practices.</li>
              </ul>

              <h2 id="pp-2">2. Information We Collect</h2>

              <h3>2.1 Information You Provide Directly</h3>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, password (stored as a hashed value), phone number, and profile preferences;</li>
                <li><strong>Identity Verification:</strong> Date of birth and last four digits of Social Security Number, required for certain verification processes (stored with encryption);</li>
                <li><strong>Payment Information:</strong> Billing address and payment method details processed by our payment processor (we do not store full card numbers);</li>
                <li><strong>Communications:</strong> Any messages, feedback, or support requests you send us.</li>
              </ul>

              <h3>2.2 Financial Data (via Plaid and Connected Accounts)</h3>
              <ul>
                <li>Account balances and account numbers (masked);</li>
                <li>Transaction history, including merchant names, amounts, dates, and categories;</li>
                <li>Investment holdings, balances, and performance data;</li>
                <li>Credit score and credit report data (if you enable Credit Score Monitor);</li>
                <li>Loan and debt account balances and payment history.</li>
              </ul>
              <p>This data is obtained on a <strong>read-only basis</strong>. FutureFlow cannot initiate transactions, move funds, or modify your financial accounts in any way.</p>

              <h3>2.3 Automatically Collected Information</h3>
              <ul>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent in the app, click patterns, and interaction logs;</li>
                <li><strong>Device Information:</strong> Device type, operating system, browser type and version, screen resolution, and language settings;</li>
                <li><strong>Log Data:</strong> IP address, access timestamps, error logs, and crash reports;</li>
                <li><strong>Location:</strong> General location derived from IP address (not GPS or precise location).</li>
              </ul>

              <h3>2.4 Email Data (Sub Radar Feature — Optional)</h3>
              <p>If you opt into the Email + Plaid Sub Radar feature, you authorize FutureFlow to scan your connected email account for subscription-related emails (receipts, billing confirmations, trial notices). We scan only for subscription-related patterns and do not read or store the general content of your emails. You can disconnect email access at any time from account settings.</p>

              <h2 id="pp-3">3. How We Collect Information</h2>
              <ul>
                <li><strong>Directly from you</strong> when you register, update your profile, or contact us;</li>
                <li><strong>From Plaid Technologies, Inc.</strong> when you connect your financial accounts — subject to Plaid's own privacy policy and your authorization;</li>
                <li><strong>From credit bureaus</strong> through our credit score monitoring partners, only with your explicit consent;</li>
                <li><strong>Automatically</strong> through cookies, web beacons, and similar technologies when you use the Service;</li>
                <li><strong>From third-party analytics providers</strong> that help us understand how users interact with the Service.</li>
              </ul>

              <h2 id="pp-4">4. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li><strong>Provide and operate the Service:</strong> Process your connected account data, generate insights, and deliver the features you use;</li>
                <li><strong>Personalize your experience:</strong> Tailor recommendations, alerts, and financial insights to your specific situation;</li>
                <li><strong>Process payments:</strong> Manage your subscription and billing;</li>
                <li><strong>Communicate with you:</strong> Send account alerts, product updates, security notices, and support responses;</li>
                <li><strong>Improve the Service:</strong> Analyze aggregate usage patterns to enhance features and fix bugs;</li>
                <li><strong>Ensure security:</strong> Detect and prevent fraud, unauthorized access, and abuse;</li>
                <li><strong>Comply with legal obligations:</strong> Respond to lawful requests from authorities where required by law.</li>
              </ul>
              <p><strong>We do not use your personal financial data to train general AI models or sell insights to advertisers, lenders, or data brokers.</strong></p>

              <h2 id="pp-5">5. How We Share Information</h2>
              <p>We do not sell your personal information. We may share your information only in the following limited circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted vendors who help us operate the Service (e.g., cloud hosting, payment processing, customer support tools), bound by confidentiality obligations and prohibited from using your data for any other purpose;</li>
                <li><strong>Plaid Technologies, Inc.:</strong> As our financial data aggregation partner, subject to Plaid's privacy policy;</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental authority, or to protect the rights, safety, or property of FutureFlow, our users, or the public;</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or substantially all of our assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy;</li>
                <li><strong>With Your Consent:</strong> In any other case where you have provided explicit consent.</li>
              </ul>

              <h2 id="pp-6">6. Plaid & Third-Party Services</h2>
              <p>FutureFlow uses Plaid Technologies, Inc. to connect to your financial institutions. When you connect an account, you are also subject to <a href="https://plaid.com/legal/end-user-privacy-policy/" target="_blank" rel="noopener noreferrer">Plaid's End User Privacy Policy</a>. FutureFlow does not receive or store your banking login credentials — these are passed directly and securely to Plaid.</p>
              <p>The Service may contain links to third-party websites. FutureFlow is not responsible for the privacy practices of those sites and encourages you to review their privacy policies.</p>

              <h2 id="pp-7">7. Cookies & Tracking</h2>
              <p>FutureFlow uses the following types of cookies and tracking technologies:</p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for the Service to function (authentication, session management). Cannot be disabled.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Service (e.g., page views, session duration). Used with aggregate, anonymized data only.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences to improve your experience.</li>
              </ul>
              <p>We do <strong>not</strong> use third-party advertising cookies or tracking pixels for ad targeting.</p>
              <p>You can control cookies through your browser settings. Disabling essential cookies may affect the functionality of the Service.</p>

              <h2 id="pp-8">8. Data Retention</h2>
              <p>We retain your personal information for as long as your account is active or as needed to provide the Service. If you close your account:</p>
              <ul>
                <li>We will delete or anonymize your personal data within 90 days of account closure;</li>
                <li>Certain records may be retained for up to 7 years where required by law (e.g., tax records, fraud prevention);</li>
                <li>Aggregate, anonymized data that cannot identify you may be retained indefinitely for analytical purposes.</li>
              </ul>

              <h2 id="pp-9">9. Your Rights & Choices</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you;</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information through your account settings or by contacting us;</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data. You can delete your account directly in the app or by contacting us at {EMAIL};</li>
                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format;</li>
                <li><strong>Opt-Out of Communications:</strong> Unsubscribe from marketing emails at any time via the unsubscribe link in any email. You cannot opt out of transactional and security notifications;</li>
                <li><strong>Disconnect Financial Accounts:</strong> Disconnect any linked financial account at any time from your account settings.</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.</p>

              <h2 id="pp-10">10. Data Security</h2>
              <p>We take the security of your data seriously and implement the following measures:</p>
              <ul>
                <li><strong>256-bit AES encryption</strong> for data at rest and TLS 1.3 for data in transit;</li>
                <li><strong>Multi-factor authentication (MFA)</strong> available for all accounts;</li>
                <li><strong>Regular third-party security audits</strong> and penetration testing;</li>
                <li><strong>SOC 2 Type II compliance</strong> for our infrastructure and operations;</li>
                <li><strong>Strict access controls:</strong> FutureFlow employees can only access your data when required for support or legal compliance, and all access is logged.</li>
              </ul>
              <p>No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. If you believe your account has been compromised, contact us immediately at {EMAIL}.</p>

              <h2 id="pp-11">11. Children's Privacy</h2>
              <p>FutureFlow is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information. If you believe we may have collected information from a child under 18, please contact us at {EMAIL}.</p>

              <h2 id="pp-12">12. California Privacy Rights (CCPA)</h2>
              <p>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):</p>
              <ul>
                <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you;</li>
                <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected from you, subject to certain exceptions;</li>
                <li><strong>Right to Opt-Out of Sale:</strong> We do not sell personal information. You have the right to opt out of the sale of personal information, though we have nothing to opt you out of;</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA rights;</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information;</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You may limit our use of sensitive personal information (such as financial data) to what is necessary to provide the Service.</li>
              </ul>
              <p>To submit a verifiable consumer request, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject line "CCPA Request."</p>

              <h2 id="pp-13">13. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and/or a prominent notice in the Service at least 30 days before the changes take effect. We will also update the "Last Updated" date at the top of this page.</p>
              <p>Your continued use of the Service after the effective date of any update constitutes your acceptance of the revised Privacy Policy. If you do not agree to the updated Policy, please discontinue use of the Service and delete your account.</p>

              <h2 id="pp-14">14. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team:</p>
              <ul>
                <li><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
                <li><strong>Mail:</strong> Privacy Officer, {COMPANY}, {ADDRESS}</li>
                <li><strong>Support Portal:</strong> <Link to="/contact">futureflow.app/contact</Link></li>
              </ul>
              <p>We are committed to resolving privacy concerns promptly and transparently.</p>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
