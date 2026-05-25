export default function CourseSkeleton() {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
    >
      <div className="flex items-start justify-between">
        <div className="skeleton w-10 h-10 rounded-xl" />
        <div className="skeleton w-12 h-5 rounded-full" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="skeleton h-4 w-3/4 rounded" />
        <div className="skeleton h-3 w-1/2 rounded" />
        <div className="flex flex-col gap-1.5 mt-1">
          <div className="flex justify-between">
            <div className="skeleton h-3 w-12 rounded" />
            <div className="skeleton h-3 w-8 rounded" />
          </div>
          <div className="skeleton h-1.5 w-full rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function CoursesGridSkeleton() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {Array.from({ length: 4 }).map((_, i) => (
        <CourseSkeleton key={i} />
      ))}
    </section>
  )
}
