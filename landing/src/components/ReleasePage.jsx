import { useEffect, useState, useRef } from "react"
import { useApp } from "../context/AppContext"

const GITHUB_RELEASE = "https://github.com/toukanno/rainbowmd-pages/releases/tag/v2.1.2"
const MS_STORE = "https://apps.microsoft.com/detail/9N0MG9WF2LBG"

/* ──────────────────────────────────────────
   Release data
   ────────────────────────────────────────── */
const RELEASE_DATE = "2026-03-15"

const changes = {
  ja: {
    newFeatures: [
      { title: "AI アシスタント強化", desc: "文章の要約・リライト・翻訳をエディタ内で直接実行。応答速度を大幅改善。" },
      { title: "コマンドパレット", desc: "Ctrl+P でクイックアクセス。すべての操作をキーボードだけで完結。" },
      { title: "カスタムテーマ作成", desc: "エディタ・プレビューの配色を自由にカスタマイズ。JSON でインポート/エクスポート。" },
    ],
    improved: [
      { title: "起動速度の最適化", desc: "コールドスタートを 40% 短縮。大きなファイルでも瞬時にロード。" },
      { title: "プレビュー精度の向上", desc: "GFM テーブル・数式・Mermaid 記法のレンダリングを改善。" },
      { title: "UI リフレッシュ", desc: "サイドバー・ツールバーのデザインを刷新。より直感的な操作感を実現。" },
    ],
    fixed: [
      { title: "エクスポート時の文字化け", desc: "UTF-8 BOM 付きでの出力に対応。日本語ファイル名の問題も修正。" },
      { title: "検索・置換の挙動修正", desc: "正規表現モードでのエスケープ処理を修正。マルチカーソル選択時のバグを解消。" },
    ],
  },
  en: {
    newFeatures: [
      { title: "Enhanced AI Assistant", desc: "Summarize, rewrite, and translate text directly in the editor. Dramatically faster responses." },
      { title: "Command Palette", desc: "Quick access with Ctrl+P. Complete all operations from the keyboard." },
      { title: "Custom Theme Builder", desc: "Fully customize editor and preview colors. Import/export via JSON." },
    ],
    improved: [
      { title: "Faster Startup", desc: "40% faster cold start. Large files load instantly." },
      { title: "Better Preview Accuracy", desc: "Improved rendering for GFM tables, math, and Mermaid diagrams." },
      { title: "UI Refresh", desc: "Redesigned sidebar and toolbar for a more intuitive experience." },
    ],
    fixed: [
      { title: "Export Encoding Fix", desc: "Now supports UTF-8 BOM output. Fixed Japanese filename issues." },
      { title: "Search & Replace Fix", desc: "Fixed regex escape handling. Resolved multi-cursor selection bugs." },
    ],
  },
}

/* ──────────────────────────────────────────
   Particles (CSS-only floating dots)
   ────────────────────────────────────────── */
function Particles({ theme }) {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 4,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.4,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="animate-particle absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: theme.accent,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ──────────────────────────────────────────
   Light Leak overlay
   ────────────────────────────────────────── */
function LightLeak() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-light-leak absolute top-0 left-0 h-full w-[60%]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />
    </div>
  )
}

/* ──────────────────────────────────────────
   Scroll-triggered visibility
   ────────────────────────────────────────── */
function useInView(ref, threshold = 0.15) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

function RevealSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null)
  const visible = useInView(ref)
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ──────────────────────────────────────────
   Label badge
   ────────────────────────────────────────── */
