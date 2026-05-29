import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function StudentLifePage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Student Life</h1>
          <p className="mt-4 text-white/80 max-w-3xl text-lg">
            Placeholder structure for accommodation, campus facilities, and student support services.
            Verified information will be added when available.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-bold">Accommodation (Coming soon)</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Placeholder details for hostels, fees, and application procedure.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-bold">Campus Facilities (Coming soon)</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Placeholder cards for labs, libraries, ICT, sports facilities, and learning spaces.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-xl font-bold">Student Support (Coming soon)</h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Placeholder details for counselling, health support, and academic advising.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[10px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Student Engagement (Placeholder)</h2>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Clubs, societies, seminars, and institutional activities will be listed here when operational data is provided.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Ask About Student Life →
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              View News & Events
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}