import React from 'react'
import { Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A1513] text-white pt-20">
      <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10 grid grid-cols-12 gap-6 md:gap-8">
        <div className="col-span-12 sm:col-span-3">
          <div className="text-2xl font-semibold tracking-tight">FluentPay</div>
          <p className="mt-2 text-white/75">Minimalist financial infrastructure for modern commerce.</p>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <div className="text-xs uppercase tracking-[0.12em] text-white/60">Navigation</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>Home</li>
            <li>Platform</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <div className="text-xs uppercase tracking-[0.12em] text-white/60">Industries</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>E‑commerce</li>
            <li>Fintech</li>
            <li>SaaS</li>
            <li>Marketplaces</li>
          </ul>
        </div>
        <div className="col-span-12 sm:col-span-3">
          <div className="text-xs uppercase tracking-[0.12em] text-white/60">Contact</div>
          <ul className="mt-3 space-y-2 text-white/85">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@fluentpay.dev</li>
            <li className="flex items-center gap-3"> <Twitter className="h-4 w-4" /> <Linkedin className="h-4 w-4" /> </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10">
        <div className="mx-auto max-w-[1320px] px-6 md:px-8 xl:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm">
          <div>© {new Date().getFullYear()} FluentPay. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Security</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
