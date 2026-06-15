'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    const wrapper = wrapperRef.current
    if (!video || !wrapper) return

    // Duration of video we want to scrub through (seconds)
    const SCRUB_DURATION = 8

    const updateVideoTime = () => {
      const rect = wrapper.getBoundingClientRect()
      const scrollableHeight = wrapper.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / scrollableHeight)
      video.currentTime = progress * SCRUB_DURATION
    }

    const onReady = () => {
      // Clamp to SCRUB_DURATION if video is shorter
      video.currentTime = 0
      updateVideoTime()
    }

    if (video.readyState >= 1) {
      onReady()
    } else {
      video.addEventListener('loadedmetadata', onReady, { once: true })
    }

    window.addEventListener('scroll', updateVideoTime, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateVideoTime)
    }
  }, [])

  return (
    // Wrapper is taller than viewport — creates scroll space for video scrubbing
    // 100vh = pinned hero, extra 700px = scroll distance to drive 8s video
    <div ref={wrapperRef} style={{ height: 'calc(100vh + 700px)' }}>
      <section
        id="hero"
        className="sticky top-0 h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      >
        {/* Video background — paused, controlled by scroll */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="/hero_bg_final_1.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src="/ssstik.io_1781513270705.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-block border border-white/50 rounded-full px-4 py-1 text-sm text-white/90 bg-white/10 backdrop-blur-sm mb-6">
            Building modern web experiences.
          </span>

          <h1 className="font-serif text-6xl md:text-8xl text-white leading-tight drop-shadow-sm">
            Hi! I am Fabian
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mt-4 leading-relaxed text-white/85">
            Full-stack web developer building fast, clean, and scalable web products — from UI to deployment.
          </p>

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

          {/* Scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-white/20 animate-pulse" />
          </div>
        </div>
      </section>
    </div>
  )
}
