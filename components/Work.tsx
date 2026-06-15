const projects = [
  {
    title: 'GrammarQuest',
    description: 'English learning app with gamification',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: 'https://grammarquest.vercel.app',
  },
  {
    title: 'Nusantara Dining',
    description: 'Restaurant website template',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    link: '#',
  },
  {
    title: 'Portfolio Site',
    description: 'Personal branding & portfolio',
    tags: ['Next.js', 'Framer Motion', 'Vercel'],
    link: '#',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-foreground/40 mb-4">
          <span className="text-accent">02</span> SELECTED WORK
        </p>
        <h2 className="font-serif text-4xl md:text-5xl">Technical work.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target={project.link !== '#' ? '_blank' : undefined}
            rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
            className="group block bg-card border border-border rounded-sm p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
          >
            <h3 className="font-serif text-2xl mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-foreground/60 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs border border-border px-2 py-0.5 rounded-sm text-foreground/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
