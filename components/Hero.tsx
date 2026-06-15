export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Video background — autoplay, loop, muted (required for autoplay) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero_bg_final_1.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback: photo shows if video not supported or not uploaded yet */}
      </video>

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block border border-white/50 rounded-full px-4 py-1 text-sm text-white/90 bg-white/10 backdrop-blur-sm mb-6">
          Building modern web experiences.
        </span>

        {/* Heading */}
        <h1 className="font-serif text-6xl md:text-8xl text-white leading-tight drop-shadow-sm">
          Hi! I am Fabian
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-2xl mt-4 leading-relaxed text-white/85">
          Full-stack web developer building fast, clean, and scalable web products — from UI to deployment.
        </p>

        {/* Nav Pills */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          <a
            href="#about"
            className="border border-white/40 rounded-full px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            01&nbsp;&nbsp;About ↗
          </a>
          <a
            href="#work"
            className="border border-white/40 rounded-full px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            02&nbsp;&nbsp;Work ↗
          </a>
          <a
            href="#contact"
            className="border border-white/40 rounded-full px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
          >
            03&nbsp;&nbsp;Contact ↗
          </a>
        </div>
      </div>
    </section>
  )
}
