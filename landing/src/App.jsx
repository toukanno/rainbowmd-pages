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

  return (
    <div className={`min-h-screen bg-[#09090b] text-zinc-50 ${FONTS[font]}`}>
      <Header />
      {isPrivacy ? (
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
