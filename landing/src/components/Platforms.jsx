import { useApp } from "../context/AppContext"
import { t } from "../i18n"
import ScrollReveal from "./ScrollReveal"

export default function Platforms() {
  const { lang, theme } = useApp()

  const platforms = [
    {
      name: "Windows",
      status: t("platformAvailable", lang),
      available: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 12V5.5l8-1.1V12H3zm9-7.8L21 3v9h-9V4.2zM3 12.5h8v7.6l-8-1.1V12.5zm9 0h9V21l-9-1.2V12.5z" />
        </svg>
      ),
    },
    {
      name: "macOS",
      status: t("platformPlanned", lang),
      available: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
    },
    {
      name: "iOS",
      status: t("platformFuture", lang),
      available: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      name: "Android",
      status: t("platformFuture", lang),
      available: false,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="platforms" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <span className="mb-4 inline-block rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-400 uppercase">
              Platforms
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {t("platformsTitle", lang)}
            </h2>
            <p className="mt-5 text-lg text-zinc-400">
              {t("platformsSubtitle", lang)}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div
                className={`feature-card group relative rounded-2xl border p-7 text-center transition-all duration-500 ${
                  p.available
                    ? "border-violet-500/30 bg-violet-500/[0.04]"
                    : "border-zinc-800/80 bg-zinc-900/40"
                }`}
              >
                {p.available && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                )}
                <div className={`mx-auto mb-4 inline-block transition-transform duration-300 group-hover:scale-110 ${p.available ? theme.textIcon : "text-zinc-600"}`}>
                  {p.icon}
                </div>
                <h3 className={`text-lg font-semibold ${p.available ? "text-white" : "text-zinc-500"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1.5 text-sm ${p.available ? "text-zinc-400" : "text-zinc-600"}`}>
                  {p.status}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
