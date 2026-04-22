import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Home, PieChart, CreditCard, TrendingUp, Bell, Settings } from 'lucide-react'

const tabs = ['Overview', 'Spending', 'Debts']

const bars = [
  { h: 52, month: 'Nov' }, { h: 68, month: 'Dec' }, { h: 42, month: 'Jan' },
  { h: 85, month: 'Feb' }, { h: 60, month: 'Mar' }, { h: 100, month: 'Apr', active: true },
]

const txns = [
  { abbr: 'N', name: 'Netflix',        amount: '-$22.99', color: '#EF4444', plus: false },
  { abbr: 'S', name: 'Salary Deposit', amount: '+$5,200', color: '#059669', plus: true },
  { abbr: 'W', name: 'Whole Foods',    amount: '-$84.32', color: '#D97706', plus: false },
  { abbr: 'B', name: 'Bill Savings',   amount: '+$63.00', color: '#4F46E5', plus: true },
]

export default function Dashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [tab, setTab] = useState(0)

  return (
    <section ref={ref} className="section-alt py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Built for Real Life
          </h2>
          <p className="text-ink-2 mt-2 font-sans text-[16px]">A glimpse inside FutureFlow — clean, fast, and actually useful.</p>
        </motion.div>

        {/* Browser frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ y: -3 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid #E2E8F0', boxShadow: '0 8px 40px rgba(0,0,0,0.07)' }}
        >
          {/* Chrome */}
          <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
            <div className="ml-4 px-3 py-1 rounded-md text-xs text-slate-400 font-sans"
              style={{ background: '#fff', border: '1px solid #E2E8F0', maxWidth: 240 }}>
              app.futureflow.io/dashboard
            </div>
            <div className="ml-auto flex gap-3 text-slate-300">
              <Bell size={13} />
              <Settings size={13} />
            </div>
          </div>

          {/* App */}
          <div className="flex bg-white" style={{ minHeight: 400 }}>
            {/* Sidebar */}
            <div className="hidden sm:flex flex-col gap-1 px-2 py-4"
              style={{ width: 52, background: '#FAFAFA', borderRight: '1px solid #F1F5F9' }}>
              {[Home, PieChart, CreditCard, TrendingUp].map((Icon, i) => (
                <motion.div key={i}
                  className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1 cursor-pointer"
                  style={{ background: i === 0 ? '#EEF2FF' : 'transparent' }}
                  whileHover={{ background: '#EEF2FF', scale: 1.05 }}
                >
                  <Icon size={15} color={i === 0 ? '#4F46E5' : '#CBD5E1'} strokeWidth={1.8} />
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 p-5">
              {/* Tabs */}
              <div className="flex gap-1 mb-5 p-1 rounded-lg w-fit"
                style={{ background: '#F1F5F9' }}>
                {tabs.map((t, i) => (
                  <motion.button key={t} onClick={() => setTab(i)}
                    className="px-4 py-1.5 rounded-md text-xs font-medium cursor-pointer border-none font-sans transition-colors duration-200"
                    style={{ background: tab === i ? '#fff' : 'transparent', color: tab === i ? '#0F172A' : '#94A3B8',
                      boxShadow: tab === i ? '0 1px 3px rgba(0,0,0,0.06)' : 'none' }}
                    whileTap={{ scale: 0.97 }}>
                    {t}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={tab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}>

                  {/* Stat cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: 'Net Worth',    val: '$127,430', note: '↑ +$3,200', nc: '#059669' },
                      { label: 'Monthly Spend',val: '$3,842',   note: '↓ $310 saved', nc: '#4F46E5' },
                      { label: 'Savings Goal', val: '68%',      note: 'Emergency fund', nc: '#7C3AED' },
                      { label: 'Health Score', val: '782',      note: '↑ +12 pts', nc: '#059669' },
                    ].map((c, i) => (
                      <motion.div key={i}
                        className="rounded-xl p-3.5"
                        style={{ border: '1px solid #F1F5F9', background: '#FAFAFA' }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.07 }}
                        whileHover={{ y: -2, boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
                        <p className="text-[10px] text-slate-400 font-sans mb-0.5">{c.label}</p>
                        <p className="text-[17px] font-bold text-ink font-sans">{c.val}</p>
                        <p className="text-[10px] mt-0.5 font-sans" style={{ color: c.nc }}>{c.note}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="rounded-xl p-4 mb-4" style={{ border: '1px solid #F1F5F9', background: '#FAFAFA' }}>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[13px] font-semibold text-ink font-sans">Spending Overview</p>
                      <p className="text-[11px] text-slate-400 font-sans">Last 6 months</p>
                    </div>
                    <div className="flex items-end gap-2 h-20">
                      {bars.map((b, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <motion.div className="w-full rounded-t"
                            style={{ background: b.active ? '#4F46E5' : '#E2E8F0' }}
                            initial={{ height: 0 }}
                            animate={inView ? { height: `${b.h}%` } : {}}
                            transition={{ duration: 0.7, delay: 0.5 + i * 0.07, ease: 'easeOut' }} />
                          <span className="text-[9px] text-slate-400 font-sans">{b.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transactions */}
                  <div className="rounded-xl p-4" style={{ border: '1px solid #F1F5F9', background: '#FAFAFA' }}>
                    <p className="text-[13px] font-semibold text-ink font-sans mb-3">Recent Transactions</p>
                    <div className="space-y-2.5">
                      {txns.map((t, i) => (
                        <motion.div key={i} className="flex items-center justify-between"
                          initial={{ opacity: 0, x: -8 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + i * 0.07 }}>
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-sans"
                              style={{ background: `${t.color}15`, color: t.color }}>
                              {t.abbr}
                            </div>
                            <span className="text-[13px] text-ink-2 font-sans">{t.name}</span>
                          </div>
                          <span className="text-[13px] font-semibold font-sans"
                            style={{ color: t.plus ? '#059669' : '#0F172A' }}>
                            {t.amount}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
