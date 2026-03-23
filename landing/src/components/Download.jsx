import { useState, useEffect } from "react"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"
import ScrollReveal from "./ScrollReveal"

const GITHUB_RELEASE = "https://github.com/toukanno/rainbowmd-pages/releases/latest"
const MS_STORE = "https://apps.microsoft.com/detail/9N0MG9WF2LBG"
const PRODUCT_PAGE = "https://react-modern-site-eight.vercel.app/"

function RippleLink({ href, children, className, target = "_blank" }) {
  const [ripples, setRipples] = useState([])

  function handleClick(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600)
  }

  const linkProps = target === "_blank"
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <a
      href={href}
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...linkProps}
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute animate-ripple rounded-full bg-white/25"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
      {children}
    </a>
  )
}

export default function Download() {
  const { lang, theme } = useApp()

  // Load MS Store badge script
  useEffect(() => {
    const id = "ms-store-badge-script"
    if (document.getElementById(id)) return
    const script = document.createElement("script")
    script.id = id
    script.type = "module"
    script.src = "https://get.microsoft.com/badge/ms-store-badge.bundled.js"
    document.head.appendChild(script)
  }, [])

  return (
    <section id="download" className="relative px-6 py-24 md:py-36">
      <ScrollReveal>
        <div className="relative mx-auto max-w-4xl">
          {/* Animated glow background */}
          <div className="absolute -inset-8 rounded-3xl opacity-60">
            <div className="animate-aurora absolute inset-0 rounded-3xl blur-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(34,211,238,0.15) 33%, rgba(244,114,182,0.15) 66%, rgba(124,58,237,0.2) 100%)",
                backgroundSize: "400% 400%",
              }}
            />
          </div>

          {/* Pulse ring effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="animate-pulse-ring h-32 w-32 rounded-full border border-violet-500/20" />
          </div>

          <div className="relative rounded-2xl border border-zinc-700/50 glass-strong p-8 text-center sm:rounded-3xl sm:p-12 md:p-16">
            <span className="mb-4 inline-block rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
              Download
            </span>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("downloadTitle", lang)}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-zinc-400 sm:mt-5 sm:text-lg">
              {t("downloadDesc1", lang)}
              <br />
              {t("downloadDesc2", lang)}
            </p>

            {/* Triple CTA — 3 buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:mt-10 sm:flex-row sm:gap-4">
              {/* Primary: Free Download → MS Store */}
              <RippleLink
                href={MS_STORE}
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-violet-500/30 transition-all duration-300 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:shadow-violet-500/50 hover:scale-[1.03] hover:brightness-110 sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Free Download
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 sm:rounded-2xl" />
              </RippleLink>

              {/* Secondary: GitHub Releases */}
              <RippleLink
                href={GITHUB_RELEASE}
                className="group inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-semibold text-zinc-200 shadow-xl shadow-black/20 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:text-white sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t("downloadGithub", lang)}
              </RippleLink>

              {/* Tertiary: Product Details */}
              <a
                href={PRODUCT_PAGE}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-zinc-700/60 px-6 py-3 text-sm font-semibold text-zinc-400 shadow-lg shadow-black/10 transition-all duration-300 hover:border-violet-500/40 hover:text-zinc-200 hover:scale-[1.03] hover:bg-white/[0.03] sm:rounded-2xl sm:px-7 sm:py-4 sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                {t("downloadProduct", lang)}
              </a>
            </div>

            {/* Microsoft Store official badge — hidden on SP */}
            <div className="mt-8 hidden flex-col items-center gap-2 sm:mt-10 sm:flex sm:gap-3">
              <p className="text-[10px] text-zinc-500 sm:text-xs">{t("downloadBadgeLabel", lang)}</p>
              <div>
                <ms-store-badge
                  productid="xp8bvg4dlvcq3c"
                  productname="RainbowMD"
                  window-mode="direct"
                  theme="dark"
                  size="large"
                  language={lang}
                  animation="on"
                />
              </div>
            </div>

            <p className="mt-5 text-[10px] text-zinc-600 sm:mt-6 sm:text-xs">
              {t("downloadNote", lang)}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
