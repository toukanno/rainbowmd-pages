import { useApp, COLORS } from "../context/AppContext"
import { t } from "../i18n"

const colorKeys = ["violet", "cyan", "emerald", "rose"]

const colorSwatches = {
  violet:  "bg-violet-500",
  cyan:    "bg-cyan-500",
  emerald: "bg-emerald-500",
  rose:    "bg-rose-500",
}

export default function Header() {
  const { color, setColor, lang, setLang, theme } = useApp()

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* App name */}
        <a href="#" className="flex items-center gap-1.5 text-lg font-bold">
          <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Rainbow
          </span>
          <span>MD</span>
        </a>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Color swatches */}
          <div className="flex items-center gap-2">
            <span className="hidden text-xs text-zinc-500 sm:inline">{t("headerColor", lang)}</span>
            {colorKeys.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={c}
                className={`h-5 w-5 rounded-full ${colorSwatches[c]} transition ring-offset-1 ring-offset-[#09090b] ${
                  color === c ? "ring-2 ring-white/60 scale-110" : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-zinc-700/60" />

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "ja" ? "en" : "ja")}
            className="rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-700"
          >
            {lang === "ja" ? "EN" : "日本語"}
          </button>
        </div>
      </div>
    </header>
  )
}
