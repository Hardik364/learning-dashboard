import { Suspense } from "react"
import Sidebar from "@/components/Sidebar"
import HeroTile from "@/components/HeroTile"
import CoursesGrid from "@/components/CoursesGrid"
import ActivityTile from "@/components/ActivityTile"
import MobileNav from "@/components/MobileNav"
import { CoursesGridSkeleton } from "@/components/skeletons/CourseSkeleton"

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "var(--bg)" }}>
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col gap-4">
          {/* Top row: hero tile */}
          <HeroTile />

          {/* Middle: courses + activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Courses take up 2 columns */}
            <section className="lg:col-span-2 flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                Active Courses
              </h2>
              <Suspense fallback={<CoursesGridSkeleton />}>
                <CoursesGrid />
              </Suspense>
            </section>

            {/* Activity tile takes 1 column */}
            <section className="flex flex-col gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
                Activity
              </h2>
              <ActivityTile />
            </section>
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
