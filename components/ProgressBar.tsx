"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Props = {
  value: number
  accentColor?: string
}

export default function ProgressBar({ value, accentColor }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const barBg = accentColor
    ? `linear-gradient(90deg, ${accentColor}88, ${accentColor})`
    : "linear-gradient(90deg, var(--accent), var(--accent-2))"

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs" style={{ color: "var(--muted)" }}>Progress</span>
        <span className="text-xs font-semibold tabular-nums" style={{ color: "var(--text)" }}>
          {value}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full origin-left"
          style={{ background: barBg }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : { scaleX: 0 }}
          transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        />
      </div>
    </div>
  )
}
