export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2D5016 50%, #1a1a1a 100%)',
      }}
    >
      {/* Badge */}
      <div className="mb-8">
        <span className="inline-block border border-white/30 text-white/90 text-sm px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm">
          Building modern web experiences.
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
        Hi! I am Fabian
      </h1>

      {/* Subtext */}
      <p className="text-white/80 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
        Full-stack web developer building fast, clean, and scalable web products — from UI to deployment.
      </p>

      {/* Nav Pills */}
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="#about"
          className="flex items-center gap-2 border border-white/30 text-white px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          <span className="text-white/60 text-xs">01</span> About ↗
        </a>
        <a
          href="#work"
          className="flex items-center gap-2 border border-white/30 text-white px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          <span className="text-white/60 text-xs">02</span> Work ↗
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 border border-white/30 text-white px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
        >
          <span className="text-white/60 text-xs">03</span> Contact ↗
        </a>
      </div>
    </section>
  )
}
