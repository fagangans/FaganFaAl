'use client'

import { useEffect, useState } from 'react'

export default function About() {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const wib = new Date(now.getTime() + 7 * 60 * 60 * 1000)
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
    <section id="about" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left: photo */}
        <div className="w-full aspect-[4/5] bg-stone-300 rounded-sm overflow-hidden">
          {/* Upload portrait photo as /public/photo.jpg to replace this */}
        </div>

        {/* Right */}
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">01 ABOUT</p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            <span style={{ color: '#2D5016' }}>Full-stack developer</span>{' '}
            <span className="text-stone-900">with delivery.</span>
          </h2>

          <p className="text-stone-600 leading-relaxed mb-8">
            I build modern web products end-to-end — from database to UI to deployment.
          </p>

          {/* Location + Clock */}
          <div className="flex gap-10 pb-6 mb-6 border-b border-stone-200">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Location</p>
              <p className="font-serif text-lg text-stone-800">Indonesia</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Local Time</p>
              <p className="font-serif text-lg text-stone-800">{clock}</p>
            </div>
          </div>

          {/* Landmarks */}
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Landmarks</p>
          <ul className="space-y-2">
            {[
              'Deployed 3+ production apps on Vercel',
              'Built GrammarQuest — English learning app',
              'Restaurant website: Nusantara Dining',
            ].map((item, i) => (
              <li key={i} className="flex gap-4 text-stone-600 text-sm">
                <span className="text-stone-300 font-mono">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
