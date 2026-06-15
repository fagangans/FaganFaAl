'use client'

import { useState } from 'react'

interface ExperienceItem {
  title: string
  period: string
  description: string
  tags: string[]
}

const items: ExperienceItem[] = [
  {
    title: 'Freelance Full-Stack Developer',
    period: '2023–Present',
    description: 'Building web products for clients across Indonesia.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: 'LinguaLeap — English Learning Platform',
    period: '2024–2025',
    description: 'Duolingo-style app with AI tutor for Indonesian learners.',
    tags: ['Next.js', 'Prisma', 'PostgreSQL'],
  },
  {
    title: 'Bloomy Yellow — WhatsApp Flower Shop',
    period: '2024',
    description: 'WhatsApp-integrated storefront for a flower business.',
    tags: ['WhatsApp API', 'n8n', 'Automation'],
  },
]

function AccordionItem({ item, index }: { item: ExperienceItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-6">
          <span className="text-foreground/30 text-sm font-mono">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            <span className="font-serif text-xl group-hover:text-accent transition-colors">
              {item.title}
            </span>
            <span className="ml-4 text-sm text-foreground/40">{item.period}</span>
          </div>
        </div>
        <span className="text-foreground/40 text-xl transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '200px' : '0px' }}
      >
        <div className="pb-5 pl-14">
          <p className="text-foreground/70 mb-3">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs border border-border px-2 py-0.5 rounded-sm text-foreground/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">
          <span className="text-accent">03</span> ABOUT
        </p>
        <h2 className="font-serif text-4xl md:text-5xl">Experience.</h2>
      </div>

      <div>
        {items.map((item, i) => (
          <AccordionItem key={item.title} item={item} index={i} />
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
