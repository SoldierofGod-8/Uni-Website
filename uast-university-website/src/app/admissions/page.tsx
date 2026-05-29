import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Admissions</h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Placeholder — verified undergraduate and postgraduate admission requirements will be added when operational details are available.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Undergraduate Admissions</h2>
              <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc pl-5">
                <li>Entry requirements (placeholder)</li>
                <li>Application process (placeholder)</li>
                <li>Submission steps (placeholder)</li>
              </ul>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Postgraduate Admissions</h2>
              <ul className="mt-3 text-white/70 text-sm space-y-2 list-disc pl-5">
                <li>Programme entry requirements (placeholder)</li>
                <li>Application process (placeholder)</li>
                <li>Review & selection criteria (placeholder)</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Entry Requirements</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — will be updated with verified documents and criteria.
              </p>
            </div>
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5">
              <h2 className="text-white font-semibold text-lg">Application Process</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                Placeholder — application steps and submission guidance will be published later.
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
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}