"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, BarChart2, Settings } from "lucide-react"

const items = [
  { label: "Home", icon: LayoutDashboard },
  { label: "Courses", icon: BookOpen },
  { label: "Stats", icon: BarChart2 },
  { label: "Settings", icon: Settings },
]

export default function MobileNav() {
  const [active, setActive] = useState("Home")

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 flex md:hidden z-50 border-t"
      style={{
        background: "rgba(8,8,16,0.9)",
        backdropFilter: "blur(16px)",
        borderColor: "var(--border)",
      }}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = active === item.label
        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className="relative flex-1 flex flex-col items-center gap-1 py-3 text-[10px] font-medium"
            style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
          >
            {isActive && (
              <motion.span
                layoutId="mobile-pill"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                style={{ background: "var(--accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon size={18} />
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
