import { useState, useEffect } from "react"
import { AppProvider, useApp, FONTS } from "./context/AppContext"
import ParticleCanvas from "./components/ParticleCanvas"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Gallery from "./components/Gallery"
import Platforms from "./components/Platforms"
import Download from "./components/Download"
import Footer from "./components/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import ReleasePage from "./components/ReleasePage"

// Page-level routes that should scroll to top on navigation
const PAGE_ROUTES = ["#privacy-policy", "#release"]

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => {
      const newHash = window.location.hash
      setHash(newHash)
      // Scroll to top when navigating to a page-level route or back to home
      if (newHash === "" || PAGE_ROUTES.some((r) => newHash === r || newHash.startsWith(r + "-"))) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return hash
}

function AppInner() {
  const { font } = useApp()
  const hash = useHashRoute()
  const isPrivacy = hash === "#privacy-policy"
  const isRelease = hash === "#release" || hash.startsWith("#release-v")

  return (
    <div className={`relative min-h-screen bg-[#0B0F19] text-zinc-50 ${FONTS[font]}`}>
      {/* Global particle canvas */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        {isRelease ? (
          <>
            <ReleasePage />
            <Footer />
          </>
        ) : isPrivacy ? (
          <>
            <PrivacyPolicy />
            <Footer />
          </>
        ) : (
          <>
            <Hero />
            <Features />
            <Gallery />
            <Platforms />
            <Download />
            <Footer />
          </>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  )
}
