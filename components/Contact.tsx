'use client'

import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">
          <span className="text-accent">03</span> CONTACT
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mb-3">Let&apos;s build something.</h2>
        <p className="text-foreground/60">Open for freelance projects and collaborations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/40 mb-1.5">
              Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/40 mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/40 mb-1.5">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white py-3 text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors"
          >
            {sent ? 'Sent! ✓' : 'Send Message'}
          </button>
        </form>

        <div className="flex flex-col justify-end gap-6">
          <p className="text-foreground/60 text-sm leading-relaxed">
            Have a project in mind? I&apos;m available for freelance work and open to interesting collaborations.
          </p>
          <div className="flex gap-6 border-t border-border pt-6">
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-accent transition-colors uppercase tracking-widest"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-foreground/60 hover:text-accent transition-colors uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href="mailto:faganfabian4@gmail.com"
              className="text-sm text-foreground/60 hover:text-accent transition-colors uppercase tracking-widest"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
