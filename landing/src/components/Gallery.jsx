import { useState, useEffect, useCallback } from "react"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"

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

export default function Gallery() {
  const { lang, theme } = useApp()
  const captions = t("galleryCaptions", lang)

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const len = slideSrcs.length

  const next = useCallback(() => setCurrent((i) => (i + 1) % len), [len])
  const prev = useCallback(() => setCurrent((i) => (i - 1 + len) % len), [len])

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [isPaused, next])

  return (
    <section id="gallery" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("galleryTitle", lang)}
          </h2>
          <p className="mt-4 text-zinc-400">
            {t("gallerySubtitle", lang)}
          </p>
        </div>

        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${theme.glowFrom} ${theme.glowVia} ${theme.glowTo} blur-2xl`} />

          <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-zinc-950">
              {slideSrcs.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? "scale(1)" : "scale(1.02)",
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

            <div className="flex items-center justify-between border-t border-zinc-800 bg-zinc-900/90 px-5 py-3 backdrop-blur">
              <p className="text-sm text-zinc-300">{captions[current]}</p>
              <span className="text-xs text-zinc-600">{current + 1} / {len}</span>
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 left-3 z-10 -translate-y-1/2 rounded-full border border-zinc-700/60 bg-zinc-900/80 p-2 text-zinc-400 backdrop-blur transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 right-3 z-10 -translate-y-1/2 rounded-full border border-zinc-700/60 bg-zinc-900/80 p-2 text-zinc-400 backdrop-blur transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slideSrcs.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? `w-6 ${theme.indicator}` : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
