import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

const NEWS = [
  {
    tag: "Campus",
    date: "Date to be confirmed",
    title: "Institutional update — placeholder event title",
  },
  {
    tag: "Research",
    date: "Date to be confirmed",
    title: "Research update — placeholder title",
  },
  {
    tag: "Admissions",
    date: "Date to be confirmed",
    title: "Admissions update — placeholder title",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">News & Events</h1>
          <p className="mt-4 text-white/80 max-w-3xl text-lg">
            Placeholder — regular updates and institutional activities will be published when operational content is available.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {NEWS.map((n) => (
              <div
                key={`${n.tag}-${n.title}`}
                className="rounded-[10px] border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold bg-green-600/20 text-green-200 border border-green-500/30">
                    {n.tag}
                  </span>
                  <span className="text-xs text-white/60">{n.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{n.title}</h3>
                <div className="mt-4">
                  <Link href="/news" className="text-green-300 hover:text-green-200 text-sm font-semibold">
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Ask a Question →
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}