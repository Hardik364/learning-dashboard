import { getCourses } from "@/lib/supabase"
import CourseCard from "./CourseCard"

export default async function CoursesGrid() {
  let courses
  try {
    courses = await getCourses()
  } catch (err) {
    return (
      <section
        className="rounded-2xl p-5 text-center"
        style={{ background: "var(--surface)", border: "1px solid rgba(252,92,92,0.2)" }}
      >
        <p className="text-sm" style={{ color: "#fc5c5c" }}>
          Could not load courses. Check your Supabase connection.
        </p>
      </section>
    )
  }

  if (!courses || courses.length === 0) {
    return (
      <section
        className="rounded-2xl p-5 text-center"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          No courses yet. Add some in your Supabase table.
        </p>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {courses.map((course, i) => (
        <CourseCard key={course.id} course={course} index={i} />
      ))}
    </section>
  )
}
