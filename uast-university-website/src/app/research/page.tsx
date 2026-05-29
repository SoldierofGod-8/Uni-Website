import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Research & Innovation</h1>
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            Placeholder — focus areas and ongoing projects will be added when operational information is verified.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Agriculture Focus", desc: "Placeholder — agriculture and applied research themes." },
              { title: "Science & Technology Focus", desc: "Placeholder — tech-enabled innovation themes." },
              { title: "Collaboration", desc: "Placeholder — partnerships and joint projects." },
            ].map((c) => (
              <div key={c.title} className="rounded-[10px] border border-white/10 bg-white/5 p-5">
                <h2 className="text-white font-semibold text-lg">{c.title}</h2>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Research Partnerships →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Contact Research Desk
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}