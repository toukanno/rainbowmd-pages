import { useApp } from "../context/AppContext"
import { t } from "../i18n"

const GITHUB_RELEASE = "https://github.com/toukanno/rainbowmd-pages/releases/latest"
const MS_STORE = "https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C"
const PRODUCT_PAGE = "https://react-modern-site-eight.vercel.app/"

export default function Hero() {
  const { lang, theme } = useApp()

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className={`animate-glow absolute top-[-120px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full ${theme.glowBg} blur-[120px]`} />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-800/60 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          {t("heroBadge", lang)}
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up animate-delay-100 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Rainbow
          </span>
          MD
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          {t("heroSubtitle1", lang)}
          <br className="hidden sm:block" />
          {t("heroSubtitle2", lang)}
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GITHUB_RELEASE}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl ${theme.btn} px-7 py-3.5 text-sm font-semibold text-white shadow-lg ${theme.shadow} transition ${theme.shadowHover}`}
          >
            <DownloadIcon />
            {t("heroDownload", lang)}
          </a>
          <a
            href={MS_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-700/80"
          >
            <MsStoreIcon />
            {t("heroStore", lang)}
          </a>
        </div>

        {/* Product details link */}
        <div className="animate-fade-in-up animate-delay-400 mt-6">
          <a
            href={PRODUCT_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:${theme.textIcon}`}
          >
            {t("heroDetails", lang)}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}

function MsStoreIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.4 2H2v9.4h9.4V2zM22 2h-9.4v9.4H22V2zM11.4 12.6H2V22h9.4v-9.4zM22 12.6h-9.4V22H22v-9.4z" />
    </svg>
  )
}
