'use client'

import { useState } from 'react'

const items = [
  {
    title: 'Freelance Full-Stack Developer',
    period: '2023–Present',
    desc: 'Building web products for clients across Indonesia.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: 'LinguaLeap — English Learning Platform',
    period: '2024–2025',
    desc: 'Duolingo-style app with AI tutor for Indonesian learners.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Bloomy Yellow — WhatsApp Flower Shop',
    period: '2024',
    desc: 'WhatsApp-integrated storefront for a flower business.',
    tags: ['WhatsApp API', 'n8n', 'Automation'],
  },
]

export default function Experience() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-10 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">03 EXPERIENCE</p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Experience.</h2>
      </div>

      <div className="divide-y divide-stone-200">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left"
            >
              <div className="flex items-center gap-6">
                <span className="text-stone-300 text-sm font-mono">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <span className="font-serif text-xl text-stone-900">{item.title}</span>
                  <span className="ml-3 text-sm text-stone-400">{item.period}</span>
                </div>
              </div>
              <span
                className="text-stone-400 text-lg transition-transform duration-200"
                style={{ display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: open === i ? '120px' : '0px' }}
            >
              <div className="pb-5 pl-14">
                <p className="text-stone-500 text-sm mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs border border-stone-200 px-2 py-0.5 text-stone-400 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
