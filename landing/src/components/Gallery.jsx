import { useState, useEffect, useCallback, useRef } from "react"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"
import ScrollReveal from "./ScrollReveal"

const slideSrcs = [
  "/img/ss-main.png",
  "/img/theme-ocean.png",
  "/img/theme-dark.png",
  "/img/theme-light.png",
  "/img/theme-sunset.png",
  "/img/theme-midnight.png",
  "/img/theme-forest.png",
  "/img/theme-paper.png",
  "/img/transparency.png",
  "/img/AI.png",
  "/img/ss-export.png",
  "/img/ss-preview.png",
  "/img/ss-lang.png",
  "/img/feature-lang.png",
]

const INTERVAL = 5000
const FAST_INTERVAL = 1500

export default function Gallery() {
  const { lang, theme } = useApp()
  const captions = t("galleryCaptions", lang)

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const autoScrollRef = useRef(null)
  const len = slideSrcs.length

  const next = useCallback(() => setCurrent((i) => (i + 1) % len), [len])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + len) % len), [len])

  // Normal auto-play (5s)
  useEffect(() => {
    if (isPaused || isAutoScrolling) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [isPaused, isAutoScrolling, next])

  // Fast auto-scroll (0.5s)
  useEffect(() => {
    if (!isAutoScrolling) {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current)
      return
    }
    autoScrollRef.current = setInterval(next, FAST_INTERVAL)
    return () => clearInterval(autoScrollRef.current)
  }, [isAutoScrolling, next])

  function toggleAutoScroll() {
    setIsAutoScrolling((prev) => !prev)
    setIsPaused(false)
  }

  function handleManualNav(fn) {
    setIsAutoScrolling(false)
    fn()
  }

  return (
    <section id="gallery" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-pink-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-pink-400 uppercase">
              Gallery
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {t("galleryTitle", lang)}
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              {t("gallerySubtitle", lang)}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            className="relative mx-auto max-w-4xl"
            onMouseEnter={() => { if (!isAutoScrolling) setIsPaused(true) }}
            onMouseLeave={() => { if (!isAutoScrolling) setIsPaused(false) }}
          >
            {/* Glow behind */}
            <div className="absolute -inset-6 rounded-3xl opacity-50">
              <div className="animate-aurora absolute inset-0 rounded-3xl blur-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(34,211,238,0.12) 50%, rgba(244,114,182,0.12) 100%)",
                  backgroundSize: "400% 400%",
                }}
              />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl shadow-black/50">
              <div className="relative aspect-[16/10] w-full bg-zinc-950">
                {slideSrcs.map((src, i) => (
                  <div
                    key={src}
                    className={`absolute inset-0 transition-all ease-in-out ${isAutoScrolling ? "duration-300" : "duration-700"}`}
                    style={{
                      opacity: i === current ? 1 : 0,
                      transform: i === current ? "scale(1)" : "scale(1.04)",
                      pointerEvents: i === current ? "auto" : "none",
                    }}
                  >
                    <img
                      src={src}
                      alt={captions[i]}
                      className="h-full w-full object-contain"
                      loading={i === 0 ? "eager" : "lazy"}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-zinc-800 glass px-4 py-2.5 sm:px-5 sm:py-3">
                <p className="min-w-0 truncate text-xs text-zinc-300 sm:text-sm">{captions[current]}</p>
                <span className="ml-2 shrink-0 rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-500 sm:px-2.5 sm:text-xs">{current + 1} / {len}</span>
              </div>
            </div>

            {/* Nav buttons */}
            <button
              onClick={() => handleManualNav(prev)}
              aria-label="Previous"
              className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full glass p-2 text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-110 sm:left-3 sm:p-2.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleManualNav(next)}
              aria-label="Next"
              className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full glass p-2 text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white hover:scale-110 sm:right-3 sm:p-2.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </ScrollReveal>

        {/* Controls: dots + auto-scroll button */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8">
          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            {slideSrcs.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoScrolling(false); setCurrent(i) }}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  i === current ? `w-5 sm:w-7 ${theme.indicator}` : "w-1.5 sm:w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-scroll toggle button */}
          <button
            onClick={toggleAutoScroll}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
              isAutoScrolling
                ? "border-violet-500/50 bg-violet-500/10 text-violet-300 shadow-lg shadow-violet-500/10"
                : "border-zinc-700/60 text-zinc-500 hover:border-zinc-600 hover:text-zinc-300"
            }`}
          >
            {isAutoScrolling ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Stop
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Auto Play
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
