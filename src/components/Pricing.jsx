import React from 'react'
import { Check } from 'lucide-react'

const tiers = [
  { name: 'Starter', price: '$19', period: '/mo', features: ['No-code checkout', 'Basic analytics', 'Email support', '3 seats included'] },
  { name: 'Enterprise', price: 'Custom', period: '', features: ['Dedicated SLA', 'Advanced controls', 'Volume pricing', 'SAML SSO & SCIM'] },
]

export default function Pricing() {
  return (
    <section className="bg-[#0A1513] text-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[34px] sm:text-[40px] leading-tight font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/75">Choose a plan that scales with you.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-[24px] bg-white/6 border border-white/12 p-7 sm:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold tracking-tight">{t.name}</h3>
                <div className="text-3xl font-bold">{t.price}<span className="text-base font-normal">{t.period}</span></div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/90">
                    <Check className="h-5 w-5 text-[#B8F3C0]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-7 w-full py-3 rounded-[14px] bg-[#B8F3C0] text-[#0E3F3A] font-semibold hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(184,243,192,0.45)] transition">Get started</button>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#114B46] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Professional</h3>
            <p className="text-white/85">Advanced insights and premium support for growing teams.</p>
          </div>
          <button className="px-5 py-3 rounded-[14px] bg-white text-[#114B46] font-semibold hover:-translate-y-0.5 hover:shadow-md transition">Contact sales</button>
        </div>
      </div>
    </section>
  )
}
