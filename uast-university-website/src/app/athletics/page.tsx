import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function AthleticsPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Athletics</h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Placeholder — sports teams, training schedules, and athletics updates will be published when operational information is confirmed.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Varsity Sports</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — details to be updated.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Clubs & Teams</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — details to be updated.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Training & Development</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — details to be updated.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Contact Athletics
            </Link>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              View News
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}