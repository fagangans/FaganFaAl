'use client'

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  return (
    <section id="contact" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-10 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">05 CONTACT</p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
          Let&apos;s build{' '}
          <span style={{ color: '#2D5016' }}>something.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="space-y-4"
        >
          <input
            type="text"
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-stone-200 bg-transparent px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors text-sm"
          />
          <input
            type="email"
            required
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-stone-200 bg-transparent px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors text-sm"
          />
          <textarea
            required
            rows={4}
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-stone-200 bg-transparent px-4 py-3 text-stone-800 placeholder-stone-300 focus:outline-none focus:border-stone-400 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 text-sm uppercase tracking-widest text-white transition-colors"
            style={{ backgroundColor: sent ? '#555' : '#2D5016' }}
          >
            {sent ? 'Sent ✓' : 'Send Message'}
          </button>
        </form>

        <div className="flex flex-col justify-between">
          <p className="text-stone-500 text-sm leading-relaxed">
            Open for freelance projects and collaborations.<br />
            Based in Indonesia — available remotely.
          </p>
          <div className="flex gap-6 mt-8">
            {['GitHub', 'LinkedIn', 'Email'].map((s) => (
              <a key={s} href="#" className="text-sm uppercase tracking-widest text-stone-400 hover:text-[#2D5016] transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
