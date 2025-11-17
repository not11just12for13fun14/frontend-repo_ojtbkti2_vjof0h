import React from 'react'
import { TrendingUp, CheckCircle2 } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="bg-[#F6F8F7] py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10 grid grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left floating card */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative rounded-[24px] bg-white shadow-[0_40px_100px_rgba(10,35,30,0.12)] ring-1 ring-black/5 p-6 sm:p-8 overflow-hidden">
            <div className="absolute -top-14 -right-14 w-56 h-56 rounded-full bg-[#E8FFEA]" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-[#0B1A17] tracking-tight">Performance at a glance</h3>
              <div className="mt-5 bg-[#F1F5F3] rounded-2xl p-4 ring-1 ring-black/5">
                <div className="flex items-center justify-between text-sm text-[#5C6B68]">
                  <span>Conversion</span>
                  <span className="text-[#114B46] font-medium">+6.2%</span>
                </div>
                <div className="mt-3 h-24">
                  {/* simple chart bars */}
                  <div className="flex items-end gap-2 h-full">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div key={i} className="w-3 rounded-full bg-[#114B46]" style={{ height: `${30 + (Math.sin(i) * 20 + i * 3) % 70}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#114B46]">
                <TrendingUp className="h-5 w-5" />
                <span className="text-sm">Smart retries and tokenization reduce churn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right bullets */}
        <div className="col-span-12 lg:col-span-6">
          <h2 className="text-[34px] sm:text-[40px] leading-tight font-semibold text-[#0B1A17] tracking-tight">Clarity for operators</h2>
          <p className="mt-3 text-[#5C6B68] max-w-xl">Actionable, real-time visibility across payments, risk, and reconciliation — so your team can move with confidence.</p>
          <ul className="mt-7 space-y-4">
            {[ 
              'Unified reporting across channels', 
              'Fine-grained roles and approvals', 
              'Prebuilt exports and webhooks',
              'Audit trails and SSO',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#114B46]" />
                <span className="text-[#0B1A17]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
