import { useState, useEffect } from "react"
import { AppProvider, useApp, FONTS } from "./context/AppContext"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Gallery from "./components/Gallery"
import Platforms from "./components/Platforms"
import Download from "./components/Download"
import Footer from "./components/Footer"
import PrivacyPolicy from "./components/PrivacyPolicy"
import ReleasePage from "./components/ReleasePage"

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
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
    <div className={`min-h-screen bg-[#09090b] text-zinc-50 ${FONTS[font]}`}>
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
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  )
}
