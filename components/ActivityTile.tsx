"use client"

import { motion } from "framer-motion"
import { Activity } from "lucide-react"

function generateActivity() {
  const weeks = 12
  const days = 7
  const grid: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      week.push(Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0)
    }
    grid.push(week)
  }
  return grid
}

const activityGrid = generateActivity()

const intensityColor = (val: number) => {
  if (val === 0) return "rgba(255,255,255,0.04)"
  if (val === 1) return "rgba(124,92,252,0.2)"
  if (val === 2) return "rgba(124,92,252,0.4)"
  if (val === 3) return "rgba(124,92,252,0.65)"
  return "rgba(124,92,252,0.9)"
}

const dayLabels = ["M", "W", "F"]

export default function ActivityTile() {
  return (
    <article
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={15} style={{ color: "var(--accent)" }} />
          <h2 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Learning Activity
          </h2>
        </div>
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          Last 12 weeks
        </span>
      </div>

      <div className="flex gap-1">
        <div className="flex flex-col justify-around pr-1" style={{ gap: 3 }}>
          {dayLabels.map((d) => (
            <span key={d} className="text-[10px] leading-none" style={{ color: "var(--muted)" }}>
              {d}
            </span>
          ))}
        </div>

        <div className="flex gap-1 flex-1">
          {activityGrid.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1 flex-1">
              {week.map((val, di) => (
                <motion.div
                  key={di}
                  className="rounded-sm flex-1"
                  style={{
                    background: intensityColor(val),
                    minHeight: 10,
                    aspectRatio: "1",
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: (wi * 7 + di) * 0.004,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.3, transition: { duration: 0.1 } }}
                  title={`${val} session${val !== 1 ? "s" : ""}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1.5 self-end">
        <span className="text-[10px]" style={{ color: "var(--muted)" }}>Less</span>
        {[0, 1, 2, 3, 4].map((v) => (
          <div
            key={v}
            className="w-2.5 h-2.5 rounded-sm"
            style={{ background: intensityColor(v) }}
          />
        ))}
        <span className="text-[10px]" style={{ color: "var(--muted)" }}>More</span>
      </div>
    </article>
  )
}
