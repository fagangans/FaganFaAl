const projects = [
  {
    num: '01',
    title: 'GrammarQuest',
    desc: 'English learning app with gamification',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: 'https://grammarquest.vercel.app',
  },
  {
    num: '02',
    title: 'Nusantara Dining',
    desc: 'Restaurant website template',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: '#',
  },
  {
    num: '03',
    title: 'Portfolio Site',
    desc: 'Personal branding & portfolio',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: '#',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-10 border-b border-stone-200 pb-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">02 SELECTED WORK</p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">Technical work.</h2>
        </div>
      </div>

      <div className="divide-y divide-stone-200">
        {projects.map((p) => (
          <a
            key={p.num}
            href={p.link}
            target={p.link !== '#' ? '_blank' : undefined}
            rel={p.link !== '#' ? 'noopener noreferrer' : undefined}
            className="group flex items-center justify-between py-6 hover:pl-2 transition-all duration-200"
          >
            <div className="flex items-center gap-6">
              <span className="text-stone-300 text-sm font-mono">{p.num}</span>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 group-hover:text-[#2D5016] transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone-400 text-sm mt-0.5">{p.desc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs border border-stone-200 px-2 py-0.5 text-stone-400 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-stone-300 group-hover:text-[#2D5016] transition-colors text-xl">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
