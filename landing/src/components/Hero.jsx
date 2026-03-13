const GITHUB_RELEASE = "https://github.com/toukanno/rainbowmd-pages/releases/latest"
const MS_STORE = "#" // TODO: Replace with actual Microsoft Store URL

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 md:pt-40 md:pb-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-glow absolute top-[-120px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-800/60 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          v2.0 リリース — Windows 対応
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up animate-delay-100 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Rainbow
          </span>
          MD
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          書く。見る。そのまま伝わる。
          <br className="hidden sm:block" />
          リアルタイムプレビュー付き Markdown エディタ
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={GITHUB_RELEASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40"
          >
            <DownloadIcon />
            無料ダウンロード
          </a>
          <a
            href={MS_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-700/80"
          >
            <MsStoreIcon />
            Microsoft Store
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
