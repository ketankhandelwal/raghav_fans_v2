import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import './SplashScreen.css'

/* ══════════════════════════════════════════════
   THREE.JS — Spinning 3-D fan + particles + rings
══════════════════════════════════════════════ */
function useThreeScene(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.shadowMap.enabled = true

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.set(0, 0.5, 7)

    /* ── Lighting ── */
    scene.add(new THREE.AmbientLight('#ffffff', 0.3))
    const dirLight = new THREE.DirectionalLight('#ffffff', 1.2)
    dirLight.position.set(3, 5, 5)
    scene.add(dirLight)
    const redPoint = new THREE.PointLight('#e8192c', 3, 12)
    redPoint.position.set(-2, 2, 3)
    scene.add(redPoint)

    /* ── Fan group ── */
    const fanGroup = new THREE.Group()
    scene.add(fanGroup)

    // Hub
    const hub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.22, 32),
      new THREE.MeshStandardMaterial({ color: '#1a1a1a', metalness: 0.9, roughness: 0.2 })
    )
    hub.rotation.x = Math.PI / 2
    fanGroup.add(hub)

    // Center cap
    const cap = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 32, 32),
      new THREE.MeshStandardMaterial({ color: '#e8192c', metalness: 0.8, roughness: 0.15 })
    )
    fanGroup.add(cap)

    // 3 Blades
    const bladeCount = 3
    const bladeMat = new THREE.MeshStandardMaterial({
      color: '#1a1a1a', metalness: 0.7, roughness: 0.3, side: THREE.DoubleSide,
    })

    for (let i = 0; i < bladeCount; i++) {
      const shape = new THREE.Shape()
      shape.moveTo(0.15, -0.1)
      shape.quadraticCurveTo(0.9, -0.32, 1.4, 0.05)
      shape.quadraticCurveTo(1.3, 0.42, 0.6, 0.38)
      shape.quadraticCurveTo(0.15, 0.25, 0.15, -0.1)

      const geo = new THREE.ShapeGeometry(shape, 20)
      const blade = new THREE.Mesh(geo, bladeMat)
      blade.rotation.z = (i / bladeCount) * Math.PI * 2
      blade.rotation.x = 0.28 // slight pitch
      blade.position.z = 0.04
      fanGroup.add(blade)
    }

    fanGroup.position.set(2.8, 0.2, 0)
    fanGroup.rotation.y = -0.3

    /* ── Second smaller fan (left side) ── */
    const fanGroup2 = fanGroup.clone()
    fanGroup2.position.set(-3.2, -0.5, -1.5)
    fanGroup2.rotation.y = 0.4
    fanGroup2.scale.setScalar(0.55)
    // tint blades slightly
    fanGroup2.children.forEach(c => {
      if (c.material) c.material = c.material.clone()
    })
    scene.add(fanGroup2)

    /* ── Particles ── */
    const pgeo  = new THREE.BufferGeometry()
    const N     = 180
    const ppos  = new Float32Array(N * 3)
    const pscl  = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      ppos[i * 3]     = (Math.random() - 0.5) * 20
      ppos[i * 3 + 1] = (Math.random() - 0.5) * 12
      ppos[i * 3 + 2] = (Math.random() - 0.5) * 8
      pscl[i] = Math.random()
    }
    pgeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3))
    pgeo.setAttribute('aScale',   new THREE.BufferAttribute(pscl, 1))

    const pmat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false,
      uniforms: {
        uTime:  { value: 0 },
        uPR:    { value: renderer.getPixelRatio() },
        uColor: { value: new THREE.Color('#e8192c') },
      },
      vertexShader: `
        uniform float uTime; uniform float uPR; attribute float aScale;
        void main() {
          vec4 mp = modelMatrix * vec4(position, 1.0);
          mp.y += sin(uTime * 0.7 + mp.x * 1.1) * 0.14;
          mp.x += cos(uTime * 0.45 + mp.y * 0.9) * 0.1;
          vec4 vp = viewMatrix * mp;
          gl_Position  = projectionMatrix * vp;
          gl_PointSize = aScale * 3.0 * uPR * (1.0 / -vp.z);
        }`,
      fragmentShader: `
        uniform vec3 uColor;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          gl_FragColor = vec4(uColor, (1.0 - d * 2.0) * 0.35);
        }`,
    })
    scene.add(new THREE.Points(pgeo, pmat))

    /* ── Rings ── */
    const mkRing = (r, tube, op, rx, ry) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, tube, 16, 120),
        new THREE.MeshBasicMaterial({ color: '#e8192c', transparent: true, opacity: op })
      )
      m.rotation.x = rx; m.rotation.y = ry
      scene.add(m); return m
    }
    const r1 = mkRing(3.2, 0.005, 0.18,  Math.PI / 5,  0)
    const r2 = mkRing(5.0, 0.003, 0.08, -Math.PI / 4,  Math.PI / 5)
    const r3 = mkRing(1.8, 0.008, 0.14,  Math.PI / 3, -Math.PI / 6)

    /* ── Animation loop ── */
    const clock = new THREE.Clock()
    let raf
    const tick = () => {
      const t = clock.getElapsedTime()
      pmat.uniforms.uTime.value = t

      // Fan spins fast, speeds up over first 2 seconds
      const speed = Math.min(t * 1.8, 6)
      fanGroup.rotation.z  -= speed * 0.022
      fanGroup2.rotation.z += speed * 0.016

      // Subtle float
      fanGroup.position.y  = 0.2 + Math.sin(t * 0.6) * 0.06
      fanGroup2.position.y = -0.5 + Math.sin(t * 0.5 + 1) * 0.04

      // Red point light pulses
      redPoint.intensity = 2.5 + Math.sin(t * 2.2) * 0.8

      r1.rotation.z =  t * 0.14
      r2.rotation.z = -t * 0.08
      r3.rotation.z =  t * 0.2
      r3.rotation.y =  t * 0.09

      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onResize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      pgeo.dispose(); pmat.dispose(); renderer.dispose()
    }
  }, [])
}

