import { useEffect, useRef, useState } from "react"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"

const MS_STORE = "https://apps.microsoft.com/detail/9N0MG9WF2LBG"

export default function Hero() {
  const { lang } = useApp()
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

        {/* CTA Buttons — per-platform */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-2.5 sm:mt-12 sm:flex-row sm:gap-3">
          {/* Windows — primary */}
          <a
            href={MS_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-violet-500/30 transition-all duration-300 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-violet-500/50 hover:scale-[1.03] hover:brightness-110 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
          >
            <DownloadIcon />
            Windows
          </a>

          {/* MacOS — disabled */}
          <span className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base">
            <AppleIcon />
            MacOS
            <span className="text-[10px] text-zinc-600">({lang === "ja" ? "審査中" : "Under Review"})</span>
          </span>

          {/* Steam — disabled */}
          <span className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base">
            <SteamIcon />
            Steam
            <span className="text-[10px] text-zinc-600">Coming Soon</span>
          </span>

          {/* Web — disabled */}
          <span className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50 sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base">
            <WebIcon />
            Web
            <span className="text-[10px] text-zinc-600">Coming Soon</span>
          </span>
        </div>

        {/* Learn More */}
        <div className="animate-fade-in-up animate-delay-400 mt-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 transition-all duration-300 hover:text-zinc-200"
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

function AppleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function SteamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 011.912-.585c.064 0 .127.002.19.006l2.861-4.142V8.91a4.528 4.528 0 014.524-4.524 4.528 4.528 0 014.524 4.524 4.528 4.528 0 01-4.524 4.524h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.406 3.406 0 01-3.327-2.725L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12S18.606 0 11.979 0z" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.466.727-3.558" />
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
