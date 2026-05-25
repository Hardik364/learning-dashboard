"use client"

import { motion } from "framer-motion"
import { Activity, Zap } from "lucide-react"

function generateActivity() {
  const weeks = 13
  const grid: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() > 0.38 ? Math.floor(Math.random() * 4) + 1 : 0)
    }
    grid.push(week)
  }
  return grid
}

const activityGrid = generateActivity()

const intensityColor = (val: number) => {
  if (val === 0) return "rgba(255,255,255,0.04)"
  if (val === 1) return "rgba(124,92,252,0.18)"
  if (val === 2) return "rgba(124,92,252,0.38)"
  if (val === 3) return "rgba(124,92,252,0.62)"
  return "rgba(124,92,252,0.88)"
}

const DAY_LABELS = ["M", "", "W", "", "F", "", ""]
const MONTH_LABELS = ["Feb", "Mar", "Apr", "May"]

export default function ActivityTile() {
  const totalSessions = activityGrid.flat().filter((v) => v > 0).length

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: "rgba(124,92,252,0.12)" }}
          >
            <Activity size={13} style={{ color: "var(--accent)" }} />
          </div>
          <h2 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Activity
          </h2>
        </div>
        <div
          className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
          style={{ background: "rgba(92,252,160,0.08)", color: "#5cfca0" }}
        >
          <Zap size={10} />
          <span>{totalSessions} sessions</span>
        </div>
      </div>

      {/* Month labels */}
      <div className="flex gap-1 pl-5">
        {MONTH_LABELS.map((m) => (
          <div key={m} className="flex-1 text-[9px] leading-none" style={{ color: "var(--muted)" }}>
            {m}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="flex gap-1.5">
        <div className="flex flex-col gap-1 pt-0.5 shrink-0" style={{ width: 14 }}>
          {DAY_LABELS.map((d, i) => (
            <div
              key={i}
              className="text-[9px] leading-none"
              style={{ color: "var(--muted)", minHeight: 10 }}
            >
              {d}
            </div>
          ))}
        </div>

        <div className="flex gap-1 flex-1">
          {activityGrid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1 flex-1">
              {week.map((val, di) => (
                <motion.div
                  key={di}
                  className="rounded-sm"
                  style={{ background: intensityColor(val), minHeight: 10, aspectRatio: "1" }}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.35 + (wi * 7 + di) * 0.004,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.4, transition: { duration: 0.1 } }}
                  title={`${val} session${val !== 1 ? "s" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 self-end">
        <span className="text-[9px]" style={{ color: "var(--muted)" }}>Less</span>
        {[0, 1, 2, 3, 4].map((v) => (
          <div key={v} className="w-2.5 h-2.5 rounded-sm" style={{ background: intensityColor(v) }} />
        ))}
        <span className="text-[9px]" style={{ color: "var(--muted)" }}>More</span>
      </div>
    </motion.article>
  )
}
