/**
 * Screenshot section.
 *
 * To replace the mock UI with an actual screenshot:
 * 1. Place your image at  public/assets/screenshot.png
 * 2. Set  USE_REAL_IMAGE = true  below
 */
const USE_REAL_IMAGE = false
const SCREENSHOT_PATH = "/assets/screenshot.png"

export default function Screenshot() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            使い心地を、目で確かめる
          </h2>
          <p className="mt-4 text-zinc-400">
            左にエディタ、右にプレビュー。直感的なインターフェースで集中して書けます。
          </p>
        </div>

        <div className="animate-float relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20 blur-2xl" />

          {USE_REAL_IMAGE ? (
            <img
              src={SCREENSHOT_PATH}
              alt="RainbowMD のスクリーンショット"
              className="relative w-full rounded-2xl border border-zinc-700/50 shadow-2xl"
            />
          ) : (
            <MockEditor />
          )}
        </div>
      </div>
    </section>
  )
}

function MockEditor() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-zinc-500">RainbowMD — document.md</span>
      </div>
      {/* Editor content */}
      <div className="grid grid-cols-2 divide-x divide-zinc-800">
        {/* Editor pane */}
        <div className="p-6 font-mono text-sm leading-relaxed text-zinc-300">
          <p className="text-zinc-500">1</p>
          <p><span className="text-purple-400"># </span>Hello, RainbowMD</p>
          <p className="text-zinc-500">2</p>
          <p className="mt-1">Markdown を書くと、</p>
          <p className="text-zinc-500">3</p>
          <p className="mt-1">リアルタイムで</p>
          <p className="text-zinc-500">4</p>
          <p className="mt-1"><span className="text-yellow-400">**</span>プレビュー<span className="text-yellow-400">**</span>されます。</p>
          <p className="text-zinc-500">5</p>
          <p className="mt-1" />
          <p className="text-zinc-500">6</p>
          <p className="mt-1"><span className="text-blue-400">- </span>リスト項目 1</p>
          <p className="text-zinc-500">7</p>
          <p className="mt-1"><span className="text-blue-400">- </span>リスト項目 2</p>
        </div>
        {/* Preview pane */}
        <div className="bg-zinc-950/50 p-6 text-sm leading-relaxed">
          <h3 className="mb-3 text-2xl font-bold text-white">Hello, RainbowMD</h3>
          <p className="text-zinc-300">Markdown を書くと、</p>
          <p className="text-zinc-300">リアルタイムで</p>
          <p className="text-zinc-300"><strong className="text-white">プレビュー</strong>されます。</p>
          <ul className="mt-3 list-inside list-disc space-y-1 text-zinc-300">
            <li>リスト項目 1</li>
            <li>リスト項目 2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
