import { useEffect, useRef, useState } from "react"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"

const MS_STORE = "https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C"

function RippleButton({ href, children, className, ...props }) {
  const [ripples, setRipples] = useState([])

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute animate-ripple rounded-full bg-white/30"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
      {children}
    </a>
  )
}

export default function Hero() {
  const { lang, theme } = useApp()
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  // Parallax
  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden px-6 pt-28 pb-20 md:pt-40 md:pb-32 flex items-center justify-center"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow orb */}
        <div
          className="animate-breathe absolute top-[-200px] left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[160px]"
          style={{
            background: `radial-gradient(ellipse, var(--hero-primary, #7C3AED) 0%, transparent 70%)`,
            transform: `translate(-50%, ${parallaxOffset * 0.5}px)`,
          }}
        />
        {/* Secondary glow orb */}
        <div
          className="animate-glow absolute top-[100px] right-[-200px] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{
            background: `radial-gradient(ellipse, #22D3EE 0%, transparent 70%)`,
            transform: `translateY(${parallaxOffset * 0.3}px)`,
          }}
        />
        {/* Accent glow orb */}
        <div
          className="animate-float absolute bottom-[0] left-[-100px] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            background: `radial-gradient(ellipse, #F472B6 0%, transparent 70%)`,
            transform: `translateY(${-parallaxOffset * 0.2}px)`,
          }}
        />
        {/* Gradient mesh overlay */}
        <div
          className="animate-aurora absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(135deg, #7C3AED 0%, #22D3EE 25%, #F472B6 50%, #7C3AED 75%, #22D3EE 100%)",
            backgroundSize: "400% 400%",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-5xl text-center"
        style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
      >
        {/* Badge — glassmorphism */}
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full glass px-5 py-2 text-sm text-zinc-200 shadow-lg shadow-black/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          {t("heroBadge", lang)}
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up animate-delay-100 text-6xl font-extrabold leading-[1.1] tracking-tight md:text-8xl lg:text-9xl">
          <span className="hero-gradient-text bg-clip-text text-transparent">
            Rainbow
          </span>
          <span className="text-white">MD</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-8 max-w-2xl text-lg text-zinc-400 md:text-xl lg:text-2xl leading-relaxed">
          {t("heroSubtitle1", lang)}
          <br className="hidden sm:block" />
          <span className="text-zinc-500">{t("heroSubtitle2", lang)}</span>
        </p>

        {/* CTA Buttons — 3-button layout */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-2.5 sm:mt-12 sm:flex-row sm:gap-4">
          {/* Primary: Free Download */}
          <RippleButton
            href={MS_STORE}
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-violet-500/30 transition-all duration-300 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-violet-500/50 hover:scale-[1.03] hover:brightness-110 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
          >
            <DownloadIcon />
            {t("heroDownload", lang)}
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 sm:rounded-2xl" />
          </RippleButton>

          {/* Secondary: Microsoft Store */}
          <RippleButton
            href={MS_STORE}
            className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-zinc-200 shadow-xl shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:text-white sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
          >
            <MsStoreIcon />
            {t("heroStore", lang)}
          </RippleButton>

          {/* Tertiary: Learn More */}
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700/60 px-6 py-3 text-sm font-semibold text-zinc-400 shadow-lg shadow-black/10 transition-all duration-300 hover:border-violet-500/40 hover:text-zinc-200 hover:scale-[1.03] hover:bg-white/[0.03] sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
          >
            <LearnMoreIcon />
            {t("heroLearnMore", lang)}
          </a>
        </div>

        {/* Scroll indicator — clickable */}
        <div className="animate-fade-in-up animate-delay-500 mt-16 md:mt-24">
          <button
            type="button"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="mx-auto flex cursor-pointer flex-col items-center gap-1.5 text-zinc-600 transition-colors duration-200 hover:text-zinc-400"
            aria-label="Scroll to features"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function MsStoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4 2H2v9.4h9.4V2zM22 2h-9.4v9.4H22V2zM11.4 12.6H2V22h9.4v-9.4zM22 12.6h-9.4V22H22v-9.4z" />
    </svg>
  )
}

function LearnMoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
