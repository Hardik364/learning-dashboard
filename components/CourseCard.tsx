"use client"

import { motion } from "framer-motion"
import {
  Code2, Database, Brain, Palette, Globe, Layers, Cpu, BookOpen, ArrowUpRight, LucideIcon,
} from "lucide-react"
import ProgressBar from "./ProgressBar"
import type { Course } from "@/types"

const iconMap: Record<string, LucideIcon> = {
  Code2, Database, Brain, Palette, Globe, Layers, Cpu, BookOpen,
}

const themes = [
  {
    gradient: "linear-gradient(135deg, rgba(124,92,252,0.13) 0%, rgba(92,140,252,0.05) 100%)",
    iconBg: "rgba(124,92,252,0.16)",
    iconColor: "#9b7ffe",
    glowBorder: "rgba(124,92,252,0.28)",
  },
  {
    gradient: "linear-gradient(135deg, rgba(92,252,200,0.10) 0%, rgba(92,140,252,0.05) 100%)",
    iconBg: "rgba(92,252,200,0.14)",
    iconColor: "#5cfcc8",
    glowBorder: "rgba(92,252,200,0.26)",
  },
  {
    gradient: "linear-gradient(135deg, rgba(252,140,92,0.10) 0%, rgba(252,92,140,0.05) 100%)",
    iconBg: "rgba(252,140,92,0.14)",
    iconColor: "#fcaa6a",
    glowBorder: "rgba(252,140,92,0.26)",
  },
  {
    gradient: "linear-gradient(135deg, rgba(252,210,92,0.10) 0%, rgba(92,252,140,0.05) 100%)",
    iconBg: "rgba(252,210,92,0.14)",
    iconColor: "#fcd26a",
    glowBorder: "rgba(252,210,92,0.26)",
  },
]

type Props = {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: Props) {
  const Icon = iconMap[course.icon_name] ?? BookOpen
  const theme = themes[index % themes.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.3 + index * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.018, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative rounded-2xl p-5 overflow-hidden grain flex flex-col gap-4 cursor-pointer group"
      style={{
        background: theme.gradient,
        border: "1px solid var(--border)",
      }}
    >
      {/* Hover glow overlay — pure FM, no layout shift */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ boxShadow: `inset 0 0 0 1px ${theme.glowBorder}` }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: theme.iconBg }}
        >
          <Icon size={20} style={{ color: theme.iconColor }} />
        </div>

        <div className="flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ background: "rgba(124,92,252,0.12)", color: "var(--accent)" }}
          >
            Active
          </span>
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            style={{ color: "var(--muted)" }}
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>
          {course.title}
        </h3>
        <ProgressBar value={course.progress} accentColor={theme.iconColor} />
      </div>
    </motion.article>
  )
}
