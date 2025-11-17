import React from 'react'
import { ArrowRight, ShieldCheck, CreditCard, Globe, Clock, BarChart3, Layers } from 'lucide-react'

const features = [
  { icon: CreditCard, title: 'Unified Payments', copy: 'Cards, wallets, and bank transfers in a single flow' },
  { icon: ShieldCheck, title: 'Bank-grade Security', copy: 'PCI DSS Level 1 with continuous monitoring' },
  { icon: Globe, title: 'Global Reach', copy: 'Local acquiring in 40+ markets with FX optimization' },
  { icon: Clock, title: 'Real-time Insights', copy: 'Instant alerts and live dashboards for your team' },
  { icon: BarChart3, title: 'Revenue Uplift', copy: 'Smart retries and network tokens boost conversion' },
  { icon: Layers, title: 'Modular APIs', copy: 'Start small, add capabilities as you scale' },
]

export default function Services() {
  return (
    <section className="relative w-full bg-[#0E3F3A] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10">
        <div className="max-w-2xl">
          <h2 className="text-[34px] sm:text-[40px] leading-tight font-semibold tracking-tight">Everything you need to power revenue</h2>
          <p className="mt-3 text-white/75">Build, launch, and scale with a complete toolkit designed for modern commerce.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-[22px] border border-white/12 bg-white/[0.06] hover:bg-white/[0.10] transition-colors p-6 shadow-[0_30px_80px_rgba(0,0,0,0.20)]">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/15 p-3 ring-1 ring-white/10">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
                    <ArrowRight className="mt-1 h-5 w-5 text-white/70 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="mt-1 text-[15px] text-white/75 leading-relaxed">{f.copy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
