export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      {/* Badge */}
      <span className="inline-block border border-stone-400 rounded-full px-4 py-1 text-sm text-stone-600">
        Building modern web experiences.
      </span>

      {/* Heading */}
      <h1
        className="font-serif text-6xl md:text-8xl mt-6 leading-tight"
        style={{ color: '#1a1a1a' }}
      >
        Hi! I am Fabian
      </h1>

      {/* Subtext */}
      <p
        className="text-lg md:text-xl max-w-2xl mt-4 leading-relaxed"
        style={{ color: '#444444' }}
      >
        Full-stack web developer building fast, clean, and scalable web products — from UI to deployment.
      </p>

      {/* Nav Pills */}
      <div className="flex flex-wrap gap-3 justify-center mt-10">
        <a
          href="#about"
          className="border border-stone-400 rounded-full px-5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-200 transition-colors"
        >
          01&nbsp;&nbsp;About ↗
        </a>
        <a
          href="#work"
          className="border border-stone-400 rounded-full px-5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-200 transition-colors"
        >
          02&nbsp;&nbsp;Work ↗
        </a>
        <a
          href="#contact"
          className="border border-stone-400 rounded-full px-5 py-2 text-sm font-medium text-stone-700 hover:bg-stone-200 transition-colors"
        >
          03&nbsp;&nbsp;Contact ↗
        </a>
      </div>
    </section>
  )
}
