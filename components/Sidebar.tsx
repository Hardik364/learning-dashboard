"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  Flame,
  GraduationCap,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "#" },
  { label: "Courses", icon: BookOpen, href: "#" },
  { label: "Progress", icon: BarChart2, href: "#" },
  { label: "Settings", icon: Settings, href: "#" },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState("Dashboard")

  return (
    <div className="relative hidden md:flex shrink-0 h-full">
    <motion.nav
      animate={{ width: collapsed ? 68 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col h-full overflow-hidden border-r w-full"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b" style={{ borderColor: "var(--border)" }}>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
        >
          <GraduationCap size={16} color="white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.15 }}
              className="font-semibold text-sm tracking-wide"
              style={{ color: "var(--text)" }}
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <nav className="flex-1 flex flex-col gap-1 p-3 mt-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label

          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors w-full text-left"
              style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "var(--surface-2)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <Icon size={17} className="relative z-10 shrink-0" />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="relative z-10 font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </nav>

      <div className="p-3 border-t" style={{ borderColor: "var(--border)" }}>
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg"
          style={{ background: "rgba(252, 92, 92, 0.08)" }}
        >
          <Flame size={15} color="#fc5c5c" className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs font-medium"
                style={{ color: "#fc5c5c" }}
              >
                7-day streak
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

    </motion.nav>

      <button
        onClick={() => setCollapsed((c) => !c)}
        className="absolute -right-3 top-7 w-6 h-6 rounded-full border flex items-center justify-center z-20"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--muted)",
        }}
      >
        <motion.span animate={{ rotate: collapsed ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronLeft size={12} />
        </motion.span>
      </button>
    </div>
  )
}
