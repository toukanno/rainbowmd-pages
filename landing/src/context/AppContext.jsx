import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const COLORS = {
  violet:  { accent: "#8b5cf6", accentLight: "#a78bfa", gradient: "from-violet-400 via-purple-400 to-fuchsia-400",  bg: "bg-violet-500",  bgHover: "hover:bg-violet-600",  border: "border-violet-500/40", bgFaint: "bg-violet-500/5",  bgIcon: "bg-violet-500/10", bgIconHover: "group-hover:bg-violet-500/20", textIcon: "text-violet-400", shadow: "shadow-violet-500/25", shadowHover: "hover:shadow-violet-500/40", btn: "bg-violet-600 hover:bg-violet-500", glowBg: "bg-violet-500/20", glowFrom: "from-violet-500/15", glowVia: "via-purple-500/15", glowTo: "to-fuchsia-500/15", indicator: "bg-violet-500", dotLabel: "bg-violet-500" },
  cyan:    { accent: "#06b6d4", accentLight: "#22d3ee", gradient: "from-cyan-400 via-teal-400 to-emerald-400",      bg: "bg-cyan-500",    bgHover: "hover:bg-cyan-600",    border: "border-cyan-500/40",    bgFaint: "bg-cyan-500/5",    bgIcon: "bg-cyan-500/10",    bgIconHover: "group-hover:bg-cyan-500/20",    textIcon: "text-cyan-400",    shadow: "shadow-cyan-500/25",    shadowHover: "hover:shadow-cyan-500/40",    btn: "bg-cyan-600 hover:bg-cyan-500",    glowBg: "bg-cyan-500/20",    glowFrom: "from-cyan-500/15",    glowVia: "via-teal-500/15",    glowTo: "to-emerald-500/15",    indicator: "bg-cyan-500",    dotLabel: "bg-cyan-500" },
  emerald: { accent: "#10b981", accentLight: "#34d399", gradient: "from-emerald-400 via-green-400 to-teal-400",     bg: "bg-emerald-500", bgHover: "hover:bg-emerald-600", border: "border-emerald-500/40", bgFaint: "bg-emerald-500/5", bgIcon: "bg-emerald-500/10", bgIconHover: "group-hover:bg-emerald-500/20", textIcon: "text-emerald-400", shadow: "shadow-emerald-500/25", shadowHover: "hover:shadow-emerald-500/40", btn: "bg-emerald-600 hover:bg-emerald-500", glowBg: "bg-emerald-500/20", glowFrom: "from-emerald-500/15", glowVia: "via-green-500/15", glowTo: "to-teal-500/15", indicator: "bg-emerald-500", dotLabel: "bg-emerald-500" },
  rose:    { accent: "#f43f5e", accentLight: "#fb7185", gradient: "from-rose-400 via-pink-400 to-fuchsia-400",      bg: "bg-rose-500",    bgHover: "hover:bg-rose-600",    border: "border-rose-500/40",    bgFaint: "bg-rose-500/5",    bgIcon: "bg-rose-500/10",    bgIconHover: "group-hover:bg-rose-500/20",    textIcon: "text-rose-400",    shadow: "shadow-rose-500/25",    shadowHover: "hover:shadow-rose-500/40",    btn: "bg-rose-600 hover:bg-rose-500",    glowBg: "bg-rose-500/20",    glowFrom: "from-rose-500/15",    glowVia: "via-pink-500/15",    glowTo: "to-fuchsia-500/15",    indicator: "bg-rose-500",    dotLabel: "bg-rose-500" },
}

export const FONTS = {
  sans:  "font-sans",
  serif: "font-serif",
  mono:  "font-mono",
}

export function AppProvider({ children }) {
  const [color, setColor] = useState("violet")
  const [lang, setLang] = useState("ja")
  const [font, setFont] = useState("sans")

  const theme = COLORS[color]

  return (
    <AppContext.Provider value={{ color, setColor, lang, setLang, font, setFont, theme }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
