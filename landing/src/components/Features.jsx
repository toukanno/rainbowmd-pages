import { useState, useEffect } from "react"
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion"
import { useApp } from "../context/AppContext"
import { t } from "../i18n"

function useFeatures() {
  return [
    {
      titleKey: "featurePreviewTitle",
      descKey: "featurePreviewDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      titleKey: "featureThemeTitle",
      descKey: "featureThemeDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      titleKey: "featureOpacityTitle",
      descKey: "featureOpacityDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>
      ),
    },
    {
      titleKey: "featureExportTitle",
      descKey: "featureExportDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
      ),
    },
    {
      titleKey: "featureSearchTitle",
      descKey: "featureSearchDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      titleKey: "featureToolbarTitle",
      descKey: "featureToolbarDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
    {
      titleKey: "featureAITitle",
      descKey: "featureAIDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      ),
    },
    {
      titleKey: "featureLangTitle",
      descKey: "featureLangDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495A18.023 18.023 0 0116.5 3.75m0 0c.612 0 1.22.014 1.826.042M18.326 3.793A18.052 18.052 0 0121 5.634" />
        </svg>
      ),
    },
    {
      titleKey: "featureFontTitle",
      descKey: "featureFontDesc",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
      ),
    },
  ]
}

const SLIDE_INTERVAL = 200
const CARDS_PER_VIEW = 3

export default function Features() {
  const { lang, theme } = useApp()
  const features = useFeatures()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)

  const totalSlides = features.length

  // Auto-slide at 0.2s
  useEffect(() => {
    if (!isSliding) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides)
    }, SLIDE_INTERVAL)
    return () => clearInterval(id)
  }, [isSliding, totalSlides])

  // Get visible cards (3 at a time, wrapping)
  const visibleCards = []
  for (let i = 0; i < CARDS_PER_VIEW; i++) {
    visibleCards.push(features[(activeIndex + i) % totalSlides])
  }

  return (
    <section id="features" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {t("featuresTitle", lang)}
          </h2>
          <p className="mt-4 text-zinc-400">
            {t("featuresSubtitle", lang)}
          </p>
        </div>

        {/* Slider controls */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <button
            onClick={() => setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)}
            className="rounded-full border border-zinc-700 bg-zinc-800/80 p-2 text-zinc-400 transition hover:border-zinc-600 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setIsSliding(!isSliding)}
            className={`rounded-lg border px-4 py-1.5 text-xs font-medium transition ${
              isSliding
                ? `${theme.btn} border-transparent text-white`
                : "border-zinc-700 bg-zinc-800/80 text-zinc-300 hover:border-zinc-600"
            }`}
          >
            {isSliding ? "Stop" : "Auto Slide"}
          </button>

          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % totalSlides)}
            className="rounded-full border border-zinc-700 bg-zinc-800/80 p-2 text-zinc-400 transition hover:border-zinc-600 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Sliding cards (3 visible) */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((f, i) => (
              <motion.div
                key={`${f.titleKey}-${(activeIndex + i) % totalSlides}`}
                initial={{ opacity: 0, x: 40, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-800/60`}
              >
                <div className={`mb-4 inline-flex rounded-xl ${theme.bgIcon} p-3 ${theme.textIcon} transition ${theme.bgIconHover}`}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(f.titleKey, lang)}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {t(f.descKey, lang)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === activeIndex
                  ? `w-5 ${theme.indicator}`
                  : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        {/* Full grid (all 9 cards) */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-lg font-semibold text-zinc-400">
            {lang === "ja" ? "すべての機能" : "All Features"}
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.titleKey}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:border-zinc-700 hover:bg-zinc-800/60"
              >
                <div className={`mb-4 inline-flex rounded-xl ${theme.bgIcon} p-3 ${theme.textIcon} transition ${theme.bgIconHover}`}>
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{t(f.titleKey, lang)}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {t(f.descKey, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
