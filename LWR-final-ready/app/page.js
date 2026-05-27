export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      <section className="bg-gradient-to-r from-indigo-700 via-violet-600 to-blue-600 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-6xl font-extrabold">
            Learn With Ranjan
          </h1>

          <p className="mt-6 text-xl text-indigo-100">
            Free & Premium Learning for Classes 9–11
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="https://www.youtube.com/@learnwithranjan07"
              className="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-700"
            >
              YouTube
            </a>

            <a
              href="https://instagram.com/learn_with_ranjan07?igsh=NWUyOXd2M2w0NWdw"
              className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Free Classes
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold">
              Class 9 Science
            </h3>

            <p className="mt-4 text-slate-600">
              Concept-based learning with NCERT coverage.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold">
              Class 10 Maths
            </h3>

            <p className="mt-4 text-slate-600">
              Board-focused maths lectures and practice.
            </p>
          </div>

          <div className="rounded-3xl border bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold">
              Class 11 Physics
            </h3>

            <p className="mt-4 text-slate-600">
              Strong fundamentals for competitive exams.
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}