import Link from "next/link";
import PageShell from "@/components/layout/pageShell";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#04130b] text-white">
      <PageShell>
        <div className="rounded-[10px] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-[10px] bg-green-600/20 border border-green-500/30 px-4 py-2">
            <span className="inline-block h-2 w-2 rounded-full bg-green-300" />
            <span className="text-green-200 font-semibold text-sm">ABOUT UAST IHUGH</span>
          </div>

          <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white">
            About the University
          </h1>

          {/* Description */}
          <p className="mt-4 text-white/80 text-lg leading-relaxed max-w-3xl">
            The University of Agriculture, Science and Technology (UAST), Ihugh, in
            Benue State is designed as a specialized institution focused on modernizing
            agricultural education, boosting food security, and driving technological
            innovation.
          </p>

          {/* Vision & Mission */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
              <h2 className="text-white font-semibold text-lg">Vision</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                To be a Centre of Excellence in Agriculture, Science and Technology, driving
                transformative learning, innovation, and research to foster a sustainably
                prosperous society.
              </p>
            </div>

            <div className="rounded-[10px] border border-white/10 bg-white/5 p-5 md:p-6">
              <h2 className="text-white font-semibold text-lg">Mission</h2>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                To advance knowledge, innovation, and leadership through transformative
                education, high-relevance research, and community engagement, equipping
                learners with practical skills to address local challenges.
              </p>
            </div>
          </div>

          {/* VC Message */}
          <div className="mt-8 rounded-[10px] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[10px] bg-green-600/20 border border-green-500/30 flex items-center justify-center">
                <span className="text-green-300 font-bold">VC</span>
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold text-white">Vice-Chancellor&apos;s Message</h2>
                <p className="mt-1 text-green-300 font-semibold">
                  Prof. Qrisstuberg M. Amua
                </p>

                <p className="mt-4 text-white/80 whitespace-pre-line leading-relaxed">
                  The Visitor - UAST

                  {"\n"}Pioneer Vice-Chancellor Prof. Qrisstuberg M. Amua envisions UAST Ihugh
                  as a &quot;forge for ideas&quot; and a &quot;marketplace for the future&quot;.

                  {"\n\n"}Key initiatives include:
                  {"\n"}• Practical Transformation: Shifting focus from mere certification to producing
                  practical solutions for food security and poverty reduction.
                  {"\n"}• Polymathic Innovation: Fostering entrepreneurship by merging agricultural,
                  engineering, and technology disciplines.
                  {"\n"}• Strategic Focus: Built on the pillars of Character, Commitment, and
                  Competence, with a focus on local community impact, serving as a hub for Benue
                  and Africa.
                  {"\n"}• Innovation Support: Utilizing the BSUAST Open Innovation and Startup Incubator
                  (BOISI) to foster student-led startups.

                  {"\n\n"}This institution is a key initiative of Governor Rev. Fr. Dr. Hyacinth Iormem Alia
                  to drive digital and agricultural advancement in the region.
                </p>

                {/* Social placeholders removed from body (Facebook / counters) */}
                <p className="mt-4 text-white/60 text-sm">
                  Note: Social widget entries (Facebook/Daylight Reporters, Alia TV Network, etc.) were removed
                  from the message text for clean readability. They can be added as a separate feed/widget later.
                </p>
              </div>
            </div>
          </div>

          {/* Next actions */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 rounded-[10px] bg-green-600 hover:bg-green-500 text-white px-6 py-3 font-semibold transition-all shadow-lg shadow-green-500/20"
            >
              Explore Programmes <span aria-hidden>→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 text-white/90 hover:bg-white/10 px-6 py-3 font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}