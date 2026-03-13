import Hero from "./components/Hero"
import Features from "./components/Features"
import Screenshot from "./components/Screenshot"
import Platforms from "./components/Platforms"
import Download from "./components/Download"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 font-sans">
      <Hero />
      <Features />
      <Screenshot />
      <Platforms />
      <Download />
      <Footer />
    </div>
  )
}
