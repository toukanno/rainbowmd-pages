import { useApp } from "../context/AppContext"
import { t } from "../i18n"

export default function Footer() {
  const { lang, theme } = useApp()

  return (
    <footer className="relative border-t border-zinc-800/40 px-6 py-14">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), rgba(34,211,238,0.3), transparent)",
        }}
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className="hero-gradient-text bg-clip-text text-transparent">
            Rainbow
          </span>
          <span>MD</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <a href="https://github.com/toukanno/rainbowmd-pages" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            GitHub
          </a>
          <a href="#release" className="transition-colors duration-200 hover:text-violet-400">
            v2.1.2 Release
          </a>
          <a href="https://github.com/toukanno/rainbowmd-pages/releases/latest" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            Releases
          </a>
          <a href="#privacy-policy" className="transition-colors duration-200 hover:text-violet-400">
            Privacy Policy
          </a>
          <a href="https://apps.microsoft.com/detail/9N0MG9WF2LBG" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            Microsoft Store
          </a>
          <a href="https://react-modern-site-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-violet-400">
            Product Details
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} toukanno. {t("footerCopyright", lang)}
        </p>
      </div>
    </footer>
  )
}
