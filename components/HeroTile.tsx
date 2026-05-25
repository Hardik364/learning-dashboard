"use client"

import { motion } from "framer-motion"
import { Flame, BookOpen, Clock, TrendingUp } from "lucide-react"

const stats = [
  { icon: Flame,      label: "Day Streak",      value: "7",   color: "#fc5c5c", bg: "rgba(252,92,92,0.10)"  },
  { icon: BookOpen,   label: "Active Courses",   value: "4",   color: "#7c5cfc", bg: "rgba(124,92,252,0.10)" },
  { icon: Clock,      label: "Hours This Week",  value: "12",  color: "#5c8cfc", bg: "rgba(92,140,252,0.10)" },
  { icon: TrendingUp, label: "Avg. Progress",    value: "66%", color: "#5cfca0", bg: "rgba(92,252,160,0.10)" },
]

export default function HeroTile() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-2xl p-6 overflow-hidden grain"
      style={{
        background: "linear-gradient(135deg, #110d24 0%, #0a0a18 55%, #0d1622 100%)",
        border: "1px solid var(--border)",
        minHeight: 200,
      }}
    >
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124, 92, 252, 0.11)" }}
      />
      <div
        className="absolute -bottom-16 right-6 w-56 h-56 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(92, 140, 252, 0.07)" }}
      />
      <div
        className="absolute top-4 right-1/3 w-40 h-40 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(252, 92, 160, 0.05)" }}
      />

      <div className="relative flex flex-col gap-6">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
            {greeting}
          </p>
          <h1 className="text-3xl font-bold tracking-tight leading-tight" style={{ color: "var(--text)" }}>
            Welcome back,{" "}
            <span style={{ color: "var(--accent)" }}>Alex</span>
          </h1>
          <p className="text-sm mt-1.5" style={{ color: "var(--text-secondary)" }}>
            You&apos;re on a roll — keep pushing your limits today.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18 + i * 0.07, ease: "easeOut" }}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: stat.bg }}
                >
                  <Icon size={13} style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-base font-bold leading-none" style={{ color: "var(--text)" }}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] mt-0.5 leading-none" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.article>
  )
}
