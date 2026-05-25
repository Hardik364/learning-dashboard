"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

export default function ProgressBar({ value }: { value: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const raw = useMotionValue(0)
  const smooth = useSpring(raw, { stiffness: 60, damping: 20 })

  useEffect(() => {
    if (inView) raw.set(value)
  }, [inView, value, raw])

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          Progress
        </span>
        <motion.span
          className="text-xs font-semibold tabular-nums"
          style={{ color: "var(--text)" }}
        >
          {value}%
        </motion.span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="h-full rounded-full origin-left"
          style={{
            scaleX: smooth.get() === 0 ? 0 : undefined,
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: value / 100 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        />
      </div>
    </div>
  )
}
