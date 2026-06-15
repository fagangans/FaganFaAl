'use client'

import { useEffect, useState } from 'react'

const landmarks = [
  { num: '01', text: 'Deployed 3+ production apps on Vercel' },
  { num: '02', text: 'Built GrammarQuest — English learning app' },
  { num: '03', text: 'Restaurant website: Nusantara Dining' },
]

export default function About() {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const wib = new Date(now.getTime() + (7 * 60 * 60 * 1000))
      const h = String(wib.getUTCHours()).padStart(2, '0')
      const m = String(wib.getUTCMinutes()).padStart(2, '0')
      const s = String(wib.getUTCSeconds()).padStart(2, '0')
      setClock(`${h}:${m}:${s} WIB`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: photo placeholder */}
        <div
          className="w-full aspect-[4/5] bg-gray-400 grayscale rounded-sm"
          aria-label="Photo placeholder"
        />

        {/* Right: content */}
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            <span className="text-accent">Full-stack developer</span>{' '}
            <span className="text-foreground">with delivery.</span>
          </h2>

          <p className="text-foreground/70 text-base leading-relaxed">
            I build modern web products end-to-end — from database to UI to deployment.
          </p>

          <div className="flex gap-12 border-t border-border pt-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Location</p>
              <p className="font-serif text-xl">Indonesia</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground/40 mb-1">Local Time</p>
              <p className="font-serif text-xl">{clock}</p>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">Landmarks</p>
            <ul className="space-y-3">
              {landmarks.map((item) => (
                <li key={item.num} className="flex items-start gap-4">
                  <span className="text-accent/60 text-sm font-mono mt-0.5">{item.num}</span>
                  <span className="text-foreground/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
