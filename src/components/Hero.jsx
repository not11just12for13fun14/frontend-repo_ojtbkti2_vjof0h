import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Star } from 'lucide-react'

const stats = [
  { label: 'Processed', value: '2.4M', sub: 'transactions' },
  { label: 'Avg. approval', value: '99.2%', sub: 'uptime' },
  { label: 'Settlement', value: '~2m', sub: 'faster' },
  { label: 'Merchants', value: '12k+', sub: 'active' },
]

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: d } },
})

export default function Hero() {
  return (
    <section className="relative w-full bg-[#F6F8F7] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F6F8F7]/75 via-[#F6F8F7]/80 to-[#F6F8F7]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10 pt-28 pb-20">
        <div className="grid grid-cols-12 gap-5 md:gap-6 items-start">
          {/* Left: image card */}
          <motion.div {...fadeUp(0)} className="col-span-12 md:col-span-4">
            <div className="relative rounded-[24px] overflow-hidden bg-white ring-1 ring-black/5 shadow-[0_30px_80px_rgba(10,35,30,0.12)]">
              <div className="aspect-[4/5] bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/85 backdrop-blur px-4 py-3 flex items-center justify-between ring-1 ring-black/5 shadow-[0_10px_30px_rgba(10,35,30,0.08)]">
                <div>
                  <p className="text-[11px] leading-4 text-[#5C6B68]">Secure balance</p>
                  <p className="text-sm font-semibold text-[#0B1A17]">Multi-card wallet</p>
                </div>
                <div className="text-[#114B46] font-semibold text-sm">$12,842</div>
              </div>
            </div>
          </motion.div>

          {/* Center: headline + CTAs */}
          <div className="col-span-12 md:col-span-4 text-center">
            <motion.h1 {...fadeUp(0.05)} className="font-poppins font-bold text-[40px] sm:text-[52px] leading-[1.08] text-[#0B1A17]">
              Modern payments for
              <span className="text-[#114B46]"> ambitious brands</span>
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="mt-4 text-[15px] sm:text-base text-[#5C6B68] max-w-[44ch] mx-auto">
              Accept, manage, and grow revenue globally with a unified toolkit built for conversion and trust.
            </motion.p>

            <motion.div {...fadeUp(0.18)} className="mt-7 flex items-center justify-center gap-3">
              <button className="px-5 py-3 rounded-[14px] bg-[#114B46] text-white font-medium shadow-[0_12px_30px_rgba(17,75,70,0.22)] hover:shadow-[0_16px_40px_rgba(17,75,70,0.28)] hover:-translate-y-0.5 transition-all">Get started</button>
              <button className="px-5 py-3 rounded-[14px] border border-[#114B46] text-[#114B46] bg-white/80 hover:bg-white transition-all">Book a demo</button>
            </motion.div>

            <motion.div {...fadeUp(0.24)} className="mt-6 flex items-center justify-center gap-1 text-[#5C6B68]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-[#0E3F3A] text-[#0E3F3A]' : 'text-[#0E3F3A]'}`} />
              ))}
              <span className="text-sm ml-2">Rated 4.8/5 by 2,000+ teams</span>
            </motion.div>
          </div>

          {/* Right: staggered stat cards */}
          <div className="col-span-12 md:col-span-4">
            <div className="relative h-[480px]">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                  className={`absolute left-0 right-0 mx-auto max-w-[260px] rounded-[20px] bg-white/90 backdrop-blur px-5 py-4 ring-1 ring-black/5 shadow-[0_20px_60px_rgba(10,35,30,0.10)] ${
                    idx === 0 ? 'top-0' : idx === 1 ? 'top-24 right-6' : idx === 2 ? 'top-44 left-6' : 'top-72'
                  }`}
                >
                  <div className="text-[13px] text-[#5C6B68]">{s.label}</div>
                  <div className="text-2xl font-semibold text-[#0B1A17] mt-1">{s.value}</div>
                  <div className="text-xs text-[#5C6B68] mt-0.5">{s.sub}</div>
                </motion.div>
              ))}
              <div className="absolute -z-[1] inset-0 bg-gradient-to-br from-[#E8FFEA]/55 to-transparent rounded-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
