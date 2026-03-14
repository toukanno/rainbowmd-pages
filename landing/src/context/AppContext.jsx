import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const COLORS = {
  violet:  { accent: "#8b5cf6", accentLight: "#a78bfa", gradient: "from-violet-400 via-purple-400 to-fuchsia-400",  bg: "bg-violet-500",  bgHover: "hover:bg-violet-600",  border: "border-violet-500/40", bgFaint: "bg-violet-500/5",  bgIcon: "bg-violet-500/10", bgIconHover: "group-hover:bg-violet-500/20", textIcon: "text-violet-400", shadow: "shadow-violet-500/25", shadowHover: "hover:shadow-violet-500/40", btn: "bg-violet-600 hover:bg-violet-500", glowBg: "bg-violet-500/20", glowFrom: "from-violet-500/15", glowVia: "via-purple-500/15", glowTo: "to-fuchsia-500/15", indicator: "bg-violet-500", dotLabel: "bg-violet-500" },
  cyan:    { accent: "#06b6d4", accentLight: "#22d3ee", gradient: "from-cyan-400 via-teal-400 to-emerald-400",      bg: "bg-cyan-500",    bgHover: "hover:bg-cyan-600",    border: "border-cyan-500/40",    bgFaint: "bg-cyan-500/5",    bgIcon: "bg-cyan-500/10",    bgIconHover: "group-hover:bg-cyan-500/20",    textIcon: "text-cyan-400",    shadow: "shadow-cyan-500/25",    shadowHover: "hover:shadow-cyan-500/40",    btn: "bg-cyan-600 hover:bg-cyan-500",    glowBg: "bg-cyan-500/20",    glowFrom: "from-cyan-500/15",    glowVia: "via-teal-500/15",    glowTo: "to-emerald-500/15",    indicator: "bg-cyan-500",    dotLabel: "bg-cyan-500" },
  emerald: { accent: "#10b981", accentLight: "#34d399", gradient: "from-emerald-400 via-green-400 to-teal-400",     bg: "bg-emerald-500", bgHover: "hover:bg-emerald-600", border: "border-emerald-500/40", bgFaint: "bg-emerald-500/5", bgIcon: "bg-emerald-500/10", bgIconHover: "group-hover:bg-emerald-500/20", textIcon: "text-emerald-400", shadow: "shadow-emerald-500/25", shadowHover: "hover:shadow-emerald-500/40", btn: "bg-emerald-600 hover:bg-emerald-500", glowBg: "bg-emerald-500/20", glowFrom: "from-emerald-500/15", glowVia: "via-green-500/15", glowTo: "to-teal-500/15", indicator: "bg-emerald-500", dotLabel: "bg-emerald-500" },
  rose:    { accent: "#f43f5e", accentLight: "#fb7185", gradient: "from-rose-400 via-pink-400 to-fuchsia-400",      bg: "bg-rose-500",    bgHover: "hover:bg-rose-600",    border: "border-rose-500/40",    bgFaint: "bg-rose-500/5",    bgIcon: "bg-rose-500/10",    bgIconHover: "group-hover:bg-rose-500/20",    textIcon: "text-rose-400",    shadow: "shadow-rose-500/25",    shadowHover: "hover:shadow-rose-500/40",    btn: "bg-rose-600 hover:bg-rose-500",    glowBg: "bg-rose-500/20",    glowFrom: "from-rose-500/15",    glowVia: "via-pink-500/15",    glowTo: "to-fuchsia-500/15",    indicator: "bg-rose-500",    dotLabel: "bg-rose-500" },
  blue:    { accent: "#3b82f6", accentLight: "#60a5fa", gradient: "from-blue-400 via-sky-400 to-cyan-400",           bg: "bg-blue-500",    bgHover: "hover:bg-blue-600",    border: "border-blue-500/40",    bgFaint: "bg-blue-500/5",    bgIcon: "bg-blue-500/10",    bgIconHover: "group-hover:bg-blue-500/20",    textIcon: "text-blue-400",    shadow: "shadow-blue-500/25",    shadowHover: "hover:shadow-blue-500/40",    btn: "bg-blue-600 hover:bg-blue-500",    glowBg: "bg-blue-500/20",    glowFrom: "from-blue-500/15",    glowVia: "via-sky-500/15",    glowTo: "to-cyan-500/15",    indicator: "bg-blue-500",    dotLabel: "bg-blue-500" },
  indigo:  { accent: "#6366f1", accentLight: "#818cf8", gradient: "from-indigo-400 via-blue-400 to-violet-400",      bg: "bg-indigo-500",  bgHover: "hover:bg-indigo-600",  border: "border-indigo-500/40",  bgFaint: "bg-indigo-500/5",  bgIcon: "bg-indigo-500/10",  bgIconHover: "group-hover:bg-indigo-500/20",  textIcon: "text-indigo-400",  shadow: "shadow-indigo-500/25",  shadowHover: "hover:shadow-indigo-500/40",  btn: "bg-indigo-600 hover:bg-indigo-500",  glowBg: "bg-indigo-500/20",  glowFrom: "from-indigo-500/15",  glowVia: "via-blue-500/15",  glowTo: "to-violet-500/15",  indicator: "bg-indigo-500",  dotLabel: "bg-indigo-500" },
  teal:    { accent: "#14b8a6", accentLight: "#2dd4bf", gradient: "from-teal-400 via-emerald-400 to-cyan-400",       bg: "bg-teal-500",    bgHover: "hover:bg-teal-600",    border: "border-teal-500/40",    bgFaint: "bg-teal-500/5",    bgIcon: "bg-teal-500/10",    bgIconHover: "group-hover:bg-teal-500/20",    textIcon: "text-teal-400",    shadow: "shadow-teal-500/25",    shadowHover: "hover:shadow-teal-500/40",    btn: "bg-teal-600 hover:bg-teal-500",    glowBg: "bg-teal-500/20",    glowFrom: "from-teal-500/15",    glowVia: "via-emerald-500/15",    glowTo: "to-cyan-500/15",    indicator: "bg-teal-500",    dotLabel: "bg-teal-500" },
  amber:   { accent: "#f59e0b", accentLight: "#fbbf24", gradient: "from-amber-400 via-yellow-400 to-orange-400",     bg: "bg-amber-500",   bgHover: "hover:bg-amber-600",   border: "border-amber-500/40",   bgFaint: "bg-amber-500/5",   bgIcon: "bg-amber-500/10",   bgIconHover: "group-hover:bg-amber-500/20",   textIcon: "text-amber-400",   shadow: "shadow-amber-500/25",   shadowHover: "hover:shadow-amber-500/40",   btn: "bg-amber-600 hover:bg-amber-500",   glowBg: "bg-amber-500/20",   glowFrom: "from-amber-500/15",   glowVia: "via-yellow-500/15",   glowTo: "to-orange-500/15",   indicator: "bg-amber-500",   dotLabel: "bg-amber-500" },
  orange:  { accent: "#f97316", accentLight: "#fb923c", gradient: "from-orange-400 via-amber-400 to-red-400",        bg: "bg-orange-500",  bgHover: "hover:bg-orange-600",  border: "border-orange-500/40",  bgFaint: "bg-orange-500/5",  bgIcon: "bg-orange-500/10",  bgIconHover: "group-hover:bg-orange-500/20",  textIcon: "text-orange-400",  shadow: "shadow-orange-500/25",  shadowHover: "hover:shadow-orange-500/40",  btn: "bg-orange-600 hover:bg-orange-500",  glowBg: "bg-orange-500/20",  glowFrom: "from-orange-500/15",  glowVia: "via-amber-500/15",  glowTo: "to-red-500/15",  indicator: "bg-orange-500",  dotLabel: "bg-orange-500" },
  pink:    { accent: "#ec4899", accentLight: "#f472b6", gradient: "from-pink-400 via-rose-400 to-fuchsia-400",       bg: "bg-pink-500",    bgHover: "hover:bg-pink-600",    border: "border-pink-500/40",    bgFaint: "bg-pink-500/5",    bgIcon: "bg-pink-500/10",    bgIconHover: "group-hover:bg-pink-500/20",    textIcon: "text-pink-400",    shadow: "shadow-pink-500/25",    shadowHover: "hover:shadow-pink-500/40",    btn: "bg-pink-600 hover:bg-pink-500",    glowBg: "bg-pink-500/20",    glowFrom: "from-pink-500/15",    glowVia: "via-rose-500/15",    glowTo: "to-fuchsia-500/15",    indicator: "bg-pink-500",    dotLabel: "bg-pink-500" },
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