function Badge({ type }) {
  const styles = {
    new:      "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-emerald-500/20",
    improved: "bg-blue-500/15 text-blue-400 border-blue-500/30 shadow-blue-500/20",
    fixed:    "bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-amber-500/20",
  }
  const labels = { new: "NEW", improved: "IMPROVED", fixed: "FIXED" }
  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase shadow-lg ${styles[type]}`}>
      {labels[type]}
    </span>
  )
}

/* ──────────────────────────────────────────
   Change card
   ────────────────────────────────────────── */
function ChangeCard({ item, type, theme, delay = 0 }) {
  const glowColors = {
    new:      "hover:shadow-emerald-500/15",
    improved: "hover:shadow-blue-500/15",
    fixed:    "hover:shadow-amber-500/15",
  }
  return (
    <RevealSection delay={delay}>
      <div
        className={`release-card glass group relative rounded-2xl p-6 hover:shadow-2xl ${glowColors[type]}`}
      >
        {/* Corner glow on hover */}
        <div
          className={`absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          style={{
            background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${theme.accent}15, transparent 60%)`,
          }}
        />
        <div className="relative">
          <div className="mb-3 flex items-center gap-3">
            <Badge type={type} />
            <h3 className="text-lg font-bold text-zinc-100">{item.title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
        </div>
      </div>
    </RevealSection>
  )
}

/* ──────────────────────────────────────────
   Section header
   ────────────────────────────────────────── */
function SectionTitle({ icon, title, theme }) {
  return (
    <RevealSection>
      <div className="mb-8 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{ background: `${theme.accent}20`, color: theme.accent }}
        >
          {icon}
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
      </div>
    </RevealSection>
  )
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════ */
export default function ReleasePage() {
  const { lang, theme } = useApp()
  const data = changes[lang] || changes.ja
  /* Mouse tracking for card glow */
  useEffect(() => {
    function handleMouse(e) {
      document.querySelectorAll(".release-card").forEach((card) => {
        const rect = card.getBoundingClientRect()
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  const releaseLabel = lang === "ja" ? "最新リリース" : "Latest Release"
  const dateLabel = lang === "ja" ? "リリース日" : "Released"
  const newTitle = lang === "ja" ? "新機能" : "New Features"
  const improvedTitle = lang === "ja" ? "改善" : "Improvements"
  const fixedTitle = lang === "ja" ? "修正" : "Bug Fixes"
  const changelogLabel = lang === "ja" ? "完全なリリースノートを見る" : "View Full Release Notes"
  const backLabel = lang === "ja" ? "トップに戻る" : "Back to Top"

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* ── Aurora background ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div
          className="animate-aurora absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${theme.accent}22 0%, transparent 30%, ${theme.accentLight}18 50%, transparent 70%, ${theme.accent}15 100%)`,
          }}
        />
        {/* Secondary aurora layer */}
        <div
          className="animate-aurora absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(225deg, transparent 20%, ${theme.accent}12 40%, transparent 60%, ${theme.accentLight}10 80%, transparent)`,
            animationDelay: "-4s",
            animationDuration: "16s",
          }}
        />
      </div>

      {/* ── Particles ── */}
      <Particles theme={theme} />

      {/* ── Light leak ── */}
      <LightLeak />

      {/* ═══════════════════════════════════
          HERO
         ═══════════════════════════════════ */}
      <section className="relative px-6 pt-32 pb-24 md:pt-44 md:pb-36">
        {/* Hero glow orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="animate-breathe absolute top-[-80px] left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[160px]"
            style={{ background: `${theme.accent}25` }}
          />
          <div
            className="animate-breathe absolute top-[100px] left-1/4 h-[300px] w-[400px] rounded-full blur-[120px]"
            style={{ background: `${theme.accentLight}15`, animationDelay: "-3s" }}
          />
          <div
            className="animate-breathe absolute top-[60px] right-1/4 h-[250px] w-[350px] rounded-full blur-[100px]"
            style={{ background: `${theme.accent}12`, animationDelay: "-6s" }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Release badge */}
          <div className="animate-slide-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-700/50 bg-zinc-800/40 px-5 py-2 backdrop-blur-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: theme.accent }}
              />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: theme.accent }} />
            </span>
            <span className="text-sm font-medium text-zinc-300">{releaseLabel}</span>
            <span className="rounded-full px-2.5 py-0.5 text-xs font-bold text-white" style={{ background: theme.accent }}>
              {dateLabel}: {RELEASE_DATE}
            </span>
          </div>

          {/* Version title — massive */}
          <h1 className="animate-slide-up animate-delay-200">
            <span className="block text-lg font-medium tracking-widest text-zinc-500 uppercase md:text-xl">
              Release Notes
            </span>
            <span className="mt-2 block text-6xl font-black leading-none tracking-tighter md:text-8xl lg:text-9xl">
              <span
                className="animate-shimmer inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${theme.accent}, ${theme.accentLight}, #fff, ${theme.accentLight}, ${theme.accent})`,
                }}
              >
                Rainbow
              </span>
              <span className="text-white">MD</span>
            </span>
            <span
              className="mt-4 block text-5xl font-black tracking-tight md:text-7xl lg:text-8xl"
              style={{ color: theme.accent }}
            >
              v2.1.2
            </span>
          </h1>

          {/* Subtitle */}
          <p className="animate-slide-up animate-delay-400 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {lang === "ja"
              ? "AI 対話機能の強化、コマンドパレット搭載、パフォーマンスの大幅改善 — あなたの執筆体験をさらに加速するアップデート。"
              : "Enhanced AI assistant, command palette, major performance improvements — an update that accelerates your writing experience."}
          </p>

          {/* CTA — per-platform buttons */}
          <div className="animate-slide-up animate-delay-600 mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            {/* Windows — active */}
            <div className="relative">
              <div
                className="animate-pulse-ring absolute inset-0 rounded-2xl"
                style={{ background: `${theme.accent}30` }}
              />
              <a
                href={MS_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
                  boxShadow: `0 0 40px ${theme.accent}40, 0 20px 60px ${theme.accent}20`,
                }}
              >
                <DownloadIcon />
                Windows
              </a>
            </div>

            {/* MacOS — disabled */}
            <span className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
              MacOS
              <span className="text-xs text-zinc-600">({lang === "ja" ? "審査中" : "Under Review"})</span>
            </span>

            {/* Steam — disabled */}
            <span className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
              Steam
              <span className="text-xs text-zinc-600">Coming Soon</span>
            </span>

            {/* Web — disabled */}
            <span className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
              Web
              <span className="text-xs text-zinc-600">Coming Soon</span>
            </span>
          </div>

          {/* Changelog link */}
          <div className="animate-slide-up animate-delay-800 mt-6">
            <a
              href={GITHUB_RELEASE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-300"
            >
              {changelogLabel}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Divider line with glow ── */}
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}40, transparent)` }} />
      </div>

      {/* ═══════════════════════════════════
          HIGHLIGHTS (stat row)
         ═══════════════════════════════════ */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "3", label: lang === "ja" ? "新機能" : "New Features", color: "#10b981" },
            { value: "3", label: lang === "ja" ? "改善項目" : "Improvements", color: "#3b82f6" },
            { value: "2", label: lang === "ja" ? "バグ修正" : "Bug Fixes", color: "#f59e0b" },
            { value: "40%", label: lang === "ja" ? "起動速度改善" : "Faster Startup", color: theme.accent },
          ].map((stat, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass release-card group rounded-2xl p-6 text-center hover:shadow-xl">
                <div
                  className="text-4xl font-black md:text-5xl"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-zinc-400">{stat.label}</div>
                {/* Bottom accent line */}
                <div
                  className="mx-auto mt-4 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{ background: stat.color }}
                />
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          NEW FEATURES
         ═══════════════════════════════════ */}
      <section className="relative px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle icon="✦" title={newTitle} theme={theme} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.newFeatures.map((item, i) => (
              <ChangeCard key={i} item={item} type="new" theme={theme} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          IMPROVEMENTS
         ═══════════════════════════════════ */}
      <section className="relative px-6 py-16 md:py-20">
        {/* Subtle mid-page glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="animate-breathe absolute top-1/2 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
            style={{ background: `${theme.accent}10`, animationDelay: "-2s" }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <SectionTitle icon="⚡" title={improvedTitle} theme={theme} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.improved.map((item, i) => (
              <ChangeCard key={i} item={item} type="improved" theme={theme} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          BUG FIXES
         ═══════════════════════════════════ */}
      <section className="relative px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionTitle icon="🔧" title={fixedTitle} theme={theme} />
          <div className="grid gap-5 md:grid-cols-2">
            {data.fixed.map((item, i) => (
              <ChangeCard key={i} item={item} type="fixed" theme={theme} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="h-px w-full" style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}40, transparent)` }} />
      </div>

      {/* ═══════════════════════════════════
          BOTTOM CTA
         ═══════════════════════════════════ */}
      <section className="relative px-6 py-20 md:py-28">
        <RevealSection className="mx-auto max-w-3xl">
          <div className="relative">
            {/* Glow behind card */}
            <div
              className="animate-breathe absolute -inset-8 rounded-3xl blur-2xl"
              style={{ background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accentLight}10, ${theme.accent}08)` }}
            />
            <div className="glass-strong relative rounded-3xl p-10 text-center md:p-14">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                {lang === "ja" ? "今すぐアップデート" : "Update Now"}
              </h2>
              <p className="mx-auto mt-4 max-w-md text-zinc-400">
                {lang === "ja"
                  ? "v2.1.2 で、より速く、よりスマートな執筆体験を。"
                  : "Experience faster, smarter writing with v2.1.2."}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                {/* Windows — active */}
                <a
                  href={MS_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentLight})`,
                    boxShadow: `0 0 30px ${theme.accent}30`,
                  }}
                >
                  <DownloadIcon />
                  Windows
                </a>

                {/* MacOS — disabled */}
                <span className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
                  MacOS
                  <span className="text-[10px] text-zinc-600">({lang === "ja" ? "審査中" : "Under Review"})</span>
                </span>

                {/* Steam — disabled */}
                <span className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
                  Steam
                  <span className="text-[10px] text-zinc-600">Coming Soon</span>
                </span>

                {/* Web — disabled */}
                <span className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-semibold text-zinc-500 bg-zinc-800/60 border border-zinc-700/40 cursor-not-allowed opacity-50">
                  Web
                  <span className="text-[10px] text-zinc-600">Coming Soon</span>
                </span>
              </div>

              <p className="mt-6 text-xs text-zinc-600">
                Windows 10+ ・ Installer (.exe) ・ MIT License
              </p>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ── Back link ── */}
      <div className="pb-10 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {backLabel}
        </a>
      </div>
    </div>
  )
}

/* ── Icons ── */
function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
    </svg>
  )
}
