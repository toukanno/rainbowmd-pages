import { useApp } from "../context/AppContext"
import { t } from "../i18n"

export default function Footer() {
  const { lang, theme } = useApp()

  return (
    <footer className="border-t border-zinc-800/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-bold">
          <span className={`bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}>
            Rainbow
          </span>
          <span>MD</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
          <a href="https://github.com/toukanno/rainbowmd-pages" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            GitHub
          </a>
          <a href="#release" className="transition hover:text-zinc-300">
            v2.1.2 Release
          </a>
          <a href="https://github.com/toukanno/rainbowmd-pages/releases/latest" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            Releases
          </a>
          <a href="#privacy-policy" className="transition hover:text-zinc-300">
            Privacy Policy
          </a>
          <a href="https://apps.microsoft.com/store/detail/XP8BVG4DLVCQ3C" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
            Microsoft Store
          </a>
          <a href="https://react-modern-site-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="transition hover:text-zinc-300">
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
