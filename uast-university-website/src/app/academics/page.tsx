import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Academics</h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Placeholder — academic departments, teaching structure, and learning pathways will be updated when operational information is confirmed.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Departments</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — list will be populated from the colleges → departments → programmes structure.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Curriculum</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — academic curriculum details will be published when verified.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Academic Calendar</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — schedules and timetables will be updated later.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              View Programmes <span aria-hidden>→</span>
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Admissions
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}