/* ── Letter splitter ── */
function SplitLetters({ text, dataAttr }) {
  return (
    <span className="splash-word-inner" aria-label={text}>
      {text.split('').map((ch, i) => (
        <span key={i} className="splash-char" data-char={dataAttr}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <span className="splash-char-inner" style={{ display: 'inline-block' }}>
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        </span>
      ))}
    </span>
  )
}

/* ── Cycling sub-text ── */
const LABELS = ["FAN's", "WIRE's", "MCB's", "Home Appliances"]

function CycleText({ active }) {
  return (
    <div className="splash-cycle-wrap">
      {LABELS.map((label, i) => (
        <span key={label} className={`splash-cycle-item ${i === active ? 'is-active' : ''} ${i < active ? 'is-past' : ''}`}>
          {label}
        </span>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════════
   SPLASH SCREEN
══════════════════════════════════════════════ */
export default function SplashScreen({ onDone }) {
  const canvasRef = useRef(null)
  const [pct, setPct]       = useState(0)
  const [cycleIdx, setCycleIdx] = useState(0)

  useThreeScene(canvasRef)

  useEffect(() => {
    /* ── Cycle labels every 600ms after initial delay ── */
    let idx = 0
    const iv = setInterval(() => {
      idx = (idx + 1) % LABELS.length
      setCycleIdx(idx)
    }, 620)

    /* ── GSAP master timeline ── */
    const tl = gsap.timeline()

    gsap.set('.splash-line-top, .splash-line-bottom', { scaleX: 0, transformOrigin: 'left center' })
    gsap.set('.splash-char-inner', { y: '115%' })
    gsap.set('.splash-tagline', { opacity: 0, y: 18, letterSpacing: '14px' })
    gsap.set('.splash-since', { opacity: 0, x: -20 })
    gsap.set('.splash-logo-dot', { scale: 0, opacity: 0 })
    gsap.set('.splash-progress-track', { opacity: 0, scaleX: 0, transformOrigin: 'left center' })
    gsap.set('.splash-pct', { opacity: 0 })
    gsap.set('.splash-corner', { opacity: 0 })
    gsap.set('.splash-cycle-wrap', { opacity: 0, y: 24 })
    gsap.set('.splash-divider', { scaleX: 0, transformOrigin: 'left center', opacity: 0 })

    /* sweep lines */
    tl.to('.splash-line-top, .splash-line-bottom', {
      scaleX: 1, duration: 0.75, ease: 'power4.inOut', stagger: 0.1,
    }, 0.1)

    /* red dot */
    .to('.splash-logo-dot', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2.8)' }, 0.55)

    /* RAGHAV letters up */
    .to('[data-char="raghav"] .splash-char-inner', {
      y: '0%', duration: 0.95, ease: 'power4.out', stagger: 0.065,
    }, 0.5)

    /* divider line */
    .to('.splash-divider', { scaleX: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }, 1.0)

    /* cycling labels appear */
    .to('.splash-cycle-wrap', { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' }, 1.05)

    /* tagline */
    .to('.splash-tagline', {
      opacity: 1, y: 0, letterSpacing: '4px', duration: 1, ease: 'power3.out',
    }, 1.25)

    /* since + corners */
    .to('.splash-since', { opacity: 1, x: 0, duration: 0.65, ease: 'power2.out' }, 1.3)
    .to('.splash-corner', { opacity: 1, duration: 0.5, stagger: 0.08 }, 1.4)

    /* progress */
    .to('.splash-progress-track', { opacity: 1, scaleX: 1, duration: 0.45, ease: 'power2.out' }, 1.5)
    .to('.splash-pct', { opacity: 1, duration: 0.3 }, 1.7)

    /* counter */
    const counter = { val: 0 }
    tl.to(counter, {
      val: 100, duration: 1.6, ease: 'power1.inOut',
      onUpdate() { setPct(Math.round(counter.val)) },
    }, 1.5)

    /* hold */
    tl.to({}, { duration: 0.5 })

    /* ── EXIT ── */
    tl.to('.splash-tagline, .splash-since, .splash-corner, .splash-pct, .splash-progress-track, .splash-divider, .splash-cycle-wrap', {
      opacity: 0, duration: 0.38, ease: 'power2.in',
    })

    .to('[data-char="raghav"] .splash-char-inner', {
      y: '-115%', duration: 0.6, ease: 'power3.in', stagger: { each: 0.055, from: 'end' },
    }, '<0.05')

    .to('.splash-logo-dot', { scale: 0, opacity: 0, duration: 0.28, ease: 'power2.in' }, '<0.1')

    .to('.splash-line-top, .splash-line-bottom', {
      scaleX: 0, transformOrigin: 'right center', duration: 0.52, ease: 'power4.inOut', stagger: 0.07,
    }, '<0.15')

    /* curtain wipe UP */
    .to('.splash-curtain', { scaleY: 1, duration: 0.52, ease: 'power4.inOut', transformOrigin: 'bottom center' }, '<0.05')
    .to('.splash-curtain', {
      scaleY: 0, duration: 0.46, ease: 'power4.inOut', transformOrigin: 'top center', delay: 0.06,
      onComplete: () => { clearInterval(iv); onDone() },
    })

    return () => { tl.kill(); clearInterval(iv) }
  }, [onDone])

  return (
    <div className="splash-wrap">
      <canvas ref={canvasRef} className="splash-canvas" />

      {/* Corners */}
      <span className="splash-corner splash-corner--tl">RAGHAV FANS ®</span>
      <span className="splash-corner splash-corner--tr">EST. 2018</span>
      <span className="splash-corner splash-corner--bl">ALIGARH, UTTAR PRADESH</span>
      <span className="splash-corner splash-corner--br">QUALITY · INNOVATION</span>

      {/* Lines */}
      <div className="splash-line-top" />
      <div className="splash-line-bottom" />

      {/* ── Center ── */}
      <div className="splash-center">

        {/* RAGHAV + red dot */}
        <div className="splash-logo-row">
          <h1 className="splash-word splash-word--raghav">
            <SplitLetters text="RAGHAV" dataAttr="raghav" />
          </h1>
          <span className="splash-logo-dot" />
        </div>

        {/* Divider */}
        <div className="splash-divider" />

        {/* Cycling second line */}
        <CycleText active={cycleIdx} />

        {/* Tagline */}
        <p className="splash-tagline">COOLING INDIA SINCE 2018</p>
      </div>

      {/* Since */}
      <div className="splash-since">
        <span className="splash-since__year">2018</span>
        <span className="splash-since__label">Years of<br />Excellence</span>
      </div>

      {/* Progress */}
      <div className="splash-progress">
        <div className="splash-progress-track">
          <div className="splash-progress-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="splash-pct">{pct}%</span>
      </div>

      {/* Exit curtain */}
      <div className="splash-curtain" />
    </div>
  )
}
