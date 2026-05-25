"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Database,
  Brain,
  Palette,
  Globe,
  Layers,
  Cpu,
  BookOpen,
  LucideIcon,
} from "lucide-react"
import ProgressBar from "./ProgressBar"
import type { Course } from "@/types"

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Database,
  Brain,
  Palette,
  Globe,
  Layers,
  Cpu,
  BookOpen,
}

const gradients = [
  "linear-gradient(135deg, rgba(124,92,252,0.12) 0%, rgba(92,140,252,0.06) 100%)",
  "linear-gradient(135deg, rgba(92,252,200,0.1) 0%, rgba(92,140,252,0.06) 100%)",
  "linear-gradient(135deg, rgba(252,140,92,0.1) 0%, rgba(252,92,140,0.06) 100%)",
  "linear-gradient(135deg, rgba(252,210,92,0.1) 0%, rgba(92,252,140,0.06) 100%)",
]

type Props = {
  course: Course
  index: number
}

export default function CourseCard({ course, index }: Props) {
  const Icon = iconMap[course.icon_name] ?? BookOpen
  const bg = gradients[index % gradients.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ scale: 1.015, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="relative rounded-2xl p-5 overflow-hidden grain flex flex-col gap-4 cursor-pointer group"
      style={{
        background: bg,
        border: "1px solid var(--border)",
      }}
    >
      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 1px rgba(124,92,252,0.3)" }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <Icon size={18} style={{ color: "var(--accent)" }} />
        </div>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            background: "rgba(124,92,252,0.15)",
            color: "var(--accent)",
          }}
        >
          Active
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>
          {course.title}
        </h3>
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}
