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
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-white">Vice-Chancellor&apos;s Message</h2>
                <p className="mt-1 text-green-300 font-semibold">
                  Prof. Leonard Karshima Shilgba
                </p>

                <div className="mt-4 text-white/80 space-y-4 leading-relaxed">
                  <p>
                    The motto of University of Agriculture, Science and Technology
                    (UAST)—&apos;Imagine, Aspire, Innovate, Create&apos;—derives naturally from
                    the expertise and efforts of every member of its academic community
                    and dedication to service of its owner, the Benue State Government
                    in Nigeria.
                  </p>
                  <p>
                    At UAST, we believe in the role and significance of entrepreneurship
                    for personal development, and are aware how much this is important
                    for the nation&apos;s success. Our prominent and acknowledged faculty
                    are accessible to mentor and guide you through your studies. Here,
                    you will be given the support to develop your ideas, knowledge,
                    skills, and initiatives. Our aim is to help you understand and
                    prepare for the challenges in the world of agriculture, science,
                    technology, entrepreneurship, and public life, and how these
                    challenges can become opportunities for you to become a
                    problem-solver and benefactor of your community; to help you
                    develop into the nation&apos;s next generation of leaders and
                    entrepreneurs, and to assist you to become the driving forces for
                    shaping tomorrow&apos;s Benue State, Nigeria, Africa, and the world
                    toward positive transformative impact.
                  </p>
                  <p>
                    UAST supports a modern Nigerian-, European-, and American-inspired
                    curriculum with emphasis on skills acquisition, industry-readiness
                    and a must-learn focus on technology and its connectedness to
                    various fields of human adventure. Small class sizes and a
                    guaranteed uninterrupted academic calendar enable you to graduate
                    on schedule. You also have access to options to complete part of
                    your degree study at partner universities in Europe, the UK,
                    EURASIA, Russia, as well as the USA.
                  </p>
                  <p>
                    UAST offers a serene campus with areas for recreational and sports
                    activities. You will enjoy access to state-of-the-art information
                    technology resources in addition to an exclusive access to
                    exceptional agriculture, science, allied health, and ICT
                    laboratories, among others. Modern cafés, restaurants serving
                    Nigerian and international cuisine, comfortable en-suite hostels,
                    on-campus well-grassed football field, track and field athletics
                    facilities, tennis and basketball courts, as well as a health care
                    centre, are all provided on campus, with expansion undertakings.
                    UAST supports a Wi-Fi (wireless)-enabled campus, and your security
                    is guaranteed 24-hours-seven days a week, by well-trained and
                    equipped UAST Campus Police, Benue State Police and complementary
                    security architecture.
                  </p>
                  <p>
                    A university should not just be a place that provides textbook-based
                    education, same as a library is not simply a place where books are
                    neatly arranged on shelves! We are committed to providing you a
                    place where you will exchange ideas, views, and experiences with
                    fellow students, your professors, and many international experts.
                    At UAST, you will be part of a wider academic community that has its
                    basis on the common values of honesty, integrity, responsibility,
                    partnership, respect for diversity, professionalism, open-mindedness,
                    community involvement and globalisation engagement.
                  </p>
                  <p>
                    My colleagues and I look forward to helping you create your own
                    unique stories and many meaningful moments at UAST, which you will
                    be proud of.
                  </p>
                  <p>
                    Once again, you are highly welcome to University of Agriculture,
                    Science and Technology (UAST), Ihugh, Benue State, Nigeria.
                  </p>
                </div>
              </div>

              {/* VC Image */}
              <div className="flex-shrink-0 w-full md:w-64 lg:w-72">
                <div className="rounded-[10px] border border-white/10 bg-white/5 overflow-hidden">
                  <img
                    src="/Uni-Website/Vice-Chancellor.jpeg"
                    alt="Prof. Leonard Karshima Shilgba, Vice-Chancellor of UAST Ihugh"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 text-center">
                    <p className="text-white font-semibold text-sm">Prof. Leonard Karshima Shilgba</p>
                    <p className="text-white/60 text-xs mt-1">Vice-Chancellor</p>
                  </div>
                </div>
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