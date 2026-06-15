const modules = [
  { num: '01', title: 'Frontend',    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'] },
  { num: '02', title: 'Backend',     tags: ['Node.js', 'Prisma', 'PostgreSQL', 'REST API'] },
  { num: '03', title: 'Automation',  tags: ['n8n', 'Telegram Bot', 'Webhook', 'Google Calendar API'] },
  { num: '04', title: 'Deployment',  tags: ['Vercel', 'Supabase', 'Git', 'GitHub'] },
]

export default function Stack() {
  return (
    <section id="stack" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-10 border-b border-stone-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">04 THE TOOLS I USE</p>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
          The stack behind{' '}
          <span style={{ color: '#2D5016' }}>the delivery.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-stone-200">
        {modules.map((m) => (
          <div key={m.num} className="bg-[#F5F0E8] p-8">
            <p className="text-xs uppercase tracking-widest text-stone-300 mb-1">MODULE {m.num}</p>
            <h3 className="font-serif text-2xl text-stone-900 mb-4">{m.title}</h3>
            <div className="flex flex-wrap gap-2">
              {m.tags.map((t) => (
                <span key={t} className="text-xs border border-stone-200 px-3 py-1 text-stone-500 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
