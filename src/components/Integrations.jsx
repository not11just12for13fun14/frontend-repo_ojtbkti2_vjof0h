import React from 'react'
import { Github, Slack, Zap, Database, Cloud, Shield } from 'lucide-react'

const icons = [Github, Slack, Zap, Database, Cloud, Shield]

export default function Integrations() {
  return (
    <section className="bg-[#F6F8F7] py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10 grid grid-cols-12 gap-6 md:gap-8 items-center">
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-[34px] sm:text-[40px] leading-tight font-semibold text-[#0B1A17] tracking-tight">Seamless by design</h2>
          <p className="mt-3 text-[#5C6B68]">Plug into your stack with prebuilt connectors and a flexible API surface.</p>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="relative h-[380px] rounded-[36px] bg-[#E8FFEA] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            {icons.map((Icon, i) => (
              <div key={i} className="absolute bg-white rounded-[18px] shadow-[0_30px_80px_rgba(10,35,30,0.10)] ring-1 ring-black/5 p-3" style={{
                top: `${28 + (i*44)%260}px`,
                left: `${28 + (i*94)%520}px`,
              }}>
                <Icon className="h-7 w-7 text-[#114B46]" />
              </div>
            ))}
            <div className="absolute -right-20 -bottom-24 w-[420px] h-[420px] rounded-full bg-[#B8F3C0]/60 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
