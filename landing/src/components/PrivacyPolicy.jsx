import { useApp } from "../context/AppContext"
import { t } from "../i18n"

const sections = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    titleKey: "ppS1Title",
    paragraphs: ["ppS1P1", "ppS1P2"],
    list: ["ppS1L1", "ppS1L2", "ppS1L3"],
    after: ["ppS1P3"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.777.514-3.432 1.4-4.83" />
      </svg>
    ),
    titleKey: "ppS2Title",
    paragraphs: ["ppS2P1"],
    list: ["ppS2L1", "ppS2L2", "ppS2L3", "ppS2L4"],
    after: ["ppS2P2", "ppS2P3"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    titleKey: "ppS3Title",
    paragraphs: ["ppS3P1"],
    list: ["ppS3L1", "ppS3L2"],
    after: ["ppS3P2", "ppS3P3", "ppS3P4"],
    afterList: ["ppS3L3", "ppS3L4"],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    titleKey: "ppS4Title",
    paragraphs: ["ppS4P1", "ppS4P2", "ppS4P3"],
    list: [],
    after: [],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    titleKey: "ppS5Title",
    paragraphs: ["ppS5P1"],
    list: ["ppS5L1", "ppS5L2", "ppS5L3"],
    after: [],
  },
]

export default function PrivacyPolicy() {
  const { lang, theme } = useApp()

  return (
    <section className="px-6 pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-3xl">
        {/* Hero */}
        <div className="mb-16 text-center">
          <div className={`mx-auto mb-5 inline-flex rounded-2xl ${theme.bgIcon} p-4 ${theme.textIcon}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {t("ppTitle", lang)}
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            {t("ppSubtitle", lang)}
          </p>
        </div>

        {/* Intro card */}
        <div className={`mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur`}>
          <p className="leading-relaxed text-zinc-300">
            {t("ppIntro", lang)}
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {t("ppIntro2", lang)}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div
              key={sec.titleKey}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-zinc-700 hover:bg-zinc-900/60"
            >
              {/* Section header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`inline-flex rounded-xl ${theme.bgIcon} p-2.5 ${theme.textIcon}`}>
                  {sec.icon}
                </div>
                <h2 className="text-xl font-bold">
                  <span className="mr-2 text-zinc-600">{idx + 1}.</span>
                  {t(sec.titleKey, lang)}
                </h2>
              </div>

              {/* Paragraphs before list */}
              {sec.paragraphs.map((key) => (
                <p key={key} className="mb-3 leading-relaxed text-zinc-400">
                  {t(key, lang)}
                </p>
              ))}

              {/* List */}
              {sec.list.length > 0 && (
                <ul className="mb-4 ml-1 space-y-2">
                  {sec.list.map((key) => (
                    <li key={key} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.indicator}`} />
                      {t(key, lang)}
                    </li>
                  ))}
                </ul>
              )}

              {/* Paragraphs after list */}
              {sec.after?.map((key) => (
                <p key={key} className="mb-3 leading-relaxed text-zinc-400">
                  {t(key, lang)}
                </p>
              ))}

              {/* Additional list (for section 3) */}
              {sec.afterList && sec.afterList.length > 0 && (
                <ul className="ml-1 space-y-2">
                  {sec.afterList.map((key) => (
                    <li key={key} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.indicator}`} />
                      {t(key, lang)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Updated date */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-600">
            {t("ppUpdated", lang)}
          </p>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.location.hash = ""
            }}
            className={`inline-flex items-center gap-2 text-sm ${theme.textIcon} transition hover:opacity-80`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            {t("ppBack", lang)}
          </a>
        </div>
      </div>
    </section>
  )
}
