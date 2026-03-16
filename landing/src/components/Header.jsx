import { useState, useRef, useEffect } from "react"
import { useApp, COLORS, FONTS } from "../context/AppContext"
import { t } from "../i18n"

const COLOR_KEYS = [
  "violet", "indigo", "blue", "cyan", "teal",
  "emerald", "amber", "orange", "rose", "pink",
]

const COLOR_SWATCHES = {
  violet:  "bg-violet-500",
  indigo:  "bg-indigo-500",
  blue:    "bg-blue-500",
  cyan:    "bg-cyan-500",
  teal:    "bg-teal-500",
  emerald: "bg-emerald-500",
  amber:   "bg-amber-500",
  orange:  "bg-orange-500",
  rose:    "bg-rose-500",
  pink:    "bg-pink-500",
}

const FONT_LABELS = { sans: "Sans", serif: "Serif", mono: "Mono" }

function useClickOutside(ref, open, onClose) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose()
      }
    }
    if (open) document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [ref, open, onClose])
}

function ColorSwatchGrid({ color, setColor }) {
  return (
    <div className="grid grid-cols-5 gap-2">
      {COLOR_KEYS.map((c) => (
        <button
          key={c}
          onClick={() => setColor(c)}
          aria-label={c}
          title={c}
          className={`h-7 w-7 rounded-full ${COLOR_SWATCHES[c]} transition-all duration-150 ring-offset-2 ring-offset-zinc-900 ${
            color === c
              ? "scale-110 ring-2 ring-white/70"
              : "opacity-60 hover:opacity-100 hover:scale-105"
          }`}
        />
      ))}
    </div>
  )
}

export default function Header() {
  const { color, setColor, lang, setLang, font, setFont, theme } = useApp()
  const [open, setOpen] = useState(false)
  const [colorOpen, setColorOpen] = useState(false)
  const panelRef = useRef(null)
  const colorRef = useRef(null)

  useClickOutside(panelRef, open, () => setOpen(false))
  useClickOutside(colorRef, colorOpen, () => setColorOpen(false))

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1.5 text-lg font-bold">
          <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Rainbow
          </span>
          <span>MD</span>
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Learn More link */}
          <a
            href="#features"
            className="hidden rounded-lg border border-zinc-700/60 bg-zinc-800/60 px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-700/80 sm:inline-flex"
          >
            {t("headerLearnMore", lang)}
          </a>

          {/* Quick Color Picker */}
          <div className="relative" ref={colorRef}>
            <button
              onClick={() => { setColorOpen(!colorOpen); if (open) setOpen(false) }}
              aria-label={t("headerChangeColor", lang)}
              aria-expanded={colorOpen}
              title={t("headerChangeColor", lang)}
              className={`group flex items-center gap-1.5 rounded-lg border p-1.5 transition ${
                colorOpen
                  ? `${theme.border} bg-zinc-800 text-white`
                  : "border-zinc-700 bg-zinc-800/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              {/* Current color indicator */}
              <span
                className={`block h-4 w-4 rounded-full ${COLOR_SWATCHES[color]} ring-1 ring-white/20 transition-transform group-hover:scale-110`}
              />
              {/* Palette icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
              </svg>
            </button>

            {/* Color picker popover */}
            {colorOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-zinc-700/60 bg-zinc-900/95 p-3 shadow-2xl backdrop-blur-lg">
                <p className="mb-2 text-xs font-medium tracking-wide text-zinc-500 uppercase">
                  {t("headerColor", lang)}
                </p>
                <ColorSwatchGrid color={color} setColor={setColor} />
              </div>
            )}
          </div>

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "ja" ? "en" : "ja")}
            className="rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-700"
          >
            {lang === "ja" ? "EN" : "日本語"}
          </button>

          {/* Settings gear */}
          <div className="relative" ref={panelRef}>
            <button
              onClick={() => { setOpen(!open); if (colorOpen) setColorOpen(false) }}
              aria-label={t("headerSettings", lang)}
              className={`rounded-lg border p-2 transition ${
                open
                  ? `${theme.border} bg-zinc-800 text-white`
                  : "border-zinc-700 bg-zinc-800/80 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Settings panel */}
            {open && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-700/60 bg-zinc-900/95 p-4 shadow-2xl backdrop-blur-lg">
                {/* Color */}
                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium tracking-wide text-zinc-500 uppercase">
                    {t("headerColor", lang)}
                  </p>
                  <ColorSwatchGrid color={color} setColor={setColor} />
                </div>

                {/* Divider */}
                <div className="mb-4 h-px bg-zinc-800" />

                {/* Font */}
                <div>
                  <p className="mb-2 text-xs font-medium tracking-wide text-zinc-500 uppercase">
                    {t("headerFont", lang)}
                  </p>
                  <div className="flex gap-2">
                    {Object.keys(FONTS).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFont(f)}
                        className={`flex-1 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                          font === f
                            ? `${theme.border} ${theme.bgFaint} text-white`
                            : "border-zinc-700 bg-zinc-800/60 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                        }`}
                      >
                        {FONT_LABELS[f]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
