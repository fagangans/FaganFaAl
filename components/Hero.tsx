'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Mobile: limit pixel ratio for performance
    const isMobile = window.innerWidth < 768
    const pixelRatio = isMobile ? 1 : Math.min(window.devicePixelRatio, 2)

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
    })
    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    renderer.setClearColor(0x000000, 0)

    // Floating particles
    const particleCount = isMobile ? 80 : 200
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    const speeds = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40
      sizes[i] = Math.random() * 2 + 0.5
      speeds[i] = Math.random() * 0.003 + 0.001
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.4,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // Subtle wireframe torus for depth/structure
    const torusGeo = new THREE.TorusGeometry(12, 0.1, 8, 60)
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0x2d5016,
      transparent: true,
      opacity: 0.15,
      wireframe: true,
    })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    torus.rotation.x = Math.PI / 4
    if (!isMobile) scene.add(torus)

    // Second torus — offset
    const torus2Geo = new THREE.TorusGeometry(18, 0.06, 6, 80)
    const torus2Mat = new THREE.MeshBasicMaterial({
      color: 0x4a7c28,
      transparent: true,
      opacity: 0.08,
      wireframe: true,
    })
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat)
    torus2.rotation.x = -Math.PI / 6
    torus2.rotation.y = Math.PI / 5
    if (!isMobile) scene.add(torus2)

    // Mouse parallax (desktop only)
    let mouseX = 0
    let mouseY = 0
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    if (!isMobile) window.addEventListener('mousemove', handleMouse)

    // Animation loop
    let frameId: number
    let time = 0

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      time += 0.005

      // Drift particles upward slowly
      const pos = geometry.attributes.position as THREE.BufferAttribute
      for (let i = 0; i < particleCount; i++) {
        pos.array[i * 3 + 1] += speeds[i]
        // Wrap around
        if ((pos.array as Float32Array)[i * 3 + 1] > 30) {
          (pos.array as Float32Array)[i * 3 + 1] = -30
        }
      }
      pos.needsUpdate = true

      // Rotate tori
      torus.rotation.z = time * 0.15
      torus2.rotation.z = -time * 0.08
      torus2.rotation.y = time * 0.05

      // Parallax camera
      if (!isMobile) {
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.03
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03
      }

      // Gentle particle sway
      particles.rotation.y = time * 0.02

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      torusGeo.dispose()
      torusMat.dispose()
      torus2Geo.dispose()
      torus2Mat.dispose()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1a08 0%, #1a2e0d 30%, #2D5016 60%, #111a0a 100%)',
      }}
    >
      {/* Three.js canvas — absolute fill */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Content — above canvas */}
      <div className="relative z-10 flex flex-col items-center">
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
      </div>
    </section>
  )
}
