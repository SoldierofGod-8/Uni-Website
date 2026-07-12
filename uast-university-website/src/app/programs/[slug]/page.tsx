import { notFound } from "next/navigation";
import Link from "next/link";
import { getProgrammeDetailBySlug, getProgrammeSlugs } from "@/lib/programmeDetails";
import PageShell from "@/components/layout/pageShell";
import BackToProgrammes from "./BackToProgrammes";

export function generateStaticParams() {
  return getProgrammeSlugs().map((slug) => ({ slug }));
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getProgrammeDetailBySlug(slug);

  if (!detail) return notFound();

  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <BackToProgrammes />

        {/* Header */}
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <p className="text-green-300 text-sm font-semibold uppercase tracking-wide mb-2">
            {detail.school}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">{detail.name}</h1>
        </div>

        {/* Overview */}
        <section className="mt-8 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Programme Overview</h2>
          <p className="text-white/80 leading-relaxed">{detail.overview}</p>
        </section>

        {/* Distinctiveness */}
        <section className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">Programme Distinctiveness</h2>
          <div className="space-y-6">
            {detail.distinctiveness.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-bold text-green-300 mb-2">{item.heading}</h3>
                <p className="text-white/80 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Competencies */}
        <section className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">The UAST Advantage: Professional Competencies</h2>
          <p className="text-white/70 mb-4">Graduates of this programme acquire competencies in:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {detail.competencies.map((c) => (
              <li key={c} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* Programme Structure */}
        <section className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-2">Programme Structure</h2>
          <p className="text-white/70 mb-6">
            The programme is delivered over five academic years (100–500 Levels) and comprises 43 credit
            units of UAST proprietary courses complementing the NUC 70% core curriculum.
          </p>
          <div className="space-y-6">
            {detail.structure.map((yr) => (
              <div key={yr.year}>
                <h3 className="text-lg font-bold mb-1">
                  {yr.year}: <span className="text-green-300">{yr.title}</span>
                </h3>
                <ul className="mt-2 space-y-2 pl-1">
                  {yr.courses.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-white/80 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500/70 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Career Pathways */}
        <section className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Career Pathways</h2>
          <p className="text-white/70 mb-4">
            UAST Environmental Management and Toxicology graduates are prepared for careers in:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {detail.careers.map((c) => (
              <div
                key={c.sector}
                className="rounded-[10px] border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-bold text-white">{c.sector}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fast-Track */}
        <section className="mt-6 rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Fast-Track Options</h2>
          <p className="text-white/80 leading-relaxed">{detail.fastTrack}</p>
        </section>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
          >
            Admissions info <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
          >
            Contact us
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
