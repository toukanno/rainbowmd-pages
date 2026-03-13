const GITHUB_RELEASE = "https://github.com/toukanno/rainbowmd-pages/releases/latest"
const MS_STORE = "#" // TODO: Replace with actual Microsoft Store URL

export default function Download() {
  return (
    <section id="download" className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-3xl">
        {/* Background */}
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-fuchsia-500/10 blur-xl" />

        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-10 text-center backdrop-blur md:p-14">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            今すぐはじめよう
          </h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">
            RainbowMD は無料で利用できます。
            <br />
            GitHub Releases から最新版をダウンロードしてください。
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={GITHUB_RELEASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-500 hover:shadow-indigo-500/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub Releases
            </a>
            <a
              href={MS_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-700/80"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.4 2H2v9.4h9.4V2zM22 2h-9.4v9.4H22V2zM11.4 12.6H2V22h9.4v-9.4zM22 12.6h-9.4V22H22v-9.4z" />
              </svg>
              Microsoft Store
            </a>
          </div>

          <p className="mt-6 text-xs text-zinc-600">
            Windows 10 以降対応 ・ インストーラー (.exe) ・ MIT License
          </p>
        </div>
      </div>
    </section>
  )
}
