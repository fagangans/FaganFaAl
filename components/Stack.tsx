const modules = [
  {
    num: '01',
    title: 'Frontend',
    description: 'Responsive interfaces built with modern frameworks and utility-first CSS.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
  },
  {
    num: '02',
    title: 'Backend',
    description: 'Scalable server-side logic with type-safe database access.',
    tags: ['Node.js', 'Prisma', 'PostgreSQL', 'REST API'],
  },
  {
    num: '03',
    title: 'Automation',
    description: 'Workflow automation and bot integrations for business processes.',
    tags: ['n8n', 'Telegram Bot', 'Webhook', 'Google Calendar API'],
  },
  {
    num: '04',
    title: 'Deployment',
    description: 'Cloud-ready deployment pipelines from commit to production.',
    tags: ['Vercel', 'Supabase', 'Git', 'GitHub'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">
          <span className="text-accent">04</span> THE TOOLS I USE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight">
          The stack behind<br />
          <span className="text-accent">the delivery.</span>
        </h2>
        <p className="text-foreground/60 text-base leading-relaxed md:pt-4">
          My toolset is structured around outcomes: building interfaces, designing backend services, automating workflows, and making launches stable enough to be useful beyond the prototype stage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <div
            key={mod.num}
            className="bg-card border border-border rounded-sm p-6 space-y-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-foreground/30 mb-1">
                  MODULE {mod.num}
                </p>
                <h3 className="font-serif text-3xl">{mod.title}</h3>
              </div>
            </div>
            <p className="text-foreground/60 text-sm leading-relaxed">{mod.description}</p>
            <div className="flex flex-wrap gap-2">
              {mod.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-border px-2 py-0.5 rounded-sm text-foreground/50 uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
