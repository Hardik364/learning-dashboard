"use client"

import { Flame } from "lucide-react"

export default function HeroTile() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"

  return (
    <article
      className="relative col-span-2 rounded-2xl p-6 overflow-hidden grain"
      style={{
        background: "linear-gradient(135deg, #1a1030 0%, #0f0f1a 50%, #101828 100%)",
        border: "1px solid var(--border)",
        minHeight: 180,
      }}
    >
      <div
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(124, 92, 252, 0.15)" }}
      />
      <div
        className="absolute -bottom-8 right-12 w-32 h-32 rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(92, 140, 252, 0.1)" }}
      />

      <div className="relative flex flex-col gap-4">
        <div>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--muted)" }}>
            {greeting}
          </p>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Welcome back, Alex
          </h1>
        </div>

        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium w-fit"
          style={{ background: "rgba(252, 92, 92, 0.12)", color: "var(--text)" }}
        >
          <Flame size={14} color="#fc5c5c" />
          7 day streak
        </div>
      </div>
    </article>
  )
}
